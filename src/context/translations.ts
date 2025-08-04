
export type Project = {
    title: string;
    slug: string;
    description: string;
    image: string;
    hint: string;
    category: string;
    tags: string[];
    liveUrl: string;
    repoUrl: string;
    contextAndObjective?: string;
    problem?: string;
    solution?: string;
    resultat?: string;
    wireframeImage?: string;
    finalUIImage?: string;
    mockupImage?: string;
    process?: string[];
};

export type Translation = {
    nav: {
        home: string;
        experience: string;
        stack: string;
        projects: string;
        about: string;
        contact: string;
        hireMe: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
    };
    experience: {
        title: string;
        description: string;
        experiences: {
            role: string;
            company: string;
            period: string;
            description: string;
        }[];
    };
    stack: {
        title: string;
        description: string;
    };
    projects: {
        title: string;
        description: string;
        filters: string[];
        liveDemo: string;
        viewDetails: string;
        projects: Project[];
        detailPage: {
            sourceCode: string;
            quickProcess: string;
            contextAndObjective: string;
            problem: string;
            solution: string;
            resultat: string;
            wireframes: string;
            finalUI: string;
            mockup: string;
        }
    };
    about: {
        title: string;
        p1: string;
        p2: string;
        cvButton: string;
        education: {
            title: string;
            degree: string;
            institution: string;
            autodidacte: string;
        }
    };
    contact: {
        title: string;
        description: string;
        form: {
            email: {
                label: string;
                placeholder: string;
            };
            message: {
                label: string;
                placeholder: string;
            };
            submit: string;
        };
        toast: {
            title: string;
            description: string;
        };
        validation: {
            email: string;
            message: string;
        }
    };
};

export const translations: { [key: string]: Translation } = {
    fr: {
        nav: {
            home: "Accueil",
            experience: "Expérience",
            stack: "Compétences",
            projects: "Projets",
            about: "À propos",
            contact: "Contact",
            hireMe: "Engagez-moi",
        },
        hero: {
            title: "Développeur Full-Stack & UI Designer",
            subtitle: "Passionné par la transformation d'idées complexes en solutions numériques élégantes et performantes.",
            cta: "Télécharger mon CV",
        },
        experience: {
            title: "Mon Parcours Professionnel",
            description: "Une chronologie de mes rôles clés et de mes réalisations dans l'industrie technologique.",
            experiences: [
                {
                    role: "UI Designer / Frontend Developer",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Fév 2025 - Aujourd'hui",
                    description: "Conception de maquettes d'interface utilisateur réactives pour des clients immobiliers et création de prototypes de produits SaaS pour améliorer l'expérience utilisateur.",
                },
                {
                    role: "Frontend Developer",
                    company: "SACE AGENCY",
                    period: "Fév - Mars 2024",
                    description: "Collaboration avec une équipe pour mettre en œuvre des interfaces intuitives.",
                },
                {
                    role: "Fullstack Developer",
                    company: "WORLD WARRIORS",
                    period: "Juillet 2024 - Présent",
                    description: "Collaboration avec des équipes multidisciplinaires pour mettre en œuvre des solutions performantes adaptées aux besoins des utilisateurs.",
                },
            ]
        },
        stack: {
            title: "Mon Arsenal",
            description: "Je manie un ensemble polyvalent d'outils et de technologies pour construire des applications web robustes, évolutives et conviviales.",
        },
        projects: {
            title: "Mes Projets",
            description: "Voici quelques-uns des projets dont je suis fier. Chacun représente un défi que j'ai été ravi de relever.",
            filters: ["Tous", "Frontend", "Backend", "UI Design", "Graphic Design"],
            liveDemo: "Démo Live",
            viewDetails: "Voir les détails",
            projects: [
                {
                    title: "Megatramback - Gestion de Stock",
                    slug: "megatramback-stock-management",
                    description: "Un système de gestion de stock backend avec gestion de boîtes et scanner de codes-barres, construit avec Java Spring Boot.",
                    image: "https://placehold.co/600x400.png",
                    hint: "backend code database",
                    category: "Backend",
                    tags: ["Java", "Spring Boot", "Backend"],
                    liveUrl: "https://github.com/jeremi-24/megatramback",
                    repoUrl: "https://github.com/jeremi-24/megatramback",
                    problem: "Les entreprises ont besoin d'un système robuste pour suivre les stocks, gérer les emplacements de boîtes et intégrer des scanners de codes-barres pour accélérer les opérations.",
                    solution: "Une API RESTful construite avec Spring Boot qui fournit des points de terminaison pour toutes les opérations CRUD sur les stocks, ainsi que la logique pour la gestion des boîtes et l'intégration de scanners.",
                    resultat: "Un backend performant et sécurisé qui peut être connecté à n'importe quelle application frontend ou mobile, offrant une gestion de stock fiable et en temps réel.",
                },
                {
                    title: "YunoDoc - Gestion Électronique de Documents (GED)",
                    slug: "yunodoc-edms",
                    description: "YunoDoc est un système de Gestion Électronique de Documents (GED) moderne conçu pour automatiser le téléversement, la classification, la recherche et le suivi des documents pour les organisations.",
                    image: "/yuno1.jpg",
                    hint: "document management",
                    category: "Frontend",
                    tags: ["Next.js", "Drizzle ORM", "GenAI", "Firebase"],
                    liveUrl: "https://yunod.netlify.app",
                    repoUrl: "https://github.com/jeremi-24/ged/",
                    problem: "Les entreprises perdent du temps et de l'argent à gérer manuellement un volume croissant de documents papier et numériques, ce qui entraîne des inefficacités, des risques de perte et des difficultés d'accès à l'information.",
                    solution: "YunoDoc automatise la gestion des documents avec un téléversement intelligent, une classification assistée par IA, une recherche de contenu puissante (OCR) et un stockage sécurisé, transformant le chaos documentaire en une ressource organisée.",
                    resultat: "Une réduction significative du temps de traitement des documents, une collaboration améliorée entre les équipes et une sécurité renforcée des informations sensibles, permettant aux organisations de se concentrer sur leur cœur de métier.",
                    wireframeImage: "/yuno2.PNG",
                    finalUIImage: "/yuno3.PNG",
                },
                {
                    title: "Page d'accueil de Stockify",
                    slug: "stockify-landing-page",
                    description: "Une page d'accueil animée et interactive pour une application de gestion d'inventaire, conçue pour démontrer mes compétences en animation frontend.",
                    image: "/stockify1.png",
                    hint: "inventory management app",
                    category: "Frontend",
                    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                    liveUrl: "https://stockiify.netlify.app/",
                    repoUrl: "https://github.com/jeremi-24/stockify",
                    problem: "Les applications de gestion manquent souvent de dynamisme. Une page d'accueil statique ne parvient pas à communiquer l'efficacité et la simplicité du produit.",
                    solution: "En utilisant Framer Motion, j'ai créé des transitions fluides et des micro-interactions qui guident l'utilisateur, animent la page et mettent en avant les avantages de la centralisation des stocks.",
                    resultat: "Une expérience utilisateur engageante qui met en valeur la puissance de l'application de manière dynamique, rendant la proposition de valeur claire et mémorable.",
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Un concept de page d'accueil responsive pour une super-application africaine tout-en-un.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.behance.net/gallery/203494745/GOZEM-Landing-Page-Concept",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Solution", "UI", "Identité"],
                    contextAndObjective: "Il s'agit d'un concept de page d'accueil responsive conçu pour une super-application africaine tout-en-un. Adaptée aux utilisateurs sur ordinateur et mobile, la mise en page met en avant les services principaux de l'application : VTC, livraison de courses, achats en ligne, et plus encore.",
                    problem: "Cette section met en évidence les services clés de la super application Gozem avec un design chaleureux et moderne et une disposition intuitive pour simplifier la mobilité et les achats quotidiens.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                 {
                    title: "Page d'accueil BKSolution",
                    slug: "bksolution-landing-page",
                    description: "Ce projet de page d'accueil pour BKS (Buyor King Solution) est conçu pour être clair et engageant, guidant l'utilisateur à travers les principaux services.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://bks.sotenatogo.com/",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "L'enjeu était de clarifier les offres de services spécifiques, en offrant une plateforme ciblée pour convertir les visiteurs intéressés en clients potentiels.",
                    solution: "La solution optimise les campagnes marketing en suivant les conversions et en simplifiant le parcours utilisateur vers une action souhaitée, améliorant ainsi la croissance globale de l'entreprise.",
                    finalUIImage: "/bks2.png",
                    wireframeImage: "/bks3.png",
                },
                {
                    title: "Tableau de Bord Fintech - Aperçu des Données Financières",
                    slug: "fintech-dashboard",
                    description: "Cette page de tableau de bord actif fournit une vue complète des données financières essentielles. Elle présente des indicateurs clés (revenus, dépenses, bénéfice net), un graphique à barres intuitif pour l'analyse mensuelle des dépenses, un tableau de suivi détaillé des transactions et un diagramme circulaire pour la répartition des sources de revenus. Du flat design et un peu de skeuomorphism pour la carte",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "Les utilisateurs ont besoin d'une interface centralisée et facile à comprendre pour suivre la performance financière en un coup d'œil, remplaçant ainsi les sources de données dispersées.",
                    solution: "Le tableau de bord consolide toutes les données financières clés dans une interface visuellement intuitive, avec des graphiques interactifs et des tableaux détaillés, pour permettre une prise de décision rapide et éclairée.",
                    finalUIImage: "/fin3.png",
                   mockupImage: "/fin2.png",
                }
            ],
            detailPage: {
                sourceCode: "Code Source",
                quickProcess: "Processus Rapide",
                contextAndObjective: "Contexte & Objectif",
                problem: "Problème",
                solution: "Solution",
                resultat: "Résultat",
                wireframes: "Wireframes",
                finalUI: "UI Finales",
                mockup: "Mockup"
            }
        },
        about: {
            title: "À Propos de Moi",
            p1: "Je suis un développeur full stack et concepteur d'interface utilisateur, passionné par la création de solutions numériques élégantes et performantes. J'utilise des technologies comme Next.js, React et Java Spring Boot pour donner vie à des projets robustes.",
            p2: "Créatif, rigoureux et orienté solutions, je cherche à contribuer à des projets centrés sur l'expérience utilisateur.",
            cvButton: "Télécharger mon CV",
            education: {
                title: "Éducation et Certifications",
                degree: "LICENCE EN GÉNIE LOGICIEL (2024)",
                institution: "INSTITUT POLYTECHNIQUE DEFITECH, TOGO",
                autodidacte: "Designer UI/UX autodidacte (Figma, flux utilisateur, prototypage)"
            }
        },
        contact: {
            title: "Contactez-moi",
            description: "Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.",
            form: {
                email: {
                    label: "Email",
                    placeholder: "votre.email@exemple.com",
                },
                message: {
                    label: "Message",
                    placeholder: "Parlez-moi de votre projet ou laissez-moi un simple bonjour !",
                },
                submit: "Envoyer le message",
            },
            toast: {
                title: "Message Envoyé!",
                description: "Merci de m'avoir contacté. Je vous répondrai bientôt.",
            },
            validation: {
                email: "Veuillez entrer une adresse email valide.",
                message: "Le message doit contenir au moins 10 caractères.",
            }
        },
    },
    en: {
        nav: {
            home: "Home",
            experience: "Experience",
            stack: "Stack",
            projects: "Projects",
            about: "About",
            contact: "Contact",
            hireMe: "Hire Me",
        },
        hero: {
            title: "Full-Stack Developer & UI Designer",
            subtitle: "Passionate about transforming complex ideas into elegant and high-performing digital solutions.",
            cta: "Download My CV",
        },
        experience: {
            title: "My Professional Journey",
            description: "A timeline of my key roles and achievements in the tech industry.",
            experiences: [
                {
                    role: "UI Designer / Frontend Developer",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Feb 2025 - Present",
                    description: "Designing responsive UI mockups for real estate clients and creating SaaS product prototypes to enhance user experience.",
                },
                {
                    role: "Frontend Developer",
                    company: "SACE AGENCY",
                    period: "Feb - Mar 2024",
                    description: "Collaborated with a team to implement intuitive user interfaces.",
                },
                {
                    role: "Fullstack Developer",
                    company: "WORLD WARRIORS",
                    period: "July 2024 - Present",
                    description: "Collaborated with multidisciplinary teams to implement high-performance solutions tailored to user needs.",
                },
            ]
        },
        stack: {
            title: "My Arsenal",
            description: "I wield a versatile set of tools and technologies to build robust, scalable, and user-friendly web applications.",
        },
        projects: {
            title: "My Projects",
            description: "Here are some of the projects I'm proud of. Each one represents a challenge I was excited to tackle.",
            filters: ["All", "Frontend", "Backend", "UI Design", "Graphic Design"],
            liveDemo: "Live Demo",
            viewDetails: "View Details",
            projects: [
                {
                    title: "Megatramback - Stock Management",
                    slug: "megatramback-stock-management",
                    description: "A backend stock management system with box management and barcode scanner integration, built with Java Spring Boot.",
                    image: "https://placehold.co/600x400.png",
                    hint: "backend code database",
                    category: "Backend",
                    tags: ["Java", "Spring Boot", "Backend"],
                    liveUrl: "https://github.com/jeremi-24/megatramback",
                    repoUrl: "https://github.com/jeremi-24/megatramback",
                    problem: "Businesses need a robust system to track inventory, manage box locations, and integrate barcode scanners to speed up operations.",
                    solution: "A RESTful API built with Spring Boot that provides endpoints for all CRUD operations on inventory, plus logic for box management and scanner integration.",
                    resultat: "A high-performance and secure backend that can be connected to any frontend or mobile application, providing reliable, real-time stock management.",
                },
                {
                    title: "YunoDoc - Electronic Document Management (EDMS)",
                    slug: "yunodoc-edms",
                    description: "YunoDoc is a modern Electronic Document Management System (EDMS) designed to automate document uploading, classification, search, and tracking for organizations.",
                    image: "/yuno1.jpg",
                    hint: "document management",
                    category: "Frontend",
                    tags: ["Next.js", "Drizzle ORM", "GenAI", "Firebase"],
                    liveUrl: "https://yunod.netlify.app",
                    repoUrl: "https://github.com/jeremi-24/ged/",
                    problem: "Companies waste time and money manually managing a growing volume of paper and digital documents, leading to inefficiencies, risk of loss, and difficulty accessing information.",
                    solution: "YunoDoc automates document management with smart uploading, AI-assisted classification, powerful content search (OCR), and secure storage, turning document chaos into an organized resource.",
                    resultat: "A significant reduction in document processing time, improved collaboration between teams, and enhanced security of sensitive information, allowing organizations to focus on their core business.",
                    wireframeImage: "/yuno2.PNG",
                    finalUIImage: "/yuno3.PNG",
                },
                 {
                    title: "Stockify Landing Page",
                    slug: "stockify-landing-page",
                    description: "An animated and interactive landing page for an inventory management app, designed to showcase my advanced frontend animation skills.",
                    image: "/stockify1.png",
                    hint: "inventory management app",
                    category: "Frontend",
                    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                    liveUrl: "https://stockiify.netlify.app/",
                    repoUrl: "https://github.com/jeremi-24/stockify",
                    problem: "Management applications often lack dynamism. A static landing page fails to communicate the product's efficiency and simplicity.",
                    solution: "Using Framer Motion, I created fluid transitions and micro-interactions that guide the user, bring the page to life, and highlight the benefits of centralized inventory.",
                    resultat: "An engaging user experience that dynamically showcases the application's power, making the value proposition clear and memorable.",
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "A responsive landing page concept for an all-in-one African super app.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.behance.net/gallery/203494745/GOZEM-Landing-Page-Concept",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Solution", "UI", "Identity"],
                    contextAndObjective: "This is a responsive landing page concept designed for an all-in-one African super app. Tailored for both desktop and mobile users, the layout highlights the app’s core services: ride-hailing, grocery delivery, online shopping, and more.",
                    problem: "This section highlights key Gozem super app services with a warm, modern design and intuitive layout to simplify mobility and daily shopping.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                {
                    title: "BKSolution landing page",
                    slug: "bksolution-landing-page",
                    description: "This BKS (Buyor King Solution) landing page project is designed to be clear and engaging, guiding the user through the main services.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "The challenge was to clarify the specific service offerings, providing a focused platform to convert interested visitors into potential customers.",
                    solution: "The solution optimizes marketing campaigns by tracking conversions and simplifying the user journey towards a desired action, enhancing overall business growth.",
                    finalUIImage: "/bks2.png",
                    wireframeImage: "/bks3.png",
                },
                {
                    title: "Fintech Dashboard Overview - Key Financial Insights",
                    slug: "fintech-dashboard",
                    description: "This active dashboard page provides a complete view of essential financial data. It presents key metrics (revenue, expenses, net profit), an intuitive bar chart for monthly expense analysis, a detailed transaction tracking table, and a pie chart breaking down revenue sources. Flat design and a bit of skeuomorphism for the card.",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "Users need a centralized, easy-to-understand interface to monitor financial performance at a glance, replacing scattered data sources.",
                    solution: "The dashboard consolidates all key financial data into a visually intuitive interface, with interactive charts and detailed tables, to enable quick and informed decision-making.",
                    finalUIImage: "/fin3.png",
                   mockupImage: "/fin2.png",
                }
            ],
            detailPage: {
                sourceCode: "Source Code",
                quickProcess: "Quick Process",
                contextAndObjective: "Context & Objective",
                problem: "Problem",
                solution: "Solution",
                resultat: "Result",
                wireframes: "Wireframes",
                finalUI: "Final UI",
                mockup: "Mockup"
            }
        },
        about: {
            title: "About Me",
            p1: "I am a full stack developer and UI designer, passionate about creating elegant and high-performing digital solutions. I use technologies like Next.js, React, and Java Spring Boot to bring robust projects to life.",
            p2: "Creative, rigorous, and solution-oriented, I seek to contribute to projects focused on the user experience.",
            cvButton: "Download My CV",
            education: {
                title: "Education and Certifications",
                degree: "2024: BACHELOR’S DEGREE IN SOFTWARE ENGINEERING",
                institution: "DEFITECH POLYTECHNICAL INSTITUTE, TOGO",
                autodidacte: "Self-taught UI/UX Designer (Figma, user flows, prototyping)"
            }
        },
        contact: {
            title: "Contact Me",
            description: "Have a project idea? A question? Feel free to contact me. I'm always open to new opportunities.",
            form: {
                email: {
                    label: "Email",
                    placeholder: "your.email@example.com",
                },
                message: {
                    label: "Message",
                    placeholder: "Tell me about your project or just say hello!",
                },
                submit: "Send Message",
            },
            toast: {
                title: "Message Sent!",
                description: "Thank you for reaching out. I will get back to you soon.",
            },
            validation: {
                email: "Please enter a valid email.",
                message: "Message must be at least 10 characters.",
            }
        },
    },
    de: {
        nav: {
            home: "Startseite",
            experience: "Erfahrung",
            stack: "Technologien",
            projects: "Projekte",
            about: "Über mich",
            contact: "Kontakt",
            hireMe: "Beauftragen",
        },
        hero: {
            title: "Full-Stack-Entwickler & UI-Designer",
            subtitle: "Leidenschaftlich daran, komplexe Ideen in elegante und leistungsstarke digitale Lösungen umzuwandeln.",
            cta: "Meinen Lebenslauf herunterladen",
        },
        experience: {
            title: "Mein beruflicher Werdegang",
            description: "Eine Zeitleiste meiner wichtigsten Positionen und Erfolge in der Technologiebranche.",
            experiences: [
                {
                    role: "UI-Designer / Frontend-Entwickler",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Feb 2025 - Heute",
                    description: "Entwerfen von responsiven UI-Mockups für Immobilienkunden und Erstellen von SaaS-Produktprototypen zur Verbesserung des Benutzererlebnisses.",
                },
                {
                    role: "Frontend-Entwickler",
                    company: "SACE AGENCY",
                    period: "Feb - Mär 2024",
                    description: "Zusammenarbeit mit einem Team zur Implementierung intuitiver Benutzeroberflächen.",
                },
                {
                    role: "Fullstack-Entwickler",
                    company: "WORLD WARRIORS",
                    period: "Juli 2024 - Heute",
                    description: "Zusammenarbeit mit multidisziplinären Teams zur Implementierung leistungsstarker, auf die Bedürfnisse der Benutzer zugeschnittener Lösungen.",
                },
            ]
        },
        stack: {
            title: "Mein Arsenal",
            description: "Ich setze eine vielseitige Palette von Werkzeugen und Technologien ein, um robuste, skalierbare und benutzerfreundliche Webanwendungen zu erstellen.",
        },
        projects: {
            title: "Meine Projekte",
            description: "Hier sind einige der Projekte, auf die ich stolz bin. Jedes stellt eine Herausforderung dar, die ich gerne angenommen habe.",
            filters: ["Alle", "Frontend", "Backend", "UI Design", "Graphic Design"],
            liveDemo: "Live-Demo",
            viewDetails: "Details anzeigen",
            projects: [
                {
                    title: "Megatramback - Lagerverwaltung",
                    slug: "megatramback-stock-management",
                    description: "Ein Backend-Lagerverwaltungssystem mit Box-Management und Barcode-Scanner-Integration, erstellt mit Java Spring Boot.",
                    image: "https://placehold.co/600x400.png",
                    hint: "backend code database",
                    category: "Backend",
                    tags: ["Java", "Spring Boot", "Backend"],
                    liveUrl: "https://github.com/jeremi-24/megatramback",
                    repoUrl: "https://github.com/jeremi-24/megatramback",
                    problem: "Unternehmen benötigen ein robustes System zur Bestandsverfolgung, zur Verwaltung von Boxstandorten und zur Integration von Barcode-Scannern, um den Betrieb zu beschleunigen.",
                    solution: "Eine mit Spring Boot erstellte RESTful-API, die Endpunkte für alle CRUD-Operationen am Inventar sowie Logik für die Box-Verwaltung und Scanner-Integration bereitstellt.",
                    resultat: "Ein leistungsstarkes und sicheres Backend, das mit jeder Frontend- oder mobilen Anwendung verbunden werden kann und eine zuverlässige Echtzeit-Lagerverwaltung bietet.",
                },
                {
                    title: "YunoDoc - Elektronisches Dokumentenmanagement (EDMS)",
                    slug: "yunodoc-edms",
                    description: "YunoDoc ist ein modernes elektronisches Dokumentenmanagementsystem (EDMS), das entwickelt wurde, um das Hochladen, Klassifizieren, Suchen und Verfolgen von Dokumenten für Organisationen zu automatisieren.",
                    image: "/yuno1.jpg",
                    hint: "document management",
                    category: "Frontend",
                    tags: ["Next.js", "Drizzle ORM", "GenAI", "Firebase"],
                    liveUrl: "https://yunod.netlify.app",
                    repoUrl: "https://github.com/jeremi-24/ged/",
                    problem: "Unternehmen verschwenden Zeit und Geld bei der manuellen Verwaltung einer wachsenden Menge von Papier- und digitalen Dokumenten, was zu Ineffizienzen, Verlustrisiken und Schwierigkeiten beim Informationszugriff führt.",
                    solution: "YunoDoc automatisiert die Dokumentenverwaltung mit intelligentem Hochladen, KI-gestützter Klassifizierung, leistungsstarker Inhaltssuche (OCR) und sicherer Speicherung und verwandelt das Dokumentenchaos in eine organisierte Ressource.",
                    resultat: "Eine signifikante Reduzierung der Dokumentenverarbeitungszeit, verbesserte Zusammenarbeit zwischen Teams und erhöhte Sicherheit sensibler Informationen, die es Organisationen ermöglicht, sich auf ihr Kerngeschäft zu konzentrieren.",
                    wireframeImage: "/yuno2.PNG",
                    finalUIImage: "/yuno3.PNG",
                },
                 {
                    title: "Stockify Landing Page",
                    slug: "stockify-landing-page",
                    description: "Eine animierte und interaktive Landingpage für eine App zur Bestandsverwaltung, die fortgeschrittene Frontend-Animationsfähigkeiten demonstrieren soll.",
                    image: "/stockify1.png",
                    hint: "inventory management app",
                    category: "Frontend",
                    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24/stockify",
                    problem: "Management-Anwendungen mangelt es oft an Dynamik. Eine statische Landingpage kann die Effizienz und Einfachheit des Produkts nicht vermitteln.",
                    solution: "Mit Framer Motion habe ich fließende Übergänge und Mikrointeraktionen geschaffen, die den Benutzer führen, die Seite zum Leben erwecken und die Vorteile einer zentralisierten Bestandsverwaltung hervorheben.",
                    resultat: "Eine ansprechende Benutzererfahrung, die die Leistungsfähigkeit der Anwendung dynamisch präsentiert und das Wertversprechen klar und unvergesslich macht.",
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Ein responsives Landing-Page-Konzept für eine afrikanische Super-App.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.behance.net/gallery/203494745/GOZEM-Landing-Page-Concept",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Lösung", "UI", "Identität"],
                    contextAndObjective: "Dies ist ein responsives Landing-Page-Konzept, das für eine afrikanische All-in-One-Super-App entwickelt wurde. Das Layout ist sowohl für Desktop- als auch für mobile Benutzer zugeschnitten und hebt die Kerndienste der App hervor: Ride-Hailing, Lebensmittellieferung, Online-Shopping und mehr.",
                    problem: "Dieser Abschnitt hebt die wichtigsten Dienstleistungen der Gozem-Super-App mit einem warmen, modernen Design und einem intuitiven Layout hervor, um die Mobilität und den täglichen Einkauf zu vereinfachen.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                {
                    title: "BKSolution Landingpage",
                    slug: "bksolution-landing-page",
                    description: "Dieses Landingpage-Projekt für BKS (Buyor King Solution) ist klar und ansprechend gestaltet und führt den Benutzer durch die Hauptdienstleistungen.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "Die Herausforderung bestand darin, die spezifischen Serviceangebote zu verdeutlichen und eine gezielte Plattform bereitzustellen, um interessierte Besucher in potenzielle Kunden umzuwandeln.",
                    solution: "Die Lösung optimiert Marketingkampagnen, indem sie Konversionen verfolgt und den Benutzerweg zu einer gewünschten Aktion vereinfacht, was das gesamte Geschäftswachstum steigert.",
                    finalUIImage: "/bks2.png",
                    wireframeImage: "/bks3.png",
                },
                {
                    title: "Fintech-Dashboard - Übersicht der Finanzkennzahlen",
                    slug: "fintech-dashboard",
                    description: "Diese aktive Dashboard-Seite bietet einen vollständigen Überblick über wesentliche Finanzdaten. Sie präsentiert Schlüsselkennzahlen (Umsatz, Ausgaben, Reingewinn), ein intuitives Balkendiagramm zur monatlichen Ausgabenanalyse, eine detaillierte Transaktionsverfolgungstabelle und ein Kuchendiagramm zur Aufschlüsselung der Einnahmequellen. Flat-Design und ein bisschen Skeuomorphismus für die Karte.",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://github.com/jeremi-24",
                    repoUrl: "https://github.com/jeremi-24",
                    problem: "Benutzer benötigen eine zentralisierte, leicht verständliche Oberfläche, um die finanzielle Leistung auf einen Blick zu überwachen und verstreute Datenquellen zu ersetzen.",
                    solution: "Das Dashboard konsolidiert alle wichtigen Finanzdaten in einer visuell intuitiven Oberfläche mit interaktiven Diagrammen und detaillierten Tabellen, um schnelle und fundierte Entscheidungen zu ermöglichen.",
                    finalUIImage: "/fin3.png",
                   mockupImage: "/fin2.png",
                }
            ],
            detailPage: {
                sourceCode: "Quellcode",
                quickProcess: "Schneller Prozess",
                contextAndObjective: "Kontext & Ziel",
                problem: "Problem",
                solution: "Lösung",
                resultat: "Ergebnis",
                wireframes: "Wireframes",
                finalUI: "Finale UI",
                mockup: "Mockup"
            }
        },
        about: {
            title: "Über mich",
            p1: "Ich bin ein Full-Stack-Entwickler und UI-Designer, der sich leidenschaftlich für die Schaffung eleganter und leistungsstarker digitaler Lösungen einsetzt. Ich verwende Technologien wie Next.js, React und Java Spring Boot, um robuste Projekte zum Leben zu erwecken.",
            p2: "Kreativ, rigoros und lösungsorientiert, strebe ich danach, zu Projekten beizutragen, die auf die Benutzererfahrung ausgerichtet sind.",
            cvButton: "Meinen Lebenslauf herunterladen",
            education: {
                title: "Ausbildung und Zertifizierungen",
                degree: "2024: BACHELOR IN SOFTWARE-ENGINEERING",
                institution: "DEFITECH POLYTECHNISCHES INSTITUT, TOGO",
                autodidacte: "Autodidaktischer UI/UX-Designer (Figma, User Flows, Prototyping)"
            }
        },
        contact: {
            title: "Kontaktieren Sie mich",
            description: "Haben Sie eine Projektidee? Eine Frage? Zögern Sie nicht, mich zu kontaktieren. Ich bin immer offen für neue Möglichkeiten.",
            form: {
                email: {
                    label: "Email",
                    placeholder: "ihre.email@beispiel.com",
                },
                message: {
                    label: "Nachricht",
                    placeholder: "Erzählen Sie mir von Ihrem Projekt oder sagen Sie einfach Hallo!",
                },
                submit: "Nachricht senden",
            },
            toast: {
                title: "Nachricht gesendet!",
                description: "Vielen Dank für Ihre Kontaktaufnahme. Ich werde mich bald bei Ihnen melden.",
            },
            validation: {
                email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
            }
        },
    }
};

    

    

    

    
