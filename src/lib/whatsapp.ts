const WHATSAPP_NUMBER = "5581997125878";

export function getWhatsAppUrl(message?: string) {
  const msg = message || "Olá! Gostaria de consultar disponibilidade na Pousada Sumaré.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getBookingWhatsAppUrl(checkIn?: string, checkOut?: string, guests?: number) {
  const parts = ["Olá! Gostaria de consultar disponibilidade na Pousada Sumaré."];
  if (checkIn) parts.push(`Check-in: ${checkIn}`);
  if (checkOut) parts.push(`Check-out: ${checkOut}`);
  if (guests) parts.push(`Hóspedes: ${guests}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(parts.join("\n"))}`;
}
