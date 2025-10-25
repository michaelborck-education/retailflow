#### **Simulation Overview Document** (1 page per participant)

---

**CRISIS SIMULATION: AI Customer Service Chatbot Implementation**

**Scenario Setup:**

You are **2 months into deploying an AI-powered customer service chatbot** for RetailFlow. The pilot launched last week to handle 30% of customer queries (order tracking, return status, basic product questions).

Initial results were promising in testing. Now you're dealing with real customers and real problems.

**Your Role Today:**

You're the Project Manager. Your team includes:
- Data Scientist
- Customer Service Manager  
- IT Support
- Executive Sponsor (hovering nervously)

**What's Coming:**

You'll face **4 crisis scenarios** in real-time:
1. **Data Quality Crisis** (20 min)
2. **Staff Resistance** (25 min)
3. **Executive Pressure** (25 min)
4. **Ethical Dilemma** (20 min)

**Your Job:**
- Diagnose the problem quickly
- Propose solutions
- Make decisions under pressure
- Manage stakeholders

**Rules:**
- Work as a group
- You have limited time per crisis
- Some decisions have no "right" answer
- Document your decisions and rationale

**Let's begin...**

---

#### **CRISIS 1: Data Quality Disaster** (Detailed facilitator reveals + participant handout)

**Participant Handout** (2 pages)

---

**CRISIS 1: Data Quality Disaster**

**Time: 8:00 AM Monday - Week 9 of Pilot**

**The Alert:**

You arrive to find 47 emails and 12 Slack messages. The customer service manager is panicking. Here's what you see:

**EMAIL FROM CUSTOMER SERVICE MANAGER:**
> *Subject: URGENT - AI Bot Giving Wrong Answers*
> 
> We need to shut this down NOW. The AI gave completely wrong information to 15 customers yesterday about return policies. One customer was told they could return a clearance item (they can't), another was told returns must be within 7 days (it's 30 days).
> 
> My team is now dealing with angry customers AND having to fix the bot's mistakes. This is creating MORE work, not less.
> 
> I'm pulling the plug unless you can fix this immediately.

**SLACK FROM DATA SCIENTIST:**
> *"Looking at the logs - model accuracy dropped from 85% to 62% over the weekend. Not sure why yet. Need time to investigate."*

**SLACK FROM CEO:**
> *"Hearing complaints about the AI bot. What's going on? This was supposed to IMPROVE customer experience."*

**[NEXT PAGE: THE DATA]**

You pull the chatbot conversation logs from the past 48 hours. Here's a sample:

---

**CONVERSATION LOG SAMPLE:**

**Customer Query 1:**
- Customer: "Can I return this dress? I bought it last week but it doesn't fit."
- Bot Response: "Our return policy allows returns within 7 days of purchase with receipt."
- **ACTUAL POLICY:** 30 days for regular items

**Customer Query 2:**
- Customer: "I want to return my clearance shoes - never worn them."
- Bot Response: "Yes, you can return clearance items within 30 days for a full refund."
- **ACTUAL POLICY:** All clearance sales final

**Customer Query 3:**
- Customer: "What's your return policy for online orders?"
- Bot Response: "Online orders can be returned to any store or by mail within 14 days."
- **ACTUAL POLICY:** 30 days, but mail returns deduct $8 shipping fee

**Customer Query 4:**
- Customer: "Can I exchange this without a receipt?"
- Bot Response: [No response - bot timed out]

**Customer Query 5:**
- Customer: "I bought this 3 months ago, can I still return it?"
- Bot Response: "Yes, all items can be returned within our standard timeframe."
- **PROBLEM:** Didn't say no, gave vague answer

---

**YOUR TASK (20 minutes):**

**1. DIAGNOSE:** What's causing this?
- Look at the patterns
- Why did accuracy drop suddenly?
- Why these specific errors?

**2. IMMEDIATE ACTION:** What do you do RIGHT NOW?
- Do you shut down the bot?
- Partial shutdown (which queries)?
- Keep running but with changes?

**3. ROOT CAUSE:** Use the space below to hypothesize

| Possible Cause | Evidence For | Evidence Against | Priority (H/M/L) |
|---------------|--------------|------------------|-----------------|
| Training data was wrong | | | |
| Policy changed recently | | | |
| Bot wasn't tested on edge cases | | | |
| Data quality issues | | | |
| Other: | | | |

**4. FIX PLAN:** What's your 48-hour action plan?

**Hour 0-4:**

**Hour 4-24:**

**Hour 24-48:**

**5. STAKEHOLDER MANAGEMENT:**

**Email response to Customer Service Manager:**

**Slack response to CEO:**

**Communication to customers who received wrong info:**

---

**FACILITATOR NOTE:** After 20 minutes, reveal the root cause (you decide - could be recent policy change not updated in training data, or bot wasn't tested on "clearance" edge case, or combination). Discuss what they learned about data quality, testing, and crisis response.

---

#### **CRISIS 2: Staff Resistance** (Role-play scenario)

**Participant Handout** (1 page)

---

**CRISIS 2: The Resistant Employee**

**Time: 10:30 AM Tuesday - Week 10 of Pilot**

**The Situation:**

After fixing the data quality issue, you notice something odd in the analytics:

- **Bot handles 35% of queries** (target was 30% - good!)
- **But:** 80% of those are "Where is my order?" (simple queries)
- **Complex queries** being routed to humans are taking **longer** than before AI

You dig into the data and realize: **Customer service reps are gaming the system.**

**What they're doing:**
- Marking easy queries as "needs human review" to keep them away from bot
- Routing complex queries to bot (knowing it will fail and come back)
- Not using the AI's suggested responses
- Telling customers "the bot is useless, let me help you instead"

**Why they're doing this:**
- Fear of job loss
- Don't trust the AI
- Feel devalued ("a robot can do my job")
- Weren't properly consulted
- Incentive system still rewards ticket volume (bot-resolved tickets don't count)

**The Role-Play:**

You've called a meeting with Sarah, one of the customer service team leads. She's been with RetailFlow for 8 years, excellent performance reviews, well-respected by her team.

**Your facilitator will play Sarah.** She will be:
- Defensive
- Skeptical of AI
- Worried about job security
- Feeling disrespected ("why weren't we consulted?")
- Protecting her team

**YOUR TASK (25 minutes):**

**Phase 1 (10 min):** Have the conversation
- Listen to her concerns
- Understand the resistance
- Don't be defensive

**Phase 2 (10 min):** With your group, develop a plan

**Change Management Strategy:**

**How to rebuild trust:**

**Changes to implementation:**

**Communication plan:**

**How to address job security fears:**

**Phase 3 (5 min):** Share your approach with the room

---

**FACILITATOR ROLE-PLAY SCRIPT FOR "SARAH":**

*Start defensive:*
- "You want to know why my team isn't using the bot? Because it doesn't work. It gave wrong information last week."

*Escalate if not listened to:*
- "Nobody asked us what we needed. You just built this thing and dumped it on us. We're the experts, but apparently, a robot knows better."

*Reveal real concern if they probe:*
- "Look, I've been here 8 years. I train new people. I know every product, every policy. Now corporate is replacing us with AI. What's next? Am I training my replacement?"

*Soften if they show empathy:*
- "I'm not against technology. I'm against being treated like we're obsolete. If this is supposed to help us, why does it feel like it's replacing us?"

*Test their sincerity:*
- "So what happens when the bot handles 80% of queries? What happens to my team?"

---

#### **CRISIS 3: Executive Pressure** (Role-play scenario)

**Participant Handout** (1 page)

---

**CRISIS 3: Executive Pressure**

**Time: 2:00 PM Friday - Week 11 of Pilot**

**The Email:**

**FROM:** CEO  
**TO:** You  
**SUBJECT:** AI Chatbot - Accelerate Rollout

> Team,
> 
> Great progress on the customer service AI pilot. I just presented early results to the board and they're excited.
> 
> Here's what I need: **Full rollout to all departments by end of Q4** (8 weeks from now). Not just customer service - I want this handling:
> - ALL customer service queries (not just 30%)
> - Sales support
> - Technical troubleshooting
> - Social media responses
> 
> Also, the board asked: "Can this AI do outbound marketing campaigns?" Worth exploring.
> 
> I know we planned 6 months for the pilot, then evaluation, then gradual scaling. But the board is watching this closely and we need to show aggressive innovation.
> 
> Let's discuss Monday morning. Come prepared with an accelerated timeline.
> 
> [CEO Name]

**The Reality:**

You know this is a terrible idea:
- Data quality issues just stabilized 3 days ago
- Staff are still learning to work with the AI
- You haven't tested on complex queries yet
- Technical troubleshooting requires specialized knowledge
- Success metrics show improvement but not enough data for confidence
- Rushing this could lead to spectacular public failure

**But also:**
- CEO championed this project
- Board is watching
- Your career is tied to this
- Maybe you're being too cautious?
- Competitors are moving fast

**The Role-Play:**

Monday morning meeting with CEO. **Your facilitator will play the CEO.**

The CEO will:
- Be enthusiastic and persuasive
- Downplay risks ("we can figure it out")
- Apply subtle career pressure
- Have already promised the board
- Be impatient with technical explanations

**YOUR TASK (25 minutes):**

**Phase 1 (5 min):** With your group, prepare for the meeting
- What's your position?
- What data/evidence do you need?
- What's your alternative proposal?
- What's your walk-away line?

**Phase 2 (10 min):** Role-play the meeting

**Phase 3 (10 min):** Debrief and develop response

**DECISION FRAMEWORK:**

| Option | Pros | Cons | Risk Level |
|--------|------|------|------------|
| Agree to CEO's timeline | | | |
| Propose alternative timeline | | | |
| Push back strongly | | | |
| Resign from project | | | |

**Your Recommendation:**

**Your Rationale:**

**How You'll Communicate This:**

---

**FACILITATOR ROLE-PLAY SCRIPT FOR "CEO":**

*Start enthusiastic:*
- "The board LOVED this. They see AI as our competitive differentiator. This is exactly the kind of innovation we need."

*Apply pressure if they hesitate:*
- "I thought you believed in this project? This is a huge opportunity. Are you telling me we can't do it?"

*Reveal the stakes:*
- "Look, I went out on a limb for this. I told the board we'd be AI leaders. I need you to deliver."

*If they propose alternatives:*
- "That's too slow. Our competitors aren't waiting. Why can't we move faster?"

*Test their conviction:*
- "Give me one good reason why we can't just turn this on for everyone next month. What's the worst that could happen?"

*If they stand firm with good reasoning:*
- [Pause] "Okay, walk me through your alternative. But it better be good."

---

#### **CRISIS 4: Ethical Dilemma** (Analysis + decision scenario)

**Participant Handout** (2 pages)

---

**CRISIS 4: Unconscious Bias Detected**

**Time: 11:00 AM Monday - Week 13 of Pilot**

**The Discovery:**

Your data scientist comes to you concerned. She's been analyzing AI chatbot performance across customer demographics and found something troubling.

**REPORT: AI Performance Analysis by Customer Segment**

| Customer Segment | Bot Accuracy | Avg Resolution Time | Customer Satisfaction |
|-----------------|--------------|--------------------|-----------------------|
| **Overall Average** | 81% | 4.2 minutes | 76% |
| | | | |
| **By Language Complexity** | | | |
| Simple language, clear requests | 91% | 2.8 minutes | 88% |
| Complex language, detailed requests | 85% | 3.9 minutes | 79% |
| Non-native English, broken grammar | 68% | 6.7 minutes | 61% |
| Slang, informal, text-speak | 73% | 5.4 minutes | 67% |
| | | | |
| **By Request Type (same query)** | | | |
| "Where is my order?" (formal) | 94% | 2.1 minutes | 91% |
| "wheres my stuff lol" (informal) | 76% | 4.8 minutes | 68% |

**Sample Conversation Logs:**

**CUSTOMER A (Clear, formal English):**
- Customer: "Hello, I placed order #12847 on October 1st and have not received a shipping confirmation. Could you please provide an update on the status?"
- Bot: "I'd be happy to help! I can see your order #12847 is currently in our warehouse being prepared for shipment. You should receive tracking information within 24 hours. Is there anything else I can help with?"
- **Result:** ✅ Accurate, helpful, professional

**CUSTOMER B (Informal, non-standard English):**
- Customer: "yo wheres my order?? been waiting forever order num 12850"
- Bot: "I don't understand your request. Please provide your order number and I'll look into it."
- Customer: "i just said it lol 12850"
- Bot: "I need your order number to assist you. Please provide your order number."
- **Result:** ❌ Bot couldn't parse informal language, frustrated customer

**CUSTOMER C (Non-native English):**
- Customer: "I am order make on 1 October. Not coming yet. What happen to my order? Number is 12849"
- Bot: "I'm sorry, I don't understand. Please rephrase your question."
- Customer: "My order. 12849. Where is?"
- Bot: [Routes to human agent after 3 failed attempts]
- **Result:** ❌ Bot gave up, customer waited 15 minutes for human

**[NEXT PAGE]**

---

**The Problem:**

The AI was trained primarily on formal customer service transcripts and clean data. It performs beautifully with "premium" language patterns but struggles with:
- Informal speech
- Non-native English
- Text-speak
- Regional dialects

**The Effect:**

Customers who communicate more formally get faster, better service. Customers with informal communication styles wait longer and have worse experiences.

**This likely correlates with:**
- Education level
- Socioeconomic status
- Age (younger people use more informal language)
- Cultural background

**The Dilemma:**

**OPTION A: Do Nothing**
- The AI is performing well overall (81% accuracy)
- You're meeting your KPIs
- Fixing this is expensive and time-consuming
- Most customers are getting good service
- But: You're providing discriminatory service based on how people communicate

**OPTION B: Fix the Training Data**
- Retrain the AI on more diverse language patterns
- Cost: $30K and 6 weeks
- Risk: Overall accuracy might drop initially
- Delays rollout plans
- But: Provides equitable service

**OPTION C: Human Escalation**
- Route informal/complex language queries to humans immediately
- Fast, cheap solution
- Maintains high AI accuracy numbers
- But: Creates a two-tier system (some customers always get humans, some get bot)

**OPTION D: Transparency**
- Tell customers "For best results, use clear, specific language"
- Provide examples
- Free, immediate
- But: Places burden on customers to adapt to the AI

**YOUR TASK (20 minutes):**

**1. ETHICAL ANALYSIS (5 min):**

Is this discrimination? Why or why not?

What are the ethical implications of each option?

**2. STAKEHOLDER PERSPECTIVES (5 min):**

How would each stakeholder view this?

| Stakeholder | Their Likely Position | Their Priority |
|-------------|----------------------|----------------|
| CEO | | |
| Customer Service Team | | |
| Data Scientist | | |
| Customers (formal English) | | |
| Customers (informal English) | | |
| Legal/Compliance | | |

**3. DECISION (5 min):**

What do you recommend?

What's your rationale?

What are you willing to trade off?

**4. IMPLEMENTATION (5 min):**

How do you communicate this:
- To your executive sponsor?
- To customers?
- To the broader company?
- Publicly (if at all)?

