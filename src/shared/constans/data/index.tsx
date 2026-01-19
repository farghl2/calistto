import { Building2, Blocks, Ship, Zap, ShoppingCart, BrainCircuit, BarChart3 } from 'lucide-react';

export const CTA_LINK = "https://api.whatsapp.com/send/?phone=%2B201090784354&text&type=phone_number&app_absent=0";
export const PORTFOLIO_LINK = "/projects";
export const SERVICES_LINK = "/#services";
export const PROCESS_LINK = "/#process";
export const TECH_STACK_LINK = "/#tech";
export const CONTACT_LINK = "/#contact";

export const projectsData = [
  {
    id: 1,
    title: 'Yacht Booking',
    titleHighlight: 'Luxury Travel',
    category: 'Travel & Hospitality',
    image: 'from-blue-600/20 to-indigo-600/20',
    description: 'Luxury yacht chartering marketplace with AI-driven pricing and matching.',
    tags: ['Next.js','AI','Nest.', 'Stripe', 'Yachting'],
    icon: Ship,
    color: 'cyan',
    accentColor: 'cyan',
    stats: [
      { label: 'Bookings', value: '+200%' },
      { label: 'Revenue', value: '$2.5M' },
      { label: 'Rating', value: '4.9★' },
    ],
    details: {
      challenge: 'Booking luxury yachts was a manual, opaque process.',
      solution: 'A seamless booking platform with AI recommendations and dynamic pricing.',
      outcomes: ['200% Increase in Bookings', '$2.5M Revenue', '4.9 Star Rating']
    },
    features: ['AI Itinerary Planning', 'Dynamic Pricing', 'Compareing', 'Instant Booking'],
    demoLink:'https://yacht-pi.vercel.app'
  },
  {
    id: 2,
    title: 'CRM Real Estate',
    titleHighlight: 'AI Powered',
    category: 'Real Estate',
    image: 'from-cyan-600/20 to-blue-600/20',
    description: 'An AI-driven CRM for Real Estate to streamline sales and improve conversion rates.',
    tags: ['Next.js', 'AI/ML', 'Real Estate'],
    icon: Building2,
    color: 'cyan',
    accentColor: 'cyan',
    stats: [
        { label: 'Sales Growth', value: '+35%' },
        { label: 'Conversion Rate', value: '2.5x' },
        { label: 'Time Saved', value: '60hrs/mo' },
    ],
    details: {
        challenge: 'Real estate agents struggle with managing leads and valuing properties accurately.',
        solution: 'We built a CRM with AI capabilities to automate follow-ups and provide accurate property valuations.',
        outcomes: ['35% Increase in Sales', '2.5x Better Conversion', '60 Hours saved per month']
    },
    features: ['Automated Lead Scoring', 'Smart Property Matching', 'AI Valuation Engine', 'Seamless Communication'],
    demoLink:'https://api.whatsapp.com/send/?phone=%2B201090784354&text&type=phone_number&app_absent=0'
  },
  {
    id: 3,
    title: 'NourBorsa',
    titleHighlight: 'Smart Trading',
    category: 'FinTech',
    image: 'from-emerald-600/20 to-teal-600/20',
    description: 'Advanced stock market analysis tool using AI to improve market predictions.',
    tags: ['Next.js',"AI", 'Finance'],
    icon: BarChart3,
    color: 'amber',
    accentColor: 'amber',
    stats: [
        { label: 'Accuracy', value: '94%' },
        { label: 'Users', value: '10k+' },
        { label: 'Data Points', value: '1M/sec' },
    ],
    details: {
        challenge: 'Retail investors lack professional-grade tools for market analysis.',
        solution: 'NourBorsa leverages AI to analyze market trends and provide actionable insights.',
        outcomes: ['94% Prediction Accuracy', '10k+ Active Users', 'Award Winning UI']
    },
    features: ['Predictive Analytics', 'Real-time Alerts', 'Portfolio Optimization', 'Market Sentiment Analysis'],
    demoLink:'https://nourborsa.com'
  }
];
