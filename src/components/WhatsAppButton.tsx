import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] p-4 rounded-full shadow-elevated transition-smooth hover:scale-110 will-change-transform"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={28} fill="currentColor" />
  </a>
);

export default WhatsAppButton;
