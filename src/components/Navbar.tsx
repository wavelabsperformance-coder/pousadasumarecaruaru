import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/acomodacoes", label: "Acomodações" },
  { to: "/estrutura", label: "Estrutura" },
  { to: "/guia-caruaru", label: "Guia Caruaru" },
  { to: "/contato", label: "Contato" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Pousada Sumaré" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5581997125878?text=Olá! Gostaria de fazer uma reserva na Pousada Sumaré."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-smooth hover:opacity-90"
        >
          Reservar Agora
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <ul className="container py-4 space-y-3">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`block py-2 text-sm font-medium ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/5581997125878?text=Olá! Gostaria de fazer uma reserva na Pousada Sumaré."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Reservar Agora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
