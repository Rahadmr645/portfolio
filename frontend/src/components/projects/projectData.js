
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
,
{
  id: 3,
  name: "RChat Sentinel",
  description:
    "RChat Protocol is a full-featured social messaging application designed to handle complex user interactions in real-time. By leveraging WebRTC for high-quality voice and video calls and MongoDB for scalable data storage, the application provides a fluid user experience. I implemented a security-centric architecture where all messages are stored in hashed formats, protecting user conversations against unauthorized database access while maintaining fast search and retrieval.",
  image: rchat, 
  tags: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT",
    "Socket.io",
    "Context API",
    "CryptoJS",
    "WebRTC"
  ],
  link: "https://chat-ashen-five-27.vercel.app/" // give your real link
}

];

export default projectsData;