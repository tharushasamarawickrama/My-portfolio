import project1 from "../assets/projects/TravelSri.jpeg";
import project2 from "../assets/projects/project-1.jpg"; 
import project3 from "../assets/projects/healthhub.jpeg";
import project4 from "../assets/projects/BloodLife.png";

export const HERO_CONTENT = `I am a passionate Computer Science undergraduate with a strong interest in full-stack development and DevOps. Proficient in front-end technologies like React, and back-end frameworks such as Node.js, PHP, and Spring Boot, I also work with databases like MongoDB and MySQL. I continuously build my skills through hands-on projects and coursework, aiming to develop scalable, user-friendly web applications and reliable deployment pipelines.`;

export const ABOUT_TEXT_1 = `I am a dedicated and adaptable full-stack developer with a strong passion for building scalable, user-friendly web applications. As a Computer Science undergraduate, I’ve gained hands-on experience with technologies like React, Node.js, Express.js, PHP, Spring Boot, MongoDB, and MySQL through academic projects and self-learning. I’m also developing a keen interest in DevOps and deployment automation. Driven by curiosity and problem-solving, I enjoy working in collaborative environments and continuously strive to improve my skills by exploring modern development tools and software architecture concepts.`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const PROJECTS = [
  {
    title: "TravelSri (Ongoing)",
    image: project1,
    description:
      "Developed TravelSri ›, a centralized travel management platform that integrates booking, rentals, guide services, and group tour planning for travelers in Sri Lanka. Implemented secure payment handling, user role management, and real-time notifications as part of a team-based academic project. Focused on scalable architecture and user-centric design.",
    technologies: ["React", "React Native", "Spring Boot",  "MongoDB"],
    github: "https://github.com/tharushasamarawickrama/TravelSri"
  },
  {
    title: "CryptoTradeX (Ongoing)",
    image: project2,
    description:
      "Engineered CryptoTradeX, a secure crypto trading platform with real-time data, wallet transfers, and payment gateway integration. Technologies used include Spring Boot, React, MySQL, and APIs like CoinGecko and Razorpay.",
    technologies: ["React", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/yourusername/cryptotradex"
  },
  {
    title: "HealthHub",
    image: project3,
    description:
      "A web-based healthcare management platform integrating patient record handling, appointment scheduling, prescription processing, and pharmacy/lab test management. Contributed to user role-specific modules and improved healthcare workflow efficiency through real-time access and streamlined operations. Developed as part of a second-year group project focusing on practical healthcare challenges.",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
    github: "https://github.com/tharushasamarawickrama/Health-Hub"
  },
  {
    title: "BloodLife",
    image: project4,
    description:
      "A role-based Blood Bank Management System enabling blood request submissions, donation camp participation, and admin approvals. Built using the MERN stack with Material UI for a responsive interface and Git/GitHub for team collaboration.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    github: {
      frontend: "https://github.com/tharushasamarawickrama/rad-project-frontend",
      backend: "https://github.com/tharushasamarawickrama/rad-project-backend"
    }
  },
];

export const CONTACT = {

  phoneNo: "+9470 430 8123 ",
  email: "tharushasamarawickram@gmail.com",
};
