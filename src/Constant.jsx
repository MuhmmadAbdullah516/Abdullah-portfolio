
import javascriptLogo from "./assets/javascriptLogo.png";
import tailwindcssLogo from "./assets/tailwindcssLogo.png";
import postmanLogo from "./assets/postmanLogo.png";
import webhpLogo from "./assets/webhpLogo.jpeg";
import VU_Logo from './assets/VU_Logo.png';
import collegeLogo from './assets/collegeLogo.png';
import Blogs from "./assets/Blogs.png";
import Recpie from "./assets/Recpie.png";
import Biochem from "./assets/Biochem.png";
import Expense from "./assets/Expense.png";
import weather from "./assets/weather.png";
import Todo from "./assets/Todo.png";
import Todolist from "./assets/Todolist.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      },
      { name: "JavaScript", logo: javascriptLogo },
      {
        name: "ReactJS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Redux",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      },
      { name: "Tailwind", logo: tailwindcssLogo },
      {
        name: "MUI",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
      },
      {
        name: "Bootstrap",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },

  {
    title: "Languages",
    skills: [
      {
        name: "C",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "C++",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "OOP",
        logo: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
      }, // no official logo, using concept icon
    
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "VSCode",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      { name: "Postman", logo: postmanLogo },
      {
        name: "Netlify",
        logo: "https://www.netlify.com/v3/img/components/logomark.png",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webhpLogo,
    role: "Frontend Developer",
    company: "Webhp Solution",
    date: "Feb 2025 - Present",
    desc: "Working on real-world projects as a frontend developer, building responsive and interactive UIs using React.js, Redux, and Tailwind CSS. Collaborating with mentors and the design team to ensure clean UI/UX, component reusability, and performance optimization. Focused on debugging, cross-browser compatibility, and UI/UX refinement.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "Responsive Web Design",
    ],
  },
  {
    id: 1,
    img: webhpLogo,
    role: "Frontend Intern",
    company: "Webhp Solution",
    date: "July 2024 - Feb 2025",
    desc: "Worked as a frontend intern under the guidance of experienced mentors. Gained hands-on experience with HTML, CSS, Bootstrap, JavaScript, and React.js. Developed responsive web interfaces for training assignments and collaborated on real projects to improve code quality and UI consistency.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Material UI",
    ],
  },
];

export const education = [
  
  {
    id: 0,
    img: VU_Logo,
    school: "Virtual University of Pakistan",
    date: "Oct 2023 - Oct 2027",
    desc: "I am currently pursuing my Bachelor's degree in Computer Science at the Virtual University of Pakistan and am in my 4th semester. This journey has equipped me with a strong foundation in core subjects like Object-Oriented Programming, Data Structures, Web Development, and Database Management Systems. Through hands-on assignments and course projects, I’ve been able to apply theoretical knowledge to practical problems, enhancing both my coding skills and logical thinking. My academic progress continues to fuel my passion for software development and web technologies.",
    degree: "Bachelor of Computer Science - (BSCS)",
  },
  {
  id: 0,
  img: collegeLogo,
  school: "Superior College Abdul Hakim Campus Khanewal",
  date: "June 2021 – July 2023",
  desc: "I completed my Intermediate in Computer Science (ICS with Physics) from Superior College Abdul Hakim Campus, Khanewal. During this time, I built a strong academic foundation in core subjects such as Computer Science, Physics, and Mathematics. The curriculum introduced me to programming basics, logic building, and computer fundamentals, which sparked my interest in software development. My studies in physics and math enhanced my analytical thinking, while computer science laid the groundwork for understanding algorithms and problem-solving techniques. This phase of my education played a key role in shaping my decision to pursue a career in web and software development.",
  degree: "Intermediate of Computer Science - (ICS)"
}

 

];

export const projects = [
  {
    id: 0,
    title: "Minimal Blog Management System",
    description:
      "A rich-text blogging platform where users can create, edit, view, and manage blog posts using a dynamic modal-based interface. It features TipTap for rich-text editing, image uploads, and live preview of articles. Built with clean UI components and seamless routing for a smooth writing experience.",
    image: Blogs,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      " Routing",
      "TipTap ",
      "React Hooks",
      "Modal UI",

    ],
    github:"https://github.com/MuhmmadAbdullah516/Blogs",
    webapp: "https://whimsical-pika-31b777.netlify.app/",
  },
  {
    id: 1,
    title: "Meal Finder App",
    description:
      "A responsive React.js application that allows users to search meals and view detailed recipes, including ingredients, instructions, and origin flags. Leveraged TheMealDB API for dynamic data fetching, with seamless navigation using React Router and an intuitive UI.",
    image: Recpie,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      " Routing", 
      "Axios",
      "API ",
      "Responsive",
    ],
    github: "https://github.com/MuhmmadAbdullah516/Meal-finder",
    webapp: "https://euphonious-dusk-524dcb.netlify.app/",
  },
  {
    id: 2,
    title: "Biochem Corporate Website",
    description:
      "A corporate website for Biochem GmbH, showcasing their expertise in feed additives, premixes, and nutrition solutions for animal health. The site features detailed product catalogs, sustainability and safety content, global presence information, and career opportunities—all delivered through a clean, user-friendly responsive UI.",
    image: Biochem,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive ",
      " Management",
      "API ",
      "Corporate ",
      "(UX)",
    ],

    webapp: "https://www.biochem.net/en",
  },
  {
    id: 3,
    title: "Smart Expense Tracker",
    description:
      "A responsive and intuitive React-based expense tracker that allows users to manage monthly income and expenses, visualize spending trends via interactive charts, and maintain transaction history. Features category filtering, validation, and real-time balance updates.",
    image: Expense,
    tags: [
      "React JS",
      "Ant Design",
      " DatePicker",
      "React Toastify",
      "Chart.js",
      "CSS3",
  
      "JavaScript",
  
    ],

    github: "https://github.com/MuhmmadAbdullah516/expense-tracker",
    webapp: "https://snazzy-manatee-eb99da.netlify.app/",
  },
  {
    id: 4,
    title: "Live Weather App",
    description:
      "A responsive React.js application that allows users to search and view real-time weather data for any city using the OpenWeatherMap API. It features default weather on initial load, dynamic API integration, input validation, and a user-friendly UI built with clean CSS styling. ",
    image: weather,
    tags: [
      "React JS",
      "Axios",
      "Open API",
      "JavaScript",
      "useEffect",
      "useState",
      "Responsive",
      "API ",

    ],

    github: "https://github.com/MuhmmadAbdullah516/weather-app",
    webapp: "https://precious-lokum-c35310.netlify.app/",
  },
  {
    id: 5,
    title: "Smart To-Do List",
    description:
      "A fully functional and responsive to-do list application built using React JS. It includes core features like add, edit, delete, and clear all tasks with persistent local storage. The app also supports a clean Light/Dark mode toggle for enhanced user experience, and disables duplicate or empty task entries with validation feedback.",
    image: Todolist,
    tags: [
      "React JS",
      "JavaScript",
      "LocalStorage",
      " Toggle",
      "React Icons",
      "useState",
      "useEffect",
    ],

    github: "https://github.com/MuhmmadAbdullah516/todo-app2",
    webapp: "https://zippy-paletas-b56599.netlify.app/",
  },
  {
    id: 6,
    title: "To-Do App",
    description:
      "A modern and responsive to-do list application built with React.Includes features like task creation, edit, delete, search, and mark as completed.Clean UI with real-time filtering and intuitive user interactions.",
    image: Todo,
    tags: [
      "React JS",
      "JavaScript",
      "Component-based",
      " Filter",
      "useState",
      "Task  Toggle",
      "Validation",
    ],
    github: "https://github.com/MuhmmadAbdullah516/todo-app",
    webapp: "https://heartfelt-cajeta-2944a0.netlify.app/",
  },
];
