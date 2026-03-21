import { Wifi, Wind, Tv, Bath, Users } from "lucide-react";
import { Link } from "react-router-dom";
import roomStandard from "@/assets/room-standard.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Quarto Triplo",
    image: roomStandard,
    badge: "Mais Reservado",
    capacity: "2 hóspedes",
    amenities: [Wifi, Wind, Tv, Bath],
    price: "R$ 150",
  },
  {
    name: "Suíte Casal",
    image: roomSuite,
    badge: "Destaque",
    capacity: "2 hóspedes",
    amenities: [Wifi, Wind, Tv, Bath],
    price: "R$ 200",
  },
  {
    name: "Quarto Família",
    image: roomFamily,
    badge: null,
    capacity: "4 hóspedes",
    amenities: [Wifi, Wind, Tv, Bath],
    price: "R$ 280",
  },
];

const AccommodationsSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Acomodações</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
          Quartos pensados para o seu descanso
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div key={room.name} className="bg-background rounded-2xl shadow-card overflow-hidden group transition-smooth hover:shadow-elevated">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={room.image}
                alt={`${room.name} - Pousada Sumaré Caruaru`}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              {room.badge && (
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {room.badge}
                </span>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl text-foreground">{room.name}</h3>
              <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                <Users size={14} />
                <span className="text-sm">{room.capacity}</span>
              </div>
              <div className="flex gap-2 mt-3">
                {room.amenities.map((Icon, i) => (
                  <span key={i} className="p-1.5 bg-muted rounded-md text-muted-foreground">
                    <Icon size={14} />
                  </span>
                ))}
              </div>
              <div className="flex items-end justify-between mt-4 pt-4 border-t border-border">
                <p className="text-foreground">
                  <span className="text-xs text-muted-foreground">A partir de </span>
                  <span className="text-lg font-semibold font-body">{room.price}</span>
                  <span className="text-xs text-muted-foreground">/noite</span>
                </p>
                <Link
                  to="/acomodacoes"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AccommodationsSection;
