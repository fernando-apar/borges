import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  text: string;
  rating: number;
  role: string;
}

export interface NavItem {
  name: string;
  href: string;
}