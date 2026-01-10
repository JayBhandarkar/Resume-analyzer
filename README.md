# Resume-Q: AI-Powered Career Advice Platform

Resume-Q is a full-stack web application that provides personalized career advice using AI. Users can upload their resumes and receive tailored guidance, skill gap analysis, and actionable recommendations for their target job roles.

## 🚀 Features

- **AI-Powered Career Analysis**: Get personalized career advice based on your resume and target job title
- **Skill Gap Identification**: Discover missing skills and competencies for your desired position
- **Actionable Recommendations**: Receive specific next steps to advance your career goals
- **Resume Upload**: Support for PDF files and text input
- **Career History**: Track your previous career consultations
- **Modern UI**: Clean, responsive design built with Next.js and Tailwind CSS
- **Privacy-Focused**: No signup required, data stays local

## 🏗️ Architecture

### Frontend (Next.js)
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Components**: Reusable React components
- **State Management**: React hooks and localStorage
- **API Integration**: Fetch API for backend communication

### Backend (Node.js/Express)
- **Framework**: Express.js
- **AI Integration**: Google Gemini AI API
- **File Processing**: PDF parsing with pdf-parse
- **File Upload**: Multer middleware
- **CORS**: Cross-origin resource sharing enabled

## 📁 Project Structure

```
resume-Q/
├── backend/
│   ├── uploads/           # Uploaded resume files
│   ├── .env              # Environment variables
│   ├── .gitignore        # Git ignore rules
│   ├── package.json      # Backend dependencies
│   ├── server.js         # Express server
│   └── README.md         # Backend documentation
├── frontend/
│   ├── app/              # Next.js app directory
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   ├── tool/         # Career advice tool
│   │   ├── results/      # Results display
│   │   └── history/      # Career advice history
│   ├── components/       # Reusable components
│   ├── public/           # Static assets
│   ├── .env.local        # Frontend environment
│   ├── package.json      # Frontend dependencies
│   └── tailwind.config.js # Tailwind configuration
└── README.md             # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Google Gemini API key

### 1. Clone the Repository
```bash
git clone <repository-url>
cd resume-Q
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 4. Get Google Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your backend `.env` file

## 🚀 Running the Application

### Development Mode

1. **Start the Backend Server**:
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

2. **Start the Frontend Development Server**:
```bash
cd frontend
npm run dev
# Frontend runs on http://localhost:3000
```

3. **Access the Application**:
   - Open your browser and navigate to `http://localhost:3000`
   - The frontend will automatically connect to the backend API

### Production Mode

1. **Build the Frontend**:
```bash
cd frontend
npm run build
npm start
```

2. **Start the Backend**:
```bash
cd backend
npm start
```

## 📖 Usage

1. **Upload Resume**: 
   - Choose between file upload (PDF) or text input
   - Enter your target job title and years of experience

2. **Get Career Advice**:
   - The AI analyzes your resume against the target role
   - Receive personalized career guidance

3. **View Results**:
   - See career summary, skill gaps, and recommended actions
   - Copy or download your results

4. **Track History**:
   - View previous career consultations
   - Access past advice and recommendations

## 🔧 API Endpoints

### Backend API Routes

- `POST /api/upload-resume` - Upload and parse resume file
- `POST /api/career-advice` - Get AI-powered career advice

### Request/Response Examples

**Upload Resume**:
```javascript
// Request
FormData with 'resume' file

// Response
{
  "message": "Resume uploaded successfully",
  "filename": "1234567890-resume.pdf",
  "resumeText": "extracted text content..."
}
```

**Get Career Advice**:
```javascript
// Request
{
  "resumeText": "resume content...",
  "jobTitle": "Software Engineer",
  "experience": "3"
}

// Response
{
  "advice": {
    "summary": "Career guidance summary...",
    "skillGaps": ["React", "AWS", "Docker"],
    "nextSteps": ["Learn cloud technologies", "Build portfolio projects"]
  }
}
```

## 🎨 Customization

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Update `frontend/app/globals.css` for global styles
- Edit component styles in individual component files

### AI Prompts
- Customize the career advice prompt in `backend/server.js`
- Adjust the AI model parameters for different response styles

### Features
- Add new pages in `frontend/app/`
- Create new API endpoints in `backend/server.js`
- Extend the data structure for additional insights

## 🔒 Security & Privacy

- **No User Registration**: No personal data stored on servers
- **Local Storage**: Career history stored locally in browser
- **File Cleanup**: Uploaded files can be automatically cleaned up
- **API Key Security**: Environment variables protect sensitive keys
- **CORS Protection**: Configured for secure cross-origin requests

## 🚀 Deployment

### Backend Deployment (Render)

1. **Prepare Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/resume-q.git
   git push -u origin main
   ```

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Create new Web Service
   - Connect GitHub repository
   - Set Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**:
   - `GEMINI_API_KEY`: Your Google Gemini API key
   - `PORT`: 5000 (optional)

### Frontend Deployment (Vercel)

1. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repository
   - Set Root Directory: `frontend`
   - Framework: Next.js

2. **Environment Variables**:
   - `NEXT_PUBLIC_API_URL`: `https://your-backend-url.onrender.com/api`

3. **Update CORS**: Add your Vercel domain to backend CORS configuration

### Post-Deployment Steps

1. Update frontend `.env.local` with production API URL
2. Test file upload functionality
3. Verify AI integration works in production
4. Monitor logs for any deployment issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
