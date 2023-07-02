
import {
 
  frontEnd,
  backEnd,
  webDesign,
  
  weatherApp,
  youtubeClone,
  todo,
  googleClone,
  coinMinder,
  verbVoyage
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'service',
    title: 'Service',
  },
  {
    id: 'works',
    title: 'work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: "https://img.icons8.com/color/96/html-5--v1.png",
  },
  {
    name: 'CSS 3',
    icon: "https://img.icons8.com/color/96/css3.png",
  },
  {
    name: 'JavaScript',
    icon: "https://img.icons8.com/fluency/96/javascript.png",
  },
  {
    name: 'React JS',
    icon: "https://img.icons8.com/office/80/000000/react.png",
  },
  {
    name: 'Redux Toolkit',
    icon: "https://img.icons8.com/color/96/redux.png",
  },
  {
    name: 'Angular',
    icon: "https://img.icons8.com/color/96/angularjs.png",
  },
  {
    name: 'Typescript',
    icon: "https://img.icons8.com/color/96/typescript.png",
  },
  {
    name: 'Tailwind CSS',
    icon: "https://img.icons8.com/color/96/tailwind_css.png",
  },
  {
    name: 'Bootstrap',
    icon: "https://img.icons8.com/color/96/bootstrap.png",
  },
  {
    name: 'Express',
    icon: "https://img.icons8.com/nolan/96/express-js.png",
  },
  {
    name: 'Node JS',
    icon: "https://img.icons8.com/fluency/96/node-js.png",
  },
  {
    name: 'MongoDB',
    icon: "https://img.icons8.com/color/96/mongodb.png",
  },
  {
    name: 'git',
    icon: "https://img.icons8.com/color/96/git.png",
  },
]

const services = [
  {
    title: 'Front-End Developer',

    icon: frontEnd,
    iconBg: '#383E56',

    points: [
      'Implementing design for mobile sites',
      'Maintaining software workflow management.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Testing the site for usability and fixing any bugs',
      'Bringing a concept to life with React and JavaScript',
    ],
  },
  {
    title: 'Back-end Developer',

    icon: backEnd,
    iconBg: '#383E56',
    // iconBg: '#E6DEDD',
    points: [
      'Database creation, integration, and management.',
      'Back-end frameworks to build server-side software.',
      'API integration with database using Web server technologies.',
      'Backing up and restoring technologies for a websites files and DB.',
      'Content management system development, deployment, and maintenance.',
    ],
  },
  {
    title: 'Web Designer',
    icon: webDesign,
    iconBg: '#383E56',
    points: [
      ' frames a solution or strategy to deliver the best experience to the user.',
      'Create user flows, wire frames, prototypes, low-fidelity mockups, and high-fidelity mockups.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Create user-centered designs based on customer voices, user journeys, feedback, and usability discoveries.',
    ],
  },
]

const projects = [
  {
    name: 'VerbVoyage',
    img: verbVoyage,
    description:
      'A Next.js app with post management, profile visibility, tagging, search, secure authentication (OAuth, NextAuth), MongoDB.',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient',
      },
      {
        name: 'nextJS',
        color: 'green-text-gradient',
      },
      {
        name: 'nextAuth',
        color: 'pink-text-gradient',
      },
    ],
    source_code_link: 'https://github.com/Shishir435/Verbvoyage',
    live_demo_link: 'https://verbvoyage.vercel.app/',
  },
  {
    name: 'CoinMinder',
    img: coinMinder,
    description:
      'Expense management app with MongoDB, React, Node, and Express.Efficient filtering by date. User-friendly interface for financial analysis.',
    tags: [
      {
        name: 'mern',
        color: 'blue-text-gradient',
      },
  
    ],
    source_code_link: 'https://github.com/Shishir435/coinMinder',
    live_demo_link: 'https://wandering-erin-nightingale.cyclic.app/login',
  },
  {
    name: 'YouTubeClone',
    img: youtubeClone,
    description:
      'Api-based clone application for searching and watching YouTube videos. It also has a sidebar with various video categories.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidApi',
        color: 'green-text-gradient',
      },
      {
        name: 'materialUi',
        color: 'pink-text-gradient',
      },
    ],
    source_code_link: 'https://github.com/Shishir435/youtube-clone',
    live_demo_link: 'https://cloneyoutubeap.netlify.app/',
  },
  {
    name: 'GoogleSearchClone',
    img: googleClone,
    description:
      'A fully responsive search engine like Google chrome tab allows users to search for anything.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'googleCustomApi',
        color: 'green-text-gradient',
      },
      {
        name: 'materialUi',
        color: 'pink-text-gradient',
      },
    ],
    source_code_link: 'https://github.com/Shishir435/Google-Clone',
    live_demo_link: 'https://googlezclone.netlify.app/',
  },
  {
    name: 'WeatherApp',
    img: weatherApp,
    description:
      'A web application allows users to search the weather of any city worldwide and see the forecast for the next seven days.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidApi',
        color: 'green-text-gradient',
      },
      {
        name: 'openWeatherApi',
        color: 'pink-text-gradient',
      },
    ],
    source_code_link: 'https://github.com/Shishir435/Weather-app/',
    live_demo_link: 'https://shishir-weather-app.netlify.app/',
  },
  {
    name: 'TodoList',
    img: todo,
    description:
      'A todo list app that allows users to add and delete items. You can also create multiple lists and see all indexes in the all lists section.',
    tags: [
      {
        name: 'express',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'ejs',
        color: 'pink-text-gradient',
      },
    ],
    source_code_link: 'https://github.com/Shishir435/todo',
    live_demo_link: 'https://listsv1.onrender.com/',
  },

  // {
  //   name: 'Signup Form',
  //   description:
  //     'A signup form with a validation based on roll no and password',
  //   tags: [
  //     {
  //       name: 'React',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'firebase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'materialUi',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   source_code_link: 'https://github.com/Shishir435/loginForm',
  //   live_demo_link: 'https://fir-auth-9e239.web.app/',
  // },
]

export { services, technologies, projects }
