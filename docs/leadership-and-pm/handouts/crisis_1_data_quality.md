# CRISIS 1: DATA QUALITY DISASTER
## Time: Monday, 8:00 AM - Week 9 of Project (Week 1 of Live Deployment)

---

## THE ALERT

You arrive at work Monday morning to find **47 unread emails** and **12 urgent Slack messages**. 

The customer service manager is in panic mode. Something went very wrong over the weekend.

---

## EMAIL FROM CUSTOMER SERVICE MANAGER

**FROM:** Sarah Chen, Customer Service Manager  
**TO:** You  
**SUBJECT:** 🚨 URGENT - AI Bot Giving Dangerously Wrong Answers  
**SENT:** Sunday 9:47 PM

> I need to talk to you FIRST THING Monday morning. We have a serious problem.
>
> The AI chatbot gave **completely incorrect information** to at least 15 customers yesterday about our return policies. This is not a small glitch - these are answers that could expose us to legal liability.
>
> **Examples of what happened:**
> - Told a customer they could return a clearance item (our policy: all clearance sales are FINAL)
> - Told another customer returns must be within 7 days (our actual policy: 30 days for most items)
> - Gave conflicting information about whether opened electronics can be returned
>
> My team is now dealing with angry, confused customers AND having to fix the bot's mistakes. This is creating MORE work for us, not less. Several team members are saying "I told you this AI thing wouldn't work."
>
> **I'm pulling the plug on the chatbot this morning unless you can fix this IMMEDIATELY.** We can't risk more customers getting wrong information.
>
> Call me as soon as you read this.
>
> Sarah

---

## SLACK MESSAGES (OVERNIGHT)

**#ai-pilot-project channel:**

**From Data Scientist (2:34 AM):**
> Just woke up to Sarah's email. Looking at the logs now. Model accuracy has dropped from 85% in testing to 62% over the weekend. Not immediately sure why. Will investigate first thing Monday.

**From IT Support (6:15 AM):**
> System uptime is fine, no server issues. Whatever the problem is, it's not infrastructure.

**From Executive Sponsor (7:03 AM):**
> Seeing Sarah's escalation. What's going on? This was supposed to IMPROVE customer experience, not create problems. Need an update by 10am.

**From CEO (7:28 AM):**
> Hearing complaints about the AI bot from customers AND from our team. [Executive Sponsor], I thought you said this was ready for prime time?

---

## THE DATA: CHATBOT CONVERSATION LOGS

You pull the chatbot logs from the past 48 hours. Here's a representative sample:

---

### CONVERSATION LOG #1

**Customer:** "Can I return this dress? I bought it last week but it doesn't fit."

**Bot Response:** "Our return policy allows returns within 7 days of purchase with receipt."

**ACTUAL POLICY:** 30 days for regular-priced items, 14 days for sale items, with receipt

**IMPACT:** Customer thinks they're out of time. Might not attempt return and will be frustrated.

---

### CONVERSATION LOG #2

**Customer:** "I want to return my clearance shoes - never worn them, still have tags."

**Bot Response:** "Yes, you can return clearance items within 30 days for a full refund with your receipt."

**ACTUAL POLICY:** All clearance and final sale items are NOT RETURNABLE under any circumstances. This is stated clearly on receipts and signage.

**IMPACT:** Customer was given explicit permission to return non-returnable item. They'll be angry when store refuses. Potential legal exposure.

---

### CONVERSATION LOG #3

**Customer:** "What's your return policy for online orders?"

**Bot Response:** "Online orders can be returned to any store or by mail within 14 days of purchase."

**ACTUAL POLICY:** Online orders can be returned within 30 days. Mail returns are accepted but customer pays $8.50 return shipping fee (or free returns to any store).

**IMPACT:** Incomplete/incorrect information. Customer might think they have less time than they do, or might be surprised by shipping fee.

---

### CONVERSATION LOG #4

**Customer:** "Can I exchange this item without a receipt? I paid cash."

**Bot Response:** *[No response - bot timed out after 30 seconds]*

**IMPACT:** Customer received no help. Frustrating experience.

---

### CONVERSATION LOG #5

**Customer:** "I bought this jacket 3 months ago and just noticed a defect. Can I still return it?"

**Bot Response:** "Yes, all items can be returned within our standard return timeframe. Please bring your receipt to any store."

**ACTUAL POLICY:** Manufacturing defects are covered for 1 year, but customer needs to explain the issue. Normal returns are 30 days. This is context-dependent.

**IMPACT:** Vague, potentially misleading answer. Doesn't address "defect" vs "return."

---

### CONVERSATION LOG #6

**Customer:** "whats ur return policy for xmas gifts lol"

**Bot Response:** "I apologize, but I don't understand your question. Please rephrase or contact our customer service team."

**ACTUAL POLICY:** Holiday return policy (purchased Nov-Dec can be returned until Jan 31). Bot failed to understand informal language.

**IMPACT:** Bot couldn't parse informal text-speak, frustrated customer.

---

## ADDITIONAL DATA: ACCURACY TRENDS

You pull performance metrics:

| Time Period | Accuracy Rate | Avg Response Time | Customer Satisfaction |
|-------------|---------------|-------------------|----------------------|
| Testing Phase (Week 6-7) | 87% | 1.8 minutes | 82% (test users) |
| Launch Day (Last Monday) | 85% | 2.1 minutes | 79% |
| Mid-Week (Wed-Fri) | 78% | 2.4 minutes | 74% |
| **This Weekend (Sat-Sun)** | **62%** | 2.8 minutes | **58%** |

**Something changed over the weekend.**

---

## YOUR TASK (20 MINUTES TOTAL)

Work with your group to address this crisis.

---

### STEP 1: DIAGNOSE (5 minutes)

**What's causing this problem?**

Look at the patterns in the conversation logs. What do you notice?

**Hypothesis 1:**

Evidence for:

Evidence against:

&nbsp;

**Hypothesis 2:**

Evidence for:

Evidence against:

&nbsp;

**Hypothesis 3:**

Evidence for:

Evidence against:

&nbsp;

**Most likely root cause:**

&nbsp;

---

### STEP 2: IMMEDIATE ACTION (5 minutes)

**What do you do RIGHT NOW (by 9am)?**

Choose one:

- [ ] **Shut down the chatbot completely** until fixed
  - Pros:
  - Cons:

- [ ] **Partial shutdown** - disable certain query types
  - Which queries to disable:
  - Which queries keep running:
  - Rationale:

- [ ] **Keep running with monitoring** - watch closely but don't shut down
  - What safeguards:
  - Rationale:

- [ ] **Other approach:**

**Your decision:**

**Your rationale (you'll need to defend this):**

&nbsp;

&nbsp;

---

### STEP 3: IMMEDIATE COMMUNICATIONS (5 minutes)

Draft quick responses to key stakeholders.

**Email to Sarah (Customer Service Manager):**

Subject: 

Sarah,

&nbsp;

&nbsp;

&nbsp;

&nbsp;

**Slack message to Executive Sponsor:**

&nbsp;

&nbsp;

**Communication to customers who received incorrect information:**

How will you identify them?

What will you tell them?

&nbsp;

&nbsp;

---

### STEP 4: FIX PLAN (5 minutes)

**What's your 48-hour action plan to fix the root cause?**

**HOUR 0-4 (This morning):**
- [ ] 
- [ ] 
- [ ] 

**HOUR 4-24 (Today-Tonight):**
- [ ] 
- [ ] 
- [ ] 

**HOUR 24-48 (Tomorrow):**
- [ ] 
- [ ] 
- [ ] 

**Resources needed:**

**Who owns each action:**

---

### STEP 5: PREVENTION (Bonus if time)

**How do you prevent this from happening again?**

1. 

2. 

3. 

---

## FACILITATOR WILL REVEAL

After your group completes this worksheet, the facilitator will reveal:
- The actual root cause (based on realistic AI failure modes)
- Discussion of different approaches groups took
- What good crisis management looks like

---

## KEY QUESTIONS FOR REFLECTION

- How quickly did you identify the pattern vs. jump to solutions?
- Did you balance speed (urgent crisis) with thoroughness (understanding root cause)?
- How did you handle the stakeholder pressure (Sarah wants to shut it down NOW)?
- What trade-offs did you make?
