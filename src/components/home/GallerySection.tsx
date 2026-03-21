import roomStandard from "@/assets/room-standard.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomfamily from "@/assets/room-family.jpg";
import reception from "@/assets/reception.jpg";
import heroImg from "@/assets/outdoor.jpg";
import outdoor from "@/assets/hero-pousada.jpg";

const images = [
  { src: heroImg, alt: "Fachada da Pousada Sumaré", span: "md:col-span-2 md:row-span-2" },
  { src: roomStandard, alt: "Quarto Standard", span: "" },
  { src: roomfamily, alt: "Quarto Família", span: "" },
  { src: roomSuite, alt: "Suíte Casal", span: "" },
  { src: outdoor, alt: "Área externa", span: "" },
  { src: reception, alt: "Recepção", span: "md:col-span-2" },
];

const GallerySection = () => (
  <section className="py-24 bg-muted/30">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Galeria</span>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mt-2">
          Conheça nossos espaços
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <div key={i} className={`${img.span} overflow-hidden rounded-2xl`}>
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover aspect-square transition-smooth hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
