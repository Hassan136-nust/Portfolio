export const profileData = {
  name: 'Hassan Jamal',
  title: 'BS Computer Science Student | Full-Stack & AI Enthusiast',
  email: 'hjamal.bscs24seecs@seecs.edu.pk',
  phone: '+923289082754',
  location: 'Islamabad, Pakistan',
  bio: 'NUST Computer Science student building immersive web apps, scalable backend services, and AI-assisted systems. Experienced in React, Node.js, MongoDB, Docker, AWS, and real-time collaboration platforms.',
  profileImage: "https://avatars.githubusercontent.com/Hassan136-nust?size=400",
  social: {
    github: 'https://github.com/Hassan136-nust',
    linkedin: 'https://www.linkedin.com/in/hassan-jamal-a92191324/',
    twitter: 'https://twitter.com/'
  },
  skills: {
    languages: ['Python', 'C++', 'Java', 'JavaScript', 'PL/SQL'],
    frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'MVC Architecture'],
    tools: ['Docker', 'AWS','Web Container', 'Cursor','Gen-AI', 'Antigravity', 'GitHub Copilot', 'Kiro', 'Lovable', 'Figma', 'Nginx(Basic)', 'Git', 'VS Code', 'PyCharm', 'Postman']
  },
  experience: [
    {
      id: 1,
      company: 'SemEval-2026 Task 3',
      position: 'Sentiment Analysis Researcher',
      duration: '2026',
      description: 'Worked on dimensional aspect-based sentiment analysis with NLP models and dataset optimization for an international workshop.'
    },
    {
      id: 2,
      company: 'UrbanPulse',
      position: 'MERN Stack Developer',
      duration: 'In Progress',
      description: 'Developing a geospatial urban intelligence platform using OpenStreetMap data, REST APIs, and MongoDB for city planning analysis.'
    },
    {
      id: 3,
      company: 'Real-Time Collaborative Editor',
      position: 'Full-Stack Developer',
      duration: '2024',
      description: 'Built a CRDT-based multi-user code editor with real-time cursor syncing, Docker deployment, and AWS infrastructure.'
    }
  ],
  education: [
    {
      id: 1,
      institution: 'National University of Sciences and Technology (NUST)',
      degree: 'BS Computer Science',
      duration: '2024 – Present',
      description: '4th Semester'
    }
  ]
};

export const projectsData = [
  {
  id: 1,
  title: 'FREYA : AI-Powered Collaborative Code Editor',
  description: 'Gen-AI powered collaborative development environment with real-time multi-user editing, in-browser code execution using WebContainers, and AI-assisted code generation via @freya.',
  technologies: ['Gen-AI','React', 'Node.js', 'MongoDB', 'Socket.io', 'WebContainer API', 'Groq API', 'Redis', 'JWT'],
  image: '/images/freya.png',
  link: 'https://freya-agent.vercel.app/',
  github: 'https://github.com/Hassan136-nust/FREYA'
},
  {
    id: 2,
    title: 'Dimensional Aspect-Based Sentiment Analysis',
    description: 'Research project focused on SemEval-2026 Task 3 using NLP models and deep learning for sentiment extraction.',
    technologies: ['Python', 'NLP', 'Deep Learning', 'Data Engineering'],
    image: '/images/asp.png',
    link: 'https://github.com/Hassan136-nust/-Dimensional-Aspect-Based-Sentiment-Analysis.git',
    github: 'https://github.com/Hassan136-nust/-Dimensional-Aspect-Based-Sentiment-Analysis.git'
  },

{
  id: 3,
  title: 'Gapify AI - Resume & Interview Analyzer',
  description: 'Gen-AI powered MERN app that analyzes resumes, detects skill gaps, generates interview questions, and provides a preparation roadmap.',
  technologies: ['Gen-AI','React', 'Node.js', 'MongoDB', 'Groq API', 'JWT'],
  image: '/images/gen.png',
  link: 'https://gapify-ai.vercel.app/',
  github: 'https://github.com/Hassan136-nust/GAPIFY-AI-Resume-and-Job-analyzer.git'
},

  {
    id: 4,
    title: 'UrbanPulse: GeoSpatial Urban Intelligence',
    description: 'MERN stack platform for urban planning analytics using OpenStreetMap and spatial data processing.',
    technologies: ['React', 'Node.js', 'MongoDB', 'OpenStreetMap'],
    image: '/images/urban.png',
    link: 'https://github.com/Hassan136-nust/Geo-Spatial-Database-for-Urban-Planning-.git',
    github: 'https://github.com/Hassan136-nust/Geo-Spatial-Database-for-Urban-Planning-.git'
  },
  {
    id: 5,
    title: 'Real-Time Collaborative Code Editor',
    description: 'Multi-user collaborative editor with CRDT sync, Docker deployment, and AWS load-balanced infrastructure.',
    technologies: ['React', 'Socket.io', 'Docker', 'AWS'],
    image: '/images/code.png',
    link: 'https://code-editor-live-jq2r.onrender.com',
    github: 'https://github.com/Hassan136-nust'
  },
{
  id: 6,
  title: 'Chess Arena - Real-Time Multiplayer Game',
  description: 'Real-time multiplayer chess game with live chat, WebSocket sync, and containerized deployment on Render.',
  technologies: ['Node.js', 'Express', 'Socket.io', 'Chess.js', 'Docker'],
  image: '/images/chess.png',
  link: 'https://chess-arena-game.onrender.com/',
  github: 'https://github.com/Hassan136-nust/Online-Chess-Game.git'
},

  {
    id: 7,
    title: 'Recommendation System with Graph Analysis',
    description: 'Graph-based recommendation engine using network analysis for relationship-based suggestions.',
    technologies: ['Python', 'Graph Analysis', 'Machine Learning'],
    image: '/images/dsa.png',
    link: 'https://github.com/Hassan136-nust/Recommendation-System.git',
    github: 'https://github.com/Hassan136-nust/Recommendation-System.git'
  },
  {
    id: 8,
    title: 'Encrypted VPN with Login System',
    description: 'Secure VPN solution with encrypted communication and session-based authentication.',
    technologies: ['Java', 'Networking', 'Security'],
    image: '/images/vpn.png',
    link: 'https://github.com/hassan-136/Nova-Link.git',
    github: 'https://github.com/hassan-136/Nova-Link.git'
  },
  {
    id: 9,
    title: 'Election Management System',
    description: 'JavaFX voting application with candidate management, animations, and persistent storage.',
    technologies: ['JavaFX', 'Java', 'UI Design'],
    image: '/images/vote.png',
    link: 'https://github.com/Hassan136-nust',
    github: 'https://github.com/Hassan136-nust'
  },
  {
    id: 10,
    title: 'Desktop E-Commerce Application',
    description: 'Developed a database-driven application with product, cart, and user management features.',
    technologies: ['Java', 'Database'],
    image: '/images/shop.png',
    link: 'https://github.com/Hassan136-nust',
    github: 'https://github.com/Hassan136-nust'
  },
  {
    id: 11,
    title: 'Adventure Game',
    description: 'Built a 2D game with physics, collision detection, and rendering pipeline.',
    technologies: ['C++', 'Raylib'],
    image: '/images/game.png',
    link: 'https://github.com/Hassan136-nust',
    github: 'https://github.com/Hassan136-nust'
  }
];
