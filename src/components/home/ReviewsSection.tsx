import { Star } from "lucide-react";

const reviews = [
  { name: "Maria Clara S.", text: "Lugar maravilhoso! Muito limpo, confortável e com ótimo atendimento. O café da manhã é delicioso. Recomendo demais!", rating: 5 },
  { name: "João Pedro A.", text: "Excelente custo-benefício! Localização ótima, perto de tudo em Caruaru. Voltaremos com certeza!", rating: 5 },
  { name: "Ana Beatriz L.", text: "Pousada muito aconchegante. Os quartos são limpos e confortáveis. Atendimento nota 10!", rating: 5 },
  { name: "Carlos Eduardo M.", text: "Estivemos durante o São João e foi perfeito. Ambiente tranquilo e bem localizado. Super indico!", rating: 5 },
];

const ReviewsSection = () => (
  <section className="py-24">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Avaliações</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
          O que os hóspedes dizem
        </h2>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-primary fill-primary" />
            ))}
          </div>
          <span className="text-lg font-semibold text-foreground">4.8</span>
          <span className="text-sm text-muted-foreground">• 120+ avaliações no Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex gap-0.5 mb-3">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-xs font-semibold text-muted-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
