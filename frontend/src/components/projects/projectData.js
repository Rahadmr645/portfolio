
import tabletab from '../../assets/tabletab.png'
import ironmind from '../../assets/ironmind.png'
const projectsData = [
  {
    id: 1,
    name: "TableTab",
    description:
      "A full-stack MERN application for cafe order management with real-time updates, live analytics, and socket-based communication.",
    image: tabletab,
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
    link: "https://table-tab-client.vercel.app",
  },
{
  id: 2,
  name: "IronMind – Discipline Tracking System",
  description:
    "A powerful MERN-based discipline tracking system with task creation, real-time analytics, punishment logic, timers, streak tracking, and a fully interactive dashboard that pushes users to stay consistent and disciplined.",
  image: ironmind, 
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Socket.io",
    "Chart.js",
    "Context API"
  ],
  link: "https://ironmind-rahad.vercel.app" // give your real link
}

];

export default projectsData;