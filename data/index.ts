import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My skill set",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Constantly mastering new techniques with a JavaScript animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Papparazi",
    des: "Developed a headless CMS website that allows users to easily update content without touching code, and includes an interactive quiz feature. Utilized ReactJS, TailwindCSS, and Sanity to create a seamless and dynamic user experience.",
    img: "/paprazzi.png",
    iconLists: ["/re.svg", "/tail.svg", "/sanity.png"],
    link: "https://paparazzi-house.vercel.app/",
  },
  {
    id: 2,
    title: "Mess India",
    des: "Created a food ordering website with a comprehensive dashboard for adding new food items, leveraging ReactJS for the front end and NodeJS for the back end.",
    img: "/messindia.png",
    iconLists: ["/re.svg", "/gsap.svg", "/tail.svg", "/node.png"],
    link: "https://mess-india.web.app/",
  },
  {
    id: 3,
    title: "Cinta Fresh",
    des: "Developed a fully responsive restaurant website featuring GSAP animations for a visually engaging and dynamic user experience.",
    img: "/cintafresh.png",
    iconLists: [ "/gsap.svg", "/tail.svg",],
    link: "https://cinta-fresh.web.app/",
  },
  {
    id: 4,
    title: "Cricket Api Website",
    des: "Built a website that fetches data using APIs, incorporates secure payment processing, and includes user sign-up and login functionalities using Firebase Authentication.",
    img: "/cricket.png",
    iconLists: ["/re.svg", "/tail.svg", "/api.png"],
    link: "https://cricketapiwebsite.netlify.app/",
  },
  {
    id: 5,
    title: "Astral Canvas Multimedia (ACM)",
    des: "Designed an engaging and informative website, delivering valuable content with a user-friendly interface.",
    img: "/ACM.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "",
  },
  {
    id: 6,
    title: "i9 Innovation",
    des: "Created a robust informative website with React, utilizing state management to ensure smooth and efficient content updates.",
    img: "/i9.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://i9innovations.com/",
  },
  {
    id: 7,
    title: "Makkah Booking",
    des: "Developed 'Makkah Booking,' a user-friendly React website for seamless booking experiences, featuring real-time availability and intuitive navigation.",
    img: "/makkah.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://makkahbooking.info/",
  },
   {
    id: 8,
    title: "Dream Kitchen",
    des: "Developed a form-based website for clients to easily submit their requirements whenever they want to construct a kitchen.",
    img: "/kitchen.png",
    iconLists: ["/re.svg", "/tail.svg",],
    link: "https://dreamkitchen21.netlify.app/",
  },
];

export const testimonials = [
  {
    
    quote:
      "Working with Alishba Khan on the Paparazzi project was an absolute pleasure. Her professionalism, responsiveness, and commitment to excellence were evident from start to finish. Alishba's expertise in developing a headless CMS website, combined with her skillful use of ReactJS, TailwindCSS, and Sanity, resulted in a seamless and dynamic user experience. If you want to elevate your website and enhance your brand, Alishba is the perfect partner.",
      image: "/paprazzilogo.png",
    name: "Paparazzi",
  
  },
  {
    quote:
      "Collaborating with Alishba Khan on our food ordering website was a fantastic experience. She expertly leveraged ReactJS for the front end and NodeJS for the back end, creating a seamless and dynamic user experience. The comprehensive dashboard for adding new food items is incredibly user-friendly and efficient. If you're looking to elevate your food business with a top-notch website, Alishba is the perfect partner.",
      image: "/messindialogo.png",
    name: "Mess India",
   
  },
  {
    quote:
      "Alishba Khan created a fully responsive website for Cinta Fresh, incorporating captivating GSAP animations for a visually stunning and dynamic user experience. Highly recommended for top-notch web design and development!",
      image: "/cintafreshlogo.svg",
    name: "Cinta Fresh",

  },
  {
    quote:
      "Alishba Khan developed an exceptional website for Cricket Live, leveraging APIs for real-time data fetching, secure payment processing, and seamless user sign-up and login functionalities using Firebase Authentication. Highly recommended for innovative and reliable web solutions!",
          image: "/cricketlogo.png",
    name: "Live Cricket",


  },
  {
    quote:
      "Developed an impressive website for i9 Innovation using React, expertly managing state to ensure smooth and efficient content updates. Highly recommended for outstanding web development and innovative solutions!",
          image: "/i9logo.png",
    name: "i9 Innovation",

  },
];

export const companies = [
  {
    id: 1,
    name: "Paprazzi",
    img: "/paprazzilogo.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "MessIndia",
    img: "/messindialogo.png",
    nameImg: "/messindianame.png",
  },
  {
    id: 3,
    name: "MakkahBooking",
    img: "/makkahlogo.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "i9Innovaion",
    img: "/i9logo.png",
    nameImg: "/i9Innovation.svg",
  },
  {
    id: 5,
    name: "Cricket",
    img: "/cricketlogo.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "CintaFresh",
    img: "/cintafreshlogo.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Played a key role in developing a custom web-based platform, utilizing HTML, CSS, JavaScript, and Bootstrap for a seamless and responsive user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "ReactJS Intern",
    desc: " Contributed to the development of dynamic web applications using ReactJS, enhancing user interfaces with interactive components and state management.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Junior ReactJS Developer",
    desc: "Collaborated with senior developers to create responsive and scalable web solutions, gaining hands-on experience with ReactJS and related technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/alishbakhaan",
  },
  {
    id: 2,
    img: "/wha.svg",
    link: "https://wa.me/+923162658262",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/alishba-khan-130284247/",
  },
];
