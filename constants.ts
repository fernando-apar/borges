import { Wrench, Snowflake, Wind, ShieldCheck, Thermometer, Settings } from 'lucide-react';
import { ServiceItem, TestimonialItem, NavItem } from './types';

// Company Info
export const WHATSAPP_NUMBER = "5514991218384";
export const WHATSAPP_MESSAGE = "Olá, tenho interesse no serviço de climatização.";
export const LOGO_URL = "https://fal.media/files/penguin/v2H7_wE5HqW7bL4Xn-m6e_image.png"; 

export const NAV_ITEMS: NavItem[] = [
  { name: 'Início', href: '#home' },
  { name: 'Benefícios', href: '#benefits' },
  { name: 'Serviços', href: '#services' },
  { name: 'Sobre', href: '#about' },
  { name: 'Avaliações', href: '#testimonials' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Instalação Completa",
    description: "Instalação profissional de Split, Cassete e Piso Teto seguindo todas as normas técnicas.",
    icon: Wrench
  },
  {
    id: 2,
    title: "Manutenção Preventiva",
    description: "Aumente a vida útil do seu aparelho e economize energia com revisões periódicas.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Higienização Profunda",
    description: "Elimine fungos e bactérias. Respire um ar puro e livre de odores desagradáveis.",
    icon: Snowflake
  },
  {
    id: 4,
    title: "Reinstalação",
    description: "Mudou de casa? Fazemos a remoção e reinstalação do seu equipamento com segurança.",
    icon: Settings
  },
  {
    id: 5,
    title: "Carga de Gás",
    description: "Seu ar parou de gelar? Identificamos vazamentos e repomos o gás refrigerante.",
    icon: Wind
  },
  {
    id: 6,
    title: "Consultoria Técnica",
    description: "Ajudamos você a escolher o aparelho ideal (BTUs) para o tamanho do seu ambiente.",
    icon: Thermometer
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Ricardo Mendes",
    role: "Proprietário de Loja",
    text: "Serviço impecável. O técnico chegou no horário, instalou dois aparelhos na minha loja e não deixou nenhuma sujeira. Recomendo!",
    rating: 5
  },
  {
    id: 2,
    name: "Fernanda Souza",
    role: "Residencial",
    text: "Meu ar estava com cheiro ruim e pingando. Após a higienização da Borges, parece novo! Muito obrigada pelo capricho.",
    rating: 5
  },
  {
    id: 3,
    name: "Carlos Almeida",
    role: "Escritório",
    text: "Profissionalismo nota 10. Explicou tudo sobre o funcionamento e fez uma instalação muito limpa visualmente.",
    rating: 5
  },
  {
    id: 4,
    name: "Ana Beatriz",
    role: "Apartamento",
    text: "Preço justo e qualidade excelente. Já indiquei para minha família toda. A economia de energia foi notável após a manutenção.",
    rating: 5
  }
];