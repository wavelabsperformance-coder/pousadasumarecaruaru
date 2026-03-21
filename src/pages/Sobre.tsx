import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-pousada.jpg";
import reception from "@/assets/reception.jpg";
import breakfast from "@/assets/breakfast.jpg";

const Sobre = () => (
  <Layout>
    <section className="py-12">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nossa História</span>
          <h1 className="font-display text-4xl md:text-6xl text-foreground mt-2">
            Sobre a Pousada Sumaré
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Mais do que uma hospedagem, uma experiência de acolhimento em Caruaru.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <img src={heroImg} alt="Pousada Sumaré" className="rounded-2xl shadow-card w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="space-y-4">
            <h2 className="font-display text-3xl text-foreground">Hospitalidade que marca</h2>
            <p className="text-muted-foreground leading-relaxed">
A Pousada Sumaré nasceu de um sonho construído com dedicação, história e paixão. Idealizada por um piloto de avião que, ao longo da vida, percorreu diversos destinos, encontrou em Caruaru o lugar perfeito para criar raízes e transformar um projeto pessoal em um espaço acolhedor para receber pessoas.
   </p>
            <p className="text-muted-foreground leading-relaxed">
Há mais de 10 anos, a pousada vem oferecendo uma experiência única, unindo conforto, tranquilidade e um atendimento próximo e cuidadoso — reflexo do carinho de quem pensou em cada detalhe. Antes morador de Recife, seu fundador sempre teve uma ligação especial com Caruaru, cidade que hoje chama de lar e onde decidiu investir em qualidade de vida e hospitalidade.            </p>
            
            <p className="text-muted-foreground leading-relaxed">
A Pousada Sumaré também é um espaço pet friendly, porque aqui entendemos que os animais de estimação fazem parte da família. Amante dos animais, o proprietário fez questão de criar um ambiente onde todos sejam bem-vindos — humanos e seus companheiros de quatro patas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
Seja para descanso, trabalho ou lazer, a Pousada Sumaré é o lugar ideal para quem busca se sentir em casa, com simplicidade, aconchego e uma história inspiradora por trás de cada detalhe. 
                </p>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <h2 className="font-display text-3xl text-foreground">Nossos valores</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                <span><strong className="text-foreground">Acolhimento:</strong> Tratamos cada hóspede como família.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                <span><strong className="text-foreground">Conforto:</strong> Ambientes pensados para o seu descanso.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                <span><strong className="text-foreground">Qualidade:</strong> Excelência em cada detalhe, do café à limpeza.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">4</span>
                <span><strong className="text-foreground">Custo-benefício:</strong> O melhor da hospedagem em Caruaru por um preço justo.</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 order-1 lg:order-2">
            <img src={reception} alt="Recepção" className="rounded-2xl shadow-card w-full aspect-square object-cover" loading="lazy" />
            <img src={breakfast} alt="Café da manhã" className="rounded-2xl shadow-card w-full aspect-square object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Sobre;
