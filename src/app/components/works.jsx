import businesscart from "../assets/cpt_business_cart_1.webp";
import ecommerce from "../assets/ecommerce.webp";
import movieapp from "../assets/movieapp.webp";
import musicapp from "../assets/musicapp.webp";
import realestate from "../assets/realestate.webp";
import deliveryapp1 from "../assets/cartmobile.webp";
import deliveryapp2 from "../assets/itemmobile.webp";
import chedmed from "../assets/chedmed.png";
import ccc from "../assets/ccc.png";
import opensource from "../assets/opensource.webp";

// const workref0 = useRef();
// const workref1 = useRef();
// const workref2 = useRef();
// const workref3 = useRef();
// const workref4 = useRef();
// const workref5 = useRef();
export const Works = [
  {
    id: 0,
    type: "web",
    image: opensource,
    title: "Open Source website",
    resume:
      "this website is built with passion by collaboration of CSE developement departement members in a very small period of time, it is a platform that describes the open source day which is an event organized bu CSE, it is basically a day where participants learn and contributos to open source projects  ",
    weblink: "https://open-source-day-2023.cse.club/",
    year: "2024",
    color: "rgb(60, 145, 230)",
    resumecolor: "rgb(60, 145, 230,0.8)",
    codelink:
      "https://github.com/ScientificClubofESI/open-source-event-website",
  },
  {
    id: 1,
    type: "web",
    image: ccc,
    title: "ccc website",
    resume:
      "this website is built using next js and tailwind css technologies , it stands for cse coding context which is a competition organized by cse members where problems are supposed to be solved by participants using the most recent techonologies and framworks",
    weblink: "",
    year: "2023",
    color: "rgb(57, 47, 90)",
    resumecolor: "rgb(57, 47, 90,0.8)",
    codelink: "https://github.com/ScientificClubofESI/ccc-website",
  },
  {
    id: 2,
    type: "web",
    image: chedmed,
    title: "chedmed app",
    resume:
      "chedmed is a web application built in collobariton by our team in a DEVCAMP (hackathon organized by CAPenp) , it suggests solutions about products returns in E-commerce fields, it is powered by an AI model , a simple chat that advices the client by giving him the appropriate datas",
    weblink: "",
    year: "2023",
    color: "rgb(157, 217, 210)",
    resumecolor: "rgb(157, 217, 210,0.8)",
    codelink: "https://github.com/Amine2240/chedmed-front-end.git",
  },
  {
    id: 3,
    type: "web",
    // reference: workref3,
    image: musicapp,
    title: "music app",
    resume: "",
    weblink: "https://music-app-713c4c.netlify.app/",
    year: "2023",
    color: "rgb(137, 2, 62)",
    resumecolor: "rgb(137, 2, 62,0.8)",
    codelink: "https://github.com/Amine2240/Music_App_with_react",
  },
  {
    id: 4,
    type: "web",
    // reference: workref4,
    image: realestate,
    title: "real estate",
    resume: "a full-stack web application ",
    weblink: "https://real-estate-88851b.netlify.app/",
    year: "2023",
    color: "rgb(136, 72, 67)",
    resumecolor: "rgb(136, 72, 67,0.8)",
    codelink: "https://github.com/Amine2240/real-estate-app",
  },

  {
    id: 5,
    type: "mobile",
    // reference: workref5,
    image: deliveryapp1,
    image2: deliveryapp2,
    title: "food delivery app",
    resume:
      " a mobile application build with flutter framwork and integrated with food api,it provides informations about food including its price, its image, its original country, its way of cook and more...",
    weblink:
      "https://github.com/Amine2240/food_delivery_mobile_app_with_flutter",
    year: "2023",
    color: "rgb(31, 127, 146)",
    resumecolor: " rgb(31, 127, 146,0.8)",
    codelink:
      "https://github.com/Amine2240/food_delivery_mobile_app_with_flutter",
  },
  {
    id: 6,
    type: "web",
    // reference: workref2,
    image: movieapp,
    title: "movie app",
    resume:
      "a full-stack movie application inspired by netflix,using the tmdb api that provides the most important informations about the movies, tv series and more.. , it also includes an authentication method (user password) and database storage (mongodb) ",
    weblink: "https://movies-clone-745341.netlify.app/",
    year: "2023",
    color: "#294659d3",
    resumecolor: "#294659d3",
    codelink:
      "https://github.com/Amine2240/MERN-stack-Netflix-Clone-app-with-authentication",
  },
  {
    id: 7,
    type: "web",
    // reference: workref1,
    image: ecommerce,
    title: "ecommerce app",
    resume:
      "a learn-purpose project made with react framwork, showing multiple types of kitmans with the ability of having a list of choices and being able to save them ",
    weblink: "https://ecommerce-react-app-amine.netlify.app/",
    year: "2023",
    color: "rgb(43, 48, 58)",
    resumecolor: "rgb(43, 48, 58,0.8)",
    codelink: "https://github.com/Amine2240/E-commerce-react-app",
  },
  {
    id: 8,
    type: "web",
    // reference: workref0,
    image: businesscart,
    title: "business cart",
    resume: "",
    weblink: "https://business-amine.netlify.app/",
    year: "2023",
    color: "rgb(234, 154, 39)",
    resumecolor: "rgb(234, 154, 39,0.8)",
    codelink: "https://github.com/Amine2240/business-cart-react",
  },
];

//i prefered to store all the works in mongodb in order to increase the performence of the website
