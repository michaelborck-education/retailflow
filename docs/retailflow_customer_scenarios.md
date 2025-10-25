# RetailFlow: Customer Service Scenarios

## SCENARIO SET 1: SIMPLE QUERIES (ROUTINE, HIGH VOLUME)

### Scenario 1.1 | Order Tracking - Formal

**Customer:** Professional, clear communication

**Query:**
"Good morning, I would like to check the status of my recent order. The order number is RF-2024-08-14527. I placed this order on August 14th and have not yet received tracking information. Could you please advise on the expected delivery date? Thank you."

**Context:**
- Order placed Aug 14, shipped Aug 15
- Tracking number assigned
- Expected delivery Aug 20-22 (metro Sydney)
- All going normally

**Chatbot Response:**
✅ EASY - Lookup order, provide tracking link and expected delivery date

**Human Value Add:**
- (None needed—can be fully automated)

**Potential Issues:**
- None identified

---

### Scenario 1.2 | Order Tracking - Casual

**Customer:** Casual, informal language

**Query:**
"hey can u tell me where my order is lol. dont have the order # on me but i ordered some bedding like a week ago and its supposed to arrive tmrw but i have no idea where it is rn thanks"

**Context:**
- Customer identified by email
- One order in past week (bedding set)
- Order status: In delivery
- Expected delivery tomorrow
- Tracking: Available

**Chatbot Response:**
⚠️ MODERATE - Must handle casual language and identify customer by email; provide tracking

**Human Value Add:**
- Understanding customer tone (casual/friendly)
- Personalization (remembering they ordered bedding)

**Potential Issues:**
- NLU must understand casual abbreviations ("u" for "you", "lol", "tmrw")
- Email-based customer identification
- Informal tone requires casual bot response (not robotic)

---

### Scenario 1.3 | Product Information - In Stock

**Customer:** Comparative shopper

**Query:**
"Hi! I'm looking at the 'Coastal Linen Bedding Set' in white. Can you tell me: (1) Is it available in queen size? (2) What's the material composition? (3) Do you have it in stock? (4) Is there a discount currently?"

**Context:**
- Product exists in catalog
- Available in queen size
- 73% linen, 27% cotton
- 12 in stock (metro)
- No current discount
- Regular price AUD $189

**Chatbot Response:**
✅ EASY - Lookup product, provide all details

**Human Value Add:**
- None needed

**Potential Issues:**
- Multiple questions in one query (requires parsing)
- Customer seeking comparative info (might need styling advice—outside chatbot scope)

---

### Scenario 1.4 | Shipping Information

**Customer:** Regional customer

**Query:**
"How long does shipping take to regional WA? I live in Broome and I'm worried about delivery times."

**Context:**
- Shipping to regional WA: 5-7 business days
- Standard shipping cost: AUD $12.95
- Express option available: AUD $24.95 (3-4 days)
- Customer concerned about distance/time

**Chatbot Response:**
✅ EASY - Provide standard and express shipping timelines and costs

**Human Value Add:**
- Empathy (acknowledging regional concerns)
- Proactive suggestion of express option
- Setting expectations

**Potential Issues:**
- Regional delays sometimes occur (weather, logistics)
- Customer might want negotiation on shipping cost (not chatbot domain)

---

### Scenario 1.5 | Return Policy Question

**Customer:** New customer

**Query:**
"I've never shopped with RetailFlow before. If I buy something and it doesn't work out, what's your return policy?"

**Context:**
- Standard return window: 30 days
- Item must be unworn/unwashed/original condition
- Free returns (customer pays return postage)
- Original receipt required
- No restocking fee

**Chatbot Response:**
✅ EASY - Provide standard return policy

**Human Value Add:**
- Building customer confidence
- Encouraging first purchase

**Potential Issues:**
- New customer may have follow-up questions (edge cases)
- Might need personal encouragement to try RetailFlow

---

## SCENARIO SET 2: MODERATE COMPLEXITY (REQUIRES JUDGMENT)

### Scenario 2.1 | Return Request - Standard

**Customer:** Reasonable, cooperative

**Query:**
"Hi, I ordered a blue sweater last week (Order #RF-2024-08-16342) but it's too small. I've never worn it. Can I return it? I really like the brand so maybe I could exchange it for a size up?"

**Context:**
- Order placed 8 days ago (within 30-day window)
- Item: Blue sweater, size M
- Item condition: Unworn, original tags attached
- Exchange to size L available
- Standard return process applies

**Chatbot Response:**
⚠️ MODERATE - Verify eligibility, offer exchange option, explain process

**Human Value Add:**
- Proactive offer to exchange (customer service delight)
- Building loyalty (customer likes brand)

**Potential Issues:**
- Size L might be out of stock
- Exchange process requires inventory check
- Customer satisfaction depends on exchange availability

---

### Scenario 2.2 | Return Request - Questionable Condition

**Customer:** Possibly attempting return abuse

**Query:**
"I bought this sofa 45 days ago and I want to return it. It's a bit worn but basically fine. I just decided I don't like it in my space. Can I get a refund?"

**Context:**
- Order placed 45 days ago (outside 30-day window)
- Item: Sofa, high-value (AUD $899)
- Condition: Used (wear visible)
- Customer just changed mind about décor
- Policy: Outside return window, no returns for change of mind

**Chatbot Response:**
❌ ESCALATE - Beyond policy; requires human judgment

**Human Value Add:**
- Understanding customer dissatisfaction
- Exploring options (store credit, exchange)
- Decision on exception (if any)

**Potential Issues:**
- Customer will be disappointed
- High-value item (potential negative review risk)
- Potential for negotiation if customer valuable/loyal

---

### Scenario 2.3 | Refund Status - Delayed

**Customer:** Patient but concerned

**Query:**
"I returned a dress about 2 weeks ago and I still haven't received my refund. The return was delivered to your warehouse on August 10th. Can you check on this? My return number is RET-2024-08-10891."

**Context:**
- Return received Aug 10 (12 days ago)
- Standard processing: 5-7 business days from receipt
- Status: Item received, awaiting inspection
- Timeline: Refund should appear in account Aug 20-23
- Customer within reasonable expectations but approaching patience limit

**Chatbot Response:**
⚠️ MODERATE - Lookup return status, provide expected refund date, set expectations

**Human Value Add:**
- Empathy for delay
- Clear timeline
- Proactive notification when refund processed

**Potential Issues:**
- Refund delayed past expected date (system might show different info)
- Customer might need escalation if frustrated

---

### Scenario 2.4 | Shipping Delay - Partial Explanation

**Customer:** Frustrated but reasonable

**Query:**
"My order was supposed to arrive 3 days ago (Aug 20th) but I still haven't received it. It was supposed to come via AusPost and they show 'in transit'. This is ridiculous. I paid for delivery. What are you doing about it?"

**Context:**
- Order #RF-2024-08-15209
- Ordered Aug 15, shipped Aug 17
- Expected delivery: Aug 20-21
- Tracking shows "in transit" (no location detail)
- Delivery company: AusPost
- Delay: 2-3 days past expected
- AusPost currently experiencing delays (winter weather)
- This is NOT RetailFlow's fault directly, but customer perception is

**Chatbot Response:**
⚠️ MODERATE - Acknowledge delay, explain external factor, offer options

**Human Value Add:**
- Apology for inconvenience (customer service recovery)
- Explanation of external factor (weather, carrier delay)
- Concrete next steps (contact carrier, request investigation, etc.)

**Potential Issues:**
- Customer angry (deserved or not)
- Wants someone to fix it (carrier independent)
- May demand compensation or replacement

---

### Scenario 2.5 | Damaged Item - Clear Damage

**Customer:** Upset but documenting issue

**Query:**
"The bedding I received today has a large tear in the duvet cover. This is completely unacceptable. I ordered it as a gift for my daughter's new house and now I can't give it to her. What are you going to do about this? I want a full refund or a replacement overnight."

**Context:**
- Order #RF-2024-08-16851
- Item: Bedding set (AUD $189)
- Damage: Tear in duvet cover (customer has photos)
- Received today
- Quality issue (manufacturing defect)
- Customer upset (time-sensitive gift)
- Request: Replacement or refund + likely expects compensation

**Chatbot Response:**
❌ ESCALATE - Quality issue requires investigation and potential exception handling

**Human Value Add:**
- Apology and empathy (gift situation)
- Investigation of damage (manufacturing issue?)
- Solution offering (replacement express shipped, partial refund/credit for inconvenience)
- Quality improvement follow-up

**Potential Issues:**
- Customer upset (emotional)
- High-value item + gift context (retention issue)
- Potential negative review/social media risk
- Manufacturing quality concern (process issue?)

---

## SCENARIO SET 3: COMPLEX/EMOTIONAL (REQUIRES EMPATHY)

### Scenario 3.1 | Complaint - Service Recovery Needed

**Customer:** Clearly upset, long-term customer

**Query:**
"I'm incredibly disappointed with RetailFlow. I've been a loyal customer for 6 years and I've never had an experience like this. I ordered a formal dress for an important event on August 10th. It was supposed to arrive Aug 15th. It didn't arrive until Aug 22nd—my event was Aug 18th. I missed the event! I've been a great customer and this is how I'm treated? I want compensation for the ruined event and I'm considering taking my business elsewhere."

**Context:**
- Customer: 6-year tenure, lifetime value AUD $3,200
- Order #RF-2024-08-15680
- Item: Formal dress (AUD $220)
- Promised delivery: Aug 15
- Actual delivery: Aug 22
- Delivery delay: 7 days
- Impact: Customer missed important event
- Emotional state: Angry, disappointed, considering leaving
- Opportunity: Retention/recovery situation

**Chatbot Response:**
❌ MUST ESCALATE - High-value customer, emotional situation, potential retention issue

**Human Value Add:**
- Genuine apology and acknowledgment of failure
- Understanding of emotional impact (missed event)
- Recognition of loyalty (6 years)
- Meaningful compensation offer (not token gesture)
- Service recovery plan

**Potential Issues:**
- Customer may be "lost" if compensation not sufficient
- Negative review/word-of-mouth risk
- Other customers tracking response (fairness concern)
- Delivery issue likely logistics partner, but customer sees RetailFlow

**Recommended Human Response:**
"I sincerely apologize for the impact this delay had on your special event. You're absolutely right—as a valued 6-year customer, you deserve better service. Let me make this right. I'm offering [AUD $50 store credit + AUD $25 refund on this purchase + guaranteed express shipping on next order]. I'm also personally investigating what happened with your delivery to prevent this for you and other customers."

---

### Scenario 3.2 | Complaint - Quality Concern Pattern

**Customer:** Frustrated with repeated issues

**Query:**
"This is the third time in 4 months I've received items from RetailFlow with quality issues. The last t-shirt had a loose seam, the sweater before that was pilling after one wash, and now these jeans have a zipper that's broken out of the box. I don't understand what's going on with your quality control. I'm done. I'm returning everything and I'm not shopping with RetailFlow again. Your brand quality is declining and you clearly don't care."

**Context:**
- Customer: 3-year tenure, moderate spend (AUD $1,800 lifetime)
- Multiple quality issues documented
- Pattern suggests: Supplier issue, QC problem, or unlucky customer
- Customer relationship: At risk (about to churn)
- Root cause unknown
- Emotional state: Frustrated, giving up, negative perception of brand

**Chatbot Response:**
❌ MUST ESCALATE - Pattern issue, quality concern, retention risk, needs investigation

**Human Value Add:**
- Genuine acknowledgment of pattern (validates concern)
- Investigation (are these from specific supplier?)
- Systemic solution (not just this customer)
- Meaningful apology and correction
- Proactive engagement

**Potential Issues:**
- Could indicate actual quality problem (escalate to operations)
- Risk of negative review (pattern suggests real issue)
- Other customers may have same issues (systemic)
- Supplier relationship may need review

**Recommended Human Response:**
"I'm genuinely concerned by the pattern you're describing. Three quality issues in 4 months isn't acceptable. Let me investigate this immediately. I want to: (1) Process full refunds on all three items, (2) understand if there's a quality issue with specific suppliers, and (3) make this right with you personally. Can we schedule a call tomorrow so I can investigate and provide you with a solution?"

---

### Scenario 3.3 | Billing Error - Multiple Charges

**Customer:** Confused and concerned about security

**Query:**
"I'm very concerned about my account security. I was just checking my credit card statement and I see I was charged THREE times for my order placed on August 10th. Each charge is AUD $187. That's AUD $561 total for one order! I only received one item! This is either fraud or a massive system error. I want this resolved immediately and I want to know how this happened. I'm worried about my account security now."

**Context:**
- Order #RF-2024-08-15680
- Order total: AUD $187
- Credit card charged: AUD $187 x 3 = AUD $561
- Item delivered: One item (correct)
- Likely cause: System processing error (payment gateway retry), not fraud
- Customer emotional state: Scared (security concern), angry (money issue)
- Urgency: High (financial/security concern)

**Chatbot Response:**
❌ MUST ESCALATE - Financial/security issue, requires immediate human review

**Human Value Add:**
- Immediate acknowledgment and apology
- Security assurance (not fraud, investigating)
- Concrete next steps (reverse charges, timeline)
- Prevention assurance (we'll fix system)

**Potential Issues:**
- Customer security concern (legitimate)
- Financial impact (extra AUD $374)
- Requires finance system access (chatbot can't do)
- Potential for chargeback/credit card dispute
- Could indicate system issue affecting others

**Recommended Human Response:**
"I sincerely apologize for this billing error. I can see the three charges on your account and I'm processing immediate refunds for the duplicate charges. This appears to be a system processing error on our end—not fraud. Here's what I'm doing: (1) Initiating full refund of AUD $374 immediately—you should see this in 1-2 business days, (2) Flagging this with our payments team to investigate and prevent recurrence, (3) Providing you with a case reference number [XYZ123] for your records. Your account is secure. Is there anything else I can do to restore your confidence?"

---

### Scenario 3.4 | Accessibility Request - Not Accommodated

**Customer:** Frustrated with inclusion

**Query:**
"I've emailed you three times in the past week asking about accessibility features for your website. I'm visually impaired and your site isn't compatible with screen readers. I can shop at competitors' sites just fine but I can't navigate RetailFlow's site. Are you not interested in my business? Why haven't you responded? I've been a customer for years and I feel like you don't care about customers like me."

**Context:**
- Customer: Loyal, years tenure (valuable)
- Accessibility concern: Website screen reader compatibility poor
- Issue: Legitimate accessibility barrier
- Customer feedback: Not answered (three emails)
- Emotional state: Hurt, frustrated, excluded
- Business impact: Losing accessible customer; brand inclusion concern
- Systemic issue: Likely affects others (accessibility is legal/ethical issue)

**Chatbot Response:**
❌ MUST ESCALATE - Accessibility/inclusion issue, customer service failure (unanswered emails)

**Human Value Add:**
- Apology for lack of response (service failure)
- Genuine commitment to accessibility
- Concrete remediation (e.g., personal shopping assistance now; timeline for fixes)
- Executive involvement (shows seriousness)

**Potential Issues:**
- Legal/compliance concern (accessibility requirements)
- Reputational risk (inclusion issue)
- Systemic problem (website accessibility affects many)
- Customer relationship damaged by being ignored
- Other accessibility-challenged customers may have same issue

**Recommended Human Response:**
"I sincerely apologize for not responding to your three emails. That's unacceptable and I'm immediately investigating why your messages weren't routed properly. You're absolutely right—your business matters and so does accessibility. Here's what I'm committing to: (1) I'm personally assisting you with any purchases today—I can help you navigate and order via phone/email, (2) I'm escalating website accessibility to our CIO as urgent priority, (3) I'll follow up with you in one week with a timeline for accessibility improvements, (4) I'm providing you with AUD $50 in store credit for the frustration. Thank you for holding us accountable."

---

### Scenario 3.5 | Negative Review Follow-up - Brand Damage

**Customer:** Publicly upset, left negative reviews

**Query:**
"I just saw my 1-star review on your website and no one has responded. I left it 2 weeks ago after receiving damaged furniture. Meanwhile I'm seeing comments from other customers with similar issues. You clearly don't monitor reviews or care about your reputation. This is poor management."

**Context:**
- Review: 1-star, public, detailed complaint
- Issue: Damaged furniture (sofa) arrived
- Timeline: Left 2 weeks ago, no response
- Pattern: Other similar complaints visible
- Emotional state: Upset, publicly venting
- Business impact: Negative reviews affecting potential customers
- Systemic issue: Review management failure, possible quality pattern

**Chatbot Response:**
❌ MUST ESCALATE - Reputation/review management issue, service recovery needed

**Human Value Add:**
- Immediate response (showing we do monitor)
- Public acknowledgment of issue
- Personal resolution offer
- Systemic fix communication
- Executive involvement

**Potential Issues:**
- Damage to brand reputation
- Multiple customers with similar issues (pattern?)
- Review response now public (others watching)
- Need to address both this customer and others
- Quality/operations issue may need investigation

**Recommended Human Response (posted publicly on review + personal email):**
"Thank you for your feedback and I apologize we didn't respond sooner. You're right—that's our failure. I've personally investigated your situation and would like to make this right. I'm reaching out via email with a resolution. To our community: We take every review seriously. If you've had an issue with damaged items or service quality, please reach out directly so we can help. We're committed to improving."

---

## SCENARIO SET 4: EDGE CASES & SYSTEM CHALLENGES

### Scenario 4.1 | Non-Standard Question

**Customer:** Seeking personal advice

**Query:**
"Hi! I'm redecorating my bedroom and I'm torn between two bedding sets on your site. One is the white linen set (AUD $189) and the other is the grey cotton set (AUD $156). My room has blue walls and I'm trying to decide which would look better. Which do you think I should get?"

**Context:**
- Two real products
- Subjective style question
- Customer seeking personal advice
- Outside chatbot capability (needs human judgment/empathy)
- Opportunity for customer service delight

**Chatbot Response:**
⚠️ MODERATE - Acknowledge question, provide product info, suggest escalation to styling expert

**Human Value Add:**
- Personal styling advice
- Understanding of customer's space
- Recommendation with reasoning
- Building customer confidence
- Possible up-sell opportunity (add complementary items)

**Potential Issues:**
- Subjective nature (no "right" answer)
- Chatbot shouldn't pretend expertise it doesn't have
- Customer wants genuine advice, not robot response

**Recommended Escalation Message:**
"Great question! Both are beautiful options. For personalized styling advice based on your blue walls, I'd love to connect you with our styling expert who can help you visualize the options. Would you like me to have someone reach out, or would you prefer to chat now? [Transfer to available representative]"

---

### Scenario 4.2 | Non-English Query (Simplified)

**Customer:** English as second language, but attempting communication

**Query:**
"Hello, I am have question about order. My order number is RF-2024-08-16234. When it is coming? I waiting for 8 day already. Very impatient. Please tell me fast."

**Context:**
- Order placed 8 days ago
- Expected delivery: Days 9-11
- Currently in normal fulfillment
- Customer: Non-native English speaker, impatient but reasonable
- Language barrier: Simplified but understandable English
- Emotional state: Impatient but not angry

**Chatbot Response:**
⚠️ MODERATE - Must handle non-native English; provide clear, simple response

**Human Value Add:**
- Patience with language barrier
- Simple, clear communication
- Reassurance
- Possibly available in other languages (if relevant)

**Potential Issues:**
- NLU must handle varied English patterns
- Chatbot response must be simple and clear (not jargon-heavy)
- Cultural communication norms (directness varies)
- Possibly should offer interpreter services

**Recommended Chatbot Response:**
"Hello! Thank you for your message. Your order RF-2024-08-16234 is on track. It will arrive in 2-3 days. You can track it here [link]. We understand waiting is hard. Your item is coming soon! Questions? I am here to help."

---

### Scenario 4.3 | Vague Query - Missing Information

**Customer:** Unclear about their issue

**Query:**
"Hi, um, I have a problem with something I ordered but I can't remember exactly when. I don't have my order number with me right now. It was a dress or maybe a top, I can't quite remember. It was some color like blue or purple? When I received it, something was wrong but I'm not sure what exactly. Can you help me?"

**Context:**
- Customer: Vague and uncertain
- Issue: Can't identify order (no order number, vague timing)
- Problem: Unclear what the issue is
- Chatbot challenge: Need more information before helping

**Chatbot Response:**
⚠️ MODERATE - Must gather information to identify order and issue

**Human Value Add:**
- Patient clarification questions
- Understanding customer's vague concern
- Finding the right order
- Identifying the actual issue

**Potential Issues:**
- Customer disorganized/uncertain
- Could be multiple orders matching description
- May require back-and-forth to clarify
- Could take longer to resolve

**Recommended Chatbot Response:**
"No problem! Let me help you find your order. A few quick questions: (1) What email address did you use to order? (2) Approximately when did you order—was it this week, last week, or earlier? (3) What was the main problem—was the item damaged, wrong color, wrong size, or something else? Once I have these details, I can find your order and help!"

---

### Scenario 4.4 | Angry Customer - Emotional Escalation

**Customer:** Very frustrated, using caps/exclamation marks

**Query:**
"THIS IS COMPLETELY UNACCEPTABLE!!! I'VE BEEN A CUSTOMER FOR YEARS AND THIS IS THE WORST EXPERIENCE EVER!!! MY ORDER STILL ISN'T HERE AND NO ONE HAS HELPED ME!!! I'M CALLING MY CREDIT CARD COMPANY TO DISPUTE THIS CHARGE AND I'M POSTING ABOUT THIS ON EVERY SOCIAL MEDIA CHANNEL I CAN FIND!!! YOU PEOPLE ARE TERRIBLE!!!"

**Context:**
- Customer: Very upset, using aggression signals (caps, exclamation marks)
- Emotional state: Angry, feeling unheard
- Threat: Social media escalation, credit card dispute
- Likely root cause: Service failure or communication breakdown
- Risk level: High (public complaints, financial/legal action)

**Chatbot Response:**
❌ MUST ESCALATE IMMEDIATELY - Emotional escalation, potential for public/legal damage

**Human Value Add:**
- Immediate human response (not just bot)
- De-escalation and empathy
- Taking the complaint seriously
- Concrete action plan
- Management involvement if needed

**Potential Issues:**
- Customer very upset (may not listen to reason initially)
- Threats of social media/chargeback (real risk)
- May have legitimate underlying issue (orders genuinely delayed)
- Requires careful handling to prevent escalation

**Recommended Human Response:**
"I can see you're very upset and I'm genuinely sorry. Let me help immediately. I'm escalating your case to my manager right now so we can give this the urgent attention it deserves. Please reply with: (1) Your order number, (2) What specifically went wrong. I promise we'll make this right. You've been with us for years—you matter to us."

---

### Scenario 4.5 | Fraudulent Return Attempt

**Customer:** Appears to be return abuse

**Query:**
"I want to return these jeans. I bought them 60 days ago and I've worn them maybe 20 times. They're definitely used but they're still in decent condition. I just don't want them anymore. Your policy says 30 days so I know I'm outside the window but I'm a loyal customer so I should get an exception. What do you say?"

**Context:**
- Return window: 30 days
- Item: Jeans (AUD $99)
- Condition: Worn 20+ times (clearly used)
- Timeline: 60 days (double the return window)
- Request: Exception for return outside window
- Customer: Self-aware they're outside policy; requesting exception
- Pattern: If approved, might encourage repeated abuse

**Chatbot Response:**
⚠️ MODERATE - Policy question, but escalate for human judgment

**Human Value Add:**
- Understanding customer (building relationship value)
- Explaining policy consistently
- Judgment on exception (if any)
- Protecting against return abuse

**Potential Issues:**
- If exception granted, sets precedent (others request same)
- If exception denied, customer upset (used the "loyalty" angle)
- Policy integrity (must be applied consistently)
- Risk of return fraud (worn items returned as new)

**Recommended Human Response:**
"I appreciate your honesty about the condition. You're right—our policy is 30 days, and we apply it consistently to all customers to keep things fair. However, because you've been loyal, I'd like to offer an alternative: $20 store credit toward your next purchase. This way you get a discount on future shopping and we maintain fair policy for all customers. Does that work for you?"

---

## SCENARIO ANALYSIS FOR CHATBOT TRAINING

### Summary: What Chatbots Can Handle

✅ **Scenarios 1.1-1.5:** Simple, routine queries (30% of volume)
- Order tracking with order number
- Basic product information
- Standard return policy
- Shipping estimates
- General FAQs

✅ **Partial Scenarios 2.1-2.5:** Moderate queries where policy is clear
- Returns within policy, standard condition
- Refund status tracking
- Straightforward complaint documentation
- Basic issue categorization

### Summary: What Requires Human Judgment

❌ **Scenarios 2.2, 2.4, 2.5:** Moderate complexity with judgment calls
- Returns outside policy or questionable condition
- Delays requiring explanation and empathy
- Quality issues requiring investigation
- Compensation decisions

❌ **Scenarios 3.1-3.5:** Complex/emotional requiring empathy
- Service recovery opportunities
- Pattern issues requiring investigation
- Accessibility/inclusion issues
- Brand reputation concerns
- Angry customers needing de-escalation
- Fraud/return abuse detection

❌ **Scenarios 4.2-4.5:** Edge cases and challenges
- Non-standard questions
- Non-English queries
- Vague/missing information requiring clarification
- Extremely angry customers
- Suspected fraud

### Chatbot Development Priority

**Phase 1 (MVP):** Handle Scenarios 1.1-1.3
- Order tracking
- Product information
- Basic policy questions
- Target: 25% of current volume

**Phase 2:** Add Scenarios 1.4-1.5, partial 2.1-2.2
- Shipping information
- Return requests (standard cases)
- Escalation paths clear
- Target: 35% of volume

**Phase 3:** Add more of 2.1-2.5 with structured escalation
- Documentation of complex cases
- Clear escalation rules
- Target: 40% of volume

**Not in Scope (Human Only):**
- Scenarios 3.1-3.5 (emotional/judgment-heavy)
- Scenarios 4.3-4.5 (edge cases, fraud, anger)
- Any compensation decisions
- Policy exceptions

---

## CHATBOT FAILURE SCENARIOS (FOR TESTING)

### Failure 1: Misidentified Order

**Scenario:** Customer asks about order but chatbot retrieves wrong order (similar order number)

**Impact:** Customer receives incorrect information, gets frustrated, requires human follow-up

**Prevention:** Exact order number verification, confirmation step before providing details

---

### Failure 2: Inappropriate Escalation

**Scenario:** Chatbot escalates a simple order tracking query to human (over-cautious)

**Impact:** Delays response unnecessarily, wastes human time on routine query

**Prevention:** Clear confidence thresholds; escalate only when uncertain or customer requests

---

### Failure 3: Tone-Deaf Response

**Scenario:** Customer angry about delayed delivery; chatbot responds with robotic "We appreciate your business" message

**Impact:** Customer more frustrated; feels dismissed by bot response

**Prevention:** Sentiment analysis; appropriate response tone; empathy in language

---

### Failure 4: Policy Misunderstanding

**Scenario:** Chatbot incorrectly states return policy based on outdated training data

**Impact:** Customer relies on incorrect info, gets refund they shouldn't, blame when reversed

**Prevention:** Regular policy updates to training; human review of policy questions

---

### Failure 5: Incomplete Information

**Scenario:** Chatbot provides answer but doesn't proactively offer next steps or related help

**Impact:** Customer doesn't get full resolution, requires follow-up inquiry

**Prevention:** Design for complete resolution; suggest related help; ask "Anything else?"

---

**END OF CUSTOMER SCENARIOS**