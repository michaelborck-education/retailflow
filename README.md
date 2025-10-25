# RetailFlow - Educational Simulation

RetailFlow is a fictional company created for educational purposes to teach AI project management through an immersive simulation experience.

## About This Project

This is a **static website** built with plain HTML, CSS, and JavaScript, designed to be hosted on GitHub Pages. It simulates a real e-commerce company website while providing educational content about AI project management.

## Structure

```
retailflow/
├── index.html              # Main company landing page
├── contact.html            # Contact form with simulation message
├── consultant.html         # Consultant dashboard (simulation entry point)
├── styles.css              # Custom styling
├── js/
│   └── main.js            # JavaScript functionality
├── company/               # Company information pages
├── project/               # Project details
├── resources/             # Educational resources
├── docs/                  # Legal and educational documentation
└── README.md              # This file
```

## Features

### Public-Facing Pages
- **Home Page** (`index.html`) - Professional company landing page
- **Contact Page** (`contact.html`) - Interactive contact form with simulation disclosure
- **Footer** - Professional company footer with navigation

### Educational Content
- **Consultant Dashboard** - Entry point for the AI project management simulation
- **Company Information** - Fictional company details and team profiles
- **Project Documentation** - AI chatbot project charter and timeline
- **Resources** - Scenarios and documents for learning
- **Legal Disclaimer** - Educational purpose disclosure

## Key Design Decisions

### Why HTML/CSS/JS instead of Quarto?
- **Interactive Forms**: Quarto treats HTML as code blocks, breaking contact forms
- **Better Control**: Direct control over DOM manipulation and user interactions
- **Simpler Hosting**: No build process required for GitHub Pages
- **Performance**: Faster load times with no static site generation overhead

### Simulation Features
- **Contact Form**: Shows educational message when submitted
- **Professional Appearance**: Looks like a real e-commerce site
- **Clear Disclosure**: Educational purpose is clearly stated
- **Learning Objectives**: Each interaction teaches specific concepts

## Deployment

This site is designed for GitHub Pages deployment:

1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source as "Deploy from a branch"
4. Choose main branch and / (root) folder

## Educational Purpose

This simulation teaches:
- AI project management principles
- Stakeholder management
- Decision-making under uncertainty
- Organizational dynamics
- Technology implementation challenges

## Used In Executive Education Courses

RetailFlow is the primary simulation platform used in these masterclasses:

### 🎯 AI Leadership & Project Management
**Focus:** Operational crisis management
- **Repository:** `[PLACEHOLDER-USERNAME]/ai-leadership-pm`
- **Website:** `[PLACEHOLDER-USERNAME].github.io/ai-leadership-pm`
- **How it's used:** Participants navigate 4 cascading crises as RetailFlow's AI project manager

### 💡 AI-Driven Business Innovation
**Focus:** Strategic investment decisions
- **Repository:** `[PLACEHOLDER-USERNAME]/ai-business-innovation`
- **Website:** `[PLACEHOLDER-USERNAME].github.io/ai-business-innovation`
- **How it's used:** Investment committee evaluates competing RetailFlow AI initiatives

## For Course Facilitators

If you're delivering one of the executive education courses:
- Clone this repo for complete simulation materials
- Use `docs/` folder for company background and scenarios
- Access via GitHub Pages for live simulation experience
- Customize scenarios in `/crisis` and `/decisions` folders

## License

MIT License - Educational use only. See legal disclaimer for complete terms.