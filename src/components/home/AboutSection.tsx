import receptionImg from "@/assets/reception.jpg";

const AboutSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre a Pousada</span>
          <h2 className="font-display text-3xl md:text-5xl text-foreground">
            Hospitalidade pernambucana com conforto e acolhimento
          </h2>
          <p className="text-muted-foreground leading-relaxed">
           A Pousada Sumaré é o destino perfeito para quem visita Caruaru e valoriza conforto, elegância e uma estadia acolhedora. Com um ambiente cuidadosamente preparado, unimos hospitalidade, tranquilidade e uma localização privilegiada, próxima aos principais pontos da cidade.

Cada experiência foi pensada nos mínimos detalhes para oferecer bem-estar, praticidade, do café da manhã regional, rico em sabores locais, aos quartos equipados para garantir conforto e descanso de qualidade.

Aqui, você se sente em casa, com um toque especial de exclusividade. E para tornar sua viagem ainda mais completa, somos pet friendly, porque momentos especiais merecem ser compartilhados com quem você ama.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada detalhe da nossa pousada foi pensado para proporcionar uma estadia tranquila e memorável.
            Do café da manhã regional aos quartos equipados com todo o conforto, você se sentirá em casa.
          </p>
          <a
            href="/sobre"
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
          >
            Conheça nossa história →
          </a>
        </div>
        <div className="relative">
          <img
            src={receptionImg}
            alt="Recepção da Pousada Sumaré em Caruaru"
            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-card"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-xl px-5 py-3 shadow-elevated">
            <p className="text-2xl font-display">4.8 ⭐</p>
            <p className="text-xs opacity-80">Google Reviews</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
