import Layout from "@/components/Layout";

const PoliticaPrivacidade = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-8">Política de Privacidade</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>A Pousada Sumaré está comprometida com a proteção de seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
          <h2 className="font-display text-xl text-foreground">1. Dados Coletados</h2>
          <p>Coletamos dados como nome, e-mail, telefone e preferências de hospedagem quando você entra em contato conosco ou realiza uma reserva.</p>
          <h2 className="font-display text-xl text-foreground">2. Uso dos Dados</h2>
          <p>Seus dados são utilizados exclusivamente para processar reservas, comunicar-se com você e melhorar nossos serviços.</p>
          <h2 className="font-display text-xl text-foreground">3. Compartilhamento</h2>
          <p>Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para o cumprimento de obrigações legais.</p>
          <h2 className="font-display text-xl text-foreground">4. Segurança</h2>
          <p>Adotamos medidas técnicas e organizacionais para proteger seus dados contra acessos não autorizados.</p>
          <h2 className="font-display text-xl text-foreground">5. Seus Direitos</h2>
          <p>Você tem direito a acessar, corrigir, excluir e solicitar a portabilidade de seus dados. Entre em contato conosco para exercer esses direitos.</p>
          <h2 className="font-display text-xl text-foreground">6. Contato</h2>
          <p>Para dúvidas sobre esta política, entre em contato pelo e-mail contato@pousadasumare.com.br.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PoliticaPrivacidade;
