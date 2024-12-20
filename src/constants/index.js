import backend from '../assets/backend.png';
import frontend from '../assets/frontend.png';
import web from '../assets/web.png';
import blender from '../assets/blender.png';
import inves from '../imgs/inves.png';
import tic from '../imgs/tic.png';
import count from '../imgs/count.png';
import ngo from '../imgs/ngo.png';
import NodeFarm from '../imgs/NodeFarm.png'
export const techies = [
  {
    title: "React.js",
    about: [
      "Redux",
      "React Query",
      "React Router",
      "Tailwind CSS",
      "Axios",],
  },
  {
    title: "Java Script",
    about: [
      "Closure",
      "Async/Sync",
      "CallBacks",
      "Promises",
    ],
  },
  {
    title: "Node.js",
    about: [
      "Express",
      "CORS",
      "Cookie-Parser",
      "Routing",
    ],
  },
  {
    title: "Three Fiber",
    about: [
      "Canvas",
      "Mesh",
    ],
  },
  {
    title: "BootStrap",
    about: [
      "Bootstrap CSS",
      "Bootstrap JS",
      "Popper.js",
    ],
  },
  {
    title: "Framer Motion",
    about: [
      "Animations",
      "Variants",
      "Gestures",
      "Spring Animations",
    ],
  },
  {
    title: "MongoDB",
    about: [
      "JSON-like BSON documents",
      "NoSQL",
    ],
  },
];
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
    id: "tech",
    title: "Techs",
  },
  {
    id: "links",
    title: "Links",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "FrontEnd Developer",
    icon: frontend,
  },
  {
    title: "BackEnd Developer",
    icon: backend,
  },
  {
    title: "3D Model Creator",
    icon: blender,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    title: "PhilantroHub",
    company_name: "PhilrantoHub",
    icon: ngo,
    iconBg: "#383E56",
    date: "September 2024 - Present",
    points: [
      "PhilanthroHub's goal is to connect donors with impactful NGOs, making it easier for individuals to support non-profit organizations worldwide.",
      "It provides a user-friendly platform that offers a detailed directory of NGO contacts, helping donors find organizations aligned with their causes.",
      "The platform simplifies the process of discovering, evaluating, and donating to NGOs, enhancing transparency and accessibility for users.",
      "PhilanthroHub is designed to have a global reach, enabling users to support charitable organizations across various regions and sectors.",
    ],
    deployment: "Still working on it",
    color: "#83d4f7",
    github: "https://github.com/shubham-goyal-0811/iicmuj-philantro",
  },
  {
    title: "Web-Game",
    company_name: "Tic-Tac-Toe",
    icon: tic,
    iconBg: "#383E56",
    date: "March 2023",
    points: [
      "Developed a Tic-Tac-Toe game with awesome and interactive UI.",
      "The game displays the names and scores of two players, PLAYER 1 and PLAYER 2. Player 1 is currently using the X symbol.",
      "The game likely follows the standard rules of Tic-Tac-Toe, where players alternate turns placing their symbols on the board and the first player to get three in a row (horizontally, vertically, or diagonally) wins.",
      "Tech used here are React.js, Node.js, CSS and Tailwing, GSAP for animations.",
    ],
    deployment: "https://tic-tac-toe-usingreactjs.netlify.app/",
    color: "#CBC3E3",
    github: "https://github.com/ShwetankDohroo1/Tic-Tac-Toe",
  },
  {
    title: "Investment Calculator",
    company_name: "Investment Calculator",
    icon: inves,
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Dec 2023",
    points: [
      "The calculator should have a clear and intuitive design, with easy-to-use input fields and a visually appealing layout.",
      "Responsive Design: The calculator should be accessible and usable on various devices, including desktops, tablets, and smartphones.",
      "Comprehensive Output: The calculator should provide detailed information about the investment, including year-by-year breakdowns, total returns, and visual representations.",
      "Tech used here are React.js, CSS and Tailwing, GSAP for animations.",
    ],
    deployment: "https://investment-calculator-usingreactjs.netlify.app/",
    color: "#b8c8b4",
    github: "https://github.com/ShwetankDohroo1/Investment",
  },
  {
    title: "Catch-Count-Down",
    company_name: "catch-count-down",
    icon: count,
    iconBg: "#E6DEDD",
    date: "Oct 2024",
    points: [
      "A fun free game where we have to start and stop the timer according to the time on the box.",
      "There are 4 levels in this game, 1.EASY 2.MEDIUM 3.HARD 4.PROS ONLY",
      "Tech used here are React.js, CSS and Tailwing, GSAP for animations.",
      "Project includes React.js Hooks like UseState, UseRef for implementing the working of timer and calculations",
    ],
    deployment: "https://catch-count-down.netlify.app/",
    color: "#FFD580",
    github: "https://github.com/ShwetankDohroo1/CountDown",
  },
  {
    "title": "Product Catalog with Cart System",
    "company_name": "NodeFarm",
    "icon": NodeFarm,
    "iconBg": "#F4A261",
    "date": "November 2024 - Present",
    "points": [
      "NodeFarm is a product catalog and shopping cart web application built using Node.js, serving a catalog of farm-related products.",
      "The app allows users to browse products, view detailed information about each product, and add products to their cart.",
      "A dynamic cart system is implemented where products can be added or removed, and the cart is displayed with product details.",
      "The app uses templates and JSON data to generate dynamic product pages and handle requests for adding items to the cart."
    ],
    "deployment": "https://node-farm-kf4e.onrender.com/",
    "color": "#F4A261",
    github: "https://github.com/ShwetankDohroo1/NodeFarm",
  },
  // {
  //   title: "Avengers Headquater",
  //   company_name: "Avengers Headquater",
  //   // icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Nov 2022 - Dec 2022",
  //   points: [
  //     "A fun site where you can enter as a human in Avengers HeadQuaters.",
  //     "You are welcomed by the Avengers and you are open to search movies, comics and history of every Avenger.",
  //     "Tech I used here are HTML, CSS and Tailwing",
  //   ],
  //   deployment: "Haven't Deployed",
  //   color: "#f2fedc",
  //   github: "",
  // },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];


export { services, technologies, projects, testimonials };