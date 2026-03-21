import Layout from "@/components/Layout";
import { Car, Coffee, Users, Sparkles, Wifi, Shield, Bed, MapPin } from "lucide-react";
import outdoor from "@/assets/outdoor.jpg";
import breakfast from "@/assets/breakfast.jpg";
import reception from "@/assets/reception.jpg";

const services = [
  { icon: Car, title: "Estacionamento Gratuito", desc: "Vagas privativas com segurança 24h." },
  { icon: Coffee, title: "Café da Manhã Regional", desc: "Delicioso café com sabores da terra, incluso na diária." },
  { icon: Users, title: "Recepção Dedicada", desc: "Equipe atenciosa para atender você." },
  { icon: Sparkles, title: "Limpeza Diária", desc: "Limpeza completa todos os dias." },
  { icon: Wifi, title: "Wi-Fi em Todos os Ambientes", desc: "Internet rápida para trabalho e lazer." },
  { icon: Shield, title: "Segurança", desc: "Ambiente monitorado e seguro." },
  { icon: Bed, title: "Enxoval Premium", desc: "Roupa de cama e toalhas de alta qualidade." },
  { icon: MapPin, title: "Localização Estratégica", desc: "Fácil acesso aos principais pontos de Caruaru." },
];

const Estrutura = () => (
  <Layout>
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Estrutura</span>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            Nossa Estrutura
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Infraestrutura completa para garantir o máximo conforto durante sua estadia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-6 shadow-card">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 text-primary rounded-xl mb-3">
                <s.icon size={20} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{s.title}</h3>
              <p className="text-xs text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src={outdoor} alt="Área externa" className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover" loading="lazy" />
          <img src={breakfast} alt="Café da manhã" className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover" loading="lazy" />
          <img src={reception} alt="Recepção" className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  </Layout>
);

export default Estrutura;
