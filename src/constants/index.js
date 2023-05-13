import {
  frontend,
  backend,
  react,
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
  meta,
  tesla,
  carrent,
  tripguide,
  threejs,
  landing,

} from "../assets";
import erica from "./erica.png"

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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "React Developer",
    icon: react,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Landing Page",
    icon: landing,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Designer",
    company_name: "isadisenioweb",
    icon: frontend,
    iconBg: "#383E56",
    date: "March 2019 - Present",
    points: [
      "Developing and maintaining a personal web site  using Wordpress, Joomla, templates  and other technologies.",
      "Personal enterprise that offers web designs to clients including page designes, product management, and other develops to create high-quality products.",

    ],
  },
  {
    title: "Philosophy Teacher",
    company_name: "Escuela Multimedial Da Vinci",
    icon: tesla,
    iconBg: "#383E56",
    date: "march 2005 - Dic 2015",
    points: [
      "Philosophy  and Literature teacher to animated film students.",
      "Lessons planification, group management, evaluations.",
    ],
  },
  {
    title: "Vitralist",
    company_name: "El Kultrun de Isa",
    icon: meta,
    iconBg: "#d6d3d1",
    date: "Jan 2010 - Present",
    points: [
      "Own artistic enterprise designing, researching and producing  art pieces in vitraux Tiffany, tessellation, mural, recicling and other techniques .",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Es un placer compartir mi opinión sobre Isa Mesina.Fue hermoso haberla conocido. Como compañera, puedo decir que es excelente para trabajar en equipo y siempre está dispuesta a colaborar. Su creatividad es impresionante, lo que se refleja en sus trabajos de desarrollo web. Además, es muy perseverante y dedicada en todo lo que hace. Sin duda, contar con ella en un proyecto es una garantía de éxito. Gracias!!",
    name: "Erica Rivarola",
    designation: "Study partner",
    company: "Henry Bootcamp",
    image: erica,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "Study partner",
    company: "Henry Bootcamp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dogs World",
    description:
      
    "Individual project to develop a Simple Page Application consuming an API where you can see, search, look for characteristics, fill forms and create new dogs breeds. I worked with Javascript, SQL, React, Redux, Express, CSS, HTML, and some other technologies", 

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/isamess/Dogs-SPA",
  },
  {
    name: "Videogames",
    description:
    "Simple Page Application consuming an API that enables users to search for videogames, characteristics, fill forms and create a new game. I worked with Javascript, SQL, React, Redux, Express, CSS, HTML, and some other technologies",

    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },

    ],
    image: landing,
    source_code_link: "https://github.com/isamess/Videogames",
  },
  {
    name: "Henry's Merch",
    description:
      "Groupal Final  Project for Henry´s Bootcamp. E-commerce for the merchandising of Henry products. We worked with Javascript, Typescript, MongoDB, Redux Toolkit, Cloudinary and some agile methodologies like SCRUM, Trello, among others.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "henry",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/isamess/PF-Henrys-Merch2.0",
  },
];

export { services, technologies, experiences, testimonials, projects };