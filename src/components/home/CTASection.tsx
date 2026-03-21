import { getWhatsAppUrl } from "@/lib/whatsapp";

const CTASection = () => (
  <section className="py-24">
    <div className="container">
      <div className="bg-primary rounded-3xl p-10 md:p-16 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
          Reserve sua estadia em Caruaru com conforto e tranquilidade
        </h2>
        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Entre em contato conosco e garanta a melhor hospedagem em Caruaru. Atendimento rápido e personalizado.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl("Olá! Gostaria de fazer uma reserva na Pousada Sumaré.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-foreground px-8 py-3 rounded-lg font-semibold text-sm transition-smooth hover:opacity-90"
          >
            Reservar Agora
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-sm transition-smooth hover:bg-primary-foreground/10"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
