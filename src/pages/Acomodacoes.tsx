import Layout from "@/components/Layout";
import { Wifi, Wind, Tv, Bath, Users, Refrigerator } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import roomStandard from "@/assets/room-standard.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomFamily from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Quarto Standard",
    image: roomStandard,
    description: "Quarto confortável e funcional, ideal para casais ou viajantes individuais. Equipado com tudo que você precisa para uma estadia tranquila.",
    capacity: "Até 2 hóspedes",
    amenities: ["Ar-condicionado", "TV de tela plana", "Wi-Fi gratuito", "Banheiro privativo", "Frigobar", "Roupa de cama premium"],
    price: "R$ 150",
  },
  {
    name: "Suíte Casal",
    image: roomSuite,
    description: "Suíte espaçosa com decoração acolhedora e banheiro privativo amplo. Perfeita para quem busca mais conforto e privacidade.",
    capacity: "Até 2 hóspedes",
    amenities: ["Ar-condicionado", "TV de tela plana", "Wi-Fi gratuito", "Banheiro privativo amplo", "Frigobar", "Mesa de trabalho"],
    price: "R$ 200",
  },
  {
    name: "Quarto Família",
    image: roomFamily,
    description: "Espaçoso quarto familiar com duas camas, ideal para famílias ou grupos. Conforto e praticidade para todos.",
    capacity: "Até 4 hóspedes",
    amenities: ["Ar-condicionado", "TV de tela plana", "Wi-Fi gratuito", "Banheiro privativo", "Frigobar", "Espaço amplo"],
    price: "R$ 280",
  },
];

const Acomodacoes = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Acomodações</span>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            Nossas Acomodações
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Quartos confortáveis e bem equipados para a sua melhor estadia em Caruaru.
          </p>
        </div>

        <div className="space-y-12">
          {rooms.map((room, i) => (
            <div key={room.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img
                  src={room.image}
                  alt={`${room.name} - Pousada Sumaré Caruaru`}
                  className="w-full aspect-[4/3] object-cover rounded-2xl shadow-card"
                  loading="lazy"
                />
              </div>
              <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h2 className="font-display text-3xl text-foreground">{room.name}</h2>
                <p className="text-muted-foreground">{room.description}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {room.amenities.map((a) => (
                    <span key={a} className="bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <p className="text-foreground">
                    <span className="text-sm text-muted-foreground">A partir de </span>
                    <span className="text-2xl font-semibold font-body">{room.price}</span>
                    <span className="text-sm text-muted-foreground">/noite</span>
                  </p>
                  <a
                    href={getWhatsAppUrl(`Olá! Tenho interesse no ${room.name} da Pousada Sumaré.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold transition-smooth hover:opacity-90"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Acomodacoes;
