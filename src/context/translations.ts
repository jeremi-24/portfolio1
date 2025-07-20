
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
    wireframeImage?: string;
    finalUIImage?: string;
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
    };
    about: {
        title: string;
        p1: string;
        p2: string;
        cvButton: string;
    };
    contact: {
        title: string;
        description: string;
        form: {
            name: {
                label: string;
                placeholder: string;
            };
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
            name: string;
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
            subtitle: "Développeur Full-Stack & UI Designer passionné, transformant des idées complexes en solutions numériques élégantes et performantes.",
            cta: "Découvrir mes projets",
        },
        experience: {
            title: "Mon Parcours Professionnel",
            description: "Une chronologie de mes rôles clés et de mes réalisations dans l'industrie technologique.",
            experiences: [
                {
                    role: "UI Designer / Frontend Developer",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Fév 2025 - Aujourd'hui",
                    description: "Conception de maquettes pour différents produits numériques et intégrations avec l'équipe de développement.",
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
                    period: "N/A",
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
            filters: ["Tous", "Frontend", "UI Design", "Graphic Design"],
            liveDemo: "Démo Live",
            viewDetails: "Voir les détails",
            projects: [
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Un concept de page d'accueil responsive pour une super-application africaine tout-en-un.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Solution", "UI", "Identité"],
                    contextAndObjective: "Il s'agit d'un concept de page d'accueil responsive conçu pour une super-application africaine tout-en-un. Adaptée aux utilisateurs sur ordinateur et mobile, la mise en page met en avant les services principaux de l'application : VTC, livraison de courses, achats en ligne, et plus encore.",
                    problem: "Cette section met en évidence les services clés de la super application Gozem avec un design chaleureux et moderne et une disposition intuitive pour simplifier la mobilité et les achats quotidiens.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                {
                    title: "Plateforme E-commerce",
                    slug: "plateforme-ecommerce",
                    description: "Une solution e-commerce complète avec un CMS personnalisé, une intégration de passerelle de paiement et une interface utilisateur responsive.",
                    image: "https://placehold.co/600x400.png",
                    hint: "online store",
                    category: "Frontend",
                    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Outil de Gestion de Projet",
                    slug: "outil-gestion-projet",
                    description: "Une plateforme collaborative pour les équipes pour gérer les tâches, suivre les progrès et communiquer efficacement, construite avec une API en temps réel.",
                    image: "https://placehold.co/600x400.png",
                    hint: "dashboard interface",
                    category: "Frontend",
                    tags: ["React", "Java", "WebSocket", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Identité de Marque",
                    slug: "identite-de-marque",
                    description: "Package de branding complet pour une startup, incluant la conception de logo, la palette de couleurs et les supports marketing.",
                    image: "https://placehold.co/600x400.png",
                    hint: "branding design",
                    category: "Graphic Design",
                    tags: ["Figma", "Illustrator"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "UI d'Application Mobile",
                    slug: "ui-application-mobile",
                    description: "Un design d'interface utilisateur épuré et intuitif pour une nouvelle application mobile de réseautage social.",
                    image: "https://placehold.co/600x400.png",
                    hint: "mobile app",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Problème", "Sketch", "UI"],
                    contextAndObjective: "Créer une interface attrayante pour une nouvelle app sociale visant à connecter les gens localement. L'objectif était de concevoir une expérience fluide pour encourager les interactions.",
                    problem: "Les applications existantes étaient jugées trop complexes et encombrées. Les utilisateurs avaient du mal à trouver des événements et à se connecter avec d'autres personnes partageant les mêmes intérêts.",
                    wireframeImage: "https://placehold.co/600x400.png",
                    finalUIImage: "https://placehold.co/600x400.png",
                },
                {
                    title: "Site Portfolio",
                    slug: "site-portfolio",
                    description: "Ce site personnel, conçu pour présenter mes compétences et projets, avec un design épuré et des animations fluides.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMY6E3NnZnAQlhYW7VTD1Sn3w3a-CHrJdJg&s",
                    hint: "developer portfolio",
                    category: "Frontend",
                    tags: ["Next.js", "Tailwind CSS", "GenAI"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Graphismes de Campagne Marketing",
                    slug: "graphismes-campagne-marketing",
                    description: "Création d'une série de graphiques et de visuels attrayants pour une campagne de marketing numérique, augmentant l'engagement des utilisateurs.",
                    image: "https://placehold.co/600x400.png",
                    hint: "marketing graphics",
                    category: "Graphic Design",
                    tags: ["Photoshop", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
            ]
        },
        about: {
            title: "À Propos de Moi",
            p1: "Je suis un développeur full stack et concepteur d'interface utilisateur, passionné par la création de solutions numériques élégantes et performantes. J'utilise des technologies comme Next.js, React et Java Spring Boot pour donner vie à des projets robustes.",
            p2: "Fondateur de la communauté \"DWIN - Devs With INTelligence\", j'aime partager mes connaissances et aider d'autres développeurs à progresser. Je suis toujours ouvert à de nouvelles opportunités de collaboration, que ce soit en freelance ou au sein d'une équipe innovante.",
            cvButton: "Télécharger mon CV",
        },
        contact: {
            title: "Contactez-moi",
            description: "Une idée de projet ? Une question ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités.",
            form: {
                name: {
                    label: "Nom",
                    placeholder: "Votre nom",
                },
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
                name: "Le nom doit contenir au moins 2 caractères.",
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
            subtitle: "Passionate Full-Stack Developer & UI Designer, transforming complex ideas into elegant and high-performing digital solutions.",
            cta: "Discover my projects",
        },
        experience: {
            title: "My Professional Journey",
            description: "A timeline of my key roles and achievements in the tech industry.",
            experiences: [
                {
                    role: "UI Designer / Frontend Developer",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Feb 2025 - Present",
                    description: "Designing mockups for various digital products and integrating them with the development team.",
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
                    period: "N/A",
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
            filters: ["All", "Frontend", "UI Design", "Graphic Design"],
            liveDemo: "Live Demo",
            viewDetails: "View Details",
            projects: [
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "A responsive landing page concept for an all-in-one African super app.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Solution", "UI", "Identity"],
                    contextAndObjective: "This is a responsive landing page concept designed for an all-in-one African super app. Tailored for both desktop and mobile users, the layout highlights the app’s core services: ride-hailing, grocery delivery, online shopping, and more.",
                    problem: "This section highlights key Gozem super app services with a warm, modern design and intuitive layout to simplify mobility and daily shopping.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                {
                    title: "E-commerce Platform",
                    slug: "ecommerce-platform",
                    description: "A complete e-commerce solution with a custom CMS, payment gateway integration, and a responsive user interface.",
                    image: "https://placehold.co/600x400.png",
                    hint: "online store",
                    category: "Frontend",
                    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Project Management Tool",
                    slug: "project-management-tool",
                    description: "A collaborative platform for teams to manage tasks, track progress, and communicate effectively, built with a real-time API.",
                    image: "https://placehold.co/600x400.png",
                    hint: "dashboard interface",
                    category: "Frontend",
                    tags: ["React", "Java", "WebSocket", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Brand Identity",
                    slug: "brand-identity",
                    description: "Complete branding package for a startup, including logo design, color palette, and marketing materials.",
                    image: "https://placehold.co/600x400.png",
                    hint: "branding design",
                    category: "Graphic Design",
                    tags: ["Figma", "Illustrator"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Mobile App UI",
                    slug: "mobile-app-ui",
                    description: "A clean and intuitive user interface design for a new social networking mobile application.",
                    image: "https://placehold.co/600x400.png",
                    hint: "mobile app",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Problem", "Sketch", "UI"],
                    contextAndObjective: "Create an engaging interface for a new social app to connect people locally. The goal was to design a seamless experience to encourage interactions.",
                    problem: "Existing apps were considered too complex and cluttered. Users struggled to find events and connect with like-minded people.",
                    wireframeImage: "https://placehold.co/600x400.png",
                    finalUIImage: "https://placehold.co/600x400.png",
                },
                {
                    title: "Portfolio Website",
                    slug: "portfolio-website",
                    description: "This personal website, designed to showcase my skills and projects, with a clean design and smooth animations.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMY6E3NnZnAQlhYW7VTD1Sn3w3a-CHrJdJg&s",
                    hint: "developer portfolio",
                    category: "Frontend",
                    tags: ["Next.js", "Tailwind CSS", "GenAI"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Marketing Campaign Graphics",
                    slug: "marketing-campaign-graphics",
                    description: "Created a series of engaging graphics and visuals for a digital marketing campaign, increasing user engagement.",
                    image: "https://placehold.co/600x400.png",
                    hint: "marketing graphics",
                    category: "Graphic Design",
                    tags: ["Photoshop", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
            ]
        },
        about: {
            title: "About Me",
            p1: "I am a full-stack developer and UI designer, passionate about creating elegant and high-performing digital solutions. I use technologies like Next.js, React, and Java Spring Boot to bring robust projects to life.",
            p2: "Founder of the 'DWIN - Devs With INTelligence' community, I enjoy sharing my knowledge and helping other developers grow. I am always open to new collaboration opportunities, whether freelance or within an innovative team.",
            cvButton: "Download My CV",
        },
        contact: {
            title: "Contact Me",
            description: "Have a project idea? A question? Feel free to contact me. I'm always open to new opportunities.",
            form: {
                name: {
                    label: "Name",
                    placeholder: "Your name",
                },
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
                name: "Name must be at least 2 characters.",
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
            subtitle: "Leidenschaftlicher Full-Stack-Entwickler & UI-Designer, der komplexe Ideen in elegante und leistungsstarke digitale Lösungen umwandelt.",
            cta: "Meine Projekte entdecken",
        },
        experience: {
            title: "Mein beruflicher Werdegang",
            description: "Eine Zeitleiste meiner wichtigsten Positionen und Erfolge in der Technologiebranche.",
            experiences: [
                {
                    role: "UI-Designer / Frontend-Entwickler",
                    company: "NS GLOBAL EXPERTISE",
                    period: "Feb 2025 - Heute",
                    description: "Gestaltung von Mockups für verschiedene digitale Produkte und Integrationen mit dem Entwicklungsteam.",
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
                    period: "N/A",
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
            filters: ["Alle", "Frontend", "UI Design", "Graphic Design"],
            liveDemo: "Live-Demo",
            viewDetails: "Details anzeigen",
            projects: [
                {
                    title: "GOZEM - Landing Page",
                    slug: "gozem-landing-page",
                    description: "Ein responsives Landing-Page-Konzept für eine afrikanische Super-App.",
                    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e237e7224345581.6809449403252.png",
                    hint: "mobile app design",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX", "Landing Page"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Lösung", "UI", "Identität"],
                    contextAndObjective: "Dies ist ein responsives Landing-Page-Konzept, das für eine afrikanische All-in-One-Super-App entwickelt wurde. Das Layout ist sowohl für Desktop- als auch für mobile Benutzer zugeschnitten und hebt die Kerndienste der App hervor: Ride-Hailing, Lebensmittellieferung, Online-Shopping und mehr.",
                    problem: "Dieser Abschnitt hebt die wichtigsten Dienstleistungen der Gozem-Super-App mit einem warmen, modernen Design und einem intuitiven Layout hervor, um die Mobilität und den täglichen Einkauf zu vereinfachen.",
                    wireframeImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6b62ff224345581.680948ebb2b05.png",
                    finalUIImage: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e76a6c224345581.680948ebb3cb6.png",
                },
                {
                    title: "E-Commerce-Plattform",
                    slug: "e-commerce-plattform",
                    description: "Eine komplette E-Commerce-Lösung mit einem benutzerdefinierten CMS, Zahlungsgateway-Integration und einer responsiven Benutzeroberfläche.",
                    image: "https://placehold.co/600x400.png",
                    hint: "online store",
                    category: "Frontend",
                    tags: ["Next.js", "TypeScript", "Spring Boot", "PostgreSQL"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Projektmanagement-Tool",
                    slug: "projektmanagement-tool",
                    description: "Eine kollaborative Plattform für Teams zur Verwaltung von Aufgaben, Verfolgung des Fortschritts und effektiven Kommunikation, erstellt mit einer Echtzeit-API.",
                    image: "https://placehold.co/600x400.png",
                    hint: "dashboard interface",
                    category: "Frontend",
                    tags: ["React", "Java", "WebSocket", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Markenidentität",
                    slug: "markenidentitat",
                    description: "Komplettes Branding-Paket für ein Startup, einschließlich Logo-Design, Farbpalette und Marketingmaterialien.",
                    image: "https://placehold.co/600x400.png",
                    hint: "branding design",
                    category: "Graphic Design",
                    tags: ["Figma", "Illustrator"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Mobile App UI",
                    slug: "mobile-app-ui-de",
                    description: "Ein sauberes und intuitives Benutzeroberflächen-Design für eine neue mobile Social-Networking-Anwendung.",
                    image: "https://placehold.co/600x400.png",
                    hint: "mobile app",
                    category: "UI Design",
                    tags: ["Figma", "UI/UX"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                    process: ["Problem", "Skizze", "UI"],
                    contextAndObjective: "Erstellen einer ansprechenden Oberfläche für eine neue soziale App, um Menschen vor Ort zu verbinden. Ziel war es, ein nahtloses Erlebnis zu gestalten, um Interaktionen zu fördern.",
                    problem: "Bestehende Apps wurden als zu komplex und überladen empfunden. Benutzer hatten Schwierigkeiten, Veranstaltungen zu finden und sich mit Gleichgesinnten zu vernetzen.",
                    wireframeImage: "https://placehold.co/600x400.png",
                    finalUIImage: "https://placehold.co/600x400.png",
                },
                {
                    title: "Portfolio-Webseite",
                    slug: "portfolio-webseite",
                    description: "Diese persönliche Webseite, entworfen, um meine Fähigkeiten und Projekte zu präsentieren, mit einem sauberen Design und flüssigen Animationen.",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMY6E3NnZnAQlhYW7VTD1Sn3w3a-CHrJdJg&s",
                    hint: "developer portfolio",
                    category: "Frontend",
                    tags: ["Next.js", "Tailwind CSS", "GenAI"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
                {
                    title: "Marketingkampagnen-Grafiken",
                    slug: "marketingkampagnen-grafiken",
                    description: "Erstellung einer Reihe ansprechender Grafiken und Visuals für eine digitale Marketingkampagne zur Steigerung des Benutzerengagements.",
                    image: "https://placehold.co/600x400.png",
                    hint: "marketing graphics",
                    category: "Graphic Design",
                    tags: ["Photoshop", "Figma"],
                    liveUrl: "#",
                    repoUrl: "https://github.com/jeremi-24",
                },
            ]
        },
        about: {
            title: "Über mich",
            p1: "Ich bin ein Full-Stack-Entwickler und UI-Designer, der sich leidenschaftlich für die Schaffung eleganter und leistungsstarker digitaler Lösungen einsetzt. Ich verwende Technologien wie Next.js, React und Java Spring Boot, um robuste Projekte zum Leben zu erwecken.",
            p2: "Als Gründer der 'DWIN - Devs With INTelligence'-Community teile ich gerne mein Wissen und helfe anderen Entwicklern zu wachsen. Ich bin immer offen für neue Kooperationsmöglichkeiten, sei es als Freiberufler oder in einem innovativen Team.",
            cvButton: "Meinen Lebenslauf herunterladen",
        },
        contact: {
            title: "Kontaktieren Sie mich",
            description: "Haben Sie eine Projektidee? Eine Frage? Zögern Sie nicht, mich zu kontaktieren. Ich bin immer offen für neue Möglichkeiten.",
            form: {
                name: {
                    label: "Name",
                    placeholder: "Ihr Name",
                },
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
                name: "Der Name muss mindestens 2 Zeichen lang sein.",
                email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
            }
        },
    }
};

    

    