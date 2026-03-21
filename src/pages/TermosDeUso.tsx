import Layout from "@/components/Layout";

const TermosDeUso = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-8">Termos de Uso</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>Ao acessar e utilizar este site, você concorda com os seguintes termos e condições.</p>
          <h2 className="font-display text-xl text-foreground">1. Uso do Site</h2>
          <p>Este site destina-se à divulgação dos serviços da Pousada Sumaré e à facilitação do contato para reservas.</p>
          <h2 className="font-display text-xl text-foreground">2. Reservas</h2>
          <p>As reservas são realizadas via WhatsApp e estão sujeitas à disponibilidade. A confirmação depende de contato direto com a pousada.</p>
          <h2 className="font-display text-xl text-foreground">3. Propriedade Intelectual</h2>
          <p>Todo o conteúdo deste site, incluindo textos, imagens e layout, é de propriedade da Pousada Sumaré e protegido por leis de direitos autorais.</p>
          <h2 className="font-display text-xl text-foreground">4. Responsabilidade</h2>
          <p>A Pousada Sumaré não se responsabiliza por danos decorrentes do uso indevido deste site.</p>
          <h2 className="font-display text-xl text-foreground">5. Alterações</h2>
          <p>Estes termos podem ser atualizados a qualquer momento. Recomendamos a revisão periódica.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default TermosDeUso;
