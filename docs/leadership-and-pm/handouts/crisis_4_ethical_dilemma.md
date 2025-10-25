# CRISIS 4: ETHICAL DILEMMA - UNCONSCIOUS BIAS
## Time: Monday, 11:00 AM - Week 13 of Project (Week 5 Post-Launch)

---

## THE SITUATION

The pilot has been running for 5 weeks. After navigating data quality issues, staff resistance, and executive pressure, things are finally stabilizing.

**Current Status:**
- Bot handles 35% of queries (above target)
- Accuracy: 81% (acceptable)
- Customer satisfaction: 76% (improving)
- Team cooperation: Good (Sarah is now cautiously supportive)
- Executive sponsor: Satisfied with progress

You're in the "steady state" phase, monitoring performance and preparing your 3-month evaluation report.

**Then your data scientist discovers something troubling...**

---

## THE DISCOVERY

**EMAIL FROM DATA SCIENTIST**

**FROM:** Dr. Priya Sharma, Data Scientist  
**TO:** You  
**SUBJECT:** Urgent: Bias Pattern in AI Performance - Need to Discuss

**SENT:** Monday, 8:34 AM

> I was running some performance analytics for the quarterly review and found something concerning.
>
> I segmented chatbot performance by different customer communication patterns and found significant disparities. The AI is providing systematically worse service to certain customer groups.
>
> This isn't a small variance - it's statistically significant and could constitute discriminatory service.
>
> I've attached my analysis. We need to discuss this today.
>
> This is serious.
>
> Priya

---

## THE ANALYSIS

You review Priya's detailed report:

---

### AI PERFORMANCE BY CUSTOMER SEGMENT

#### Overall Performance Baseline:
- Average accuracy: 81%
- Average resolution time: 4.2 minutes
- Customer satisfaction: 76%

---

### SEGMENTED BY LANGUAGE COMPLEXITY:

| Customer Communication Style | Bot Accuracy | Avg Resolution Time | Customer Satisfaction | Sample Size |
|------------------------------|-------------|--------------------|-----------------------|-------------|
| **Simple, formal English** | 91% | 2.8 minutes | 88% | 1,247 queries |
| **Complex, detailed requests** | 85% | 3.9 minutes | 79% | 834 queries |
| **Non-native English speakers** | 68% | 6.7 minutes | 61% | 412 queries |
| **Informal language/slang** | 73% | 5.4 minutes | 67% | 523 queries |
| **Text-speak (u, r, lol)** | 71% | 5.8 minutes | 64% | 289 queries |

---

### SAME QUERY, DIFFERENT OUTCOMES:

Priya provides examples of the SAME basic request worded differently:

---

#### EXAMPLE 1: Order Tracking

**Customer A (Formal English):**
> "Hello, I placed order #12847 on October 1st and have not received a shipping confirmation. Could you please provide an update on the delivery status? Thank you."

**Bot Response:**
> "I'd be happy to help! I can see your order #12847 is currently in transit with Australia Post. It was shipped on October 3rd and is scheduled for delivery on October 7th. Your tracking number is AP1234567890AU. You can track it at auspost.com.au. Is there anything else I can help with today?"

**Result:** ✅ Accurate, helpful, professional tone  
**Resolution Time:** 1.8 minutes  
**Customer Satisfaction:** Positive

---

**Customer B (Informal/Text-speak):**
> "yo wheres my order?? been waiting forever lol order num 12850"

**Bot Response:**
> "I don't understand your request. Please provide your order number and I'll look into it for you."

**Customer:** "i just said it lol 12850"

**Bot Response:**
> "I need your complete order number to assist you. Please provide your order number in the format #12345."

**Customer:** "ARE U KIDDING ME ITS RIGHT THERE"

**Bot Response:** [Routes to human agent after failed attempts]

**Result:** ❌ Bot couldn't parse informal language, frustrated customer  
**Resolution Time:** 7.2 minutes (including wait for human)  
**Customer Satisfaction:** Negative complaint filed

---

#### EXAMPLE 2: Return Policy

**Customer A (Clear, formal):**
> "What is your return policy for online purchases? I would like to return an item I received yesterday."

**Bot Response:**
> "Our return policy for online purchases allows returns within 30 days of delivery. You can return items by mail (customer pays $8.50 shipping) or free returns to any of our 50 stores. Items must be in original condition with tags attached. Would you like me to start a return for you?"

**Result:** ✅ Complete, accurate information  
**Resolution Time:** 2.1 minutes

---

**Customer B (Non-native English):**
> "I am buy dress on website last week. Not good for me. Can I return? How I do this return?"

**Bot Response:**
> "I'm sorry, I don't understand your question. Please rephrase or contact our customer service team for assistance."

**Customer:** "Return dress. I want return. How?"

**Bot Response:**
> "For return information, please visit our Returns page or speak with a customer service representative."

**Result:** ❌ Bot gave up, didn't provide the simple information  
**Resolution Time:** 8.4 minutes (escalated to human)

---

### THE PATTERN

**The AI performs significantly better when customers communicate in:**
- Formal, grammatically correct English
- Complete sentences with proper punctuation
- Standard vocabulary
- Polite, detailed phrasing

**The AI struggles when customers use:**
- Informal language, slang, abbreviations
- Text-speak (ur, r, u, lol, etc.)
- Non-standard English grammar
- Brief, casual phrasing
- Regional dialects or accents (transcribed from phone)

---

## WHY THIS IS HAPPENING

Priya's technical explanation:

> "The AI was trained primarily on our historical customer service transcripts - emails and formal chat conversations from the past 3 years. These conversations skew heavily toward formal English because:
>
> 1. Customers writing emails tend to use more formal language
> 2. Our training data was 'cleaned' to remove typos and normalize language
> 3. We excluded social media interactions (which are more informal)
> 4. The knowledge base articles are written in formal business language
>
> The model learned to recognize and respond to 'premium' language patterns. It literally doesn't understand informal communication as well.
>
> **This creates a two-tier service system where articulate, formally-educated customers get fast, accurate AI service, while others get poor service or are routed to human agents (who are now overloaded).**"

---

## THE IMPLICATIONS

### Who This Affects:

**Likely correlated with:**
- **Age:** Younger customers use more informal language
- **Education level:** Formal writing is taught in higher education
- **Socioeconomic status:** Correlates with education
- **Cultural background:** Non-native English speakers
- **Digital natives:** Use text-speak and abbreviations
- **Communication preferences:** Some people are just more casual

**This likely creates disparities across:**
- Income levels
- Cultural communities
- Age groups
- Education backgrounds

---

### The Risks:

**Legal/Regulatory:**
- Could violate anti-discrimination laws
- Disproportionate impact on protected groups
- Australian Consumer Law requires equitable service

**Reputational:**
- "RetailFlow's AI provides better service to educated, wealthy customers"
- Social media backlash potential
- Brand damage as "elitist" or "discriminatory"

**Operational:**
- Two-tier service creates customer frustration
- Overloads human agents with queries AI should handle
- Undermines the business case for AI

**Ethical:**
- Are we comfortable providing worse service based on how people communicate?
- Does this align with company values?

---

## THE OPTIONS

Priya has outlined four possible approaches:

---

### OPTION A: DO NOTHING

**The Argument:**
- The AI is performing well overall (81% accuracy)
- We're meeting our KPIs and business objectives
- Most customers (68%) are getting good service
- Fixing this is expensive and time-consuming
- "This isn't intentional discrimination - it's just a technical limitation"

**The Cost:**
- Free (no additional investment)
- No project delay

**The Trade-off:**
- We knowingly provide discriminatory service
- Risk of public exposure
- Ethical compromise

---

### OPTION B: FIX THE TRAINING DATA

**The Approach:**
- Retrain the AI on more diverse language patterns
- Include social media conversations, informal chats, text messages
- Add synthetic data representing diverse communication styles
- Teach the model to "translate" informal to formal internally

**The Cost:**
- $30,000 for data collection and labeling
- 6 weeks to retrain and test
- Risk: Overall accuracy might drop initially (from 81% to ~75%)

**The Benefit:**
- Equitable service across communication styles
- Ethically sound solution
- Addresses root cause

**The Trade-off:**
- Delays rollout plans
- Costs money
- Might reduce performance for current "well-served" customers

---

### OPTION C: HUMAN ESCALATION TRIAGE

**The Approach:**
- Immediately route informal/complex language queries to human agents
- Maintain high AI accuracy on formal queries
- Fast implementation (2 weeks)

**The Cost:**
- $5,000 for routing logic
- Doesn't reduce agent workload (defeats part of the business case)

**The Benefit:**
- Quick fix
- Ensures everyone gets help
- Maintains AI accuracy metrics

**The Trade-off:**
- Creates explicit two-tier system (some always get bot, others always get humans)
- Doesn't solve the problem, just routes around it
- May actually feel MORE discriminatory (obvious sorting)

---

### OPTION D: CUSTOMER EDUCATION / TRANSPARENCY

**The Approach:**
- Provide guidance: "For best results, please use clear, complete sentences"
- Show examples of effective phrasing
- Be transparent about AI limitations

**The Cost:**
- Free
- Immediate implementation

**The Benefit:**
- Honest about limitations
- Empowers customers to get better service
- No technical changes needed

**The Trade-off:**
- Places burden on customers to adapt to AI (rather than AI adapting to them)
- May feel like "blame the customer"
- Doesn't address underlying inequity
- Could be seen as patronizing

---

## YOUR TASK (20 MINUTES)

---

### STEP 1: ETHICAL ANALYSIS (5 minutes)

**Is this discrimination? Why or why not?**

Arguments it IS discrimination:

Arguments it is NOT discrimination:

**Your position:**

&nbsp;

&nbsp;

---

**What are the ethical dimensions of each option?**

| Option | Ethical Strengths | Ethical Weaknesses | Your Rating (1-10) |
|--------|------------------|-------------------|-------------------|
| A: Do Nothing | | | |
| B: Fix Training Data | | | |
| C: Human Escalation | | | |
| D: Transparency | | | |

---

### STEP 2: STAKEHOLDER ANALYSIS (5 minutes)

**How would different stakeholders view this issue?**

| Stakeholder | Their Likely Position | What They Prioritize | Their Influence |
|-------------|----------------------|---------------------|----------------|
| CEO | | | |
| CFO | | | |
| Customer Service Team | | | |
| Data Scientist | | | |
| Affected customers (informal language) | | | |
| Well-served customers (formal language) | | | |
| Legal/Compliance | | | |
| Marketing/Brand team | | | |
| Public/Media (if this became news) | | | |

---

### STEP 3: DECISION (5 minutes)

**What do you recommend?**

**Our recommendation:**

- [ ] Option A: Do Nothing
- [ ] Option B: Fix Training Data
- [ ] Option C: Human Escalation
- [ ] Option D: Transparency
- [ ] Combination approach:
- [ ] Different option:

**Our rationale:**

&nbsp;

&nbsp;

&nbsp;

**What are we willing to trade off?**

&nbsp;

**What are we NOT willing to compromise on?**

&nbsp;

---

**Decision Criteria:**

What principles guided your decision?

1. 

2. 

3. 

---

### STEP 4: COMMUNICATION (5 minutes)

**How do you communicate this decision?**

---

**To Your Executive Sponsor:**

Key message:

Framing:

Ask/recommendation:

&nbsp;

&nbsp;

---

**To the Data Scientist (Priya, who discovered this):**

Acknowledgment of her bringing this forward:

Your decision and reasoning:

&nbsp;

&nbsp;

---

**To Customers (if at all):**

Should you communicate this publicly?  
- [ ] Yes  [ ] No

If yes, what and how:

&nbsp;

&nbsp;

If no, why not:

&nbsp;

---

**To the Broader Company:**

What internal communication is needed:

&nbsp;

&nbsp;

---

### STEP 5: THE HARD QUESTIONS

**If your executive sponsor says: "The AI is working fine. This is just how language models work. Don't overthink it. Focus on the business results."**

**What do you say?**

&nbsp;

&nbsp;

&nbsp;

---

**If the CFO says: "We can't afford $30K and 6 weeks to fix something that's not technically broken. The business case doesn't support it."**

**What do you say?**

&nbsp;

&nbsp;

&nbsp;

---

**If this became public (news article: "RetailFlow's AI Gives Worse Service to Informal Speakers"), how would you respond?**

&nbsp;

&nbsp;

&nbsp;

---

**Personal question: Could you defend your decision to:**
- Your family?
- A journalist?
- A customer who was poorly served?
- Yourself in 5 years?

&nbsp;

&nbsp;

---

## REFLECTION QUESTIONS

**After completing this exercise:**

**About AI Ethics:**
- Where's the line between "technical limitation" and "discrimination"?
- Who's responsible for AI outcomes - the developer, the company, the project lead?
- How do you balance business objectives with ethical considerations?

**About Decision-Making:**
- What role should ethics play in technical decisions?
- When do you prioritize equity over efficiency?
- How do you make decisions when there's no perfect option?

**About Your Role:**
- What's your personal ethical framework?
- What would you do if directed to implement something you believe is wrong?
- How do you lead with values in a business context?

---

## FACILITATOR NOTES

**This exercise has no "right" answer, but some approaches are more defensible than others.**

**Strong responses typically:**
- Acknowledge the complexity
- Consider multiple stakeholder perspectives
- Make a clear decision with sound reasoning
- Demonstrate willingness to invest in ethical solutions
- Don't hide behind "it's just technical" or "it's just business"

**Red flags to watch for:**
- Groups that immediately dismiss this as "not a real problem"
- Groups that can't articulate why equity matters
- Groups that only consider financial/business metrics
- Groups that blame customers ("they should write better")

**Key teaching moments:**
- AI systems can perpetuate bias even without malicious intent
- Technical decisions have ethical dimensions
- "Meeting KPIs" doesn't mean you're doing the right thing
- Project leaders must be advocates for ethical considerations
- Sometimes the right choice costs time and money

**Follow-up discussion:**
- How many groups chose Option B (fix it properly)?
- How many chose Option A (do nothing)?
- What influenced their decisions?
- Did anyone feel uncomfortable with their choice?
- What would change their decision?