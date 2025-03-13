import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import JoinTeam from "./pages/JoinTeam";
import Contact from "./pages/Contact";
import Brochure from "./pages/Brochure";
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <NavBar setCurrentSection={(section: string) => console.log(section)} />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/join-team" element={<JoinTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brochure" element={<Brochure />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
