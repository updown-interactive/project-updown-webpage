import { AppPng } from "./assets";

export interface Project {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    longDescription: string;
    features: string[];
    techStack: string[];
    image: string;
    color: string;
    accentColor: string;
    status: string;
    year: string;
}

export const allProjects: Project[] = [
    {
        id: 1,
        title: 'Mangrove',
        subtitle: 'Lightweight Billing Solution',
        category: 'Point of Sale & Business Management',
        description:
            'A lightweight, affordable billing solution designed for restaurants and hotels with cloud sync, GST compliance, and mobile order-taking.',
        longDescription:
            'Mangrove is built for efficiency and accessibility, offering real-time billing, inventory tracking, and staff management in one platform. With cloud synchronization, GST compliance, and a companion mobile app for order taking, it empowers businesses to streamline operations affordably while maintaining scalability.',
        features: [
            'Cloud Sync',
            'GST Compliance',
            'Mobile Order Taking',
            'Inventory Tracking',
            'Employee Management',
            'Customer Management',
            'Analytics Dashboard'
        ],
        techStack: ['Svelte', 'Typescript', 'Rust', 'Golang'],
        image: AppPng.mangrove,
        color: 'from-emerald-900 to-emerald-700',
        accentColor: 'emerald',
        status: 'In Development',
        year: '2025'
    },
    {
        id: 2,
        title: 'OAK - One of a Kind',
        subtitle: 'Showcasing Unique Talent & Creations',
        category: 'Marketplace for One-of-a-Kind Items',
        description:
            'A platform that empowers underrated creators by showcasing and selling their one-of-a-kind creations, helping them gain recognition and success.',
        longDescription:
            'OAK is dedicated to discovering and promoting real talent within the company and beyond. Artists, crafters, and creators can list their unique products on the platform, connecting with an audience that values originality. OAK not only provides a marketplace but also supports creators in building their reputation, turning passion into tangible success, and giving the world a chance to see and appreciate their work.',
        features: [
            'Marketplace for Unique Items',
            'Creator Profiles & Portfolios',
            'Direct Sales & Transactions',
            'Community Feedback & Reviews',
            'Featured Promotions',
            'Creator Support & Growth Tools',
            'Analytics for Performance'
        ],
        techStack: ['SvelteKit', 'Golang', 'Typescript'],
        image: AppPng.oak,
        color: 'from-purple-900 to-purple-700',
        accentColor: 'green',
        status: 'In Development',
        year: '2025'
    },
    {
        id: 3,
        title: 'WhiteSheet Website Builder',
        subtitle: 'Dynamic Website Creation Made Simple',
        category: 'Website Builder Platform',
        description:
            'A website builder that allows users to create beautiful, fully functional websites simply by providing inputs and selecting preferences.',
        longDescription:
            'WhiteSheet is designed to make website creation effortless for individuals and businesses. By taking user inputs such as content, style preferences, and layout choices, the platform generates elegant, responsive websites instantly. With a focus on simplicity, customization, and modern design standards, WhiteSheet enables anyone to build a professional web presence without coding knowledge.',
        features: [
            'Input-based Dynamic Website Generation',
            'Responsive & Modern Templates',
            'Drag-and-Drop Editing',
            'Customizable Layouts & Styles',
            'SEO Optimization Tools',
            'Export & Hosting Options',
            'Real-time Preview & Updates'
        ],
        techStack: ['Flutter', 'Dart', 'Golang'],
        image: AppPng.whiteSheet,
        color: 'from-blue-900 to-blue-700',
        accentColor: 'blue',
        status: 'RnD',
        year: '2025'
    }
];
export interface Service {
    id: number;
    title: string;
    icon: string;
    description: string;
    features: string[];
    color: string;
    subtitle: string;
    category: string;
    longDescription: string;
    technologies: string[];
    benefits: string[];
    deliveryTime: string;
    startingPrice: string;
}

export const allServices: Service[] = [
    {
        id: 1,
        title: 'Web Applications',
        icon: '🌐',
        description:
            'Custom web applications built with modern frameworks and responsive design principles.',
        features: [
            'React/Vue/Svelte',
            'Progressive Web Apps',
            'E-commerce Solutions',
            'Real-time Features'
        ],
        color: 'from-black to-gray-800',
        subtitle: 'Modern Web Solutions',
        category: 'Full-Stack Development',
        longDescription:
            'Our web development services combine cutting-edge frontend technologies with robust backend solutions. We specialize in creating scalable, maintainable applications that grow with your business needs. From simple landing pages to complex enterprise applications, we deliver solutions that drive results.',
        technologies: ['React', 'Vue.js', 'Svelte', 'Node.js', 'TypeScript', 'Tailwind CSS'],
        benefits: [
            'Responsive Design',
            'SEO Optimization',
            'Performance Focus',
            'Security First',
            'Scalable Architecture',
            'Modern UI/UX'
        ],
        deliveryTime: '4-12 weeks',
        startingPrice: '$2,500'
    },
    {
        id: 2,
        title: 'Mobile Development',
        icon: '📱',
        description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
        features: [
            'React Native',
            'Flutter Development',
            'Native iOS/Android',
            'App Store Optimization'
        ],
        color: 'from-black to-gray-800',
        subtitle: 'Cross-Platform Mobile Apps',
        category: 'Mobile Application Development',
        longDescription:
            'Our mobile development expertise spans native iOS/Android development and cross-platform solutions using React Native and Flutter. We create apps that provide smooth user experiences, optimal performance, and seamless integration with device features.',
        technologies: ['React Native', 'Flutter', 'Dart', 'Swift', 'Kotlin', 'Firebase'],
        benefits: [
            'Cross-Platform Compatibility',
            'Native Performance',
            'App Store Optimization',
            'Push Notifications',
            'Offline Functionality',
            'Device Integration'
        ],
        deliveryTime: '6-16 weeks',
        startingPrice: '$5,000'
    },
    {
        id: 3,
        title: 'Cyber Security',
        icon: '🛡️',
        description:
            'Protect your digital assets with robust security solutions and proactive threat management.',
        features: [
            'Vulnerability Assessment',
            'Penetration Testing',
            'Security Audits',
            'Incident Response'
        ],
        color: 'from-black to-gray-800',
        subtitle: 'Advanced Security Solutions',
        category: 'Information Security',
        longDescription:
            'Our cybersecurity services provide end-to-end protection for your digital infrastructure. We conduct thorough security assessments, implement defense strategies, and provide ongoing monitoring to ensure your systems remain secure against evolving threats.',
        technologies: [
            'Penetration Testing Tools',
            'SIEM',
            'Firewalls',
            'Encryption',
            'Identity Management',
            'Security Frameworks'
        ],
        benefits: [
            'Risk Assessment',
            'Compliance Support',
            'Incident Response',
            'Security Training',
            'Continuous Monitoring',
            'Threat Intelligence'
        ],
        deliveryTime: '2-8 weeks',
        startingPrice: '$3,000'
    },
    {
        id: 4,
        title: 'Cloud Solutions',
        icon: '☁️',
        description:
            'Scalable cloud infrastructure and deployment solutions for modern applications.',
        features: [
            'AWS/Azure/GCP',
            'Serverless Architecture',
            'Container Orchestration',
            'Auto-scaling'
        ],
        color: 'from-black to-gray-800',
        subtitle: 'Scalable Cloud Infrastructure',
        category: 'Cloud Computing & DevOps',
        longDescription:
            'Our cloud solutions help businesses modernize their infrastructure and achieve greater scalability, reliability, and cost-efficiency. We provide expertise in major cloud platforms and help you choose the right architecture for your specific needs.',
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
        benefits: [
            'Auto-scaling',
            'High Availability',
            'Cost Optimization',
            'Disaster Recovery',
            'Global Distribution',
            'Monitoring & Analytics'
        ],
        deliveryTime: '3-10 weeks',
        startingPrice: '$2,000'
    },
    {
        id: 5,
        title: 'API Development',
        icon: '🔗',
        description: 'RESTful and GraphQL APIs designed for performance, security, and scalability.',
        features: ['REST APIs', 'GraphQL', 'Microservices', 'API Documentation'],
        color: 'from-gray-900 to-black',
        subtitle: 'Robust API Solutions',
        category: 'Backend Development',
        longDescription:
            'Our API development services focus on creating well-documented, secure, and scalable APIs that serve as the backbone of your digital ecosystem. We specialize in both RESTful and GraphQL APIs, ensuring optimal performance and developer experience.',
        technologies: ['Node.js', 'GraphQL', 'REST', 'MongoDB', 'PostgreSQL', 'Redis'],
        benefits: [
            'High Performance',
            'Comprehensive Documentation',
            'Security Best Practices',
            'Rate Limiting',
            'Caching Strategies',
            'API Versioning'
        ],
        deliveryTime: '3-8 weeks',
        startingPrice: '$1,800'
    },
    {
        id: 6,
        title: 'DevOps & Automation',
        icon: '⚙️',
        description: 'Streamlined development workflows with continuous integration and deployment.',
        features: [
            'CI/CD Pipelines',
            'Infrastructure as Code',
            'Monitoring & Logging',
            'Automated Testing'
        ],
        color: 'from-black to-gray-800',
        subtitle: 'Streamlined Development Workflows',
        category: 'Development Operations',
        longDescription:
            'Our DevOps services help teams deliver software faster and more reliably through automation, monitoring, and improved collaboration. We implement CI/CD pipelines, infrastructure as code, and monitoring solutions that reduce manual work and increase deployment confidence.',
        technologies: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'Ansible', 'Prometheus'],
        benefits: [
            'Faster Deployments',
            'Reduced Manual Errors',
            'Improved Collaboration',
            'Better Monitoring',
            'Infrastructure Automation',
            'Quality Assurance'
        ],
        deliveryTime: '4-12 weeks',
        startingPrice: '$2,200'
    }
];
