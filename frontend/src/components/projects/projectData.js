import tabletab from '../../assets/tabletab.png'
import ironmind from '../../assets/ironmind.png'
import rchat from '../../assets/rchat.png'

const projectsData = [
  {
    id: 1,
    name: "TableTab",
    description:
      "A full-stack MERN application for cafe order management with real-time updates, live analytics, and socket-based communication.",
    image: tabletab,
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
    link: "https://table-tab-client.vercel.app",
    category: "fullstack"
  },
  {
    id: 2,
    name: "IronMind – Discipline Tracking",
    description:
      "A MERN-based discipline tracking system with task creation, real-time analytics, punishment logic, timers, streak tracking, and a fully interactive dashboard.",
    image: ironmind, 
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "Chart.js"],
    link: "https://ironmind-rahad.vercel.app",
    category: "fullstack"
  },
  {
    id: 3,
    name: "RChat Sentinel",
    description:
      "A full-featured secure messaging application featuring WebRTC voice/video calls, socket communication, and a security-focused architecture with database message hashing.",
    image: rchat, 
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io", "CryptoJS", "WebRTC"],
    link: "https://chat-ashen-five-27.vercel.app/",
    category: "security"
  }
];

export default projectsData;