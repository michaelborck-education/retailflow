---
title: "AI in Leadership & Project Management"
subtitle: "A Masterclass in Leading Successful AI Implementations"
author: "Dr. Michael Borck"
date: today
format:
  revealjs:
    theme: serif
    transition: slide
    slide-number: true
    chalkboard: true
    logo: logo.png
    footer: "AI in Leadership & Project Management | Curtin University"
---

# Welcome {background-color="#003087"}

## AI in Leadership & Project Management

**Leading Successful AI Implementations**

Dr. Michael Borck  
Curtin University

::: {.notes}
- Welcome everyone warmly
- Brief self-introduction: "I'm Dr. Michael Borck, and I've spent over two decades working at the intersection of AI, software engineering, and business innovation."
- "I'm excited to spend the day with such a diverse group - I can see we have industry professionals from BHP, Rio Tinto, Woodside, students, and Curtin colleagues."
- "This is going to be an intensive, hands-on day. You'll work hard, but you'll leave with practical skills you can use Monday morning."
:::

---

## Today's Journey

::: {.incremental}
- **9:00-10:30am** → Foundations & Frameworks
- **10:30-12:30pm** → Stakeholder Management & Project Scoping
- **12:30-1:15pm** → Lunch
- **1:15-2:45pm** → Crisis Management in Action
- **2:45-4:00pm** → Strategic Decisions: Scale or Kill
- **4:00-4:30pm** → Personal Action Planning
:::

::: {.notes}
- "Look at this timeline - this is a full, intense day"
- "You'll notice we spend much more time DOING than listening to me talk"
- "That's intentional - this is experiential learning"
- "You'll work hard, think critically, make difficult decisions"
- "But you'll leave with muscle memory, not just theory"
- Emphasize the flow: learn → practice → reflect
:::

---

## Learning Outcomes

By the end of today, you will be able to:

::: {.incremental}
- ✓ Design AI projects with appropriate scope and success metrics
- ✓ Manage diverse, multidisciplinary AI teams effectively
- ✓ Navigate ethical dilemmas and stakeholder conflicts
- ✓ Make informed scale/pivot/kill decisions
- ✓ Apply crisis management frameworks to AI projects
:::

::: {.notes}
- "These aren't just academic goals written for a course outline"
- "You'll actually PRACTICE each of these skills today"
- "Not in a theoretical way, but in realistic, high-pressure scenarios"
- "The crises you'll face this afternoon are based on real AI projects that I've worked on or studied"
- Link these to their course documentation/CRL requirements
:::

---

## Why This Masterclass is Different

::: {.columns}
::: {.column width="48%"}
**Traditional Masterclass**

- 6 hours of lecture
- Take notes
- Passive learning
- Remember 10%
- Theory
:::

::: {.column width="48%"}
**Today's Approach**

- 1 hour lecture, 5 hours practice
- Make decisions
- Active problem-solving
- Apply 90%
- Experience
:::
:::

::: {.notes}
- "You could attend a masterclass where I lecture for 6 hours about AI project management theory"
- "You'd take notes, maybe remember 10%, and struggle to apply it next week"
- "Instead, we're doing something different"
- "You're going to EXPERIENCE what AI project leadership feels like"
- "You'll face real crises. You'll negotiate with difficult stakeholders. You'll make tough decisions."
- "Some of you will feel uncomfortable today. Good. That's where learning happens."
- "You already know how to take notes. Today you'll learn how to lead."
:::

---

## Quick Poll

**Show of hands:**

::: {.incremental}
- How many have led a project (any type)?
- How many have worked on an AI/ML project?
- How many are currently considering an AI initiative?
- How many are skeptical about AI hype?
:::

::: {.notes}
- Take time to actually see the hands and get a sense of the room
- Acknowledge the diversity: "Great - we have a real mix of experience"
- "This diversity is valuable - you'll learn from each other"
- Make note of the skeptics: "And I love that some of you are skeptical - that's healthy"
:::

---

## Pair & Share (2 minutes) {.smaller}

**Turn to someone near you and share:**

1. Your name and role
2. One AI project challenge you're facing (or anticipate)

*We'll hear from a few pairs afterward*

::: {.notes}
- Set a timer for 2 minutes - actually time this
- Walk around and listen to conversations
- After 2 minutes: "Let's hear from 2-3 pairs"
- Listen to their challenges and acknowledge: "We'll be addressing exactly these issues today"
- This accomplishes multiple things:
  - Gets them talking immediately
  - Builds energy in the room
  - Helps you understand their context
  - Sets collaborative tone
  - Validates their challenges
:::

---

# The AI Project Challenge {background-color="#003087"}

---

## The Brutal Truth About AI Projects

:::: {.columns}
::: {.column width="60%"}
# 80%
**of AI projects fail to deliver business value**
:::

::: {.column width="40%"}
![](ai-failure.png){width="100%"}

*Source: Gartner, 2023*
:::
::::

::: {.notes}
- Let this slide breathe - pause for effect
- "Let that statistic sink in for a moment"
- "EIGHTY percent. Four out of five AI projects fail."
- "Not because the technology doesn't work..."
- Pause again
- "But for reasons we'll explore today"
- "And more importantly, reasons you'll learn to prevent"
:::

---

## The Technical Reality (Brief Context)

**AI's Fundamental Limitation: Hallucinations**
- AI "hallucinates" - confidently invents plausible but false information
- Current models have ~30% error rates in specialized domains
- This is why "human in the loop" is non-negotiable

**This Means:**
- You cannot fully automate critical processes
- Verification and validation are essential
- AI is an assistant, not autonomous decision-maker

**For project leaders: You must design processes that account for this**

::: {.notes}

"Before we dive into the exercises, I need to give you one critical piece of technical context. This will take 3 minutes, but it's the foundation for everything we do today."

**[Point to first bullet: Hallucinations]**

"AI has a fundamental flaw that you need to understand: it hallucinates. And I don't mean it 'makes mistakes' or 'gets confused.' I mean it confidently invents plausible-sounding information that is completely false."

"Let me give you a real example: Ask ChatGPT about a legal case, and it might cite 'Johnson v. Smith, 2019' with specific details—court, judge, ruling. Sounds authoritative. Except that case never existed. The AI made it up because it's trained to generate text that *sounds* like legal citations."

"This isn't a bug that will be fixed in the next version. It's how these systems work. They're statistical pattern predictors, not truth machines. They predict the next most likely word based on patterns in their training data. They don't *know* what's true—they just know what sounds plausible."

**[Point to second bullet: Error rates]**

"Now, most of the time, AI is remarkably accurate. For general tasks, it's quite good. But when you get into specialized domains—your specific business processes, your industry terminology, your company policies—the error rate can be 20-30%."

"Think about that. One in three answers could be wrong. Would you make a critical business decision based on advice that's wrong 30% of the time? Of course not."

"This is why, in our crisis simulation this afternoon, you'll see AI giving incorrect information. That's not me being pessimistic—that's the reality you need to design for."


**[Point to "This Means" section]**

"So what does this mean practically?"

"First: You cannot fully automate critical processes with current AI. If the stakes are high—customer safety, regulatory compliance, significant financial impact—a human must be in the decision chain. Not reviewing 100% of outputs necessarily, but positioned to catch errors that matter."

"Second: Verification and validation become essential parts of your process design. When we scope your AI pilot this morning, you'll need to build in checkpoints. How do you verify the AI's outputs? Who reviews them? What triggers a deeper human review?"

"Third: AI is an assistant, not an autonomous decision-maker. This is the 'Humans in the Loop' framework I mentioned. The AI does the heavy lifting—analyzes data, spots patterns, generates first drafts. But humans make the final calls, especially on anything that matters."


**[Point to final bullet: Project leaders]**

"For you as project leaders, this means your job isn't just 'implement AI.' Your job is to design processes that account for this limitation."

"Questions you'll need to answer:"
- "Where do humans review AI outputs?"
- "What's your acceptable error rate for this specific use case?"
- "How do you catch the 30% that's wrong before it causes damage?"

"This isn't theoretical. This afternoon, in Crisis 1, your AI chatbot will start giving customers wrong information about return policies. You'll have to diagnose it, decide how to respond, and communicate with stakeholders—all under time pressure."

"That exercise isn't about AI technology. It's about leadership—how you design systems that use AI's strengths while protecting against its weaknesses."


**[Pause, make eye contact]**

"Now, I know some of you might be thinking: 'If AI is this unreliable, why are we bothering?' Great question."

"Because despite this limitation, AI is still incredibly powerful for the right applications. It can process volumes of data humans can't. It can spot patterns we'd miss. It can work 24/7 without fatigue. It can free humans to focus on higher-value work."

"The companies that succeed with AI aren't the ones who pretend this limitation doesn't exist. They're the ones who design around it thoughtfully."

"That's what we're practicing today—not blind AI adoption, but intelligent human-AI collaboration."


"Okay, that's your technical foundation. AI hallucinates, you need humans in the loop, and you must design for this limitation."

"Now let's put that into practice. After our break, you'll experience exactly what this looks like in a realistic AI project."

"Any quick questions on this before we break? No? Alright, see you back here at 11:00am."

:::

---

## Why AI Projects Fail

:::: {.columns}
::: {.column width="50%"}
**Technical Issues: 20%**

- Algorithm performance
- Data quality problems
- Infrastructure failures
:::

::: {.column width="50%"}
**People & Organizational: 80%**

- Stakeholder resistance
- Unclear objectives
- Poor change management
- Ethical oversights
- Wrong metrics
- Scope creep
:::
::::

::: {.notes}
- "This is perhaps the most important slide of the entire day"
- "AI project leadership is NOT primarily about technology"
- "It's about people, politics, change, and ethics"
- Point to the 80/20 split
- "If you're a technical person, this might surprise you"
- "If you're a manager, you're probably nodding"
- "That's why today we focus on the 80% - the people side"
- "Because that's where AI projects live or die"
:::

---

## Real AI Project Failures {.smaller}

::: {.incremental}
**🏥 Healthcare AI Diagnostic Tool**  
$5M investment, 2 years, 95% accuracy in testing  
**FAILED:** Clinicians didn't trust it, refused to use it  
*Lesson: Technology ≠ Adoption*

**🏪 Retail Inventory AI**  
Reduced stockouts by 40% (technical success!)  
**FAILED:** Automated jobs away, union backlash, PR disaster  
*Lesson: Forgot about people impact*

**💰 Bank Loan Approval AI**  
Improved processing speed by 70%  
**FAILED:** Discriminated against protected groups  
*Lesson: Ethics can't be an afterthought*
:::

::: {.notes}
- "These are real projects - I've anonymized them"
- "Notice: All had solid technology. All worked technically."
- "The healthcare AI was more accurate than junior doctors"
- "The inventory AI did exactly what it was designed to do"
- "The loan AI processed applications faster than humans"
- "But all three FAILED"
- "Why? User adoption. Change management. Ethics."
- "Today you'll practice navigating exactly these challenges"
- "This afternoon, you'll face similar dilemmas and have to decide what to do"
:::

---

## Traditional vs. AI Projects {.smaller}

| Traditional Project | AI Project |
|-------------------|-----------|
| Requirements known upfront | Requirements emerge through experimentation |
| Linear progression | Iterative, hypothesis-driven |
| Success criteria clear | Success criteria evolve |
| Predictable timeline | "We'll know more after the pilot" |
| Technical risk primary | Organizational risk dominant |
| Implementation focus | Learning & adaptation focus |

::: {.notes}
- "Many of you have successfully led traditional projects"
- "Maybe you've done SAP implementations, construction projects, product launches"
- "AI projects require DIFFERENT skills"
- "Not better or worse - just different"
- Walk through 2-3 rows specifically:
  - "Traditional: You gather requirements, lock them down, build to spec"
  - "AI: You start with a hypothesis, run experiments, learn what's possible"
- "That's why today we're focusing on what's unique about AI, not general PM skills you already have"
:::

---

## The AI Project Lifecycle

```{mermaid}
%%| fig-width: 10
graph LR
    A[Ideation] --> B[Scoping]
    B --> C[Pilot]
    C --> D[Evaluation]
    D --> E{Decision}
    E -->|Scale| F[Full Deployment]
    E -->|Pivot| B
    E -->|Kill| G[End Project]
    
    style E fill:#ff9999
    style F fill:#99ff99
    style G fill:#ffff99
```

::: {.notes}
- "This is the lifecycle you'll navigate today"
- Point to each stage:
  - "Ideation: Identify an opportunity - someone says 'we should use AI for X'"
  - "Scoping: Define boundaries for a pilot - this is where most rush and fail"
  - "Pilot: Build and test at small scale - learn rapidly"
  - "Evaluation: Measure results rigorously - against the RIGHT metrics"
  - "Decision: Scale it, Pivot it, or Kill it"
- "Most organizations rush through Scoping - you'll practice proper scoping at 11:45am"
- "Most fail at Evaluation because they measure the wrong things"
- "Most struggle with the Kill decision - sunk cost fallacy"
- "This afternoon at 3pm, you'll make scale/pivot/kill decisions on real case studies"
:::

---

# Project Management Fundamentals {background-color="#003087"}

*A Quick Refresher*

---

## Project Management Essentials

**A project is:**

- Temporary endeavor (has an end)
- Defined beginning and end dates
- Creates unique outcome
- Cross-functional team

**Project management is:**

- Planning, organizing, executing
- Managing constraints: Scope, Time, Budget, Quality
- Coordinating people and resources
- Delivering value

::: {.notes}
- "For those of you who are experienced project managers - bear with me for 10 minutes"
- "For students and technical specialists - here's the foundation"
- "We need a common language before diving into AI-specific challenges"
- "The good news: AI projects use these fundamentals"
- "The challenge: They apply them differently"
- Acknowledge the experienced folks: "You already know this - help your table mates if questions come up"
:::

---

## The Project Triangle

```{mermaid}
%%| fig-width: 8
graph TD
    A[SCOPE] --- B[TIME]
    B --- C[COST]
    C --- A
    D[QUALITY] -.-> A
    D -.-> B
    D -.-> C
    
    style D fill:#ffcccc
```

**Traditional PM:** Pick two, sacrifice the third  
**AI Projects:** All four are variables until pilot proves value

::: {.notes}
- "You've probably seen this triangle before"
- "Traditional wisdom: You can optimize for two constraints, but the third will give"
- "Want it fast and cheap? Quality suffers."
- "Want it high quality and fast? It'll be expensive."
- "AI projects are different - ALL FOUR are variables"
- "You don't know the right scope until you experiment"
- "You don't know the timeline until you see if it works"
- "This makes AI project leadership harder - more ambiguity"
- "But also more opportunity to iterate and learn"
:::

---

## Key PM Concepts for AI Projects {.smaller}

:::: {.columns}
::: {.column width="48%"}
**📋 Scope Management**

What's in, what's out  
For AI: Start narrow  
Common error: "Automate everything!"

**👥 Stakeholder Management**

Who cares, who has power  
For AI: More diverse stakeholders  
Critical success factor
:::

::: {.column width="48%"}
**⚠️ Risk Management**

What could go wrong?  
For AI: New risk categories  
Must plan for unknowns

**🔄 Change Management**

How do people adapt?  
For AI: Biggest determinant  
Can't be afterthought
:::
::::

::: {.notes}
- "Four critical PM disciplines - all essential for AI"
- "We'll practice all four today, especially stakeholder and change management"
- Scope: "At 11:45am you'll scope a pilot - you'll be tempted to make it too big"
- Stakeholder: "At 11am you'll role-play different stakeholders - experience their conflicts"
- Risk: "At 1:15pm you'll face four crises - practice risk response"
- Change: "At 1:35pm you'll handle team resistance - the hardest people problem"
- "These aren't separate - they're interconnected"
- "Poor scoping creates stakeholder conflict creates change resistance creates risks"
:::

---

## The AI Project Team {.smaller}

**Core Roles:**

| Role | What They Care About | Their Fear |
|------|---------------------|-----------|
| Executive Sponsor | Strategy, ROI, board approval | Public failure |
| Project Manager (YOU) | Delivery, stakeholder alignment | Blame |
| Data Scientist | Model accuracy, cutting edge | Technical debt |
| Business Owner | Solving their problem | Wasting time |
| IT/Infrastructure | Security, stability, integration | Breach, downtime |
| End Users | Ease of use, job security | Being replaced |

::: {.notes}
- "Notice how DIVERSE this team is"
- "More diverse than traditional project teams"
- "Every role speaks a different language"
- Point to each:
  - "Data Scientist speaks in Python and model accuracy"
  - "Executive Sponsor speaks in ROI and board presentations"
  - "End User speaks in 'Will I still have a job?'"
- "YOUR JOB as project manager: Translate between all these worlds"
- "Align people who have different languages, priorities, and fears"
- "This is why stakeholder management is the #1 skill for AI project leaders"
- "In 90 minutes, you'll literally BECOME each of these people in a role-play"
:::

---

# The "Humans in the Loop" Framework {background-color="#003087"}

*My Approach to AI Project Leadership*

---

## Beyond the Technology

![](humans-ai-loop.png){width="70%" fig-align="center"}

**The Core Principle:**

*"AI projects aren't about replacing humans with technology.  
They're about designing new ways for humans and AI to work together."*

::: {.notes}
- "This is my framework - Humans in the Loop"
- "It's based on 20+ years of leading technology projects"
- "And seeing what actually determines success vs. failure"
- "The name is intentional - we keep humans IN the loop, not out"
- "It has three pillars:"
  - "Stakeholder Orchestration"
  - "Change Navigation"
  - "Ethical Leadership"
- "These aren't soft skills or nice-to-haves"
- "They're mission-critical for AI project success"
- "Let me break down each one..."
:::

---

## Pillar 1: Stakeholder Orchestration

**The Challenge:**  
Every AI project has 6-10 key stakeholders with conflicting interests

**Your Job:**

::: {.incremental}
- Identify all stakeholders (including hidden ones)
- Understand their motivations (stated vs. actual)
- Map their power and interest
- Develop engagement strategies
- Build coalitions
:::

::: {.notes}
- "Orchestration - like conducting an orchestra"
- "Everyone has a different instrument, different part to play"
- "Your job: Make them create harmony instead of noise"
- "The challenge: Their interests often conflict"
- Walk through the incremental list as it appears
- "Here's the thing: Every stakeholder has FEARS"
- "The executive fears public failure"
- "The data scientist fears being blamed for poor accuracy"
- "The end user fears losing their job"
- "Your job is to understand and address those fears"
- "Not dismiss them, not ignore them - ADDRESS them"
- "At 11am today, you'll experience this firsthand"
:::

---

## Stakeholder Power-Interest Matrix

```{mermaid}
%%| fig-width: 10
%%| fig-height: 7
quadrantChart
    x-axis "Low Interest" --> "High Interest"
    y-axis "Low Power" --> "High Power"
    quadrant-1 "Manage Closely"
    quadrant-2 "Keep Satisfied"
    quadrant-3 "Monitor"
    quadrant-4 "Keep Informed"
```

::: {.notes}
- "This is PM 101, but it's CRITICAL for AI projects"
- Walk through each quadrant:
  - "High Power, High Interest: Manage Closely - frequent engagement, give them decision rights"
  - "High Power, Low Interest: Keep Satisfied - regular updates, don't let them get surprised"
  - "Low Power, High Interest: Keep Informed - transparent communication"
  - "Low Power, Low Interest: Monitor - minimal effort, but stay aware"
- "Here's what's different for AI projects:"
  - "You have MORE stakeholders in the 'Manage Closely' quadrant"
  - "Because AI touches more parts of the organization"
  - "And because fear and uncertainty are higher"
- "A traditional IT project might have 2-3 people to manage closely"
- "An AI project? Often 5-7"
- "That's why stakeholder orchestration is a full-time job"
:::

---

## Pillar 2: Change Navigation

**The Reality:**  
AI changes how people work → Change creates resistance → Resistance kills projects

**Change Management Essentials:**

::: {.incremental}
1. **Expect Resistance** (it's normal, not personal)
2. **Involve Early** (people support what they create)
3. **Communicate Constantly** (you can't overcommunicate)
4. **Train & Support** (reduce fear through competence)
:::

::: {.notes}
- "Let me tell you about change resistance..."
- "It's not IF you'll face resistance, it's WHEN and HOW MUCH"
- "Resistance is NORMAL. It's not people being difficult."
- "It's people being human."
- Walk through each point:
  1. "Expect it - plan for it - don't be surprised or offended"
  2. "Involve users early - give them ownership - they'll champion it"
  3. "Communicate constantly - what's changing, why, when, what's NOT changing"
  4. "Train them well - fear comes from feeling incompetent"
- "This afternoon at 1:35pm, you'll face a crisis of team resistance"
- "Your customer service team will be actively sabotaging your AI project"
- "You'll have to have a difficult conversation with their team leader"
- "You'll practice exactly this skill"
- "It's uncomfortable. But you'll learn how costly it is to skip change management"
:::

---

## The Change Curve

```{mermaid}
%%| fig-width: 12
%%| fig-height: 6
graph LR
    A[1. Denial] -->|Time| B[2. Resistance]
    B --> C[3. Exploration]
    C --> D[4. Commitment]
    
    style A fill:#ff9999
    style B fill:#ffcccc
    style C fill:#ffffcc
    style D fill:#99ff99
```

People don't go from **Denial** to **Commitment** instantly

::: {.notes}
- "This is the emotional journey people take with any change"
- "Understanding this curve will make you a better leader"
- Walk through each stage:
  1. "Denial: 'This won't affect me' or 'AI won't work here' - minimizing"
  2. "Resistance: 'I don't want this' - active pushback, sometimes sabotage"
  3. "Exploration: 'Maybe this could work' - tentative testing, questions"
  4. "Commitment: 'This is how we work now' - genuine adoption"
- "You CANNOT force people from Denial to Commitment"
- "If you try, you just create more resistance"
- "Your job: Help people move through the stages faster"
- "Meet them where they are"
- "Denial? Provide information and evidence"
- "Resistance? Listen to concerns, involve them in solutions"
- "Exploration? Provide safe practice environments"
- "This is nuanced, human work. It's not a Gantt chart."
:::

---

## Pillar 3: Ethical Leadership

**Why Ethics Matter in AI:**

::: {.incremental}
- AI can perpetuate bias (hiring, lending, healthcare)
- AI can invade privacy (surveillance, data)
- AI can eliminate jobs (automation)
- AI decisions can be opaque ("black box")
:::

**Your Responsibility:**

Ask uncomfortable questions. Surface concerns early. Don't hide behind "it's just technical."

::: {.notes}
- "This is the pillar that often gets skipped"
- "'We'll worry about ethics later' - famous last words"
- "Let me be clear: Ethics isn't optional. It's not philosophical. It's practical."
- Walk through each bullet as it appears
- "This afternoon at 2:25pm, you'll face an ethical dilemma"
- "Your AI will be working beautifully. Delivering ROI. Meeting your KPIs."
- "But it will be providing systematically worse service to certain customer groups"
- "Based on how they communicate - informal vs. formal language"
- "Which correlates with education, income, cultural background"
- "What do you do?"
- "There's no perfect answer"
- "But there IS a leadership responsibility to wrestle with it"
- "Not hide from it. Not say 'the algorithm just works that way'"
- "Own it. Decide. Accept the consequences."
:::

---

## The Three Levels of Human Control in AI

Think of it like driving with automation:

**Level 1: Human-in-the-Loop**
- AI suggests a route → You decide whether to follow
- *Example: Pilot scoping exercise - AI recommends scope, you approve*

**Level 2: Human-on-the-Loop**  
- Cruise control drives → You monitor and can intervene
- *Example: Crisis simulation - AI flags issues, you validate*

**Level 3: Human-in-Command**
- You set the speed limits → AI operates within boundaries
- *Example: Scale/kill decision - You set strategic direction*

**Today you'll practice all three levels**

::: {.notes}

# Speaker Notes: The Three Levels of Human Control in AI

---

**[Display slide]**

"Alright, we've talked about why 'Humans in the Loop' matters—because AI makes mistakes, and someone needs to be accountable. Now let me give you a simple framework for HOW to keep humans in the loop. There are three levels, and I'm going to use an analogy everyone understands: driving a car."

---

**[Point to Level 1: Human-in-the-Loop]**

"Level 1 is Human-IN-the-Loop. Think of your GPS navigation. You type in a destination, the AI analyzes traffic patterns, road conditions, historical data, and suggests a route. But does it just start driving you there? No. It says: 'Here's the fastest route. Do you want to take it?' YOU decide."

"Maybe you know there's construction the GPS doesn't know about. Maybe you prefer scenic routes. Maybe you just don't trust its suggestion. The point is: AI recommends, human decides. You're IN the decision loop for every choice."

**[Gesture to example]**

"Today, in the Pilot Scoping Exercise at 11:45, you'll experience this. Your group will design an AI chatbot pilot for RetailFlow. The AI might suggest handling ALL customer queries. You'll decide: 'No, let's start with just order tracking—30% of queries, prove it works, then expand.' You're in the loop. You're making the call."

"This level is appropriate when stakes are high, when context matters, when someone needs to be accountable for the outcome."

---

**[Point to Level 2: Human-on-the-Loop]**

"Level 2 is Human-ON-the-Loop. Think of cruise control. You set it to 100 km/h, and the car controls the throttle—it's accelerating, maintaining speed, even adjusting slightly on hills. The AI is acting."

"But are you just sitting back? No. Your hands are near the wheel. Your foot is hovering near the brake. You're watching the road. If a kangaroo jumps out or traffic suddenly slows, you intervene immediately. The AI acts, but you're monitoring, ready to take over."

**[Gesture to example]**

"This afternoon in the Crisis Simulation, you'll experience this. Your AI chatbot will be live, handling customer queries automatically. It's not asking permission for every response—that would defeat the purpose. But YOU are monitoring. When it starts giving wrong answers about return policies—and it will—you'll catch it, diagnose the problem, and decide: 'Shut it down partially, fix the data, bring it back up.' You're ON the loop, not IN every decision, but watching and ready to act."

"This level works when volume is high, when patterns are clear, when the AI can handle routine cases but humans catch the exceptions."

---

**[Point to Level 3: Human-in-Command]**

"Level 3 is Human-in-Command. This is the strategic level. Think of speed limits on roads. Who decides the speed limit? Not the drivers, not the cars—the government, the city planners, the transportation authority. They set the rules: 'Residential streets, 50 km/h. Highways, 110 km/h. School zones, 40 km/h.'"

"The AI—or in this case, all the drivers—operates within those boundaries. But the boundaries themselves are set by humans at a leadership level."

**[Gesture to example]**

"This afternoon at 3pm, in the Scale or Kill Exercise, you'll practice this level. You'll analyze three AI projects and decide: 'Do we scale this across the whole company? Do we pivot and change the approach? Or do we kill it and cut our losses?'"

"That's not a tactical decision. That's strategic leadership. You're setting the direction: 'This is where we invest. This is where we don't. These are our principles—we won't scale anything that discriminates, even if it's profitable.'"

"Even if an AI is running autonomously, SOMEONE made the decision about what it's allowed to do. That's Human-in-Command. Strategy, governance, accountability—that sits with leaders, always."

---

**[Step back, gesture to all three levels]**

"So, three levels:"

**[Point to each as you say them]**

"Human-IN-the-Loop: AI suggests, you decide. Every decision."

"Human-ON-the-Loop: AI acts, you monitor. Watching for problems."

"Human-in-Command: You set the rules. Strategic boundaries."

---

**[Transition to exercises]**

"Now here's what's powerful about this framework: Today, you're going to practice ALL THREE levels."

**[Count them off on your fingers]**

"This morning: Human-IN-the-Loop. You'll scope a pilot, you'll decide what's in and what's out. Every choice is yours."

"This afternoon: Human-ON-the-Loop. You'll manage a live AI system, monitor it, intervene when things go wrong."

"Later this afternoon: Human-in-Command. You'll make strategic decisions about scaling, pivoting, or killing AI projects."

"By 4:30pm, you won't just understand this framework intellectually—you'll have lived it. You'll have experienced what each level feels like, what decisions you face, what trade-offs you make."

---

**[Make eye contact with audience]**

"And here's why this matters: When you go back to your organization Monday morning, and someone says 'Should we use AI for X?'—you'll have a better question to ask."

"Not: 'Can AI do this?' That's a technical question."

"The better question is: 'What level of human control do we need for this? In-the-loop where humans approve everything? On-the-loop where humans monitor? In-command where we set strategic boundaries?'"

"That question changes the conversation. Because now you're not just talking about technology. You're talking about responsibility, accountability, and risk management."

"THAT is what AI project leadership looks like."

---

**[Pause, check for understanding]**

"Does this framework make sense? Three levels—in the loop, on the loop, in command?"

**[If heads nodding]**

"Good. You're about to experience it firsthand."

**[If anyone looks confused]**

"Think of it this way: Would you let AI drive your car completely unsupervised on city streets? Probably not—you'd want to be in the loop. Would you use cruise control on an empty highway? Sure—you're on the loop. Did you decide to get in the car and where to go? That's you in command."

"Same principle applies to AI in business."

"Alright, we're about to take our morning break. When you come back at 11:00, you'll form groups and jump straight into Exercise 1: Stakeholder Speed Dating. You'll experience the different perspectives and motivations of AI project stakeholders."

"But keep these three levels in mind throughout the day. You'll see them again and again."

"Any questions before we break? No? Okay, see you back here at 11:00am sharp."

## **Common Questions & Responses:**

**Q: "Can one AI system operate at different levels?"**
→ "Absolutely. Your chatbot might be Human-on-the-Loop for simple queries (it responds automatically, you monitor) but Human-in-the-Loop for complex complaints (it suggests a response, human approves). You design the level based on risk and complexity."

**Q: "How do I know which level to use?"**
→ "Great question. Ask yourself: What's the cost of an error? High stakes = more human involvement. What's the volume? High volume = automate more but monitor. Can errors be fixed quickly? If yes, you can automate more. If no, keep humans in the loop. There's no formula—it's judgment."

**Q: "What if my team wants to automate everything?"**
→ "That's common—people get excited about efficiency. Your job as a leader is to ask: 'What are we accountable for? Where does human judgment add value? Where could automation fail catastrophically?' The framework helps you have that conversation."

**Q: "This seems like it slows things down."**
→ "Initially, yes. But what's slower? Designing the right level of oversight upfront? Or dealing with a crisis when your AI gives wrong information to 1,000 customers and you have to fix it manually? These levels are about sustainable speed, not just fast."

:::

---

## The Ethics Framework

**Four questions to ask repeatedly:**

::: {.incremental}
1. **WHO benefits?** (Who wins? Who loses? Fair distribution?)
2. **WHAT could go wrong?** (Bias, privacy, safety?)
3. **HOW do we know it's working?** (Right metrics?)
4. **WHEN do we stop?** (What's our red line?)
:::

::: {.notes}
- "These aren't questions you ask once at the beginning"
- "You ask them at EVERY stage"
- "Ideation, scoping, pilot, evaluation, scaling"
- Walk through examples:
  - "WHO benefits: If your AI optimizes for profit but harms workers, is that okay?"
  - "WHAT could go wrong: If your facial recognition fails on dark skin, that's not just inaccurate - it's harmful"
  - "HOW do we know: If you only measure accuracy but not fairness, you'll miss discrimination"
  - "WHEN do we stop: What would make you kill this project? If you don't know, you've already failed ethically"
- "These feel like soft questions. They're not."
- "They're the difference between 'successful project' and 'PR disaster that destroys trust'"
- "You'll practice this thinking this afternoon"
:::

---

# Introducing Today's Case {background-color="#003087"}

---

## Meet RetailFlow

**Company Profile:**

- Regional retail chain (fashion, homewares, accessories)
- 50 stores across Australia
- $150M annual revenue
- 2,000 employees
- Mix of physical stores + e-commerce (35% online)

**Their Challenge:**

- Customer satisfaction dropping: 78% → 68%
- Response times too slow: 26 hours average
- Competition moving faster with AI

::: {.notes}
- "For all exercises today, we'll use a realistic fictional company: RetailFlow"
- "I chose retail because everyone understands it"
- "You've been a customer. You understand the frustrations."
- "This levels the playing field - the mining engineers and the students both get it"
- "RetailFlow is mid-sized - not a startup, not a giant"
- "Big enough to need AI, small enough that mistakes hurt"
- "Their challenge is real: Customer service is breaking"
- "26-hour email response time - in 2025, that's unacceptable"
- "Customers are complaining, competitors are faster"
- "So they've decided to try AI"
- "Sound familiar? This is happening in organizations everywhere"
:::

---

## The RetailFlow AI Pilot {.smaller}

**Project: AI-Powered Customer Service Chatbot**

| Parameter | Details |
|-----------|---------|
| Budget | $150,000 |
| Timeline | 6 months pilot |
| Scope | Handle 30% of queries (order tracking, returns, products) |
| Team | You (PM), Data Scientist, CS Manager, IT Support |
| Sponsor | Chief Customer Officer |

**Current Status:**  
✅ Week 2 of live deployment  
✅ 85% accuracy in testing  
⚠️ Now dealing with real customers  
⚠️ Things are about to get complicated...

::: {.notes}
- "This is the project YOU are managing"
- "You are the AI Project Manager"
- "You've got a decent budget - $150K is realistic for a pilot"
- "6 months timeline - tight but doable"
- "Reasonable scope - 30% of queries, simple ones"
- "Good team composition - cross-functional"
- "Strong sponsor - the Chief Customer Officer believes in this"
- "Testing went well - 85% accuracy"
- "You launched to real customers one week ago"
- "And now..." [pause dramatically]
- "Throughout today, you'll navigate this project through:"
  - "Stakeholder conflicts you didn't see coming"
  - "Data quality crises that threaten to kill the project"
  - "Staff resistance - active sabotage"
  - "Executive pressure to scale faster than is safe"
  - "Ethical dilemmas with no perfect answer"
  - "And finally, the big decision: Scale, Pivot, or Kill?"
- "By 4pm, you'll have lived through a complete AI project lifecycle"
:::

---

## Your Role Today

**You are the AI Project Manager**

**Your responsibilities:**

- Scope the pilot appropriately
- Manage diverse stakeholders
- Respond to crises under pressure
- Make tough decisions with incomplete information
- Navigate competing priorities
- Balance business, technical, and ethical concerns

::: {.notes}
- "Let me be clear about your role"
- "You're not just observing. You're not just analyzing."
- "You ARE the project manager"
- "You will make the decisions"
- "You will face the consequences"
- "This is as close as we can get to reality without actually launching a real AI project"
- Walk through the responsibilities:
  - "Scope appropriately - not too big, not too small"
  - "Manage stakeholders - who all want different things"
  - "Respond to crises - with limited time and information"
  - "Make decisions - knowing there's no perfect answer"
  - "Navigate priorities - business wants speed, tech wants quality, ethics want fairness"
- "Sound stressful? It is. That's AI project leadership."
- "But better to practice here than learn these lessons on a $5M real project"
:::

---

## Your Constraints

:::: {.columns}
::: {.column width="48%"}
**Resources**

- Limited budget ($150K)
- Tight timeline (6 months)
- Small team
- Can't disrupt operations
:::

::: {.column width="48%"}
**Politics**

- Multiple bosses
- Skeptical team members
- Impatient executives
- Risk-averse culture
:::
::::

::: {.notes}
- "And of course, you have constraints"
- "Because you always do in real projects"
- "These are realistic constraints:"
  - "$150K sounds like a lot - it's not. AI projects eat budget."
  - "6 months is tight for a proper pilot plus evaluation"
  - "You can't take customer service offline to experiment"
  - "You have multiple stakeholders who all think they're your boss"
  - "The team has seen tech projects fail before - they're skeptical"
  - "The executives just went to a conference and think AI is magic"
- "No perfect answers exist within these constraints"
- "Just thoughtful trade-offs"
- "And that's what leadership is"
:::

---

# Today's Journey {background-color="#003087"}

---

## Morning Exercises {.smaller}

**After Morning Tea (11:00am):**

**Stakeholder Speed Dating** (45 min)  
→ You'll BECOME the stakeholders  
→ Experience their fears and motivations  
→ Understand why they resist or support AI

**Pilot Scoping Exercise** (45 min)  
→ Design the RetailFlow chatbot pilot  
→ Define scope, metrics, risks  
→ Face surprise constraints  
→ Adapt your plan

::: {.notes}
- "Let me walk you through what's coming after our break"
- "11am: Stakeholder Speed Dating"
  - "You'll each receive a role card"
  - "Data Scientist, Operations Manager, End User, IT Security, Finance, Executive"
  - "You'll have 5-minute conversations, staying in character"
  - "You'll discover their hidden fears and motivations"
  - "It's a bit like speed dating, but for stakeholder management"
  - "Some people feel silly role-playing - embrace it, that's where the learning is"
- "11:45am: Pilot Scoping"
  - "Your group will design the chatbot pilot together"
  - "Define what's in scope, what's out"
  - "Set success metrics"
  - "Identify risks"
  - "Then - surprise! - you'll get a constraint card"
  - "Budget cut, timeline acceleration, team resistance..."
  - "You'll have to adapt your plan on the fly"
  - "Just like real projects"
:::

---

## Afternoon Exercises {.smaller}

**Crisis Management Simulation** (1:15pm-2:30pm)  
→ Four crises unfold in real-time  
→ You diagnose, decide, communicate

**Scale or Kill Decisions** (3:00pm-4:00pm)  
→ Analyze three AI project case studies  
→ Recommend: Scale it, Pivot it, or Kill it  
→ Defend your decision

**Personal Action Planning** (4:00pm-4:30pm)  
→ Reflect on today's learning  
→ Create your Monday action plan  
→ Required for CRL credit

::: {.notes}
- "After lunch, the intensity increases"
- "1:15pm: Crisis Management - this is the centerpiece of the day"
  - "You'll face four crises in 75 minutes"
  - "Crisis 1: Data quality disaster - your AI is giving wrong answers"
  - "Crisis 2: Staff resistance - your team is actively sabotaging the project"
  - "Crisis 3: Executive pressure - your sponsor wants to scale NOW, but you're not ready"
  - "Crisis 4: Ethical dilemma - your AI works but discriminates based on communication style"
  - "Each is based on real projects"
  - "Each requires rapid decision-making under pressure"
  - "Some involve role-playing difficult conversations with me"
- "3pm: Scale or Kill - strategic thinking"
  - "Three case studies: clear success, clear failure, ambiguous"
  - "You decide what to do with each and defend your reasoning"
- "4pm: Personal Reflection"
  - "Apply today's learning to YOUR actual projects"
  - "This is required for your CRL credit, so take it seriously"
:::

---

## Ground Rules

**To make today work:**

:::: {.columns}
::: {.column width="48%"}
✓ Participate fully  
✓ Stay in role  
✓ Challenge respectfully  
✓ Share your experience  
✓ Apply to your context  
✓ Accept imperfection
:::

::: {.column width="48%"}
✗ Checking email  
✗ Letting others do work  
✗ "Won't work here" attitude  
✗ Sitting back passively
:::
::::

::: {.notes}
- "For today to work, I need your full engagement"
- "This isn't a lecture where you can half-listen while checking email"
- "You'll get out what you put in"
- Walk through the positive rules:
  - "Participate fully - hide your laptop during exercises, be present"
  - "Stay in role - when role-playing, commit to the character, it's not silly"
  - "Challenge respectfully - debate ideas vigorously, but not people"
  - "Share your experience - you all bring valuable perspectives from different industries"
  - "Apply to your context - constantly ask 'how does this relate to my work?'"
  - "Accept imperfection - there are no perfect answers in AI projects, just thoughtful trade-offs"
- "What we're NOT doing:"
  - "No checking email during exercises"
  - "No sitting back and letting your group do the work"
  - "No saying 'this wouldn't work in my organization' - instead ask 'how could we adapt this?'"
- "This is a safe space to try, fail, and learn"
- "The only way to fail today is to not engage"
:::

---

## Questions Before We Break?

**Before morning tea, any questions about:**

- Today's approach?
- The frameworks we covered?
- What to expect?

**Coming up at 11:00am:**  
Stakeholder Speed Dating - You'll receive role cards and experience AI project conflicts firsthand.

::: {.notes}
- "Okay, we've covered a lot in the last hour"
- "Before we break for tea, what questions do you have?"
- Take 2-3 questions maximum - don't let this go too long
- For technical PM questions: "Great question - we'll see that in action during the exercises"
- For "will this really work?" questions: "You'll experience it yourself and decide"
- "Remember, lots of questions will be answered through doing the exercises"
- "Theory only gets you so far - you need to practice"
- "Okay, let's take our morning tea break"
- "When you return at 11am, you'll see table assignments posted"
- "Find your group and get ready for your first challenge"
:::

---

## See You at 11:00am {background-color="#003087"}

**During break:**

- Grab tea/coffee
- Network with colleagues
- Think about a challenging stakeholder you've dealt with

**When you return:**

- Find your table assignment (posted on wall)
- Sit with your group of 5
- Get ready for Stakeholder Speed Dating

---

# Backup Slides {visibility="hidden"}

---

## PM Methodologies for AI {visibility="hidden"}

**Common Approaches:**

- **Waterfall:** ❌ Too rigid for AI (requirements change)
- **Agile/Scrum:** ⚠️ Better, but sprints may not align with model training
- **Lean Startup:** ✓ Build-Measure-Learn fits AI well
- **Experimental:** ✓ Hypothesis-driven, embrace uncertainty

**Best Practice:** Hybrid approach

::: {.notes}
- Use this slide if someone asks about specific methodologies
- "Waterfall doesn't work because you can't lock down requirements"
- "Agile is better but two-week sprints don't match model training cycles"
- "Lean Startup's build-measure-learn is actually perfect for AI"
- "Best approach: Hybrid - waterfall for infrastructure, agile for features, experimental for models"
:::

---

## Success Metrics for AI {visibility="hidden"}

**Don't just measure technical metrics:**

:::: {.columns}
::: {.column width="33%"}
**Technical**

- Model accuracy
- System uptime
- Response time
:::

::: {.column width="33%"}
**Business**

- Cost savings
- Revenue increase
- Time savings
- Customer satisfaction
:::

::: {.column width="33%"}
**Adoption**

- User adoption rate
- Override frequency
- User satisfaction
- Retention
:::
::::

**Measure all three or you'll miss important signals**

::: {.notes}
- Use this if someone asks about metrics
- "Technical metrics are necessary but insufficient"
- "Your data scientist cares about accuracy"
- "Your CFO cares about ROI"
- "But if nobody uses your AI, none of that matters"
- "You'll practice choosing the right metrics in the Pilot Scoping exercise"
:::

---

## When to Kill an AI Project {visibility="hidden"}

**Red flags:**

::: {.incremental}
- Fundamental technical limitation (can't achieve needed accuracy)
- Ethical issues can't be resolved
- Organizational resistance is insurmountable
- Business case has evaporated
- Better solutions emerged
- Sunk cost fallacy driving decisions
:::

**Remember:** Killing a bad project is GOOD leadership

::: {.notes}
- Use this if someone asks about when to stop
- "Killing projects is hard - sunk cost fallacy is powerful"
- "But continuing a doomed project wastes more resources"
- Walk through the red flags
- "This afternoon at 3pm, you'll analyze three projects and decide which to kill"
- "One is an obvious kill - but will you have the courage to recommend it?"
- "That's the real test of leadership"
:::

---

## Additional Resources {visibility="hidden"}

**Pre-Reading Materials:**

- "How AI Will Transform Project Management" - Harvard Business Review
- "Using Artificial Intelligence for Project Management"

**Post-Masterclass:**

- Decision Framework Reference Sheet (you'll receive today)
- Case studies from today's exercises
- Recommended reading list (will be emailed)

::: {.notes}
- Use this if someone asks about resources
- "You should have received pre-reading materials"
- "If not, they're linked in your participant packet"
- "After today, you'll get the Decision Framework as a takeaway"
- "Plus I'll email additional resources for continued learning"
:::

---

## About the Facilitator {visibility="hidden"}

**Dr. Michael Borck**

- 20+ years in AI, software engineering, and innovation
- Co-founder, Business AI Research Group
- Certified Professional, Australian Computer Society
- Research focus: AI implementation, business transformation
- Passion: Bridging cutting-edge AI research with business needs

::: {.notes}
- Use this only if someone specifically asks about your background
- Keep it brief - today is about them, not you
- "I've led and studied AI projects for over 20 years"
- "Seen spectacular successes and catastrophic failures"
- "Everything you'll experience today is based on real projects"
- "My goal: Help you avoid the failures and replicate the successes"
:::

---

## Q&A Session {visibility="hidden"}

**Open Floor for Questions**

::: {.notes}
- Use this as a placeholder for any extended Q&A if time permits
- Or if you want to have a structured Q&A at the end of the opening
- Otherwise, skip this slide
:::

---

## Thank You {background-color="#003087"}

**Let's Begin the Journey**

See you at 11:00am for Stakeholder Speed Dating

::: {.notes}
- Final slide before break
- "Thank you for your attention this morning"
- "I know I've thrown a lot at you - frameworks, concepts, expectations"
- "But don't worry - it will all make sense when you start doing"
- "Learning by doing is powerful"
- "Enjoy your tea break"
- "Come back ready to dive in"
- "This is where the fun begins"
- Smile, show enthusiasm, build energy for what's coming
:::
