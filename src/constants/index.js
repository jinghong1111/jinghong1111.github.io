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
    jobit,
    tripguide,
    threejs,
    python, 
    softeng, 
    icic, 
    hqo,
    shinola,
    bu,
    go,
    c,
    sort_algo,
    personal_website, 
    resume_icon,
    imnotlatte, 
    ts_wav_pic,
    cover_letter, 
    shakespeare_pic, 
    image_recognition_pic, 
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech", 

    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "resume", 
      title: "Resume", 
    }, 
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: web,
      description: "As a capable fullstack MERN developer, " +  
      "I am proficient in MongoDB, Express, React, and Node.js. " + 
      "I am experienced with building full-stack web applications with clean, "+
      "scalable, and maintainable code. I excel in a team environment. " +
      "software architecture and design patterns, and deploying applications " +
      "using tools such as Git, and Docker.", 
    },
    {
      title: "Software Engineer",
      icon: mobile,
      description: "As a software engineer, I possess the skills to design, develop, and maintain " +
      "software applications. I have experiences in software architecture, "+
      "design patterns, and testing methodologies. "+
      "I keep myself updated with the latest trends and advancements in the field, "+
      "and strive for continuous improvement in my skills and knowledge.",
    },
    {
      title: "Graph Designer",
      icon: creator,
      description: "As a graphic designer, I have the skills to create visually compelling designs, "+
      "using Adobe PS, InDesign, Illustrator and Figma. I have expertise in design principles, typography, and color theory, "+
      "I have a strong attention to detail and can work collaboratively with clients and team members to deliver"+
      "designs that meet clients' expectation. ", 
    },

  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    {
      name: "python",
      icon: python,
    },
    {
      name: "Go",
      icon: go,
    },
    {
      name: "C",
      icon: c,
    }
  ];
  
  const experiences = [
    {
      title: "Front-end Web Dev. Intern",
      company_name: "Inner City Capical Connections",
      icon: icic,
      iconBg: "#383E56",
      date: "July 2019 - Aug 2019",
      points: [
        "Employed UI/UX design concepts into the codebase using HTML, CSS, and JSX.",
        "Facilitated and maintained reusable front-end components, features, and functionality, resulting in a 20% reduction in development time.", 
        "Established optimal user experience across various devices by implementing Figma templates, leading to a 15% increase in user engagement.", 
        "Collaborated with UI/UX designers, patrons, and back-end developers to integrate components seamlessly.",
        "Conducted testing and debugging to identify and resolve issues or bugs on the main company site.",
      ],
    },
    {
      title: "Web Design Intern	",
      company_name: "HeadQuarter Optimizer (HqO)",
      icon: hqo,
      iconBg: "#E6DEDD",
      date: "July 2020 - Aug 2020",
      points: [
        "Designed and developed cutting-edge front-end components, features, and functionalities for web-based software services, resulting in a 25% improvement in user satisfaction.",
        "Ensured seamless integration of front-end components with back-end systems, APIs, and databases to deliver robust and performant software solutions.",
        "Leveraged the latest front-end UI trends, and industry best practices to drive innovation and maintain a competitive edge.",
      ],
    },
    {
      title: "Assistant Librarian ",
      company_name: "Boston University: Mugar Memorial Library",
      icon: bu,
      iconBg: "#383E56",
      date: "Aug 2021 - Present",
      points: [
        "Managed and maintained library databases, including cataloging systems and digital archives.",
        "Assisted patrons with using library technology, such as computers, printers, and scanners.",
        "Conducted research and analysis using library databases and search engines, such as EBSCO and JSTOR.",
        "Provided training and support to staff on library databases and technology systems.", 
      ],
    },
    {
      title: "Retail Sales Associate ",
      company_name: "Shinola",
      icon: shinola,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Utilized Point of Sale (POS) systems to process transactions, manage inventory, and generate sales reports.", 
        "Demonstrated expertise in Shinola's product offerings, including watches, leather goods, and bicycles, by utilizing internal computer systems to access detailed information.",
        "Used customer relationship management (CRM) software to track customer purchases, preferences, and contact information to build relationships and increase sales.",
        "Conducted product research and comparison shopping for customers using online resources, such as brand websites and customer reviews.",
        "Assisted customers with online orders and returns, and provided support for e-commerce platform, including order management and fulfillment.",
      ],
    },
  ];
  
  const hobbies= [
    {
      hobby: "Visual Art",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      hobby: "Guitar", 
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      hobby: "Badminton",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3D Personal Website",
      description:
        "As a software engineer, I am always looking for new and exciting ways to showcase my skills and experience. That's why I created my personal website using React-Vite and Three.js. This 3D project features an interactive canvas with a playful Shiba Inu that visitors can play around with whenever they need a break from scrolling. To achieve this, I used React hooks, motion, display, and CSS styling with Tailwind to create a smooth and engaging user experience. I also utilized the power of React-Three/@fiber to add in 3D models and animation, allowing me to showcase my proficiency in various 3D frameworks. Through this project, I was able to demonstrate my ability to think outside the box and incorporate innovative features into my work. It allowed me to further hone my skills in React and explore new areas like 3D modeling and animation. Overall, I'm excited to continue exploring new technologies and frameworks in my future projects.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "vite",
          color: "purple-text-gradient",
        },
        {
          name: "react-three-fiber",
          color: "yellow-text-gradient",
        },
        {
          name: "react-spring",
          color: "orange-text-gradient",
        },
      ],
      image: personal_website,
      source_code_link: "https://github.com/jinghong1111/personal_website",
    },
    {
      name: "Sorting Algo. Visualizer",
      description:
        "Sorting Algorithm Visualizer is a Python-based project I developed that enables users to visualize various sorting algorithms, including bubble sort, bucket sort, counting sort, heap sort, insertion sort, merge sort, quick sort, radix sort, and selection sort. The project uses the matplotlib framework to generate visual representations of the sorting algorithms in action, and includes color imports to enhance the user experience. This project allowed me to deepen my understanding of these sorting algorithms and develop my proficiency in Python programming. It also honed my problem-solving skills as I worked to identify and resolve issues with the visualizations. Overall, Sorting Algorithm Visualizer was an engaging and rewarding project that helped me to grow as a developer.",
      tags: [
        {
          name: "python",
          color: "purple-text-gradient",
        },
        {
          name: "matplotlib",
          color: "green-text-gradient",
        },
      ],
      image: sort_algo,
      source_code_link: "https://github.com/jinghong1111/Sorting_algo_visualization",
    },
    {
      name: "I'm Not Latte",
      description:
        "I developed a full-stack web application with my teammatemates called 'I'm Not Latte' using Python, JS, CSS, HTML, and React. The project aimed to help users find the nearest and highest-rated coffee shops near their current location. My responsibilities included integrating a MongoDB database to store coffee shop data and user preferences, designing and developing the application's user interface, optimizing performance for fast load times and a smooth user experience, and collaborating with a team of developers to meet project deadlines. I was particularly focused on providing users with an extensive UI that would be easy to use and ensure a satisfying user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
          {
            name: "python",
            color: "purple-text-gradient",
          },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        },

      ],
      image: imnotlatte,
      source_code_link: "https://github.com/Yu-Yang-Wang/cs411-team-project/tree/main/411-latte",
    },
    { 
      name: "Shakespeare NLP Sentimental Analysis ", 
      description: "Using NLP strategies to analyze the sentiments of Shakespearean play: Julius Caesar to gain insights on the correlation between perceived character sentiment and trained recognition of character sentiment.", 
      tags: [ 
        {
          name: "python",
          color: "purple-text-gradient",
        },
        {
          name: "NLP",
          color: "yellow-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        }
        ,
        {
          name: "leXmo",
          color: "pink-text-gradient",
        }
      ], 
      image: shakespeare_pic,
      source_code_link: "https://github.com/jinghong1111/Shakespeare-NLP-analysis", 
    }
    ,
    {
      name: "Taylor Swift Music Generator",
      description: "Using music VAE model with Tensorflow library, I preprocessed selected piano parts of Taylor Swift's music collections and partition them into different categories of music. Afterwards, I trained the data with 200 wav. files and minimized the KL divergence loss function. The model was able to generate new music based on the training data. ", 
      tags: [
        {
          name: "python",
          color: "purple-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
      ],
      image: ts_wav_pic,
      source_code_link: "https://github.com/jinghong1111/swifty-music", 
    }
    ,
    {
      name: "Cover Letter Generator ",
      description: "[WORK IN PROGRESS]", 
      tags: [
        {
          name: "temp",
          color: "blue-text-gradient",
        },
        {
          name: "temp",
          color: "green-text-gradient",
        },
      ],
      image: cover_letter,
      source_code_link: "https://github.com/jinghong1111/cover_letter_generator", 
    }
    ,
    {
      name: "Imagine Recognition Mobile App ",
      description: "Deep learning project that analyzes images and return the estimated price point of the main item in the picture. [WORK IN PROGRESS]", 
      tags: [
        {
          name: "python",
          color: "purple-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "stable diffusion",
          color: "pink-text-gradient",
        },
        {
          name: "swifty", 
          color: "yellow-text-gradient", 
        },
      ],
      image: imagine_recognition_pic,
      source_code_link: "https://github.com/jinghong1111/image_recognition", 
    }

  ];
  
  export { services, technologies, experiences, hobbies, projects };