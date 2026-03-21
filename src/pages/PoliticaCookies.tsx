import Layout from "@/components/Layout";

const PoliticaCookies = () => (
  <Layout>
    <section className="py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-8">Política de Cookies</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <p>Este site utiliza cookies para melhorar sua experiência de navegação.</p>
          <h2 className="font-display text-xl text-foreground">O que são Cookies?</h2>
          <p>Cookies são pequenos arquivos de texto armazenados no seu dispositivo ao visitar um site.</p>
          <h2 className="font-display text-xl text-foreground">Tipos de Cookies Utilizados</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Essenciais:</strong> Necessários para o funcionamento do site.</li>
            <li><strong>Analíticos:</strong> Nos ajudam a entender como o site é utilizado.</li>
          </ul>
          <h2 className="font-display text-xl text-foreground">Gerenciamento</h2>
          <p>Você pode desativar cookies nas configurações do seu navegador. No entanto, isso pode afetar a funcionalidade do site.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default PoliticaCookies;
