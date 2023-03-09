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
    ICIC, 
    hqo,
    shinola,
    bu,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Illustrator",
      icon: creator,
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
    {
      name: "python",
      icon: python,
    }
  ];
  
  const experiences = [
    {
      title: "Marketing and Media Intern",
      company_name: "Inner City Capical Connections",
      icon: ICIC,
      iconBg: "#383E56",
      date: "July 2019 - Aug 2019",
      points: [
        "Participated in the tech. development and product management meetings.",
        "Utilized Salesforce to update salesforce information on the website.", 
        "Used Excel to manage all the existing data of existing/potential clients.", 
        "Pitched sales to potential customers to convince them to buy a product or service.",
        "Conducted market research and analyzed customer feedback to inform sales pitches.",
        "Assisted with digital marketing campaigns using tools such as Google Analytics, Hootsuite, Mailchimp, and AdWords.",
      ],
    },
    {
      title: "Graphic Design and Marketing Intern",
      company_name: "HeadQuarter Optimizer (HqO)",
      icon: hqo,
      iconBg: "#E6DEDD",
      date: "July 2020 - Aug 2020",
      points: [
        "Proposed potential designs for holiday-themed HqO company logos using design software.",
        "Designed user personas through Figma and online interviews for user experience (UX) design.",
        "Created templates for a weekly company design newsletter using graphic design skills.",
        "Used collaboration tools such as Figma, Google Drive, or Slack to work with other designers or stakeholders.",
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
        "Worked with IT department to troubleshoot and resolve technology issues related to library systems and equipment.", 
        "Developed and implemented strategies for integrating new technology and databases into the library's collection and services.", 
        "Collaborated with librarians and staff to ensure accurate and efficient organization of physical and digital materials.", 
        "Monitored and evaluated the effectiveness of library technology and databases, and made recommendations for improvement.", 
        "Stayed up-to-date with emerging technologies and trends in library databases and information management.",
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
        "Coordinated with the corporate office to resolve customer issues related to online purchases or shipping.",
        "Stayed informed about current trends in luxury retail, technology, and fashion through training, seminars, and online resources.",
        "Assisted with visual merchandising efforts and updates to the company's website and social media accounts.",
        "Provided in-store technical support and troubleshooting for customers who needed assistance with smartwatch, fitness tracker, or other wearable technology.",
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
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
  ];
  
  export { services, technologies, experiences, hobbies, projects };