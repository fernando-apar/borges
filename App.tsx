import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, CheckCircle2, Star, MessageCircle, ChevronRight, Phone, MapPin, Wind, ShieldCheck } from 'lucide-react';
import { NAV_ITEMS, SERVICES, TESTIMONIALS, WHATSAPP_NUMBER, WHATSAPP_MESSAGE, LOGO_URL } from './constants';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import SectionTitle from './components/SectionTitle';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (id === '#home') {
       window.scrollTo({ top: 0, behavior: 'smooth' });
       return;
    }

    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 100; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-end items-center">
          {/* Logo Removed */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-medium hover:text-red-500 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-bold transition-transform transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <MessageCircle size={18} />
              Chamar no WhatsApp
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-gray-800" />
            ) : (
              <Menu className={isScrolled ? 'text-blue-900' : 'text-white'} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
             <img src={LOGO_URL} alt="Logo" className="h-24 w-auto object-contain mb-4" />
             {NAV_ITEMS.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="text-2xl font-bold text-blue-900"
              >
                {item.name}
              </a>
            ))}
            <a 
              href={whatsappLink}
              className="mt-4 bg-green-500 text-white px-8 py-3 rounded-full text-xl font-bold flex items-center gap-2"
            >
              <MessageCircle /> WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:py-32">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1617105267232-26338573fc02?q=80&w=2000&auto=format&fit=crop" 
            alt="Ar Condicionado Moderno" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-blue-800/40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 max-w-4xl"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-blue-800/50 border border-blue-400/30 text-sky-300 text-sm font-semibold mb-2 backdrop-blur-sm">
              Especialista em Climatização
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Instalação e Manutenção com <span className="text-sky-400">Qualidade</span> e <span className="text-red-500">Garantia!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Atendo residências e empresas com rapidez, segurança e profissionalismo. Tenha o conforto que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-bold px-8 py-4 rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] transition-all flex items-center justify-center gap-2 animate-pulse"
              >
                Solicitar Atendimento
                <ChevronRight />
              </a>
              <a 
                href="#services"
                onClick={(e) => scrollToSection(e, '#services')}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-semibold px-8 py-4 rounded-lg backdrop-blur-sm transition-all text-center"
              >
                Ver Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- MENTAL TRIGGERS (BENEFITS) --- */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Star, title: "Economia de Energia", text: "Instalação correta reduz o consumo em até 30%." },
               { icon: CheckCircle2, title: "Zero Dor de Cabeça", text: "Técnicos certificados e serviço com garantia total." },
               { icon: Wind, title: "Ar Mais Puro", text: "Higienização que elimina ácaros, fungos e bactérias." },
               { icon: ShieldCheck, title: "Durabilidade", text: "Proteja seu investimento com manutenção preventiva." },
             ].map((item, index) => (
               <motion.div 
                 key={index}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-500"
               >
                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-900">
                   <item.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Soluções completas para climatização residencial e comercial." 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-blue-900 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10">
                  <service.icon size={100} />
                </div>
                
                <div className="w-14 h-14 bg-blue-900 text-white group-hover:bg-white group-hover:text-blue-900 rounded-xl flex items-center justify-center mb-6 shadow-md transition-colors duration-300">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-white mb-3 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 mb-6 transition-colors duration-300">
                  {service.description}
                </p>
                
                <a 
                  href={`${whatsappLink}&text=Tenho interesse em ${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-red-600 font-bold group-hover:text-sky-300 hover:underline transition-colors"
                >
                  Quero este serviço <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
                {/* Image Placeholder for Technician/Work */}
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop" 
                    alt="Técnico trabalhando" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Floating Experience Card */}
                <div className="absolute -bottom-6 -right-6 bg-white text-blue-900 p-6 rounded-xl shadow-xl max-w-xs hidden sm:block">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">Excelência</span>
                  </div>
                  <p className="text-sm font-medium">Garantia de serviço limpo, organizado e pontual.</p>
                </div>
             </motion.div>
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-sm font-bold tracking-widest text-sky-400 uppercase">Sobre Mim</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Compromisso com o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-white">Conforto Térmico</span>
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Sou um instalador especializado com vasta experiência em sistemas de climatização residencial e comercial. Na Borges Climatização, não vendemos apenas um serviço, entregamos tranquilidade.
            </p>
            <p className="text-blue-100 text-lg leading-relaxed">
              Trabalho com responsabilidade, transparência nos orçamentos e a garantia de um serviço bem feito desde a primeira visita. Utilizo ferramentas de ponta para assegurar a máxima eficiência do seu equipamento.
            </p>
            <ul className="space-y-3 pt-4">
              {['Certificação Técnica', 'Ferramental Adequado', 'Atendimento Humanizado'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-400" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="O que dizem nossos clientes" 
            subtitle="Confiança se conquista com trabalho sério. Veja algumas avaliações." 
          />

          <div className="grid md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                    <img 
                      src={`https://picsum.photos/seed/${t.id + 50}/200/200`} 
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                  <div>
                    <h4 className="font-bold text-blue-900">{t.name}</h4>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 bg-blue-900 relative overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
               Não sofra com o calor (ou o frio)!
             </h2>
             <p className="text-xl text-blue-200 mb-8">
               Agende sua instalação ou manutenção hoje mesmo e garanta mais conforto para sua casa ou empresa. Agenda aberta para esta semana.
             </p>
             <a 
               href={whatsappLink}
               className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:scale-105 transition-all animate-bounce-slow"
             >
               <MessageCircle size={28} />
               Falar Agora no WhatsApp
             </a>
             <p className="mt-4 text-sm text-blue-300 opacity-80">
               Orçamento sem compromisso • Resposta rápida
             </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={LOGO_URL} alt="Borges Climatização" className="h-12 w-auto object-contain mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              Especialistas em ar-condicionado. Qualidade técnica, honestidade e preço justo para você e sua família.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato Rápido</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={18} className="text-red-500" />
                <a href={`tel:${WHATSAPP_NUMBER}`}>14 99121-8384</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white transition-colors">
                 <MessageCircle size={18} className="text-green-500" />
                 <a href={whatsappLink}>14 99121-8384 (WhatsApp)</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-500" />
                <span>Atendendo toda a região</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.slice(0, 4).map(item => (
                <li key={item.name}>
                  <a href={item.href} onClick={(e) => scrollToSection(e, item.href)} className="hover:text-sky-400 transition-colors">{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Borges Climatização. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating Button Component */}
      <FloatingWhatsapp />
    </div>
  );
};

export default App;