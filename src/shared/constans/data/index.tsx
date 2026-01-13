import { Building2, Blocks, Ship, Zap, ShoppingCart, BrainCircuit } from 'lucide-react';

export const CTA_LINK = "https://wa.me/+201020002506";
export const PORTFOLIO_LINK = "/projects";
export const SERVICES_LINK = "/#services";
export const PROCESS_LINK = "/#process";
export const TECH_STACK_LINK = "/#tech";
export const CONTACT_LINK = "/#contact";

export const projectsData = [
  {
    id: 1,
    title: 'Real Estate AI',
    category: 'AI & Machine Learning',
    image: 'from-cyan-600/20 to-blue-600/20',
    description: 'An intelligent property recommendation engine using computer vision for automated valuation and matching.',
    tags: ['Next.js', 'Python', 'TensorFlow'],
    icon: Building2,
    color: 'cyan',
    details: {
        challenge: 'The real estate market suffers from inconsistent property valuations and manual, time-consuming matching processes for buyers and agents.',
        solution: 'We developed a computer vision-powered platform that analyzes property images to extract features automatically, combined with historical data to generate accurate valuations and personalized recommendations.',
        outcomes: ['95% Valuation Accuracy', '40% Reduction in time-to-sale', '2x Increase in agent productivity']
    },
    features: ['Automated Property Valuation', 'Visual Similarity Search', 'Neighborhood Trend Analysis', 'Agent Workflow Automation']
  },
  {
    id: 2,
    title: 'Supply Chain Chain',
    category: 'Blockchain',
    image: 'from-amber-600/20 to-orange-600/20',
    description: 'Decentralized logistics platform ensuring transparency and traceability for global shipping companies.',
    tags: ['Solidity', 'Web3.js', 'Node.js'],
    icon: Blocks,
    color: 'amber',
    details: {
        challenge: 'Global shipping faces issues with transparent tracking, document verification, and trust between multi-national parties.',
        solution: 'A permissioned blockchain network was implemented to record every shipment milestone immutably, ensuring all parties have a single source of truth.',
        outcomes: ['100% Traceability', 'Zero paper documentation required', '30% Faster dispute resolution']
    },
    features: ['Real-time Cargo Tracking', 'Smart Contract Escrow', 'Immutable Document Storage', 'IoT Sensor Integration']
  },
  {
    id: 3,
    title: 'Yacht Booking App',
    category: 'Mobile Application',
    image: 'from-blue-600/20 to-indigo-600/20',
    description: 'Luxury yacht chartering marketplace with real-time availability and dynamic pricing algorithms.',
    tags: ['React Native', 'Firebase', 'Stripe'],
    icon: Ship,
    color: 'cyan',
    details: {
        challenge: 'Luxury yacht chartering is traditionally a high-friction, offline process with opaque pricing and availability.',
        solution: 'We built a sleek, cross-platform mobile app offering real-time booking, 360-degree virtual tours, and a dynamic pricing algorithm based on demand and seasonality.',
        outcomes: ['$2.5M Revenue in Year 1', '4.9 Star Average Rating', '200% Increase in Direct Bookings']
    },
    features: ['360° Virtual Tours', 'Dynamic Pricing Engine', 'Concierge Chat Support', 'Secure Payment Gateway']
  },
  {
    id: 4,
    title: 'FinTech Dashboard',
    category: 'SaaS Platform',
    image: 'from-emerald-600/20 to-teal-600/20',
    description: 'Comprehensive financial analytics dashboard for banking institutions with predictive modeling.',
    tags: ['Vue.js', 'D3.js', 'FastAPI'],
    icon: Zap,
    color: 'amber',
    details: {
        challenge: 'Banks struggle to present complex financial data to modern users in an understandable and actionable way.',
        solution: 'A high-performance dashboard using D3.js for complex visualizations, backed by Python-based predictive models to forecast cash flow and investment opportunities.',
        outcomes: ['User Engagement up 60%', 'Data Processing speed 10x faster', 'Award-winning UX Design']
    },
    features: ['Predictive Cash Flow', 'Interactive Data Visualizations', 'Automated Reporting', 'Role-based Access Control']
  },
  {
    id: 5,
    title: 'E-Commerce Superapp',
    category: 'E-Commerce',
    image: 'from-purple-600/20 to-pink-600/20',
    description: 'Multi-vendor marketplace with integrated delivery logistics and AI-powered product search.',
    tags: ['Next.js', 'GraphQL', 'PostgreSQL'],
    icon: ShoppingCart,
    color: 'cyan',
    details: {
        challenge: 'Managing a multi-vendor ecosystem with complex logistics and inventory synchronization is difficult at scale.',
        solution: 'A headless commerce architecture utilizing GraphQL for flexibility, with a custom-built logistics engine for optimizing delivery routes in real-time.',
        outcomes: ['50k+ Daily Active Users', '99.99% System Uptime', '35% Higher Cart Completion Rate']
    },
    features: ['Unified Cart System', 'AI Product Recommendations', 'Real-time Deployment Tracking', 'Vendor Analytics Portal']
  },
  {
    id: 6,
    title: 'Smart City OS',
    category: 'IoT & Cloud',
    image: 'from-slate-600/20 to-gray-600/20',
    description: 'Centralized operating system for managing smart city infrastructure, traffic, and energy consumption.',
    tags: ['Go', 'Kubernetes', 'MQTT'],
    icon: BrainCircuit,
    color: 'amber',
    details: {
        challenge: 'Cities generate massive amounts of data from disparate sensors and systems that rarely communicate, leading to inefficiency.',
        solution: 'We architected a centralized IoT operating system that ingests millions of data points per second, orchestrating traffic lights, energy grids, and emergency services in real-time.',
        outcomes: ['15% Energy Savings', '20% Reduction in Traffic Congestion', 'Winner of Smart City Award 2025']
    },
    features: ['Traffic Flow Optimization', 'Smart Grid Management', 'Emergency Response Coordination', 'Citizen Feedback App']
  }
];
