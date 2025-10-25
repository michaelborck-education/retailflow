# RetailFlow Virtual Company Website Architecture

## OVERVIEW

A static website hosted on GitHub with a custom domain that presents RetailFlow as an **immersive, interactive virtual company experience**. Visitors explore the company as if they're consultants/employees, with the chatbots as virtual "colleagues" they can interact with.

---

## WEBSITE STRUCTURE & STRATEGY

### Home Page (Landing)
**Purpose:** Introduce RetailFlow and set context

**Content:**
- Company mission/vision statement
- One-liner: "Australia's multi-channel retailer solving customer service challenges with AI"
- Call-to-action: "Explore the Company" or "Meet the Team"
- Dashboard preview: Real-time metrics snapshot
- Video intro (optional): 1-min overview of the challenge

**Design:** Professional, contemporary retail feel. Perth-based Australian aesthetic.

---

## MAIN NAVIGATION STRUCTURE

```
RetailFlow.com/
├── /
│   └── Home (landing page)
├── /company/
│   ├── overview/        (Company profile summary)
│   ├── history/         (Company history + evolution)
│   ├── team/            (Employee directory - clickable profiles)
│   ├── culture/         (Vision, values, culture)
│   └── financials/      (Q2 summary, key metrics)
├── /project/
│   ├── overview/        (Chatbot project charter summary)
│   ├── timeline/        (Interactive project timeline)
│   ├── team/            (Project team structure)
│   ├── budget/          (Budget breakdown visualization)
│   ├── metrics/         (Success criteria dashboard)
│   └── risks/           (Risk register)
├── /insights/
│   ├── market/          (Competitive analysis)
│   ├── customers/       (Customer satisfaction data)
│   ├── challenges/      (Strategic challenges)
│   └── opportunities/   (Strategic opportunities)
├── /interact/
│   ├── chatbot/         (Main RetailBot interaction)
│   ├── team/            (Interact with "bots" - employees as AI agents)
│   └── scenarios/       (Customer service scenarios as simulations)
├── /documents/
│   ├── company-profile/
│   ├── employee-profiles/
│   ├── internal-documents/
│   ├── project-charter/
│   ├── customer-scenarios/
│   └── bot-profiles/
├── /dashboard/
│   └── live-metrics/    (Real-time project KPIs)
└── /about/
    └── About this exercise
```

---

## CONTENT STRATEGY: WHAT BECOMES WHAT

### **TIER 1: SUMMARY PAGES (Website Content)**

These are **simplified, engaging web pages** extracted from the detailed documents:

#### /company/overview
- Extracted from: Expanded Company Profile
- Content: 300-word summary of RetailFlow's business model
- Includes: Founded 2008, 50 stores, AUD $150M revenue, multi-channel focus
- CTA: "Meet the Team" or "Explore Our Business"

#### /company/team
- Extracted from: Employee Profiles
- Presents: Interactive employee directory (cards/grid)
- Each employee has: Photo placeholder, name, title, 1-line bio
- On click: Modal or slide-out with full profile
- Shows org structure visually (hierarchical chart)

#### /project/overview
- Extracted from: Chatbot Project Charter
- Content: 400-word project summary
- Includes: Budget, timeline, objectives, stakeholders
- Visual: Project phases timeline

#### /insights/market
- Extracted from: Competitive Analysis
- Content: Competitive landscape summary
- Visual: Positioning map (RetailFlow vs. competitors)
- Includes: Key competitive insights

#### /insights/customers
- Extracted from: Customer Satisfaction Survey
- Content: Key findings visualized
- Charts: CSAT trends, satisfaction by channel, top complaints
- CTA: "See the Customer Scenarios"

---

### **TIER 2: DETAILED DOCUMENTS (PDF/Downloadable)**

These are the **original markdown documents** reformatted for easy access:

Location: `/documents/` section

**Available as:**
1. **Markdown viewer** (browser-readable version)
2. **PDF downloads** (for offline access)
3. **Rich HTML versions** (formatted nicely)

**Documents:**
- retailflow-company-profile.md
- retailflow-employee-profiles.md
- retailflow-internal-documents.md
- retailflow-chatbot-project.md
- retailflow-customer-scenarios.md
- retailflow-bot-profiles.md

---

### **TIER 3: INTERACTIVE EXPERIENCES (Embedded JS/Tools)**

These are where participants **engage with the simulation**:

#### /interact/chatbot
- **Embed: RetailBot chatbot** (your JS implementation)
- Purpose: Experience the actual AI chatbot as customers would
- Participants can test queries, see responses
- Track: "Conversations" logged for learning

#### /interact/team
- **Embed: Interactive "Employee Bots"**
- Each of the 6 bots (RetailBot, DataAnalyzer, PolicyAdvisor, etc.)
- Or even the 9 human employees as "askable" AI agents
- Participants ask them questions and get responses
- Example:
  - "Ask Emma (CEO) about the project"
  - "Ask Sarah Chen about team morale"
  - "Ask DataAnalyzer for current metrics"
- Behind scenes: LLM-powered responses based on their character profiles

#### /interact/scenarios
- **Embed: Scenario simulator/quiz**
- Presents customer service scenarios (from Scenario document)
- Participant decides: "What would you do?"
- Shows: What chatbot would do vs. what human would do
- Feedback: Explanation of good/poor choices
- Learning: Understanding bot vs. human boundaries

#### /dashboard
- **Embed: Live metrics dashboard**
- Real-time project KPIs (simulated or real)
- Pulls from: DataAnalyzer analytics
- Shows: Response times, satisfaction, chatbot handling rate
- Updates: Refreshes periodically (can be pre-set data or actual)

---

## DETAILED IMPLEMENTATION PLAN

### Homepage Structure

```html
<header>
  RetailFlow | Virtual Company Simulation
  [Navigation Menu]
</header>

<hero>
  "RetailFlow: Solving Retail's Customer Service Crisis"
  [Tagline about the AI project]
  [2 CTAs: "Explore the Company" | "Start Simulation"]
</hero>

<metrics-snapshot>
  Quick stats (in cards):
  - 50 stores across Australia
  - AUD $150M revenue
  - 2,000 employees
  - 68% customer satisfaction (declining issue)
  - Week 2 of AI chatbot pilot
</metrics-snapshot>

<context-section>
  Problem: Customer service is overwhelmed
  Solution: AI chatbot pilot launched
  Your Role: Help manage this project through real challenges
</context-section>

<navigation-cards>
  [Card: Explore Company]
    → /company/overview
    "Learn about RetailFlow's business, team, and challenges"
  
  [Card: Understand the Project]
    → /project/overview
    "Review the AUD $150K chatbot project details"
  
  [Card: Meet the Team]
    → /company/team
    "Interactive employee directory (9 team members)"
  
  [Card: Start Simulation]
    → /interact/chatbot
    "Interact with the AI chatbot and team"
  
  [Card: View Scenarios]
    → /interact/scenarios
    "Test your knowledge with customer service scenarios"
  
  [Card: Access Documents]
    → /documents/
    "Download full company documents"
</navigation-cards>

<footer>
  Copyright, About, Links
</footer>
```

---

### Company Overview Page (`/company/overview`)

```html
<hero>
  RetailFlow: Australia's Contemporary Multi-Channel Retailer
</hero>

<content>
  <section1>
    The Business (300 words extracted from profile)
    - Founded 2008 during GFC
    - 50 stores across Australia
    - 35% online revenue (growing fast)
    - Known for: Design-focused, contemporary, customer-first
  </section1>
  
  <section2>
    Strategic Challenge
    - Customer satisfaction: 68% (down from 78%)
    - Response times: 26 hours (unacceptable)
    - Competitive pressure: Pure-plays and giants
    - Solution: AI chatbot pilot (this is where you come in)
  </section2>
  
  <section3>
    The Opportunity
    - Prove retail can innovate with AI
    - Improve customer satisfaction
    - Build organizational confidence in technology
    - Set foundation for broader AI roadmap
  </section3>
</content>

<cta-section>
  [Button: Meet the Team] → /company/team
  [Button: Understand the Project] → /project/overview
  [Button: Download Full Profile] → /documents/company-profile/
</cta-section>
```

---

### Team Directory Page (`/company/team`)

```html
<hero>
  Meet the RetailFlow Team
  "The people making decisions about your project"
</hero>

<org-chart>
  Visual org chart showing:
  - Emma Rodriguez (CEO) at top
  - David Chen (CFO), Sarah Thompson (COO), Marcus Kim (CIO), 
    Lisa Nguyen (CCO) reporting to Emma
  - Key project roles highlighted
  - On click: Shows full profile modal
</org-chart>

<team-grid>
  9 team member cards:
  
  [Card: Emma Rodriguez]
    Title: CEO
    Role in Project: Sponsor (wants results)
    One-liner: "Visionary, pragmatic, under board pressure"
    [View Full Profile] → Modal or /profile/emma-rodriguez
    
  [Card: David Chen]
    Title: CFO
    Role: Budget oversight (ROI focus)
    One-liner: "Conservative, wants proof points"
    
  [Card: Sarah Thompson]
    Title: COO
    One-liner: "Operations backbone, protective of staff"
    
  [Card: Marcus Kim]
    Title: CIO
    One-liner: "Tech enthusiast, sometimes impatient"
    
  [Card: Lisa Nguyen]
    Title: Chief Customer Officer
    One-liner: "Executive sponsor, customer-focused"
    
  [Card: Sarah Chen]
    Title: Customer Service Manager
    One-liner: "Frontline leader, team advocate"
    
  [Card: Dr. Priya Sharma]
    Title: Senior Data Scientist
    One-liner: "AI model builder, quality-focused"
    
  [Card: Rajesh Patel]
    Title: IT Security Manager
    One-liner: "Security advocate, sometimes cautious"
    
  [Card: Michael Torres]
    Title: Store Manager
    One-liner: "Frontline perspective on changes"
</team-grid>

<profile-modal>
  (On card click - shows full profile)
  - Name, title, background, personality
  - Their perspective on AI
  - Hidden motivations and concerns
  - Key relationships
  - What they care about
  [Close]
</profile-modal>
```

---

### Project Overview Page (`/project/overview`)

```html
<hero>
  The Chatbot Pilot Project
  "AUD $150K, 6 months, high stakes"
</hero>

<quick-facts>
  Cards showing:
  - Budget: AUD $150,000
  - Timeline: 6 months (Sept 2024 - Feb 2025)
  - Status: Week 2 of pilot deployment
  - Sponsor: Lisa Nguyen
  - Team: 6 people
  - Objective: Reduce email response from 26 hours to <2 hours
</quick-facts>

<timeline>
  Interactive/visual timeline:
  Phase 1: Discovery & Planning (2 weeks)
  Phase 2: Development (10 weeks)
  Phase 3: Pilot Launch (12 weeks)
  [Current phase highlighted]
</timeline>

<objectives>
  Primary objectives (extracted):
  1. Reduce response time
  2. Improve customer satisfaction
  3. Handle 40% of inquiries automatically
  4. Validate AI capability for broader rollout
</objectives>

<budget-breakdown>
  Visual breakdown (pie chart):
  - AI Platform & Tools: 30%
  - Internal Labor: 23%
  - External Consulting: 17%
  - Training & Documentation: 12%
  - Infrastructure: 10%
  - Contingency: 8%
</budget-breakdown>

<success-criteria>
  Dashboard showing targets vs. current (Week 2):
  - Email response time: Target <2 hrs, Current 8.3 hrs
  - CSAT: Target 75%, Current 68%
  - Chatbot handling: Target 40%, Current 15%
  - NPS: Target 38, Current 32
</success-criteria>

<cta>
  [Download Full Charter] → /documents/project-charter/
  [View Risks] → /project/risks/
  [Meet the Team] → /project/team/
</cta>
```

---

### Interact - Chatbot Page (`/interact/chatbot`)

```html
<hero>
  Chat with RetailBot
  "Experience the AI chatbot that's transforming customer service"
</hero>

<chat-interface>
  [Embed your JavaScript chatbot here]
  
  Frame: "You are a customer of RetailFlow. What would you ask?"
  
  Suggested queries:
  - "Where is my order RF-2024-08-15743?"
  - "What's your return policy?"
  - "I received a damaged item"
  - "When will my delivery arrive?"
  
  [Chat window]
  [Input field]
</chat-interface>

<info-section>
  About RetailBot:
  - Built using AI (LLM-powered)
  - Trained on 500+ customer inquiries
  - Can handle: Tracking, product info, policy questions
  - Escalates: Complex issues to human team
  - Current success rate: 38% fully resolved without escalation
</info-section>

<next-steps>
  [Explore Other Bots] → /interact/team/
  [Try Scenarios] → /interact/scenarios/
  [View Bot Profile] → /documents/bot-profiles/#retailbot
</next-steps>
```

---

### Interact - Team Bots Page (`/interact/team`)

```html
<hero>
  Ask the Team
  "Interact with team members and AI agents as if they're your colleagues"
</hero>

<bot-selector>
  6 tabs or cards:
  
  1. RetailBot (Customer Service AI)
     "Ask about chatbot performance, customer inquiries"
  
  2. DataAnalyzer (Metrics AI)
     "Ask about project metrics, ROI, performance"
  
  3. PolicyAdvisor (Policy AI)
     "Ask about company policies and procedures"
  
  4. TrendSpotter (Pattern Analysis AI)
     "Ask about emerging issues and trends"
  
  5. ScheduleBot (Capacity Planning AI)
     "Ask about staffing and workload"
  
  6. ComplianceChecker (Ethics AI)
     "Ask about compliance, fairness, risks"
</bot-selector>

<chat-interface>
  [Selected bot displays]
  
  [Personalized greeting based on bot character]
  
  [Chat window for conversation]
  [Input field: "Ask [Bot Name] a question..."]
  
  Example prompts for each:
  - RetailBot: "How many inquiries are you handling?"
  - DataAnalyzer: "What's our current CSAT score?"
  - PolicyAdvisor: "Can I return an item after 40 days?"
  - etc.
</chat-interface>

<bot-profiles>
  Quick reference for each bot's specialty:
  [Accordion or cards showing]
  - What each bot knows
  - What each bot is bad at
  - Known limitations
</bot-profiles>
```

---

### Scenarios Page (`/interact/scenarios`)

```html
<hero>
  Customer Service Scenarios
  "Test your judgment against the AI chatbot"
</hero>

<scenario-selector>
  Filter options:
  - Difficulty: Simple | Moderate | Complex
  - Category: Order Tracking | Returns | Complaints | Edge Cases
  
  Scenario list (clickable):
  1. Order Tracking (Simple)
  2. Return Request - Standard (Moderate)
  3. Damaged Item - Service Recovery (Complex)
  ... etc
</scenario-selector>

<scenario-view>
  Selected scenario displays:
  
  [Scenario Title]
  [Customer Query (text)]
  [Context (situation details)]
  
  Your Decision:
  [Radio buttons with options]
  - Option A: [Choice]
  - Option B: [Choice]
  - Option C: [Choice]
  - Option D: [Choice]
  
  [Submit Answer]
  
  [Reveals: What chatbot would do]
  [Reveals: What human would do]
  [Explanation: Why this matters]
  [Learning: Key insights]
  
  [Next Scenario] or [Return to List]
</scenario-view>
```

---

### Documents Section (`/documents/`)

```html
<hero>
  RetailFlow Company Documents
  "Access detailed company information"
</hero>

<document-grid>
  6 documents, each with:
  
  [Document Card: Company Profile]
    Description: "Comprehensive company history, financials, structure"
    Size: 15 pages
    [View Online] [Download PDF] [Download MD]
    
  [Document Card: Employee Profiles]
    Description: "Detailed backstories for 9 key team members"
    Size: 12 pages
    [View Online] [Download PDF] [Download MD]
    
  [Document Card: Internal Documents]
    Description: "Memos, financial summaries, surveys, meeting notes"
    Size: 18 pages
    [View Online] [Download PDF] [Download MD]
    
  [Document Card: Chatbot Project]
    Description: "Full project charter, timeline, risks, budget"
    Size: 20 pages
    [View Online] [Download PDF] [Download MD]
    
  [Document Card: Customer Scenarios]
    Description: "20 realistic customer service scenarios for analysis"
    Size: 16 pages
    [View Online] [Download PDF] [Download MD]
    
  [Document Card: Bot Profiles]
    Description: "AI agent personalities, capabilities, limitations"
    Size: 14 pages
    [View Online] [Download PDF] [Download MD]
</document-grid>

<document-viewer>
  (When clicking a document)
  - Display formatted HTML version
  - Syntax highlighting for technical sections
  - Table of contents (clickable)
  - Download options (PDF, MD, TXT)
  - Full-screen reading mode
</document-viewer>
```

---

### Dashboard Page (`/dashboard/`)

```html
<hero>
  Project Dashboard
  "Real-time metrics for the chatbot pilot"
</hero>

<metrics-grid>
  Cards showing live/simulated metrics:
  
  [Card: Email Response Time]
    Current: 8.3 hours
    Target: <2 hours
    Status: ⚠️ Below target
    Trend: ↓ Improving (was 12 hours Week 1)
    
  [Card: Chatbot Handling Rate]
    Current: 38%
    Target: 40%
    Status: ✅ On track
    Trend: ↑ Improving
    
  [Card: Customer Satisfaction]
    Current: 68%
    Target: 75%
    Status: ⚠️ Below target
    Trend: ↑ Slightly improving
    
  [Card: Escalation Rate]
    Current: 24%
    Target: <15%
    Status: ❌ Above target
    Trend: ↓ Improving
    
  [Card: Team Utilization]
    Current: 87%
    Target: 75-80%
    Status: ⚠️ High (burnout risk)
    Trend: ↓ Improving as chatbot helps
    
  [Card: Weekly Inquiries]
    Current: 2,640
    Previous: 2,620
    Trend: Slight increase
    Handled by chatbot: 1,000/week
    
  [Card: Project Spend]
    Current: AUD $28,500 / AUD $150,000
    Burn rate: 19% (on track for 6-month project)
    
  [Card: ROI Projection]
    Annualized cost savings: AUD $285K
    Projected ROI: 190% in 12 months
</metrics-grid>

<chart-section>
  Multiple charts:
  - Response time trend (line chart)
  - Chatbot handling rate (line chart)
  - Satisfaction trend (line chart)
  - Daily inquiry volume (bar chart)
  - Budget spend (progress bar)
  
  [Date range picker: Week / Month / All]
  [Compare periods]
</chart-section>

<notes>
  Weekly summary:
  "Week 2 Update: Strong progress on response times. Chatbot 
  handling 38% of inquiries (close to 40% target). Team morale 
  improving as workload decreases. Focus areas: Escalation rate 
  still high; need to refine escalation logic."
</notes>
```

---

## IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1)
- [ ] Set up GitHub Pages repository
- [ ] Create base HTML structure / CSS framework
- [ ] Design template for consistent pages
- [ ] Set up custom domain DNS

### Phase 2: Content (Week 2-3)
- [ ] Extract and write summary pages
- [ ] Create team profile pages/modals
- [ ] Set up document viewer/PDF generation
- [ ] Build navigation and menu system

### Phase 3: Interactivity (Week 4-5)
- [ ] Embed RetailBot chatbot JS
- [ ] Create scenario interactive quiz
- [ ] Build dashboard with data display
- [ ] Create bot interaction interface (if LLM-powered)

### Phase 4: Polish (Week 6)
- [ ] Design refinements
- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Testing and QA

---

## TECHNOLOGY STACK

**Static Site Generator Options:**
1. **Next.js (Recommended)** - React-based, easy to embed JS, great for GitHub Pages
2. **Hugo** - Fast, simple, good for static sites
3. **Jekyll** - GitHub native, simple
4. **HTML/CSS/JS** - Pure vanilla if keeping very simple

**Hosting:**
- GitHub Pages (free, supports custom domain)
- Vercel (next.js native, free tier generous)
- Netlify (good for static sites)

**Embedding:**
- Chatbot JS embed as `<script>` tag
- React component if using Next.js
- Vanilla JS module otherwise

**Data/CMS:**
- GitHub repo (markdown files for content)
- Optional: Simple JSON files for metrics/data
- Optional: Contentful or similar if needing dynamic content later

---

## GITHUB STRUCTURE

```
retailflow-website/
├── public/
│   ├── documents/          (Original markdown files)
│   │   ├── company-profile.md
│   │   ├── employee-profiles.md
│   │   └── ... (6 total)
│   ├── images/            (Team photos, logos, diagrams)
│   └── data/              (Metrics JSON, etc.)
├── src/
│   ├── pages/
│   │   ├── index.jsx      (Homepage)
│   │   ├── company/
│   │   │   ├── overview.jsx
│   │   │   ├── team.jsx
│   │   │   ├── [employee].jsx  (Dynamic profile pages)
│   │   ├── project/
│   │   │   ├── overview.jsx
│   │   │   ├── timeline.jsx
│   │   ├── interact/
│   │   │   ├── chatbot.jsx
│   │   │   ├── team.jsx
│   │   │   ├── scenarios.jsx
│   │   ├── dashboard/
│   │   │   └── index.jsx
│   │   ├── documents/
│   │   │   ├── index.jsx
│   │   │   └── [doc].jsx   (Dynamic document viewer)
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── ProfileModal.jsx
│   │   ├── ChatInterface.jsx (wrapper for your bot)
│   │   ├── MetricsCard.jsx
│   │   └── ScenarioQuiz.jsx
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       ├── markdownToHtml.js
│       └── docUtils.js
├── README.md
├── next.config.js (if using Next.js)
└── package.json
```

---

## KEY PRINCIPLES

1. **Immersive Simulation**: Website feels like exploring a real company
2. **Document-Driven**: All content sourced from detailed documents
3. **Interactive Elements**: Bots, scenarios, dashboards make it dynamic
4. **Scalable**: Easy to add more pages, scenarios, docs
5. **Accessible**: Mobile-friendly, readable, navigable
6. **Embeddable JS**: Your chatbot integrates cleanly
7. **Static Generation**: Fast, secure, easy to deploy

---

## NEXT STEPS

1. **Choose tech stack** (recommend Next.js)
2. **Set up GitHub repo** with base template
3. **Start with homepage** to establish design system
4. **Build pages incrementally** (1-2 per week)
5. **Integrate your chatbot JS** when ready
6. **Add interactivity** (scenarios, bots, dashboard)
7. **Launch and iterate**

---

## EXAMPLE FLOW FOR PARTICIPANTS

1. **Visit website** → Lands on homepage
2. **Clicks "Explore Company"** → Reads overview
3. **Clicks "Meet the Team"** → Explores 9 employee profiles
4. **Clicks "Understand Project"** → Reviews project charter summary
5. **Clicks "Start Simulation"** → Interacts with RetailBot chatbot
6. **Clicks "Ask the Team"** → Asks DataAnalyzer about metrics
7. **Clicks "Scenarios"** → Does 3-5 scenario challenges
8. **Clicks "Dashboard"** → Reviews project KPIs
9. **Downloads "Full Documents"** → Gets detailed PDFs for reference

The website is the **onramp to the simulation**. The documents are available but the web experience guides them through an engaging journey.