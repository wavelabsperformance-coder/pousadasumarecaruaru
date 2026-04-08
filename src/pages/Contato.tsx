import { useState } from "react";
import Layout from "@/components/Layout";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const Contato = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome}.\n${form.mensagem}\n\nContato: ${form.email} / ${form.telefone}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <Layout>
      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contato</span>
            <h1 className="font-display text-4xl md:text-6xl text-foreground mt-2">
              Entre em Contato
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Estamos prontos para ajudar você. Fale conosco!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-card rounded-2xl p-6 shadow-card space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Endereço</h3>
                    <p className="text-sm text-muted-foreground">Rua Maria Teresa Vital da Silva, Loteamento Luar do Sumaré – Caruaru, PE</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">Telefone</h3>
                    <p className="text-sm text-muted-foreground">(81) 99712-5878</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">E-mail</h3>
                    <p className="text-sm text-muted-foreground">pousadasumare1@gmail.com</p>
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] w-full px-6 py-3 rounded-lg font-semibold text-sm transition-smooth hover:opacity-90"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </a>

              <div className="rounded-2xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987!2d-35.9553061!3d-8.3043328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMTUuNiJTIDM1wrA1NycxOS4xIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Localização Pousada Sumaré"
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-card space-y-4">
              <h2 className="font-display text-2xl text-foreground mb-2">Envie uma mensagem</h2>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Nome completo</label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">E-mail</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Telefone</label>
                <input
                  type="tel"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full bg-muted rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm transition-smooth hover:opacity-90"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
