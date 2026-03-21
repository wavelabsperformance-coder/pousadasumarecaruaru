import { useState } from "react";
import { CalendarDays, Users, Search } from "lucide-react";
import { getBookingWhatsAppUrl } from "@/lib/whatsapp";
import heroImg from "@/assets/hero-pousada.jpg";
import logoSumare from "@/assets/logo-sumare.png";

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const handleSearch = () => {
    const url = getBookingWhatsAppUrl(checkIn, checkOut, guests);
    window.open(url, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Pousada Sumaré - Hospedagem em Caruaru"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>

      {/* Content */}

      {/* Booking Module */}
      <div className="relative z-10 container pb-6">
        <div className="bg-background/95 backdrop-blur-md rounded-2xl shadow-elevated p-4 md:p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <CalendarDays size={14} />
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-muted rounded-lg px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <CalendarDays size={14} />
                Check-out
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-muted rounded-lg px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Users size={14} />
                Hóspedes
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-muted rounded-lg px-3 py-2.5 text-sm font-medium text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "hóspede" : "hóspedes"}</option>
                ))}
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-2.5 text-sm font-semibold flex items-center justify-center gap-2 transition-smooth hover:opacity-90"
              >
                <Search size={16} />
                Verificar Disponibilidade
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
