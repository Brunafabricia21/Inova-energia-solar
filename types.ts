import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum QuoteType {
  RESIDENTIAL = 'Residencial',
  COMMERCIAL = 'Comercial',
  INDUSTRIAL = 'Industrial',
  RURAL = 'Rural'
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  monthlyBill: number;
  type: QuoteType;
}