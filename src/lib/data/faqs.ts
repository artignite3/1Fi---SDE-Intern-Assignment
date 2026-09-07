export interface FAQItem {
  question: string;
  answer: string;
  category: "Intro & Eligibility" | "Using 1Fi & Merchants" | "Repayment & Account";
}

export const FAQS: FAQItem[] = [
  {
    category: "Intro & Eligibility",
    question: "What is 1Fi?",
    answer:
      "1Fi is the world's first mutual fund-backed no-cost EMI platform, letting you shop anything at 0% interest for up to 24 months without redeeming your investments or paying exit loads.",
  },
  {
    category: "Intro & Eligibility",
    question: "Is 1Fi safe and legit?",
    answer:
      "Yes, 1Fi is 100% safe and regulated. Your mutual funds remain securely held in your name at your existing depository/RTA (CAMS / KFintech). We only place a temporary lien through RBI-regulated NBFC lending partners.",
  },
  {
    category: "Intro & Eligibility",
    question: "Is this a credit card?",
    answer:
      "No, 1Fi is not a credit card. It is an investment-backed line of credit / No-Cost EMI solution that doesn't trigger hard credit bureau inquiries.",
  },
  {
    category: "Intro & Eligibility",
    question: "Who is the RBI approved lending partner?",
    answer:
      "All loans and EMI facilities on 1Fi are underwritten and disbursed by RBI-registered Non-Banking Financial Companies (NBFCs) and scheduled commercial banks.",
  },
  {
    category: "Intro & Eligibility",
    question: "What do I need to be eligible?",
    answer:
      "You need an active Indian PAN card, mobile number linked with Aadhaar/MFCentral, and an existing Mutual Fund portfolio value of at least ₹10,000 across equity or debt schemes.",
  },
  {
    category: "Intro & Eligibility",
    question: "Do I need income proof?",
    answer:
      "No salary slips or income tax returns are required. Your credit limit is purely based on the net asset value (NAV) of your approved mutual fund holdings.",
  },
  {
    category: "Intro & Eligibility",
    question: "Does checking my limit affect credit score?",
    answer:
      "No! Checking your eligible limit on 1Fi is a soft check and does not impact your CIBIL or Experian credit score.",
  },
  {
    category: "Using 1Fi & Merchants",
    question: "How do I purchase items on 1Fi Marketplace?",
    answer:
      "Select your product, customize color/storage variants, choose your preferred 0% No-cost EMI tenure (3 to 24 months), verify your portfolio with OTP, and confirm your order!",
  },
  {
    category: "Using 1Fi & Merchants",
    question: "Are there any hidden fees?",
    answer:
      "Zero! No hidden processing fees, zero foreclosure penalties, and 0% interest on all eligible marketplace products.",
  },
  {
    category: "Using 1Fi & Merchants",
    question: "What if markets fall during my EMI tenure?",
    answer:
      "We maintain a healthy collateral buffer (typically 1.3x to 1.5x of loan value). Minor market fluctuations won't affect your active EMI plan. If market drops exceed safety margins, you will be notified in advance.",
  },
  {
    category: "Repayment & Account",
    question: "How do repayments work?",
    answer:
      "Once your loan is sanctioned and order placed, you can setup an autopay (e-NACH / UPI Autopay) in the 1Fi app. EMIs are auto-debited monthly from your registered bank account.",
  },
  {
    category: "Repayment & Account",
    question: "Can I pay early without any charges?",
    answer:
      "Yes, you can prepay or foreclose your EMI plan anytime at zero extra charges or penalties.",
  },
  {
    category: "Repayment & Account",
    question: "When is the lien removed?",
    answer:
      "The moment your last EMI is settled or whenever you foreclose the loan, the lien on your pledged mutual fund units is released within 24 business hours.",
  },
];
