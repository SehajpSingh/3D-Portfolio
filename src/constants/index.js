import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  tripguide,
  threejs,
} from "../assets";

import jobit from '../assets/jobit.jpg';
import ra from '../assets/RealityAI.jpg';
import snl from '../assets/snl.png';
import unmh from '../assets/hospital.png';
import spring from '../assets/spring.png';
import java from '../assets/java.png';
import js from '../assets/js.svg';
import unity from '../assets/unity.png';
import ml from '../assets/ml.jpg';

//import { spring } from '../../assets';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Spring-Boot Developer",
    icon: spring,
  },
  {
    title: "Java",
    icon: java,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "Unity",
    icon: unity,
  },
  {
    title: "Machine Learning",
    icon: ml,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Sandia National Labs",
    icon: snl,
    iconBg: "#383E56",
    date: "May 2022 - May 2024",
    points: [
      "Developed and maintained robust backend services using Spring Boot, enhancing application performance and scalability.",
      "Applied advanced Java programming techniques to implement complex business logic and improve data processing capabilities.",
      "Designed and integrated RESTful APIs, facilitating seamless communication between the frontend and backend components.",
      "Managed and optimized SQL databases, ensuring efficient data storage, retrieval, and integrity across various application functions.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Sandia National Labs",
    icon: snl,
    iconBg: "#E6DEDD",
    date: "May 2021 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "UNM Hospital",
    icon: unmh,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Apr 2022",
    points: [
      "Enhanced search functionality by integrating metadata into legacy workflows, significantly improving data retrieval efficiency.",
      "Optimized database performance using Apache Cassandra, enhancing data handling and storage operations.",
      "Contributed to the development of healthcare communication tools to streamline patient-provider interactions.",
      "Collaborated with a cross-functional team to implement scalable software solutions, ensuring robust application performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sehaj excels in project management, consistently leading teams to deliver complex software projects on time and above expectations.",
    name: "Allena Satapathi",
    designation: "Division Manager",
    company: "Sandia National Labs",
    image: snl,
  },
  {
    testimonial:
      "A tech virtuoso, Sehaj skillfully merges cutting-edge front-end and back-end technologies to craft superior web applications.",
    name: "Jessie Maxwell",
    designation: "Tech Lead",
    company: "UNM Hospital",
    image: unmh,
  },
  {
    testimonial:
      "Sehaj's relentless pursuit of excellence and dedication to professional growth sets a high standard in every project he tackles.",
    name: "Wilfredo Ramos",
    designation: "Manager",
    company: "Reality AI Lab",
    image: ra,
  },
];

const projects = [
  {
    name: "Job Portal",
    description:
      "A Full-Stack Spring Boot application integrated with an SQL database, designed to streamline the recruitment process. This platform enables recruiters to post job openings and allows candidates to efficiently search for and apply to jobs. The system is built to facilitate smoother interactions between job seekers and employers, leveraging advanced search functionalities and user-friendly interfaces for optimal usability.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SehajpSingh/JobPortal",
  },
  {
    name: "Scrabble",
    description:
      "This Scrabble project is a Java-based application hosted on GitHub that implements a classic word game with a graphical user interface using JavaFX. It features a sophisticated algorithm to determine valid word placements and calculate scores, enhancing the traditional gameplay experience. The project also incorporates a custom AI opponent, challenging players with strategic word placements. Designed to sharpen linguistic skills and provide entertainment, this application showcases advanced programming techniques and object-oriented design principles.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JavaFX",
        color: "green-text-gradient",
      },
      {
        name: "Data Structures",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/SehajpSingh/Scrabble",
  },

  /*
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  }, 
  */
];

export { services, technologies, experiences, testimonials, projects };
