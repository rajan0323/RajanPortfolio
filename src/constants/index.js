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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "AWS Certified Practitioner",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Algorithmic Problem Solver",
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
  {
    name: "Java",
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
    name: "Python",
    icon: mongodb,
  },
  {
    name: "Mysql",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const vitLogo = "https://media.licdn.com/dms/image/C560BAQG37hiyJOAqGQ/company-logo_200_200/0/1630667326355?e=1728518400&v=beta&t=JcnJ7fs34MMTyr3puOto7y9HT-RRTi3kdlIFZ4H3ZTM";
const dpsLogo = "https://media.licdn.com/dms/image/C4E0BAQHZ1h2-z9_ZvA/company-logo_200_200/0/1630655149568?e=1728518400&v=beta&t=grc0G0Ck72F_r9saK8iYg4e78WSS5DuFDvQmX9iTRBQ";

const educations = [
  {
    school_name: "Vellore Institute of Technology, Bhopal",
    department: "B. Tech (CSE) Computer Science",
    date: "Aug 2021 – Aug 2025",
    cgpa: "CGPA: 8.31/10",
    icon: vitLogo,
  },
  {
    school_name: "Darbhanga Public School, Darbhanga",
    department: "Class X & XII",
    date: "Class XII: July 2021 | Class X: May 2019 ",
    cgpa: "Class XII Percentage: 82.4% | Class X Percentage: 92%",
    icon: dpsLogo,
  },
];


const experiences = [
  {
    title: "AWS Certified Cloud Practitioner",
    company_name: "AWS (link)",
    company_link: "https://www.credly.com/badges/64a9ddd3-c483-4514-af52-7c2eda4fd5d8/linked_in_profile",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 3, 2024 - March 3, 2027",
    points: [
      "Designing and deploying scalable, highly available, and fault-tolerant systems on AWS.",
      "Managing and implementing AWS cloud infrastructure services such as EC2, S3, RDS, and VPC.",
      "Collaborating with cross-functional teams to define and implement cloud solutions aligned with business requirements.",
      "Ensuring security and compliance best practices are followed in the cloud environment.",
      "Monitoring and optimizing the performance, scalability, and cost of AWS resources.",
      "Participating in cloud architecture reviews and providing recommendations for improvements.",
    ],
  },
  {
    title: "NPTEL Cloud Computing",
    company_name: "NPTEL (link)",
    company_link: "https://www.linkedin.com/feed/update/urn:li:activity:7195726966086414337/",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan - Apr 2024",
    points: [
      "Understanding the fundamental concepts and architecture of cloud computing.",
      "Exploring various cloud service models such as IaaS, PaaS, and SaaS.",
      "Learning about virtualization technologies and their role in cloud computing.",
      "Implementing cloud storage solutions and managing data in the cloud.",
      "Analyzing cloud security challenges and implementing best practices for secure cloud environments.",
      "Hands-on experience with leading cloud platforms and services, including AWS, Azure, and Google Cloud.",
      "Participating in projects and assignments to apply cloud computing concepts in real-world scenarios.",
    ],
  },
  {
    title: "HPC(DSA in Java)",
    company_name: "iamNeo (link)",
    company_link: "https://vit162.examly.io/certificate/U2FsdGVkX1%2B0seGLqmnPQQSart9ayznX169otaBgPV8%3D",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2024 - May 2024",
    points: [
      "Mastering advanced data structures such as trees, graphs, heaps, and hash tables in Java.",
      "Implementing efficient algorithms for sorting, searching, and graph traversal.",
      "Developing problem-solving skills through competitive programming exercises and coding challenges.",
      "Optimizing code performance and understanding time and space complexity.",
      "Applying dynamic programming techniques to solve complex problems.",
      "Participating in code reviews and collaborative coding sessions to enhance coding practices.",
      "Completing hands-on projects to solidify understanding of high-performance coding principles and techniques in Java.",
    ],
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    company_name: "Coursera (link)",
    company_link: "https://www.coursera.org/account/accomplishments/certificate/5UCUR7DUK3DZ",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rajan is a quick learner and hardworking individual who excels in adapting to new challenges and consistently delivers outstanding results.",
    name: "Akriti Karn",
    designation: "International Sales Executive",
    company: "B2b Exports LLC",
    image: "https://media.licdn.com/dms/image/D5603AQHCEqMLJJRIxA/profile-displayphoto-shrink_400_400/0/1720454872706?e=1726099200&v=beta&t=rlz9s1ATsSMCV87iWnEPNqDawWYYPMJQzUrOg9DR8G4",
  },
  {
    testimonial:
      "He effectively led our academic project group with strong organizational skills and insightful guidance. Their leadership ensured smooth coordination among team members, leading to a successful and cohesive project outcome.",
    name: "Sumit kumar",
    designation: "Student",
    company: "VIT Bhopal 25",
    image: "https://media.licdn.com/dms/image/D4D03AQG6R0B0CEc1_w/profile-displayphoto-shrink_400_400/0/1701462307033?e=1726099200&v=beta&t=Y8Yb5JbUojKwPUtuYlNMpYVabLRstgQIGYFCyiGBiDM",
  },
  {
    testimonial:
      "Rajan bhaiya is a senior mentor who has provided invaluable guidance and support throughout my studies, helping me navigate challenges with patience and expertise.",
    name: "Atharv vyas",
    designation: "student",
    company: "VIT Bhopal 26",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2GFiDgIWIO4yh00U6hw6p9g9ZcPUWznSl9g&s",
  },
];

const projects = [
  {
    name: "MoolyaJasoos",
    description:
      "🛒 Moolya Jasoos is an Amazon price web scraper designed to help you track and compare prices with ease. Whether you're a bargain hunter or just curious about price trends, this tool has got you covered!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "web scraper",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/rajan0323/MoolyaJasoos",
  },
  {
    name: "Imgnify",
    description:
      "imgnify is a cutting-edge Software-as-a-Service (SaaS) application that leverages AI technology to enhance and manage images. Built with Next.js 14, Cloudinary AI, Clerk for authentication, and Stripe for payments, imgnify offers a seamless user experience with advanced features like image recognition, optimization, and personalized image enhancements. The integrated payment and credits system ensures a scalable and user-friendly platform for managing all your image processing needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "SaaS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rajan0323/imghlp",
  },
  {
    name: "Image Search Web App",
    description:
      "Web-based application that enables users to search for images using a JavaScript API, providing a seamless and efficient solution for finding and viewing images online.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/rajan0323/imageGenerator",
  },
  
 
];
export { services, technologies, experiences, testimonials, projects, educations };

