const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const pdfParse = require('pdf-parse');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://your-frontend-url.vercel.app'
  ],
  credentials: true
}));
app.use(express.json());
app.use(express.static('.'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowed = ['application/pdf', 'text/plain', 'application/msword'];
    cb(null, allowed.includes(file.mimetype));
  }
});

// Upload resume endpoint
app.post('/api/upload-resume', upload.single('resume'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No resume file uploaded' });
  }
  
  try {
    let resumeText = '';
    
    if (req.file.mimetype === 'application/pdf') {
      const dataBuffer = fs.readFileSync(req.file.path);
      const data = await pdfParse(dataBuffer);
      resumeText = data.text;
    } else {
      resumeText = fs.readFileSync(req.file.path, 'utf8');
    }
    
    res.json({
      message: 'Resume uploaded successfully',
      filename: req.file.filename,
      resumeText: resumeText
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process resume' });
  }
});

// Get career advice endpoint
app.post('/api/career-advice', async (req, res) => {
  const { resumeText, jobTitle, experience } = req.body;
  
  if (!resumeText?.trim() || !jobTitle?.trim()) {
    return res.status(400).json({ error: 'Resume text and job title are required' });
  }
  
  try {
    const advice = await generateCareerAdvice(resumeText, jobTitle, experience);
    res.json({ advice });
  } catch (error) {
    console.error('Career advice error:', error);
    res.status(500).json({ error: 'Failed to generate career advice' });
  }
});

// Gemini AI career advice generation
async function generateCareerAdvice(resumeText, jobTitle, experience) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY not configured');
  }
  
  const modelNames = [ 'gemini-2.5-flash'];
  
  for (const modelName of modelNames) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
    
      const prompt = `Analyze this resume and provide career advice for a ${jobTitle} position with ${experience} years of experience:

Resume: ${resumeText}

Provide response in JSON format:
{
  "summary": "Brief personalized advice",
  "skillGaps": ["list of missing skills"],
  "nextSteps": ["actionable recommendations"]
}`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      try {
        const cleanText = text.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return {
          summary: text,
          skillGaps: [],
          nextSteps: []
        };
      }
    } catch (apiError) {
      console.error(`Model ${modelName} failed:`, apiError.message);
      continue;
    }
  }
  
  throw new Error('All Gemini models failed. Please check your API key and model availability.');
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});