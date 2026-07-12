export const WHATSAPP_NUMBER = "447587505429"; // +44 7587 505429, formatted for wa.me (no +, no spaces)
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi! I'd like to book an appointment at Izza Nail Studio.";

export function getWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}