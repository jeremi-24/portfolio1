
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
            previousProject: string;
            nextProject: string;
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
            title: "Full-Stack & UI Designer",
            subtitle: "Créateur de solutions numériques modernes et performantes.",
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
                    title: "CLASSIK ADMIN",
                    slug: "classik-admin",
                    description: "Une application web intuitive pour la gestion des résultats scolaires, conçue pour simplifier la saisie, le traitement et l'analyse des notes des élèves.",
                    image: "/classik1.png",
                    hint: "dashboard admin school",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Web App"],
                    liveUrl: "https://classik-admin.netlify.app/niveau",
                    repoUrl: "https://www.figma.com/design/5p23GMYgpTH8wGGF7FucY9/CLASSIQ---SMS?node-id=2052-8406&t=5s6x2TwVkYRTXQXc-0",
                    contextAndObjective: "Concevoir une application web intuitive et structurée qui facilite la saisie, le traitement, l’analyse et l’édition des résultats scolaires pour trois cycles : Primaire, Collège, et Lycée.",
                    problem: "Dans beaucoup d’écoles, la gestion des notes et des bulletins se fait encore manuellement ou avec des outils peu ergonomiques. Cela entraîne des erreurs, une perte de temps, et une difficulté à centraliser les informations des élèves selon leur niveau.",
                    solution: "Interface segmentée par cycle scolaire. Saisie des notes simplifiée. Automatisation des calculs. Visualisation des résultats. Exportation & génération de bulletins. Design fonctionnel, épuré, centré sur la lisibilité et l’efficacité. Structure modulaire et cohérente.",
                    resultat: "Ce projet démontre ma capacité à structurer une application complexe, pensée pour des usages professionnels (secrétariat, gestion administrative scolaire), avec un design centré utilisateur et une forte attention à l’organisation des données.",
                    finalUIImage: "/classik2.png"
                },
                {
                    title: "Megatramback - Gestion de Stock",
                    slug: "megatramback-stock-management",
                    description: "Un système de gestion de stock backend avec gestion de boîtes et scanner de codes-barres, construit avec Java Spring Boot.",
                    image: "/back.svg",
                    hint: "backend code database",
                    category: "Backend",
                    tags: ["Java", "Spring Boot", "Backend"],
                    liveUrl: "https://github.com/jeremi-24/megatramback",
                    repoUrl: "https://github.com/jeremi-24/megatramback",
                    problem: "Les entreprises ont besoin d'un système robuste pour suivre les stocks, gérer les emplacements de boîtes et intégrer des scanners de codes-barres pour accélérer les opérations.",
                    solution: "Une API RESTful construite avec Spring Boot qui fournit des points de terminaison pour toutes les opérations CRUD sur les stocks, ainsi que la logique pour la gestion des boîtes et l'intégration de scanners.",
                    resultat: "Un backend performant et sécurisé qui can être connecté à n'importe quelle application frontend ou mobile, offrant une gestion de stock fiable et en temps réel.",
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
                    title: "MonCarnet - Suivi de santé quotidien",
                    slug: "moncarnet-health-monitoring",
                    description: "Projet personnel de design UX/UI mobile conçu pour améliorer le suivi de santé quotidien des utilisateurs. Inspiré par des applications comme Medisafe et CareClinic, l'objectif était de concevoir une interface claire, humaine et accessible.",
                    image: "/carnet.png",
                    hint: "health app interface",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Design Mobile"],
                    liveUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    repoUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    contextAndObjective: "Projet personnel de design UX/UI mobile pour améliorer le suivi de santé quotidien. L'objectif était de créer une interface claire, humaine et accessible inspirée par des applications de premier plan.",
                    problem: "Les utilisateurs ont souvent du mal à suivre leurs indicateurs de santé de manière régulière à cause d'interfaces complexes et peu engageantes.",
                    solution: "Une interface minimaliste mettant l'accent sur la simplicité d'utilisation, avec des rappels intelligents et une visualisation claire des progrès.",
                    resultat: "Un concept de design mobile complet, salué pour sa clarté et sa facilité de navigation, facilitant une meilleure gestion personnelle de la santé.",
                    process: ["Recherche", "Wireframing", "Prototypage", "Tests"],
                    mockupImage: "/carnet2.png"
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Un concept de page d'accueil responsive pour une super-application africaine tout-en-un.",
                    image: "/gozem.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    contextAndObjective: "Il s'agit d'un concept de page d'accueil responsive conçu pour une super-application africaine tout-en-un. Adaptée aux utilisateurs sur ordinateur et mobile, la mise en page met en avant les services principaux de l'application : VTC, livraison de courses, achats en ligne, et plus encore.",
                    problem: "L'enjeu était de condenser une multitude de services (transport, livraison, paiement) dans une interface unique sans surcharger l'utilisateur.",
                    solution: "Utilisation d'une grille de services iconique et de sections thématiques claires, permettant une navigation rapide entre les différents besoins.",
                    resultat: "Une landing page moderne et attrayante qui renforce l'identité de marque de Gozem tout en maximisant la conversion.",
                    process: ["Analyse", "UI Design", "Visual Design"],
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png"
                },
                {
                    title: "Page d'accueil BKSolution",
                    slug: "bksolution-landing-page",
                    description: "Ce projet de page d'accueil pour BKS (Buyor King Solution) est conçu pour être clair et engageant, guidant l'utilisateur à travers les principaux services.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    contextAndObjective: "Conception d'une page de destination pour BKSolution, visant à présenter de manière concise et professionnelle leurs services d'accompagnement digital.",
                    problem: "Manque de clarté dans la communication des services, entraînant un taux de rebond élevé sur l'ancienne version.",
                    solution: "Mise en place d'une structure narrative 'AIDA' (Attention, Intérêt, Désir, Action) avec des appels à l'action stratégiques.",
                    resultat: "Un design épuré qui inspire confiance et facilite la prise de contact pour les clients B2B.",
                    process: ["Stratégie", "Copywriting", "Web Design"],
                    mockupImage: "/bks1.png"
                },
                {
                    title: "Tableau de Bord Fintech - Aperçu des Données Financières",
                    slug: "fintech-dashboard",
                    description: "Cette page de tableau de bord actif fournit une vue complète des données financières essentielles. Elle présente des indicateurs clés (revenus, dépenses, bénéfice net), un graphique à barres intuitif pour l'analyse mensuelle des dépenses, un tableau de suivi détaillé des transactions et un diagramme circulaire pour la répartition des sources de revenus.",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    repoUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    problem: "Les utilisateurs ont besoin d'une interface centralisée et facile à comprendre pour suivre la performance financière en un coup d'œil, remplaçant ainsi les sources de données dispersées.",
                    solution: "Le tableau de bord consolide toutes les données financières clés dans une interface visuellement intuitive, avec des graphiques interactifs et des tableaux détaillés, pour permettre une prise de décision rapide et éclairée.",
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
                mockup: "Mockup",
                previousProject: "Projet Précédent",
                nextProject: "Projet Suivant"
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
            title: "Full-Stack & UI Designer",
            subtitle: "Creating modern and high-performing digital solutions.",
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
                    title: "CLASSIK ADMIN",
                    slug: "classik-admin",
                    description: "An intuitive web application for managing school results, designed to simplify entering, processing, and analyzing student grades.",
                    image: "/classik1.png",
                    hint: "dashboard admin school",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Web App"],
                    liveUrl: "https://classik-admin.netlify.app/niveau",
                    repoUrl: "https://www.figma.com/design/5p23GMYgpTH8wGGF7FucY9/CLASSIQ---SMS?node-id=2052-8406&t=5s6x2TwVkYRTXQXc-0",
                    contextAndObjective: "Design an intuitive and structured web application that facilitates the entry, processing, analysis, and editing of school results for three cycles: Primary, Middle School, and High School.",
                    problem: "In many schools, managing grades and report cards is still done manually or with user-unfriendly tools. This leads to errors, wasted time, and difficulty centralizing student information by level.",
                    solution: "Segmented interface by school cycle. Simplified grade entry. Automated calculations. Results visualization. Export and generation of report cards. Functional, clean design focused on readability and efficiency. Modular and consistent interface structure.",
                    resultat: "This project demonstrates my ability to structure a complex application, designed for professional use (secretarial, school administrative management), with a user-centered design and strong attention to data organization.",
                    finalUIImage: "/classik2.png"
                },
                {
                    title: "Megatramback - Stock Management",
                    slug: "megatramback-stock-management",
                    description: "A backend stock management system with box management and barcode scanner integration, built with Java Spring Boot.",
                    image: "/back.svg",
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
                    title: "MonCarnet - daily health monitoring",
                    slug: "moncarnet-health-monitoring",
                    description: "Personal mobile UX/UI design project designed to improve users' daily health monitoring. Inspired by apps like Medisafe and CareClinic, the goal was to design a clear, human-friendly, and accessible interface.",
                    image: "/carnet.png",
                    hint: "health app interface",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Mobile Design"],
                    liveUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    repoUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    contextAndObjective: "Personal mobile UX/UI design project to improve daily health monitoring. The objective was to design a clear, human-friendly, and accessible interface inspired by leading apps.",
                    problem: "Users often struggle to stay consistent with health tracking due to cluttered and uninspiring interfaces.",
                    solution: "A minimalist interface focusing on ease of use, with smart reminders and clear progress visualizations.",
                    resultat: "A complete mobile design concept praised for its clarity and ease of navigation, fostering better personal health awareness.",
                    process: ["Research", "Wireframing", "Prototyping", "Testing"],
                    mockupImage: "/carnet2.png"
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "A responsive landing page concept for an all-in-one African super app.",
                    image: "/gozem.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    contextAndObjective: "This is a responsive landing page concept designed for an all-in-one African super app. Tailored for both desktop and mobile users, the layout highlights the app’s core services: ride-hailing, grocery delivery, online shopping, and more.",
                    problem: "The challenge was to condense multiple services into a single UI without overwhelming the user.",
                    solution: "Implemented an iconic service grid and clear thematic sections for quick navigation.",
                    resultat: "A modern and engaging landing page that strengthens Gozem's brand identity while maximizing conversion.",
                    process: ["Analysis", "UI Design", "Visual Design"],
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png"
                },
                {
                    title: "BKSolution landing page",
                    slug: "bksolution-landing-page",
                    description: "This BKS (Buyor King Solution) landing page project is designed to be clear and engaging, guiding the user through the main services.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    contextAndObjective: "Designing a landing page for BKSolution to concisely and professionally showcase their digital support services.",
                    problem: "Lack of clarity in service communication, leading to high bounce rates in previous versions.",
                    solution: "Used the 'AIDA' structure with strategic CTAs to guide the user towards contact.",
                    resultat: "A clean design that inspires trust and simplifies lead generation for B2B clients.",
                    process: ["Strategy", "Copywriting", "Web Design"],
                    mockupImage: "/bks1.png"
                },
                {
                    title: "Fintech Dashboard Overview - Key Financial Insights",
                    slug: "fintech-dashboard",
                    description: "This active dashboard page provides a complete view of essential financial data. It presents key metrics (revenue, expenses, net profit), an intuitive bar chart for monthly expense analysis, a detailed transaction tracking table, and a pie chart breaking down revenue sources.",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    repoUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    problem: "Users need a centralized, easy-to-understand interface to monitor financial performance at a glance, replacing scattered data sources.",
                    solution: "The dashboard consolidates all key financial data into a visually intuitive interface, with interactive charts and detailed tables, to enable quick and informed decision-making.",
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
                mockup: "Mockup",
                previousProject: "Previous Project",
                nextProject: "Next Project"
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
            title: "Full-Stack & UI Designer",
            subtitle: "Erstellung moderner und leistungsstarker digitaler Lösungen.",
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
                    title: "CLASSIK ADMIN",
                    slug: "classik-admin",
                    description: "Eine intuitive Webanwendung zur Verwaltung von Schulergebnissen, die die Eingabe, Verarbeitung und Analyse von Schülerzensuren vereinfacht.",
                    image: "/classik1.png",
                    hint: "dashboard admin school",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Web App"],
                    liveUrl: "https://classik-admin.netlify.app/niveau",
                    repoUrl: "https://www.figma.com/design/5p23GMYgpTH8wGGF7FucY9/CLASSIQ---SMS?node-id=2052-8406&t=5s6x2TwVkYRTXQXc-0",
                    contextAndObjective: "Entwerfen Sie eine intuitive und strukturierte Webanwendung, die die Eingabe, Verarbeitung, Analyse und Bearbeitung von Schulergebnissen für drei Zyklen erleichtert: Grundschule, Mittelstufe und Oberstufe.",
                    problem: "In vielen Schulen wird die Verwaltung von Noten und Zeugnissen immer noch manuell oder mit benutzerunfreundlichen Werkzeugen durchgeführt. Dies führt zu Fehlern, Zeitverschwendung und Schwierigkeiten bei der Zentralisierung von Schülerinformationen nach Klassenstufe.",
                    solution: "Segmentierte Benutzeroberfläche nach Schulzyklus. Vereinfachte Noteneingabe. Automatisierte Berechnungen. Ergebnisvisualisierung. Export und Erstellung von Zeugnissen. Funktionales, sauberes Design mit Fokus auf Lesbarkeit und Effizienz. Modulare und konsistente Schnittstellenstruktur.",
                    resultat: "Dieses Projekt zeigt meine Fähigkeit, eine komplexe Anwendung zu strukturieren, die für den professionellen Einsatz (Sekretariat, Schulverwaltung) konzipiert ist, mit einem benutzerzentrierten Design und einem starken Fokus auf die Datenorganisation.",
                    finalUIImage: "/classik2.png"
                },
                {
                    title: "Megatramback - Lagerverwaltung",
                    slug: "megatramback-stock-management",
                    description: "Ein Backend-Lagerverwaltungssystem mit Box-Management und Barcode-Scanner-Integration, erstellt mit Java Spring Boot.",
                    image: "/back.svg",
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
                    liveUrl: "https://stockiify.netlify.app/",
                    repoUrl: "https://github.com/jeremi-24/stockify",
                    problem: "Management-Anwendungen mangelt es oft an Dynamik. Eine statische Landingpage kann die Effizienz und Einfachheit des Produkts nicht vermitteln.",
                    solution: "Mit Framer Motion habe ich fließende Übergänge und Mikrointeraktionen geschaffen, die den Benutzer führen, die Seite zum Leben erwecken und die Vorteile einer zentralisierten Bestandsverwaltung hervorheben.",
                    resultat: "Eine ansprechende Benutzererfahrung, die die Leistungsfähigkeit der Anwendung dynamisch präsentiert und das Wertversprechen klar und unvergesslich macht.",
                },
                {
                    title: "MonCarnet - Tägliche Gesundheitsüberwachung",
                    slug: "moncarnet-health-monitoring",
                    description: "Persönliches mobiles UX/UI-Designprojekt zur Verbesserung der täglichen Gesundheitsüberwachung der Benutzer. Inspiriert von Apps wie Medisafe und CareClinic war das Ziel, eine klare, benutzerfreundliche und zugängliche Oberfläche zu gestalten.",
                    image: "/carnet.png",
                    hint: "health app interface",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Mobile Design"],
                    liveUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    repoUrl: "https://www.figma.com/design/UJra7UGjKLQFtkJYlULyW7/Mon-carnet?node-id=0-1&t=nAbwNkMzi5WtEWUa-1",
                    contextAndObjective: "Persönliches mobiles UX/UI-Designprojekt zur Verbesserung der täglichen Gesundheitsüberwachung. Ziel war es, eine klare, benutzerfreundliche und zugängliche Oberfläche zu gestalten, die von führenden Apps inspiriert ist.",
                    problem: "Benutzer haben oft Schwierigkeiten, ihre Gesundheitsdaten regelmäßig zu verfolgen – meist aufgrund überladener Oberflächen.",
                    solution: "Eine minimalistische Benutzeroberfläche mit Fokus auf Benutzerfreundlichkeit, intelligenten Erinnerungen und klaren Fortschrittsvisualisierungen.",
                    resultat: "Ein umfassendes mobiles Designkonzept, das für seine Klarheit und einfache Navigation gelobt wurde.",
                    process: ["Recherche", "Wireframing", "Prototyping", "Testing"],
                    mockupImage: "/carnet2.png"
                },
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Ein responsives Landing-Page-Konzept für eine afrikanische Super-App.",
                    image: "/gozem.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-952&t=nBdVnw8DyPHsrdUJ-0",
                    contextAndObjective: "Dies ist ein responsives Landing-Page-Konzept, das für eine afrikanische All-in-One-Super-App entwickelt wurde. Das Layout ist sowohl für Desktop- als auch für mobile Benutzer zugeschnitten und hebt die Kerndienste der App hervor: Ride-Hailing, Lebensmittellieferung, Online-Shopping und mehr.",
                    problem: "Die Herausforderung bestand darin, eine Vielzahl von Diensten in einer einzigen Benutzeroberfläche zu bündeln, ohne den Benutzer zu überfordern.",
                    solution: "Implementierung eines ikonischen Service-Gitters und klarer thematischer Abschnitte für eine schnelle Navigation.",
                    resultat: "Eine moderne Landingpage, die die Markenidentität von Gozem stärkt und die Konversion maximiert.",
                    process: ["Analyse", "UI Design", "Visuelles Design"],
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png"
                },
                {
                    title: "BKSolution Landingpage",
                    slug: "bksolution-landing-page",
                    description: "Dieses Landingpage-Projekt für BKS (Buyor King Solution) ist klar und ansprechend gestaltet und führt den Benutzer durch die Hauptdienstleistungen.",
                    image: "/bks1.png",
                    hint: "landing page design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    repoUrl: "https://www.figma.com/design/qbcezIAKusPgK9ZAf5eJgy/GOZEM---BKS?node-id=216-951&t=atTzTrUIyjv8mDlz-0",
                    contextAndObjective: "Design einer Landingpage für BKSolution, um deren digitale Dienstleistungen professionell und prägnant zu präsentieren.",
                    problem: "Unklare Kommunikation der Dienste führte in früheren Versionen zu hohen Absprungraten.",
                    solution: "Einsatz der 'AIDA'-Struktur mit strategischen CTAs, um den Benutzer zur Kontaktaufnahme zu führen.",
                    resultat: "Ein sauberes Design, das Vertrauen schafft und die Lead-Generierung für B2B-Kunden vereinfacht.",
                    process: ["Strategie", "Copywriting", "Web Design"],
                    mockupImage: "/bks1.png"
                },
                {
                    title: "Fintech-Dashboard - Übersicht der Finanzkennzahlen",
                    slug: "fintech-dashboard",
                    description: "Diese aktive Dashboard-Seite bietet einen vollständigen Überblick über wesentliche Finanzdaten. Sie präsentiert Schlüsselkennzahlen (Umsatz, Ausgaben, Reingewinn), ein intuitives Balkendiagramm zur monatlichen Ausgabenanalyse, eine detaillierte Transaktionsverfolgungstabelle und ein Kuchendiagramm zur Aufschlüsselung der Einnahmequellen.",
                    image: "/fin1.png",
                    hint: "fintech dashboard",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Dashboard"],
                    liveUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    repoUrl: "https://www.figma.com/design/Eur3wHPbBnIEfM9vMuM7nS/FINTECH-MANAGEMN?node-id=701-36&t=E5bWM1LLQwwVIpRO-1",
                    problem: "Benutzer benötigen eine zentralisierte, leicht verständliche Oberfläche, um die finanzielle Leistung auf einen Blick zu überwachen und verstreute Datenquellen zu ersetzen.",
                    solution: "Das Dashboard konsolidiert alle wichtigen Finanzdaten in einer visuell intuitiven Oberfläche mit interaktiven Diagrammen und detaillierten Tabellen, um schnelle und fundierte Entscheidungen zu ermöglichen.",
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
                mockup: "Mockup",
                previousProject: "Vorheriges Projekt",
                nextProject: "Nächstes Projekt"
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


