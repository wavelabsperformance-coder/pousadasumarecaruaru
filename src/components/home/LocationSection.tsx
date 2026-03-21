import { MapPin, Navigation } from "lucide-react";

const LocationSection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Localização</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
          Localização privilegiada em Caruaru
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Estrategicamente localizada, a Pousada Sumaré está próxima dos principais pontos turísticos,
          áreas comerciais e eventos de Caruaru.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987!2d-35.9553061!3d-8.3043328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMTUuNiJTIDM1wrA1NycxOS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Pousada Sumaré - Caruaru PE"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-background rounded-2xl p-6 shadow-card">
            <MapPin className="text-primary mb-3" size={24} />
            <h3 className="font-display text-lg text-foreground mb-2">Endereço</h3>
            <p className="text-sm text-muted-foreground">
              Rua Maria Teresa Vital da Silva<br />
              Loteamento Luar do Sumaré<br />
              Caruaru – Pernambuco – Brasil
            </p>
          </div>
          <div className="bg-background rounded-2xl p-6 shadow-card">
            <Navigation className="text-primary mb-3" size={24} />
            <h3 className="font-display text-lg text-foreground mb-2">Proximidades</h3>
            <ul className="text-sm text-muted-foreground space-y-1.5">
              <li>• Feira de Caruaru</li>
              <li>• Alto do Moura</li>
              <li>• Centro da cidade</li>
              <li>• Polo Comercial</li>
              <li>• Parque 18 de Maio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
