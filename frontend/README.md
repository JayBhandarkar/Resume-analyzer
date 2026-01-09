# Resume Analyzer - Frontend

A modern, AI-powered resume analysis tool built with Next.js and Tailwind CSS.

## Features

- 📄 Upload PDF or paste text
- 🤖 AI-powered analysis
- ⚡ Instant feedback
- 📊 ATS compatibility scoring
- 📚 Analysis history
- 🔒 Privacy-focused (no signup required)

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **JavaScript** (no TypeScript)

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/
│   ├── layout.js          # Root layout with Navbar/Footer
│   ├── page.js            # Landing page
│   ├── globals.css        # Global styles with Tailwind
│   ├── tool/
│   │   └── page.js        # Resume upload/analysis page
│   ├── results/
│   │   └── page.js        # Analysis results page
│   ├── history/
│   │   └── page.js        # Analysis history page
│   └── about/
│       └── page.js        # About page
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Footer.js          # Footer component
│   ├── Button.js          # Reusable button
│   └── Card.js            # Reusable card
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## Pages

1. **Landing (/)** - Hero, features, CTA
2. **Tool (/tool)** - Upload resume or paste text
3. **Results (/results)** - View analysis results
4. **History (/history)** - View past analyses
5. **About (/about)** - Project information

## Features

- Responsive design (mobile-friendly)
- Clean, modern UI
- LocalStorage for history
- Mock data for demo purposes
- No authentication required

## Demo Ready

This frontend is built for hackathons and demos. It uses mock data and localStorage, making it perfect for presentations without backend dependencies.

## License

MIT
