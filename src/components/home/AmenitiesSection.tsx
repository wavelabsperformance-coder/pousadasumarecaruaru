import { Wifi, Car, Coffee, Bed, Users, Shield, MapPin, Sparkles } from "lucide-react";

const amenities = [
  { icon: Wifi, label: "Wi-Fi Gratuito", desc: "Internet rápida em todos os ambientes" },
  { icon: Car, label: "Estacionamento", desc: "Estacionamento gratuito e seguro" },
  { icon: Coffee, label: "Café da Manhã", desc: "Café regional incluso na diária" },
  { icon: Bed, label: "Quartos Confortáveis", desc: "Camas de qualidade e roupa de cama premium" },
  { icon: Users, label: "Pet Friendly", desc: "Consulte as políticas e taxas" },
  { icon: Shield, label: "Ambiente Seguro", desc: "Tranquilidade para sua família" },
  { icon: Sparkles, label: "Limpeza Impecável", desc: "Higiene e cuidado em cada detalhe" },
  { icon: MapPin, label: "Localização Estratégica", desc: "Próxima aos pontos turísticos" },
];

const AmenitiesSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Comodidades</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
          Tudo para sua estadia perfeita
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {amenities.map((a) => (
          <div key={a.label} className="bg-card rounded-2xl p-6 text-center shadow-card transition-smooth hover:shadow-elevated">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-3">
              <a.icon size={22} />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">{a.label}</h3>
            <p className="text-xs text-muted-foreground">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
