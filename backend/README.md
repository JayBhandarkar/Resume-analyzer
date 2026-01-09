# Career Advice Backend

Minimal Express backend for AI-based career advice according to resume.

## Setup

```bash
npm install
npm start
```

## Endpoints

### POST /api/upload-resume
Upload resume file (PDF, DOC, TXT)

### POST /api/career-advice
Get career advice based on resume
```json
{
  "resumeText": "Your resume content",
  "jobTitle": "Software Engineer",
  "experience": 3
}
```

## Response
```json
{
  "advice": {
    "summary": "Personalized advice",
    "skillGaps": ["Missing skills"],
    "nextSteps": ["Action items"]
  },
  "recommendations": ["General recommendations"]
}
```