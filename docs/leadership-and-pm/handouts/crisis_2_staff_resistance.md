# CRISIS 2: STAFF RESISTANCE
## Time: Tuesday, 10:30 AM - Week 10 of Project (Week 2 Post-Crisis-1-Fix)

---

## THE SITUATION

After fixing the data quality issue yesterday (Crisis 1), you're monitoring the chatbot closely. The accuracy is back up to 83%, which is good.

But something odd is showing up in the analytics...

---

## THE DATA ANOMALY

You're reviewing the performance dashboard and notice strange patterns:

### What the Data Shows:

| Metric | Target | Actual | Status |
|--------|--------|--------|--------|
| Bot handles % of queries | 30% | 35% | ✅ Exceeding target! |
| Bot accuracy | 80% | 83% | ✅ Good |
| Avg resolution time (bot) | 3 min | 2.4 min | ✅ Excellent |
| Avg resolution time (human) | 8 min | **14 min** | ❌ Getting WORSE |
| First-contact resolution | 70% | **58%** | ❌ Declining |
| Customer satisfaction | 70% | 66% | ⚠️ Below target |

**Something doesn't add up.**

The bot is working well and handling more queries... so why are human agents taking LONGER per query and customer satisfaction is DECLINING?

---

## DIGGING DEEPER

You segment the data by query complexity:

### Bot-Handled Queries:

| Query Type | % Handled by Bot | Avg Complexity (1-10) |
|-----------|------------------|---------------------|
| "Where is my order?" | 92% | 2 (very simple) |
| "Track order #12345" | 89% | 2 (very simple) |
| "What's your return policy?" | 78% | 3 (simple) |
| Return/refund specific cases | 12% | 7 (complex) |
| Product compatibility questions | 8% | 8 (complex) |
| Complaints and escalations | 3% | 9 (very complex) |

### Human-Handled Queries:

**Before AI:** Mix of simple and complex (average complexity: 5.2)

**After AI:** Almost entirely complex queries (average complexity: 7.8)

---

## THE SMOKING GUN

You review individual agent behavior and find something troubling:

**Agent Performance Comparison:**

| Agent | Queries/Day (Before AI) | Queries/Day (After AI) | Bot Utilization |
|-------|------------------------|------------------------|-----------------|
| Team Average | 28 | 22 | 35% |
| **Sarah (Team Lead)** | 32 | **18** | **8%** |
| Michael | 26 | 24 | 42% |
| Jennifer | 30 | 20 | 28% |
| David | 25 | 23 | 38% |

**Sarah (the team lead) is barely using the bot.**

You check the routing data:

- **Sarah manually overrides** bot assignments 47% of the time
- She marks simple queries as "needs human review" (removing them from bot)
- She assigns complex queries TO the bot (even though they're out of scope)
- When bot provides suggested responses, she ignores them 78% of the time

**Other agents are following Sarah's lead.** They're gaming the system.

---

## WHAT YOU DISCOVER THEY'RE DOING

Through system logs and conversations, you piece together the strategy:

**The "Resistance Playbook":**

1. **Route easy queries to themselves** (keep the bot from handling simple work)
2. **Send impossible queries to the bot** (knowing it will fail and bounce back)
3. **Don't use AI-suggested responses** (even when they're good)
4. **Tell customers** "The bot is useless, let me help you instead"
5. **Document everything the bot does wrong**, share horror stories

**Result:** Bot's success is undermined, team "proves" AI doesn't work

---

## WHY THEY'RE DOING THIS

You find an internal team chat (they didn't realize project leads have access):

**Team Chat Log:**

**Sarah:** "Did you see the board meeting notes? They're talking about 'AI-driven cost savings.' That's code for layoffs."

**Jennifer:** "I heard they want to cut the team from 25 to 15 once AI is fully rolled out."

**Michael:** "Corporate doesn't value us anymore. We're just training our replacement."

**David:** "What if we just... don't cooperate? Show them AI can't do our job?"

**Sarah:** "I'm not helping them eliminate my team. If the pilot fails, they'll have to keep us."

---

## THE EMAIL

This morning, you received this from HR:

**FROM:** HR Business Partner  
**TO:** You  
**SUBJECT:** Employee Relations Issue - Customer Service Team

> We've received a formal complaint from the Retail Workers Union regarding the AI customer service pilot. They're claiming:
>
> 1. Employees were not consulted before implementation (violation of consultation clause in agreement)
> 2. The project constitutes "technological change affecting employment" which requires 90 days notice
> 3. No guarantees have been provided regarding job security
> 4. Training was inadequate
>
> The union is requesting:
> - Immediate pause of the AI pilot
> - Written guarantees: no job losses for 2 years
> - Formal consultation process
> - Additional training and compensation for "AI oversight duties"
>
> We need to respond by Friday. Union is prepared to escalate if demands aren't met.
>
> This is serious. Let's discuss.

---

## THE MEETING

You've scheduled a meeting with Sarah, the customer service team lead, to address this. She's been with RetailFlow for 8 years, has excellent performance reviews, and is well-respected by her team of 25.

**Your facilitator will role-play Sarah.** She will be:
- Defensive and skeptical
- Worried about her team's job security
- Feeling disrespected and undervalued
- Protecting her team fiercely
- Resistant to the AI project

---

## YOUR TASK (25 MINUTES TOTAL)

---

### PHASE 1: THE CONVERSATION (10 minutes)

**Have the meeting with Sarah (role-played by facilitator)**

**Your objectives:**
- [ ] Understand her real concerns (not just surface issues)
- [ ] Rebuild trust
- [ ] Find a path forward
- [ ] Don't make promises you can't keep

**Tips for the conversation:**
- Listen more than you talk (at least at first)
- Don't be defensive or dismissive
- Acknowledge valid concerns
- Ask questions to understand motivations
- Show respect for her expertise

**Use this space for notes during the conversation:**

What is Sarah's primary concern?

What are her underlying fears?

What does she need to hear?

What can you actually commit to?

---

### PHASE 2: DEVELOP YOUR STRATEGY (10 minutes)

After the role-play, work with your group to develop a comprehensive plan.

---

#### A. IMMEDIATE TRUST-BUILDING ACTIONS

What will you do in the next 48 hours to rebuild trust?

1. 

2. 

3. 

---

#### B. CHANGE MANAGEMENT STRATEGY

How do you shift from resistance to partnership?

**Involvement Strategy:**
- How will you involve the team in AI decisions going forward?

&nbsp;

**Communication Plan:**
- What messages need to be delivered?
- By whom?
- When?

| Message | Audience | Messenger | Timeline |
|---------|----------|-----------|----------|
| | | | |
| | | | |
| | | | |

**Addressing Job Security Fears:**

What can you truthfully say about:
- Job security?
- Role changes?
- Career development?

&nbsp;

&nbsp;

---

#### C. CHANGES TO AI IMPLEMENTATION

What changes to the pilot address legitimate concerns?

**Design Changes:**

- [ ] Change 1:
- [ ] Change 2:
- [ ] Change 3:

**Team Involvement:**

How will you involve customer service team in:
- Testing new features?
- Providing feedback?
- Training the AI?
- Defining success metrics?

&nbsp;

&nbsp;

---

#### D. INCENTIVE ALIGNMENT

**Current problem:** Team is incentivized by tickets closed. Bot-resolved tickets don't count toward their metrics.

**How do you fix the incentive structure?**

New performance metrics:

&nbsp;

&nbsp;

Recognition/rewards for:

&nbsp;

&nbsp;

---

#### E. UNION RESPONSE

**What's your response to the union's demands?**

| Union Demand | Your Response | Rationale |
|--------------|---------------|-----------|
| 1. Immediate pause of AI pilot | | |
| 2. Written job security guarantees (2 years) | | |
| 3. Formal consultation process | | |
| 4. Additional training & compensation | | |

---

#### F. REDEFINING THE VALUE PROPOSITION

**Old message:** "AI will handle simple queries so we can reduce staff"

**New message:**

&nbsp;

&nbsp;

**How AI benefits the customer service team:**

1. 

2. 

3. 

---

### PHASE 3: PRESENT YOUR APPROACH (5 minutes)

Be ready to share with the larger group:

**Our key insight:**

**Our approach:**

**What we learned:**

---

## REFLECTION QUESTIONS

**After the exercise, consider:**

- What did you learn about change management?
- How could this resistance have been prevented?
- When did technical success become a people problem?
- What role did communication (or lack of it) play?
- How do you balance business objectives with employee concerns?

---

## FACILITATOR NOTES FOR ROLE-PLAY

**As "Sarah," you should:**

**Start defensive:**
- "You want to know why we're not using the bot? Because it doesn't work. It gave wrong information last week."
- "Nobody asked us what we needed. You just built this thing and dropped it on us."

**Escalate if they don't listen:**
- "We're the experts. We've been doing this for years. But apparently a robot knows better than we do."
- "This is about eliminating jobs. Don't pretend it's about 'helping us.'"

**Reveal real concerns if they show empathy:**
- "Look, I've been here 8 years. I've trained half this team. Now corporate wants to replace us with AI."
- "Do you know what it's like to tell your team their jobs might disappear? These are people with families, mortgages."

**Test their sincerity:**
- "So what happens when the bot handles 80% of queries? What happens to my team then?"
- "Why should we help you build something that might eliminate our jobs?"

**Soften if they're genuine:**
- "I'm not against technology. I'm against being treated like we're disposable."
- "If this is really supposed to help us, why does it feel like it's replacing us?"

**Look for:**
- Do they listen or just talk?
- Do they acknowledge concerns or dismiss them?
- Do they make realistic commitments or empty promises?
- Do they treat you as a partner or obstacle?
