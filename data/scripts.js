/**
 * BB Hatfield - Conversation Guide Scripts
 * Sales scripts and objection handling by lead stage
 */

const SCRIPTS = {
  enquiry: {
    opener: `Good [morning/afternoon], [Customer Name]! Thank you for contacting BB Hatfield.
How can I assist you with your vehicle purchase today?`,

    qualifying_questions: `
KEY QUALIFYING QUESTIONS:
1. "What brings you in today?" → Identify pain point (new vehicle, trade-in, budget refresh)
2. "Are you looking to purchase new or used?" → Segment market
3. "What's your timeframe?" → Gauge urgency (immediately, 2-4 weeks, browsing)
4. "Do you currently have a vehicle?" → Trade-in opportunity
5. "Have you thought about budget?" → Financial position
6. "Are you financing or paying cash?" → Route to credit/cash process
7. "Have you visited our showroom before?" → Familiarization level`,

    vehicle_interest: `
VEHICLE DISCOVERY SCRIPT:
"Let me show you some options that match your needs."

> If undecided: "Let me ask a few quick questions to narrow it down...
  - Family size? (5-seater vs 7-seater)
  - Primary use? (City commute, family trips, long distance)
  - Fuel preference? (Petrol vs Diesel)
  - Budget range? (Under R250k, R250-400k, R400k+)

> If decided: "Excellent! [BRAND] [MODEL] is a fantastic choice. Let me walk you through the key features..."`,

    next_steps: `
MOVING FORWARD:
"Now that you've seen what interests you, here's what happens next:

1. PRE-QUALIFICATION: I'll gather some basic financial info to show what you can afford
2. QUOTATION: We'll build a tailored quote with your exact vehicle & finance terms
3. TEST DRIVE: You'll experience the vehicle firsthand
4. APPLICATION: Once you're ready, we process your finance application

Shall we start with the pre-qualification?"`,

    objections: {
      "I need to think about it": `"Absolutely, take your time. What specific aspect would help you decide?
      [Listen]. Let's schedule a follow-up call in [2-3 days] when you've had time to reflect.
      Would [Day at Time] work for you?"`,

      "Your prices seem high": `"I understand affordability is important. Our pricing reflects the full warranty,
      service plan, and quality assurance we provide. Plus, we can explore finance options that fit your budget.
      If I show you a payment plan at [X]% interest over [60/72/84] months, would that work better for you?"`,

      "I'll shop around first": `"That's smart - you should compare! Here's what makes BB Hatfield different:
      [1-2 key differentiators: e.g., 'Parts availability same-day', 'Extended service warranty']
      When you're ready, give us a call back. We'll make sure you get the best deal."`,

      "Bad credit / Low income": `"I appreciate your honesty. Most customers think they can't qualify, but our team
      specializes in unique situations. Let's run a proper pre-qualification to see what's possible.
      The worst that happens is we get clarity on your options. Shall we proceed?"`,

      "I'm in a hurry": `"I completely understand - we respect your time. Here's what I can do:
      [Fast-track: 10-min pre-qual call, emailed quote, finance application started today]
      How does that sound?"`,
    }
  },

  application: {
    opener: `Hi [Customer Name], this is [Agent Name] from BB Hatfield.
Great news - your pre-qualification came through! I'm excited to move forward with your application.`,

    docs_checklist: `
REQUIRED DOCUMENTATION:
☐ Valid SA Identity Document (copy both sides)
☐ Proof of Income:
   - Permanent Employee: Last 3 months payslips + recent bank statement
   - Self-Employed: Last 2 years tax returns + current year bank statements
   - Pensioner: Pension fund statement
☐ Proof of Residence (utility bill, < 3 months old)
☐ Employment Letter (if requested by bank)
☐ Trade-In Documents (if applicable): Registration, finance release letter

"I'll email you a document checklist. Can you gather these by [date]?
Once we have them, we'll submit to the bank within 24 hours."`,

    bank_submission: `
AT SUBMISSION TO BANK:
"Your application is now submitted to [Bank Name]. Here's what to expect:

TIMELINE:
- Initial Review: 1-2 business days
- Bank Decision: 3-5 business days (may extend if docs needed)
- Vehicle Hold: Reserved in your name during processing

YOU MAY RECEIVE:
- Bank request for additional info → I'll help you respond same day
- Approval with conditions → We'll discuss together
- Request for pre-payment/deposit → I'll guide you through this

I'll keep you updated every step. Any questions?"`,

    follow_up_script: `
DAILY FOLLOW-UP (Days 1-5 Post-Submission):
"Hi [Name], just checking in on your application with [Bank].
Still on track - I expect initial approval by [date].

In the meantime:
- Have you booked your test drive? → Schedule if not done
- Do you want to lock in the quote? → Can do same-day
- Questions about finance terms? → Happy to clarify"`,

    next_milestone: `
APPROVAL TO DELIVERY:
Once approved: "Fantastic! Your application is approved. Let's schedule:
1. Vehicle PDI & Photo Review (if buying specific unit)
2. Final contract review with our finance manager
3. Keys handover & documentation
4. Insurance activation

What works best for you this week?"`,

    objections: {
      "Bank says I need a guarantor": `"That's actually common. A guarantor strengthens your application.
      It's someone you trust - usually a parent or spouse - who co-signs.
      Would you like me to explain how this works and who might be suitable?"`,

      "Finance rate is higher than expected": `"I understand rate concerns. Here's what affects your rate:
      [Credit score, DTI ratio, loan term]. We submitted at [rate].
      Let me check with the bank if any adjustments are possible given your profile."`,

      "I've been approved but need to delay delivery": `"No problem - we can put your vehicle on hold for [duration].
      Just confirm by [date] so we don't release it.
      What timeline works better for you?"`,
    }
  },

  banked: {
    delivery_checklist: `
PRE-DELIVERY CHECKLIST:
☐ PDI Complete: All systems tested & documented
☐ Fleet History Verified: Zero accidents, proper service
☐ Insurance Activated: Proof of cover in hand
☐ Registration Applied: Plates ordered (7-10 days)
☐ Keys & Documents: Duplicates ready
☐ Fuel Tank: Full, ready for road
☐ Welcome Pack: All manuals, warranties, service schedules

"Everything is set for your delivery on [date]. You're going to love this vehicle!"`,

    upsell_accessories: `
OPTIONAL ENHANCEMENTS (Post-Delivery):
"Before you drive off, quick mention of popular add-ons many customers choose:

→ Extended Warranty (Peace of mind beyond manufacturer)
→ Service Plan Packages (10% discount if bundled now)
→ Smash & Grab Cover (Insurance add-on, R3,500)
→ Tracker Installation (Peace of mind + insurance discount)
→ Interior Protection (Fabric guard, leather conditioning)

Would any of these interest you? We can have them installed before you leave."`,

    referral_ask: `
REFERRAL CLOSE:
"[Name], you've been fantastic to work with. If you know anyone looking for a vehicle -
family, friends, colleagues - please send them my way. We treat every customer like you:
attentive, honest, and committed to the best deal.

Here's my card + WhatsApp: [Number]. Tell them you referred BB Hatfield!"`,

    post_delivery_follow_up: `
DAY 1 POST-DELIVERY:
"Hey [Name]! How's the new [BRAND MODEL]?
First impressions? Any questions about features or controls?"

DAY 7 POST-DELIVERY:
"Quick check-in: Everything running smoothly?
Reminder: First service is due at [10,000 km / 6 months]. Book with us?"

MONTH 1 POST-DELIVERY:
"You're 3 weeks in! Loving the vehicle?
Just confirming your insurance is active & tracker (if ordered) is functioning."`,
  },

  lost: {
    recovery_script: `
RECOVERY OUTREACH (If Lead Was Lost During Enquiry/Application):
"Hi [Name], it's [Agent Name] from BB Hatfield.
I noticed we haven't connected in a few weeks about your vehicle search.
Can I help clarify anything that may have caused you to pause?"

[Listen for real objection - don't assume]

OBJECTION RESPONSE:
"Ah, I see. Let me address that for you...
[Respond to specific objection with solution]

Would it help if we started fresh with updated quotes or a test drive on another model?"`,

    feedback_questions: `
LEARNING FROM LOSS:
If customer confirms "No, I bought elsewhere" or "Not going forward":

1. "Out of curiosity, what was the main deciding factor?"
   → [Price / Competitor offer / Model availability / Finance terms]

2. "Is there anything we could have done better?"
   → [Listen - this is gold for improvement]

3. "Would you keep BB Hatfield in mind for future vehicles?"
   → [Build for future / referral]

4. "Thanks for your feedback. If anything changes, here's my number..."`,

    win_back_follow_up: `
WIN-BACK CAMPAIGN (3-6 Month Cycle):
Month 1: "Hope the new vehicle is treating you well! If you ever need service or have a friend in the market..."
Month 3: "Quick question: Happy with your vehicle? We offer pre-owned trade-ins if you want to upgrade."
Month 6: "Annual check-in: Any issues with your purchase? We'd love to help."

Goal: Stay top-of-mind for next purchase cycle (3-5 years)`,
  },

  faqs: {
    finance: `
FINANCE FAQs:
Q: "How quickly can I get financed?"
A: "With pre-qual done, bank decision is 3-5 business days. We submit immediately upon approval."

Q: "What if my credit isn't perfect?"
A: "We work with multiple banks. Some specialize in rebuilding credit. We'll find you an option."

Q: "Can I pay off early without penalty?"
A: "Yes - no early settlement penalties on [Bank]. You'll save interest."

Q: "Deposit required?"
A: "Typically 10% of vehicle price. We can sometimes reduce this for strong applications."`,

    vehicle: `
VEHICLE FAQs:
Q: "What's included in the warranty?"
A: "Full manufacturer warranty covers parts & labour. Service plan covers scheduled maintenance."

Q: "How often do I service?"
A: "Every 10,000 km or 6 months, whichever comes first. Cost is R[X] per service."

Q: "What fuel does [MODEL] use?"
A: "It's a [Petrol/Diesel] vehicle. Real-world consumption is [X] L/100km mixed driving."

Q: "Can I get this model in [Colour]?"
A: "Available colours are [list]. Special order takes 4-6 weeks, add 3% surcharge."`,

    service: `
SERVICE & SUPPORT FAQs:
Q: "Where do I service the vehicle?"
A: "With us or any approved [Brand] service center. Warranty is honored nationwide."

Q: "Can I buy parts elsewhere?"
A: "Yes, but genuine parts + OEM service maintains warranty integrity."

Q: "What if the vehicle breaks down?"
A: "You have 24/7 roadside assistance through [Insurance]. We also handle warranty claims same-day."`,
  }
};

// Export for use in app
window.SCRIPTS = SCRIPTS;
