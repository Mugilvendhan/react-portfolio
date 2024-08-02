import project1 from "../assets/projects/issue1.png"
import project2 from "../assets/projects/Airportapi.png"
import project3 from "../assets/projects/Recipe.png"
import project4 from "../assets/projects/createnft.png"
import exc1 from "../assets/sc_logo.png"
import exc2 from "../assets/ibcmedia_logo.png"
import exc3 from "../assets/unit_logo.png"

export const HERO_CONTENT = `Crafting Seamless Digital Experiences`;

export const ABOUT_TEXT = `I am a passionate Frontend Developer with hands-on experience gained through internships, specializing in crafting intuitive user interfaces using HTML, CSS, JavaScript, Bootstrap, React, and Redux. 
My journey in web development has equipped me with the skills to create responsive and dynamic web applications that enhance user experiences. Additionally, I am enthusiastic about Web3 technologies and have started projects that transition from Web2 to Web3, exploring decentralized applications and blockchain integration. I am committed to continuous learning and innovation, aiming to contribute to projects that push the boundaries of technology and deliver exceptional value.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    img:exc1,
    role: "Front-End Developer Intership",
    duration:"6 months",
    company: "Smartcliff Learning Solutions",
    link:"https://smartcliff.in/",
    description: `During my 6-month physical internship, I immersed myself in frontend technologies, learning and applying tools like HTML, CSS, JavaScript, Bootstrap, React, and Redux. Through hands-on projects, I gained practical experience and honed my skills, transforming ideas into dynamic web applications. This internship was a pivotal experience that shaped my work culture and approach to problem-solving.`,
    technologies: ["Figma","UI/UX","Javascript", "React.js", "Redux"],
  },
  {
    year: "2022 - 2023",
    img:exc2,
    role: "Web3 Development",
    company: "IBC-Media",
    link:"https://ibc.media/",
    description: `During my3-month internship, I gained a deep understanding of the foundational role Layer 0 plays in enabling scalable and interoperable blockchain networks also protocols like Polkadot and Avalanche.I had the opportunity to learn from leading blockchain experts worldwide, gaining valuable insights and making meaningful connections in the blockchain community.`,
    technologies: ["RUST", "Polkadot", "Tokenomics", "Layer0"],
  },
  {
    year: "2021 - 2022",
    img:exc3,
    role: "Master Program",
    company: "Unit Master",
    link:"https://www.unitmasters.org/",
    description: `During my 6-week internship, This program deepened my understanding of Web3 and blockchain. I explored decentralization, the Web3 economy, blockchain incentive alignment, DeFi, NFTs, the Metaverse, stakeholder capitalism, sustainability, and the unit token economy. This experience equipped me with knowledge and skills to contribute to the evolving landscape of decentralized technologies.`,
    technologies: ["NFT", "DeFi", "Metaverse", "Tokenomics"],
  },
];

export const PROJECTS = [
  {
    title: "College Issue Tracking System",
     image: project1,
     link:"https://github.com/Mugilvendhan/tracker",
    description:
      "A platform for tracking day-to-day issues faced by both students and faculty members. These issues are systematically managed and resolved by the college staff.",
    technologies: [ "JavaScript", "React", "Redux"],
  },
  {
    title: "AIRPORT-API",
     image: project2,
     link:"https://github.com/Mugilvendhan/projectapi",
    description:
      "The Airport Api website enables users to access comprehensive information about airports globally ,They can easily search and view details such as location, name of flight. city.",
    technologies: ["React-Bootsrap", "Redux", "API"],
  },
  {
    title: "Recipe Website",
     image: project3,
     link:"https://github.com/Mugilvendhan/Projects/tree/main/Recipe%20Website",
    description:
      "The recipe website provides a diverse collection of recipes. Users can easily navigate through recipes displayed according to the categories.",
    technologies: ["HTML5", "CSS3", "Figma"],
  },
  {
    title: "Smart contract EVM",
     image: project4,
     link:"https://github.com/Mugilvendhan/Projects/tree/main/SOLIDITY%20PROJECTS",
    description:
      "Creation of Smart contract on ETH Blockchain",
    technologies: ["Solidity", "ERC20", "Remix"],
  },
];

