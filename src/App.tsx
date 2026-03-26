import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Acomodacoes from "./pages/Acomodacoes";
import Estrutura from "./pages/Estrutura";
import GuiaCaruaru from "./pages/GuiaCaruaru";
import Contato from "./pages/Contato";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaCookies from "./pages/PoliticaCookies";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/acomodacoes" element={<Acomodacoes />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/guia-caruaru" element={<GuiaCaruaru />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
