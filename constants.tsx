
import React from 'react';
import { Template, Review, PricingPlan } from './types';

export const TEMPLATES: Template[] = [
  {
    id: '1',
    title: 'E-Commerce Pro',
    category: 'Retail',
    image: 'https://picsum.photos/seed/shop/800/600',
    description: 'High-conversion retail experiences.'
  },
  {
    id: '2',
    title: 'SaaS Dashboard',
    category: 'Software',
    image: 'https://picsum.photos/seed/tech/800/600',
    description: 'Clean data-driven interfaces.'
  },
  {
    id: '3',
    title: 'Portfolio Luxe',
    category: 'Creative',
    image: 'https://picsum.photos/seed/art/800/600',
    description: 'Minimalist creative displays.'
  },
  {
    id: '4',
    title: 'Corporate Edge',
    category: 'Enterprise',
    image: 'https://picsum.photos/seed/biz/800/600',
    description: 'Professional business presence.'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Arjun Mehta',
    role: 'Founder',
    company: 'Mehta Textiles',
    content: 'NEX Webdeveloper transformed our online presence. Their design for our Kolkata-based textile brand was top-notch!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=arjun'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Marketing Director',
    company: 'Skyline USA',
    content: 'Working from New York, we needed a fast, reliable team. NEX delivered a website that exceeded our expectations.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'Organic Roots India',
    content: 'Brilliant attention to detail. They really understand the Indian small brand ecosystem and global standards.',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?u=priya'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for local Indian small businesses.',
    features: ['Single Page Design', 'Mobile Responsive', 'SEO Basic', '1 Month Support', 'Contact Form']
  },
  {
    name: 'Professional',
    price: '$1299',
    description: 'Our most popular for worldwide startups.',
    features: ['Up to 5 Pages', 'Custom UI/UX', 'SEO Advanced', 'CMS Integration', '3 Months Support', 'Speed Optimization'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale solutions for USA & Global corps.',
    features: ['Unlimited Pages', 'E-commerce Ready', 'Security Audits', 'API Integrations', 'Dedicated Support', 'Brand Strategy']
  }
];

export const BRANDS = [
  'TechIndia', 'BengalStore', 'USA-Connect', 'GlobalFlow', 'KolkataCuisine', 'DelhiDirect'
];
