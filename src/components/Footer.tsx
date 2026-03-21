import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/80">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl text-background mb-4">Pousada Sumaré</h3>
          <p className="text-sm leading-relaxed text-background/60">
            Hospedagem confortável em Caruaru, Pernambuco. Sua casa longe de casa com todo o conforto que você merece.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-background/60 hover:text-background transition-smooth">Início</Link></li>
            <li><Link to="/sobre" className="text-background/60 hover:text-background transition-smooth">Sobre</Link></li>
            <li><Link to="/acomodacoes" className="text-background/60 hover:text-background transition-smooth">Acomodações</Link></li>
            <li><Link to="/estrutura" className="text-background/60 hover:text-background transition-smooth">Estrutura</Link></li>
            <li><Link to="/guia-caruaru" className="text-background/60 hover:text-background transition-smooth">Guia Caruaru</Link></li>
            <li><Link to="/contato" className="text-background/60 hover:text-background transition-smooth">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Contato</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2 text-background/60">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>Rua Maria Teresa Vital da Silva, Loteamento Luar do Sumaré – Caruaru, PE</span>
            </li>
            <li className="flex items-center gap-2 text-background/60">
              <Phone size={16} className="shrink-0" />
              <span>(81) 99712- 5878</span>
            </li>
            <li className="flex items-center gap-2 text-background/60">
              <Mail size={16} className="shrink-0" />
              <span>contato@pousadasumare.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-background mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/politica-privacidade" className="text-background/60 hover:text-background transition-smooth">Política de Privacidade</Link></li>
            <li><Link to="/termos-de-uso" className="text-background/60 hover:text-background transition-smooth">Termos de Uso</Link></li>
            <li><Link to="/politica-cookies" className="text-background/60 hover:text-background transition-smooth">Política de Cookies</Link></li>
          </ul>
          <div className="mt-4">
            <a
              href="https://www.instagram.com/pousadasumarecaruaru/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background transition-smooth text-sm"
            >
              📷 @pousadasumarecaruaru
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 text-center text-sm text-background/40">
        © {new Date().getFullYear()} Pousada Sumaré. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
