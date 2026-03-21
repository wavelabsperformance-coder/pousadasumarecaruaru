import Layout from "@/components/Layout";
import { MapPin, Calendar, Utensils, Camera, Thermometer, Car, CalendarDays, Hotel, ExternalLink, Star } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Hero
import heroCaruaru from "@/assets/guia/hero-caruaru.jpg";
// Pontos turísticos
import altoDoMoura from "@/assets/guia/alto-do-moura.jpg";
import feiraCaruaru from "@/assets/guia/feira-caruaru.jpg";
import parque18Maio from "@/assets/guia/parque-18-maio.jpg";
import museuForro from "@/assets/guia/museu-forro.jpg";
// Gastronomia
import carneDeSol from "@/assets/guia/carne-de-sol.jpg";
import boloDeRolo from "@/assets/guia/bolo-de-rolo.jpg";
import tapioca from "@/assets/guia/tapioca.jpg";
import queijoCoalho from "@/assets/guia/queijo-coalho.jpg";
import caldoFeijao from "@/assets/guia/caldo-feijao.jpg";
import pamonha from "@/assets/guia/pamonha.jpg";
// Eventos
import saoJoao from "@/assets/guia/sao-joao.jpg";
import fenearte from "@/assets/guia/fenearte.jpg";
import semanaSanta from "@/assets/guia/semana-santa.jpg";
import natalIluminado from "@/assets/guia/natal-iluminado.jpg";
// Pousada
import heroPousada from "@/assets/hero-pousada.jpg";

const pontosTuristicos = [
  {
    name: "Alto do Moura",
    image: altoDoMoura,
    desc: "Capital mundial do barro, berço do Mestre Vitalino. Visite os ateliês e conheça a arte figurativa que encanta o mundo.",
    link: "https://recifemais.com.br/sao-joao/alto-do-moura-2025/",
  },
  {
    name: "Feira de Caruaru",
    image: feiraCaruaru,
    desc: "Patrimônio Cultural Imaterial do Brasil. A maior feira ao ar livre do mundo com artesanato, comidas e cultura nordestina.",
    link: "https://feiradasulancadecaruaru.com.br/home/a-feira/",
  },
  {
    name: "Parque 18 de Maio",
    image: parque18Maio,
    desc: "Principal espaço de eventos da cidade e palco do maior São João do mundo. Um marco cultural de Caruaru.",
    link: "https://pt.wikipedia.org/wiki/Parque_18_de_Maio",
  },
  {
    name: "Museu do Forró",
    image: museuForro,
    desc: "Espaço dedicado à história do forró e da cultura musical pernambucana, com acervo de instrumentos e memórias.",
    link: "https://caruaru-pe.brasil-infos.com/museu-do-forro-luiz-gonzaga-caruaru/",
  },
];

const gastronomia = [
  { name: "Carne de Sol com Macaxeira", image: carneDeSol },
  { name: "Bolo de Rolo", image: boloDeRolo },
  { name: "Tapioca Artesanal", image: tapioca },
  { name: "Queijo Coalho na Brasa", image: queijoCoalho },
  { name: "Caldo de Feijão", image: caldoFeijao },
  { name: "Pamonha e Canjica", image: pamonha },
];

const eventos = [
  {
    name: "São João de Caruaru",
    image: saoJoao,
    desc: "O Maior São João do Mundo! Mais de 30 dias de festa com shows, quadrilhas juninas e gastronomia típica.",
    period: "Junho",
    link: "https://g1.globo.com/pe/caruaru-regiao/sao-joao/2025/noticia/2025/03/19/confira-a-programacao-completa-do-sao-joao-de-caruaru-2025.ghtml",
  },
  {
    name: "Fenearte",
    image: fenearte,
    desc: "Maior feira de artesanato da América Latina, com exposições, workshops e venda de peças de todo o Brasil.",
    period: "Julho",
    link: "https://recifemais.com.br/cultura/fenearte-2025-o-guia-completo/",
  },
  {
    name: "Semana Santa",
    image: semanaSanta,
    desc: "Tradições religiosas com procissões e celebrações culturais que atraem visitantes de todo o país.",
    period: "Março/Abril",
    link: "https://g1.globo.com/pe/caruaru-regiao/noticia/2025/04/01/confira-programacao-da-semana-santa-2025-em-caruaru.ghtml"
  },
  {
    name: "Natal Iluminado",
    image: natalIluminado,
    desc: "Decoração natalina por toda a cidade com espetáculos, atrações e o clima mágico do Natal nordestino.",
    period: "Dezembro",
    link: "https://www.mercatusjornal.com.br/cultura/caruaru-natal-iluminado-espetaculo-de-luz-e-celebracao-marca-o-lancamento-da-maior-decoracao-natalina-da-historia-da-cidade/"
  },
];

const dicas = [
  {
    icon: Thermometer,
    title: "Clima",
    text: "Caruaru tem clima quente durante o dia e agradável à noite. Leve roupas leves e protetor solar.",
  },
  {
    icon: Car,
    title: "Transporte",
    text: "A cidade é bem servida por rodovias. O aeroporto mais próximo é o de Recife (130 km).",
  },
  {
    icon: CalendarDays,
    title: "Melhor Época",
    text: "Junho é o auge com o São João, mas Caruaru encanta o ano inteiro com sua cultura vibrante.",
  },
  {
    icon: Hotel,
    title: "Hospedagem",
    text: "A Pousada Sumaré é a escolha ideal para conforto, localização estratégica e atendimento personalizado.",
  },
];

const GuiaCaruaru = () => (
  <Layout>
    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: "Caruaru",
          description: "Guia turístico de Caruaru, Pernambuco. Descubra pontos turísticos, gastronomia, eventos e onde ficar.",
          touristType: "Cultural tourism",
          includesAttraction: pontosTuristicos.map((p) => ({
            "@type": "TouristAttraction",
            name: p.name,
            description: p.desc,
          })),
        }),
      }}
    />

    {/* 1. HERO */}
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src={heroCaruaru}
          alt="Vista panorâmica de Caruaru, Pernambuco"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
      </div>
      <div className="relative z-10 container text-center py-20">
        <span className="inline-block text-sm font-semibold text-primary-foreground/80 uppercase tracking-widest mb-4 bg-primary/60 backdrop-blur-sm px-4 py-1.5 rounded-full">
          Guia Local
        </span>
        <h1 className="font-display text-5xl md:text-7xl text-primary-foreground mb-4 drop-shadow-lg">
          Guia de Caruaru
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Descubra o melhor de Caruaru: pontos turísticos, gastronomia, cultura e muito mais.
        </p>
        <a
          href={getWhatsAppUrl("Olá! Gostaria de reservar hospedagem na Pousada Sumaré em Caruaru.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm shadow-elevated transition-smooth hover:opacity-90"
        >
          <Hotel size={18} />
          Reservar Hospedagem
        </a>
      </div>
    </section>

    {/* 2. PONTOS TURÍSTICOS */}
    <section className="py-20 bg-background" id="pontos-turisticos">
      <div className="container">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <Camera size={20} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Explore</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Pontos Turísticos</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Conheça os lugares mais icônicos de Caruaru, cidade que respira arte, cultura e tradição nordestina.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pontosTuristicos.map((p) => (
            <div key={p.name} className="group bg-card rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} - Ponto turístico de Caruaru`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:opacity-70"
                  >
                    Saiba mais <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 3. GASTRONOMIA */}
    <section className="py-20 bg-muted/50" id="gastronomia">
      <div className="container">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <Utensils size={20} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Sabores</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Gastronomia</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Caruaru é um verdadeiro polo gastronômico do agreste pernambucano. Não deixe de experimentar os sabores da terra.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gastronomia.map((g) => (
            <div key={g.name} className="group relative rounded-2xl overflow-hidden shadow-card aspect-square">
              <img
                src={g.image}
                alt={`${g.name} - Gastronomia de Caruaru`}
                className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-lg text-primary-foreground drop-shadow-md">{g.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 4. EVENTOS TRADICIONAIS */}
    <section className="py-20 bg-background" id="eventos">
      <div className="container">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <Calendar size={20} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Agenda</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">Eventos Tradicionais</h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Caruaru é palco de eventos grandiosos que celebram a cultura nordestina durante todo o ano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventos.map((e) => (
            <div key={e.name} className="group bg-card rounded-2xl overflow-hidden shadow-card transition-smooth hover:shadow-elevated">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={e.image}
                  alt={`${e.name} - Evento em Caruaru`}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {e.period}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{e.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{e.desc}</p>
                {e.link && (
                  <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:opacity-70"
                  >
                    Saiba mais <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 5. DICAS PARA VISITANTES */}
    <section className="py-20 bg-muted/50" id="dicas">
      <div className="container">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <MapPin size={20} />
          </div>
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Planeje</span>
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-12">Dicas para Visitantes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dicas.map((d) => (
            <div key={d.title} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <d.icon size={24} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* 6. HOSPEDAGEM - CTA */}
    <section className="py-20 bg-background" id="hospedagem">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden shadow-elevated">
          <div className="absolute inset-0">
            <img
              src={heroPousada}
              alt="Pousada Sumaré - Hospedagem em Caruaru"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
          </div>
          <div className="relative z-10 p-10 md:p-16 max-w-xl">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-accent fill-accent" />
              ))}
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4">
              Pousada Sumaré
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-2">
              Conforto, localização estratégica e a melhor experiência em Caruaru.
            </p>
            <p className="text-primary-foreground/60 text-sm mb-8">
              Quartos confortáveis, café da manhã regional, Wi-Fi gratuito e atendimento personalizado para tornar sua estadia inesquecível.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl("Olá! Gostaria de verificar disponibilidade na Pousada Sumaré.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm shadow-elevated transition-smooth hover:opacity-90"
              >
                Reservar Agora
              </a>
              <a
                href="/acomodacoes"
                className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-sm transition-smooth hover:bg-primary-foreground/10"
              >
                Ver Acomodações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default GuiaCaruaru;
