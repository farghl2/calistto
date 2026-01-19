/**
 * Calistto AI Chatbot Context Data
 * 
 * This file contains all the information the AI chatbot needs to know about
 * Calistto to answer user questions accurately. Add or modify data here to
 * update what the chatbot knows.
 */

export const COMPANY_INFO = {
  name: "Calistto",
  tagline: "Intelligent Business Infrastructure",
  description: "AI-powered software solutions for Real Estate, Yachting, and Financial sectors.",
  founder: "Islam Mohamed",
  foundedYear: 2024,
  website: "https://calistto.com",
  email: "contact@calistto.com",
};

export const SERVICES = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Custom web applications built with cutting-edge technologies. We create responsive, fast, and scalable web solutions tailored to your business needs.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS"],
    deliverables: ["Responsive websites", "Web applications", "Admin dashboards", "E-commerce platforms"],
  },
  {
    id: "mobile-development",
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android. Beautiful, performant apps that users love.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    deliverables: ["iOS apps", "Android apps", "Cross-platform apps", "App store deployment"],
  },
  {
    id: "ai-integration",
    name: "AI & Machine Learning",
    description: "Integrate AI capabilities into your business. From chatbots to predictive analytics, we make AI accessible.",
    technologies: ["Python", "TensorFlow", "OpenAI", "Google Gemini", "LangChain"],
    deliverables: ["AI chatbots", "Recommendation systems", "Predictive analytics", "Natural language processing"],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description: "User-centered design that converts. We create intuitive interfaces and seamless user experiences.",
    technologies: ["Figma", "Adobe XD", "Framer", "Prototyping"],
    deliverables: ["User research", "Wireframes", "High-fidelity mockups", "Design systems"],
  },
  {
    id: "cloud-solutions",
    name: "Cloud & DevOps",
    description: "Scalable cloud infrastructure and automated deployment pipelines. We keep your applications running smoothly.",
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    deliverables: ["Cloud migration", "Infrastructure setup", "Monitoring", "Auto-scaling"],
  },
];

import { projectsData } from "@/src/shared/constans/data";

export const PROJECTS = projectsData;

// ... (keep intermediate code) ...



export const FAQ = [
  {
    question: "What technologies does Calistto use?",
    answer: "We primarily use Next.js,Nest.js , React, TypeScript, and Node.js for web development. For mobile, we use React Native or Flutter. Our AI solutions leverage OpenAI, Google Gemini, and custom ML models.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex web application can take 2-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price projects and retainer-based engagements. Pricing depends on project scope, complexity, and timeline. Contact us for a custom quote.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes! We offer maintenance and support packages to keep your applications running smoothly. This includes bug fixes, security updates, and performance optimization.",
  },
  {
    question: "Can you work with existing codebases?",
    answer: "Absolutely. We can audit, refactor, and enhance existing projects. We'll assess your current codebase and provide recommendations for improvements.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in Real Estate, Yachting, and Financial sectors, but our technical expertise applies across industries. We've also worked with healthcare, education, and e-commerce clients.",
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out through our contact form or email us at contact@calistto.com. We'll schedule a discovery call to understand your needs and provide a proposal.",
  },
];

export const TECH_STACK = [
  { name: "React", category: "Frontend", proficiency: "Expert" },
  { name: "Next.js", category: "Frontend", proficiency: "Expert" },
  { name: "Nest.js", category: "Backend", proficiency: "Expert" },
  { name: "TypeScript", category: "Language", proficiency: "Expert" },
  { name: "Node.js", category: "Backend", proficiency: "Expert" },
  { name: "Python", category: "AI/ML", proficiency: "Advanced" },
  { name: "AWS", category: "Cloud", proficiency: "Advanced" },
  { name: "Docker", category: "DevOps", proficiency: "Advanced" },
  { name: "PostgreSQL", category: "Database", proficiency: "Expert" },
  { name: "MongoDB", category: "Database", proficiency: "Advanced" },
  { name: "React Native", category: "Mobile", proficiency: "Advanced" },
];

export const PROCESS = [
  {
    step: 1,
    name: "Discovery",
    description: "We understand your business, goals, and requirements through in-depth consultations.",
  },
  {
    step: 2,
    name: "Strategy",
    description: "We create a detailed project plan, architecture design, and timeline.",
  },
  {
    step: 3,
    name: "Design",
    description: "Our designers create beautiful, user-centered interfaces and prototypes.",
  },
  {
    step: 4,
    name: "Development",
    description: "Our engineers build your solution using best practices and modern technologies.",
  },
  {
    step: 5,
    name: "Testing",
    description: "Rigorous QA ensures your product is bug-free and performs excellently.",
  },
  {
    step: 6,
    name: "Launch",
    description: "We deploy your solution and provide training for your team.",
  },
  {
    step: 7,
    name: "Support",
    description: "Ongoing maintenance and support to keep your product running smoothly.",
  },
];

// Generate the full context string for the AI
export function generateChatbotContext(): string {
  return `
You are Calistto AI, a helpful assistant for Calistto - ${COMPANY_INFO.tagline}.

## About Calistto
${COMPANY_INFO.description}
Founded by ${COMPANY_INFO.founder} in ${COMPANY_INFO.foundedYear}.
Website: ${COMPANY_INFO.website}
Contact: ${COMPANY_INFO.email}

## Our Services
${SERVICES.map(s => `
### ${s.name}
${s.description}
Technologies: ${s.technologies.join(", ")}
Deliverables: ${s.deliverables.join(", ")}
`).join("\n")}

## Our Projects
${PROJECTS.map(p => `
### ${p.title} (${p.category})
${p.description}
Tags: ${p.tags.join(", ")}
Features: ${p.features.join(", ")}
Challenge: ${p.details.challenge}
Solution: ${p.details.solution}
Outcomes: ${p.details.outcomes.join(", ")}
Demo: ${(p as any).demoLink || "N/A"}
`).join("\n")}

## Frequently Asked Questions
${FAQ.map(f => `
Q: ${f.question}
A: ${f.answer}
`).join("\n")}

## Our Technology Stack
${TECH_STACK.map(t => `- ${t.name} (${t.category}) - ${t.proficiency}`).join("\n")}

## Our Process
${PROCESS.map(p => `${p.step}. ${p.name}: ${p.description}`).join("\n")}

---

INSTRUCTIONS:
- Be friendly, professional, and helpful
- If asked about pricing, mention that it varies by project and encourage them to contact us for a quote
- If asked about availability, offer to schedule a consultation
- Always guide users toward contacting us via email (${COMPANY_INFO.email}) for detailed inquiries
- Keep responses concise but informative
- If you don't know something specific about Calistto, be honest and suggest they contact us directly
- You can discuss general software development topics, but always relate back to how Calistto can help
`.trim();
}
