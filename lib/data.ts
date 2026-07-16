/* ─────────────────────────────────────────────────────────────────────────────
   Portfolio data - Muhammad Umer Iftikhar
   Source: Upwork profile + provided bio (June 2026)
───────────────────────────────────────────────────────────────────────────── */

/* ── Hero stats ─────────────────────────────────────────────────────────── */
export const heroStats = [
  { value: "Top Rated", label: "Upwork",          icon: "BadgeCheck" },
  { value: "100%",      label: "Job Success",      icon: "Clock"      },
  { value: "6+",        label: "Years Exp.",        icon: "Star"       },
  { value: "50+",       label: "Projects Done",     icon: "Trophy"     },
];

/* ── Bio (used as Hero fallback + About section) ────────────────────────── */
export const heroBio =
  "Top-Rated Unity Expert with 6+ years of experience transforming complex ideas into high-performance, polished games. I provide comprehensive end-to-end development, taking projects from initial concept to full commercial release. Whether you need a competitive multiplayer environment, a seamless WebGL experience, or a top-tier Mobile/PC title, you provide the vision and I handle the entire technical implementation, delivering a polished, market-ready product.";

export const fullBio =
  "Top-Rated Unity Expert with 6+ years of experience transforming complex ideas into high-performance, polished games. I provide comprehensive end-to-end development, taking projects from initial concept to full commercial release. Whether you need a competitive multiplayer environment, a seamless WebGL experience, or a top-tier Mobile/PC title, you provide the vision and I handle the entire technical implementation, delivering a polished, market-ready product.";

/* ── Technologies (badge strip) ─────────────────────────────────────────── */
export const technologies = [
  { name: "Unity",         abbr: "U",    bg: "#1a1a2e", border: "#4a4a7a", text: "#ffffff" },
  { name: "C#",            abbr: "C#",   bg: "#1e0a3c", border: "#7c3aed", text: "#c084fc" },
  { name: "Photon",        abbr: "Ph",   bg: "#1a0f00", border: "#f97316", text: "#fb923c" },
  { name: "PlayFab",       abbr: "PF",   bg: "#001a2c", border: "#0ea5e9", text: "#38bdf8" },
  { name: "Firebase",      abbr: "Fb",   bg: "#1a0d00", border: "#f59e0b", text: "#fbbf24" },
  { name: "WebGL",         abbr: "WG",   bg: "#1a0c00", border: "#ef4444", text: "#f87171" },
  { name: "Addressables",  abbr: "Ad",   bg: "#001a15", border: "#10b981", text: "#34d399" },
  { name: "AWS",           abbr: "AWS",  bg: "#0d1a00", border: "#84cc16", text: "#a3e635" },
  { name: "Node.js",       abbr: "NJS",  bg: "#001a0a", border: "#22c55e", text: "#4ade80" },
  { name: "Git",           abbr: "Git",  bg: "#1a0800", border: "#f97316", text: "#fb923c" },
];

/* ── Skill categories (replaces old progress-bar skills) ────────────────── */
export const skillCategories = [
  {
    category: "Game Engine & Core",
    icon: "Cpu",
    color: "violet",
    skills: ["Unity 3D", "C#", "Unity DOTS / ECS", "URP / HDRP", "Animator & Timeline", "Physics & Collisions", "Scriptable Objects"],
  },
  {
    category: "Platforms",
    icon: "Monitor",
    color: "blue",
    skills: ["Android", "iOS", "Windows", "macOS", "WebGL", "Console-ready builds"],
  },
  {
    category: "Backend & Services",
    icon: "Cloud",
    color: "cyan",
    skills: ["Firebase Auth & Analytics", "PlayFab (Economy, Leaderboards)", "AWS", "Node.js", "REST APIs", "JSON / XML"],
  },
  {
    category: "Multiplayer & Networking",
    icon: "Wifi",
    color: "purple",
    skills: ["Photon Fusion", "Photon PUN2", "Real-time Networking", "Matchmaking Systems", "Room & Lobby Management", "RPCs & Serialization"],
  },
  {
    category: "Optimization",
    icon: "Gauge",
    color: "amber",
    skills: ["Addressables", "Asset Bundles", "Memory Profiling", "FPS Optimization", "Draw-call Reduction", "LOD & Occlusion Culling"],
  },
  {
    category: "Monetization",
    icon: "DollarSign",
    color: "green",
    skills: ["IAP Integration", "AdMob", "Unity Ads", "AppLovin", "IronSource Mediation", "Reward Systems"],
  },
  {
    category: "Gameplay Perspectives",
    icon: "Gamepad2",
    color: "rose",
    skills: ["FPS / TPS", "Isometric / Top-Down", "Side Scroller / 2.5D", "Casual / Hyper-Casual", "Story-Driven / RPG", "Educational & Gamification"],
  },
  {
    category: "UI/UX & Tools",
    icon: "Layers",
    color: "pink",
    skills: ["Responsive UI Systems", "Localization-ready UI", "DOTween Animations", "Git / Version Control", "Jira / Agile / Scrum", "Blender (basic)"],
  },
];

/* ── Expertise cards ────────────────────────────────────────────────────── */
export const expertise = [
  {
    icon: "Users",
    title: "Multiplayer Development",
    description:
      "Expert in Photon Fusion and PUN2, building scalable real-time multiplayer games with authoritative matchmaking, room/lobby management, RPCs, player synchronization, and anti-cheat foundations across Mobile, PC, and WebGL.",
    gradient: "from-violet-600 to-purple-600",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: "Cloud",
    title: "Backend Integration",
    description:
      "Deep expertise in PlayFab and Firebase: player authentication, persistent cloud saves, virtual economy systems, global leaderboards, real-time analytics, and push notifications, all wired seamlessly into Unity.",
    gradient: "from-blue-600 to-cyan-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: "Database",
    title: "API & Data Management",
    description:
      "Robust REST API integration, JSON/XML data pipelines, secure cloud data synchronization, and well-structured client-server communication patterns across mobile, PC, and WebGL deployments.",
    gradient: "from-amber-600 to-orange-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: "Gauge",
    title: "Performance Optimization",
    description:
      "Delivering stable 60fps on mid-range Android through Unity Profiler-driven analysis, draw-call batching, LOD management, occlusion culling, texture atlasing, and Addressables-based streaming.",
    gradient: "from-red-600 to-rose-600",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    iconColor: "text-red-400",
  },
  {
    icon: "Package",
    title: "Asset & Resource Management",
    description:
      "Implementing Addressables and Asset Bundles for CDN-backed dynamic content delivery, keeping build sizes lean, load times fast, and enabling live updates and DLC without full rebuilds.",
    gradient: "from-yellow-600 to-amber-600",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: "Layers",
    title: "Clean Architecture",
    description:
      "SOLID-principled, modular Unity code built for long-term scalability, from Scriptable Object-driven data layers to service-locator patterns, dependency injection, and event-bus architectures.",
    gradient: "from-emerald-600 to-teal-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: "Map",
    title: "Level Design",
    description:
      "Crafting immersive, balanced, and visually compelling environments. Designing engaging gameplay loops and spatial layouts tailored for 2D, 3D, and multiplayer experiences, with a focus on player flow, pacing, and replayability.",
    gradient: "from-teal-600 to-cyan-600",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
    iconColor: "text-teal-400",
  },
  {
    icon: "Gamepad2",
    title: "Gameplay Systems",
    description:
      "Designing and implementing engaging gameplay mechanics, combat systems, progression loops, quests, achievements, inventory systems, and player retention features that create compelling gaming experiences.",
    gradient: "from-purple-600 to-violet-600",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: "Monitor",
    title: "UI/UX Development",
    description:
      "Creating intuitive game interfaces, responsive HUDs, animated menus, inventory screens, shop systems, and polished user experiences that enhance player engagement across all platforms.",
    gradient: "from-cyan-600 to-sky-600",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: "DollarSign",
    title: "Game Monetization",
    description:
      "Integrating in-app purchases, virtual currencies, rewarded ads, battle passes, subscriptions, and economy-balancing systems while maintaining a player-friendly experience.",
    gradient: "from-green-600 to-emerald-600",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: "Brain",
    title: "AI & NPC Systems",
    description:
      "Developing intelligent enemy behaviors, state machines, behavior trees, pathfinding, navigation systems, companion AI, and dynamic NPC interactions for immersive gameplay.",
    gradient: "from-orange-600 to-amber-600",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: "Activity",
    title: "Analytics & Live Operations",
    description:
      "Implementing player analytics, event tracking, remote configuration, A/B testing, seasonal content systems, and live-ops tools to improve retention and monetization.",
    gradient: "from-blue-600 to-sky-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: "Sparkles",
    title: "Animation & Visual Effects",
    description:
      "Creating smooth character animations, blend trees, particle effects, camera systems, hit reactions, and visual feedback that enhance gameplay feel and immersion.",
    gradient: "from-pink-600 to-rose-600",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: "Wrench",
    title: "Tools & Editor Development",
    description:
      "Building custom Unity Editor tools, level editors, automated workflows, debugging utilities, and content management systems to accelerate development pipelines.",
    gradient: "from-slate-500 to-gray-600",
    bg: "bg-slate-500/10",
    border: "border-slate-500/20",
    iconColor: "text-slate-400",
  },
  {
    icon: "Music",
    title: "Audio Systems Integration",
    description:
      "Implementing adaptive music, sound effect management, audio mixers, voice systems, spatial audio, and event-driven sound design for immersive player experiences.",
    gradient: "from-indigo-600 to-violet-600",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: "Shuffle",
    title: "Procedural Content Generation",
    description:
      "Developing systems for procedural levels, terrain generation, loot distribution, enemy spawning, and dynamic content creation to maximize replayability.",
    gradient: "from-lime-600 to-green-600",
    bg: "bg-lime-500/10",
    border: "border-lime-500/20",
    iconColor: "text-lime-400",
  },
  {
    icon: "Save",
    title: "Save Systems & Player Progression",
    description:
      "Building secure save/load systems, player progression frameworks, achievement tracking, cloud synchronization, and profile management across devices.",
    gradient: "from-sky-600 to-cyan-600",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    iconColor: "text-sky-400",
  },
  {
    icon: "Globe",
    title: "Platform Services Integration",
    description:
      "Integrating Google Play Services, Apple Game Center, authentication systems, cloud saves, leaderboards, achievements, and social features.",
    gradient: "from-rose-600 to-pink-600",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: "Film",
    title: "Cinematics & Story Systems",
    description:
      "Creating dialogue systems, cutscene frameworks, branching narratives, quest systems, and story-driven gameplay experiences for narrative-focused games.",
    gradient: "from-amber-600 to-yellow-600",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    iconColor: "text-amber-400",
  },
];

/* ── Projects (unified — featured + gallery) ────────────────────────────── */
export type ProjectLink = { appStore?: string; playStore?: string; steam?: string };

export type Project = {
  id: number;
  title: string;
  image: string;
  video?: string;
  tags: string[];
  techStack: string[];
  description: string;
  links: ProjectLink;
  isFeatured: boolean;
  gradient: string;
  accentColor: string;
  year: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Wander",
    image: "/Wander.jpeg",
    tags: ["Multiplayer", "2D", "Mobile"],
    techStack: ["Unity", "C#", "Photon", "PlayFab"],
    description:
      "Wander is a falling-block multiplayer game focused on real-time matches. Each game pairs you with an opponent, turning familiar falling-block mechanics into shared, live experiences where timing, awareness, and smart chaining make the difference. Play against random players, challenge friends, or play against AI. Track progress on leaderboards and explore a competitive puzzle game designed to be engaging without being overwhelming.",
    links: { appStore: "https://apps.apple.com/pk/app/wander-game/id6751537890" },
    isFeatured: true,
    gradient: "from-blue-950 via-indigo-950 to-slate-900",
    accentColor: "#6366f1",
    year: "2024",
  },
  {
    id: 2,
    title: "Organizer Pro",
    image: "/OrganizerProIcon.jpeg",
    tags: ["3D", "PC"],
    techStack: ["Unity", "C#"],
    description:
      "Organizer Pro is a casual decluttering and organizational game with over 15,000 objects to organize. No rules or time limits, just pure arranging and satisfying before-and-after transformations. Approximately 30 total hours of playtime.",
    links: { steam: "https://store.steampowered.com/app/4378250/Organizer_Pro/" },
    isFeatured: true,
    gradient: "from-teal-950 via-emerald-950 to-slate-900",
    accentColor: "#14b8a6",
    year: "2025",
  },
  {
    id: 3,
    title: "Stickey",
    image: "/StickeyIcon.jpeg",
    tags: ["Multiplayer", "2D", "Mobile"],
    techStack: ["Unity", "C#", "Photon", "Firebase", "AdMob"],
    description:
      "Stickey is a fast-paced multiplayer card game of strategy, bluffing, and risk! Play with friends or compete online as you draw, play, and decide whether to stick or pass. Each round brings new surprises with action cards, combos, and sudden twists. Outsmart opponents, avoid traps, and be the last one standing.",
    links: { playStore: "https://play.google.com/store/apps/details?id=com.omgc.stickey.cardgame" },
    isFeatured: true,
    gradient: "from-rose-950 via-red-950 to-slate-900",
    accentColor: "#f43f5e",
    year: "2024",
  },
  {
    id: 4,
    title: "Gamisodes",
    image: "/Gamisodes.jpeg",
    tags: ["3D", "2D", "Mobile"],
    techStack: ["Unity", "C#", "AWS", "Node.js", "Firebase"],
    description:
      "Experience interactive stories featuring iconic cartoon characters like Inspector Gadget! Gamisodes brings you thrilling interactive stories where you can watch and play mini-games. Whether you love classic cartoon adventures, story-driven games, or fun puzzle challenges, Gamisodes offers a unique mix of gaming and entertainment for all ages.",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.Gamisodes",
      appStore: "https://apps.apple.com/pk/app/gamisodes/id6691440023",
    },
    isFeatured: true,
    gradient: "from-purple-950 via-violet-950 to-slate-900",
    accentColor: "#a855f7",
    year: "2024",
  },
  {
    id: 5,
    title: "Speedball Neon Rush: Endless",
    image: "/Speedball.jpeg",
    tags: ["3D", "Mobile"],
    techStack: ["Unity", "C#", "AdMob", "AppLovin", "Firebase"],
    description:
      "Enter the world of speed, rhythm, and survival! This isn't just another endless runner; it's a pulse-pounding journey through rotating neon environments, where precision, timing, and focus decide how far you'll go. The neon speedball is always moving, the path is always shifting, and your only mission is to survive.",
    links: { appStore: "https://apps.apple.com/us/app/speedball-neon-rush-endless/id6520381264" },
    isFeatured: false,
    gradient: "from-cyan-950 via-sky-950 to-slate-900",
    accentColor: "#06b6d4",
    year: "2024",
  },
  {
    id: 10,
    title: "Shadow Bound",
    image: "/ShadowBoundIcon.png",
    video: "/ShadowBound.mp4",
    tags: ["2D", "PC"],
    techStack: ["Unity", "C#", "2D Art", "JSON", "Level Designing"],
    description:
      "I developed Shadowbound, a 2D pixel-art platformer for PC created in Unity with C#. Players traverse handcrafted levels filled with enemies, traps, and hidden paths, aiming to survive with limited health and resources. The game emphasizes precision, exploration, and progression, offering a nostalgic yet modern experience. This project highlights my expertise in Unity 2D development, C# scripting, and creative level design.",
    links: {},
    isFeatured: false,
    gradient: "from-gray-950 via-slate-900 to-gray-950",
    accentColor: "#8b5cf6",
    year: "2024",
  },
  {
    id: 11,
    title: "Rewind Jumper",
    image: "/RewindJumperIcon.png",
    video: "/RewindJumper.mp4",
    tags: ["2D", "PC"],
    techStack: ["Unity", "C#", "2D Art"],
    description:
      "I developed Rewind Jumper, a 2D platformer created in Unity with C#. Players control a blue character navigating vibrant levels filled with floating platforms, collectibles, and obstacles. The game introduces a unique rewind mechanic that lets players reverse time anytime even after failure, adding strategy and replayability to classic jumping gameplay. Optimized for PC and mobile, the game demonstrates my skills in Unity 2D development, C# scripting, and designing innovative gameplay mechanics.",
    links: {},
    isFeatured: false,
    gradient: "from-blue-950 via-sky-950 to-slate-900",
    accentColor: "#3b82f6",
    year: "2024",
  },
  {
    id: 12,
    title: "Echo Strike",
    image: "/EchoStrikeIcon.png",
    video: "/EchoStrike.mp4",
    tags: ["3D", "Mobile"],
    techStack: ["Unity", "C#"],
    description:
      "EchoStrike is a fast-paced obstacle-dodging game built in Unity. Players guide their character upward in a smooth, wave-like motion while avoiding dynamic obstacles. Designed for Android, the game features intuitive controls, responsive UI, and highly optimized performance. Built for replayability and challenge, EchoStrike showcases my skills in game mechanics, mobile UX design, and efficient optimization for low-end devices.",
    links: {},
    isFeatured: false,
    gradient: "from-orange-950 via-red-950 to-slate-900",
    accentColor: "#f97316",
    year: "2024",
  },
];

/* Backward-compatible aliases */
export const featuredProjects = projects.filter((p) => p.isFeatured);
export const portfolioProjects = projects;

/* ── Experience ─────────────────────────────────────────────────────────── */
export const experience = [
  {
    company: "Upwork - Top Rated Freelancer",
    role: "Unity Game Developer",
    period: "2025 – Present",
    location: "Remote · Worldwide",
    description:
      "Top Rated Unity developer on Upwork with a 100% Job Success Score. Delivering multiplayer titles, mobile casual games, 3D simulations, blockchain apps, and WebGL experiences for international clients, consistently rated 5 stars across all engagements.",
    tech: ["Unity 3D", "C#", "Photon PUN2/Fusion", "Firebase", "PlayFab", "AdMob", "IAP"],
    type: "Freelance",
  },
  {
    company: "Freelance - Game Projects",
    role: "Unity Game Developer",
    period: "2020 – Present",
    location: "Remote",
    description:
      "Independently designed and published 50+ games and apps built in Unity with C#. Crafted addictive gameplay loops, optimized performance for Android/iOS/PC, and integrated monetization strategies including rewarded ads, interstitials, and in-app purchases.",
    tech: ["Unity", "C#", "Android", "iOS", "AdMob", "Unity Ads", "IronSource"],
    type: "Freelance",
  },
  {
    company: "Early-Stage Startups",
    role: "App Developer & Technical Consultant",
    period: "2021 – 2023",
    location: "Remote",
    description:
      "Collaborated with founders to build MVPs and proof-of-concept mobile applications. Focused on clean UI/UX, scalable code architecture, and meeting tight go-to-market deadlines. Covered blockchain-themed apps with token economies and reward-based gamification.",
    tech: ["Unity", "C#", "Firebase", "Node.js", "REST API", "UI/UX"],
    type: "Contract",
  },
  {
    company: "Teaching & Mentoring",
    role: "Unity & C# Instructor",
    period: "2022 – 2023",
    location: "Rawalpindi, PK",
    description:
      "Conducted workshops and one-on-one mentoring sessions for beginners learning Unity and C#. Curriculum covered game mechanics, scripting fundamentals, UI systems, physics, and App Store publishing workflows.",
    tech: ["Unity", "C#", "Game Design", "UI Systems", "Publishing"],
    type: "Part-time",
  },
];

/* ── Testimonials ───────────────────────────────────────────────────────── */
export const testimonials = [
  {
    name: "Albert Dorn",
    role: "Game Owner",
    company: "Dorn Bros Entertainment",
    project: "Freshness Speed Run",
    content:
      "Muhammad was excellent to work with throughout the project. He was professional, communicative, detail-oriented, and consistently delivered high-quality work. He successfully implemented gameplay features, UI improvements, ad mediation, Firebase integration, and bug fixes. Communication was clear throughout the process, and the final result exceeded my expectations.",
    rating: 5,
    initials: "AD",
    gradientFrom: "#3b82f6",
    gradientTo: "#8b5cf6",
  },
  {
    name: "Karen",
    role: "Steam Publisher",
    company: "",
    project: "Puzzle Game (Steam)",
    content:
      "This is the 2nd major project I have worked on with Muhammad. He was an absolute integral part of the project. He was able to make all of my ideas come true, and he did it with a high level of efficiency and skill. I especially appreciate his attention to detail. He is a gem of a scripter, extremely talented, and a wonderful Unity developer.",
    rating: 5,
    initials: "KA",
    gradientFrom: "#8b5cf6",
    gradientTo: "#6d28d9",
  },
  {
    name: "Shorsh H.",
    role: "Entrepreneur",
    company: "",
    project: "Mining App",
    content:
      "I had a great experience working with Muhammad Umer on my app. From the start, he understood my requirements and turned them into a working product exactly the way I imagined. He communicates clearly, gives useful suggestions, and always responds quickly.",
    rating: 5,
    initials: "SH",
    gradientFrom: "#10b981",
    gradientTo: "#059669",
  },
  {
    name: "Thilipkumar T.",
    role: "Entrepreneur",
    company: "",
    project: "Card Game",
    content:
      "I highly recommend Muhammad Umer for game development needs. He delivered the card game on schedule and within budget. He was also very responsive to my questions and concerns, and he quickly resolved any issues that arose during testing.",
    rating: 5,
    initials: "TT",
    gradientFrom: "#0ea5e9",
    gradientTo: "#6366f1",
  },
  {
    name: "Tommy Blackstone",
    role: "Client",
    company: "Promethean Writing Services",
    project: "3D Model Implementation (Roblox)",
    content:
      "Muhammad did a great job designing my Mobil Directo Siren 3D model for Roblox. It had a realistic control panel and fire coming out of its exhaust. Muhammad patiently worked with me to make sure that the sound problem was fixed. I highly recommend this freelancer.",
    rating: 5,
    initials: "TB",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
  },
  {
    name: "Karen",
    role: "Steam Publisher",
    company: "Organizer Pro",
    project: "Plugin Integration",
    content:
      "I had a particularly challenging job, and Muhammad was able to sort the issue and get everything solved. Really appreciate the effort he put into my project! Thank you!",
    rating: 5,
    initials: "KA",
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
  },
  {
    name: "Amjad Alhamed",
    role: "Entrepreneur",
    company: "",
    project: "Game Reskin",
    content:
      "Professional and very cooperative developer! I worked with him and he was fast, understood the requirements perfectly, and delivered clean, well-organized work. Honestly, it was an excellent experience.",
    rating: 5,
    initials: "AA",
    gradientFrom: "#f97316",
    gradientTo: "#dc2626",
  },
];
