// Shared reply engine — used by the web widget AND the WhatsApp Business API webhook.
// Swap this function's body for an LLM-backed responder later without touching callers.
const FALLBACKS = [
  "Got it — one of our specialists can go deeper on that. Want to book a free consultation?",
  "Happy to help further — I can loop in our team for the specifics. Shall I pass this along?",
  "That's a great one for our specialists to walk you through live. Want me to set that up?"
];
let fallbackIdx = 0;

export function getReply(message: string, context?: { lastWasBooking?: boolean }): string {
  const m = message.toLowerCase().trim();
  if (/^(yes|yep|yeah|sure|ok|okay|please|yes please)\W*$/.test(m)) {
    if (context?.lastWasBooking) return "Great — head to the Contact page and drop your details, or share your email/phone here and we'll reach out within a business day.";
    return "Sounds good — could you tell me a bit more about what you're looking for (ERP, AI automation, or marketing)?";
  }
  if (m.includes('price') || m.includes('cost') || m.includes('pricing')) return "Every plan is scoped to your modules and users, so pricing is a custom quote. Want me to connect you with our team?";
  if (m.includes('demo')) return "I can get a free demo booked for you — head to the Contact page and we'll follow up within a business day.";
  if (m.includes('erp')) return "Our ERP covers Sales, Inventory, HRMS, Finance and Manufacturing in one system. Want details on a specific module?";
  if (m.includes('ai')) return "Insignia's AI layer handles document reading, WhatsApp automation, voice AI and predictive analytics. What would you like automated?";
  if (m.includes('hi') || m.includes('hello') || m.includes('hey')) return "Hello! Happy to help — are you looking into ERP, AI automation, or digital marketing?";
  const reply = FALLBACKS[fallbackIdx % FALLBACKS.length];
  fallbackIdx++;
  return reply;
}
