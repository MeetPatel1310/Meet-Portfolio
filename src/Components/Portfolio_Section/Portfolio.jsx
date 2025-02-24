// import React from "react";
// import { motion } from "framer-motion"; // Import Framer Motion
// import html from "../../assets/Img/html.png";
// import javascript from "../../assets/Img/javascript.png";
// import react from "../../assets/Img/reactjs.png";
// import nodejs from "../../assets/Img/nodejs.png";
// import tailwind from "../../assets/Img/tailwind.png";
// import java from "../../assets/Img/java.png";
// import python from "../../assets/Img/python.png";
// import "../../Components/Portfolio_Section/Portfolio.css";
// import { useEffect } from "react";

// const Portfolio = (props) => {

//   //css of this is in index.css file because it is common css for all components so same css we can set in index.css
  
//   useEffect(() => {
//         document.documentElement.style.setProperty('--about-color', props.colorTheme);
//       }, [props.colorTheme]);


//   const cartItems = [
//     {
//       id: 1,
//       logo: html,
//       name: "Html & CSS",
//     },
//     {
//       id: 2,
//       logo: javascript,
//       name: "JavaScript",
//     },
//     {
//       id: 3,
//       logo: react,
//       name: "React JS",
//     },
//     {
//       id: 4,
//       logo: nodejs,
//       name: "Node JS",
//     },
//     {
//       id: 5,
//       logo: html,
//       name: "Express",
//     },
//     {
//       id: 6,
//       logo: tailwind,
//       name: "Bootstrap & Tailwind CSS",
//     },
//     {
//       id: 7,
//       logo: python,
//       name: "Python",
//     },
//     {
//       id: 8,
//       logo: java,
//       name: "Java",
//     },
//   ];

//   return (
//     <div className="text-white mt-11 py-5 mx-8 px-10 h-full">
//       <h1 className="custom-double-underline text-3xl mb-11 font-bold">Portfolio</h1>
//       <div className="flex gap-5 justify-evenly flex-wrap">
//         {cartItems.map(({ id, logo, name }) => (

//           //animation
//           <motion.div
//             key={id}
//             className="cart text-black md:w-[300px] border-2 border-black bg-slate-100 rounded-lg p-4 shadow-[0_14px_16px_0_rgba(255,255,255,0.2)] hover:scale-105 duration-500"
//             initial={{ scale: 0.2, y: 50 }} // Start small and below the position
//             whileInView={{ scale: 1, y: 0 }} // Animate to full size and correct position
//             viewport={{ once: false, amount: 0.1 }} // Animate when 20% of the card is visible
//             transition={{
//               type: "spring", // Spring animation for bounce
//               stiffness: 200, // Bounce intensity
//               damping: 10, // Smoothness of the bounce
//               duration: 1, // Duration of the animation
//               delay: id * 0.05, // Staggered delay for each card
//             }}
//           >
//             <img src={logo} className="w-[100px] rounded-full bg-white border-[2px] border-slate-300" alt={name} />
//             <h1 className="font-bold text-xl py-2">{name}</h1>
//             <p className="text-md text-justify">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Asperiores nisi porro quasi, qui sed et explicabo placeat nesciunt
//               dolore suscipit!
//             </p>

//             <button className="w-auto self-start rounded-2xl bg-[#465697] px-5 py-2 mt-5 hover:opacity-75 duration-300 hover:scale-105 font-semibold text-white">
//               Source code
//             </button>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../../Components/Portfolio_Section/Portfolio.css";
import { useEffect } from "react";
// import html from "../../assets/Img/html.png";
// import javascript from "../../assets/Img/javascript.png";
// import react from "../../assets/Img/reactjs.png";
// import nodejs from "../../assets/Img/nodejs.png";
// import tailwind from "../../assets/Img/tailwind.png";
// import java from "../../assets/Img/java.png";
// import python from "../../assets/Img/python.png";
import Weather from "../../assets/Img/Project-Img/NewWeather.png"
import Budget from "../../assets/Img/Project-Img/BudgetTracker.png"
import Freelancing from "../../assets/Img/Project-Img/NewFreelancing.png"
import TicTacToe from "../../assets/Img/Project-Img/NewTicTacToe.png"
import Ecommerce from "../../assets/Img/Project-Img/NewEcommerce.png"

const Portfolio = (props) => {

  //css of this is in index.css file because it is common css for all components so same css we can set in index.css
  
  useEffect(() => {
        document.documentElement.style.setProperty('--about-color', props.colorTheme);
      }, [props.colorTheme]);


  const cartItems = [
    {
      id: 1,
      logo: Weather,
      name: "Weather Forecast",
      Description: "I made this web application by using React and Fetch API",
      link: "https://github.com/MeetPatel1310/React-JS/tree/main/React-%20weather%20application"
      // width: "610px",
      // Height:"770px"
    },
    {
      id: 2,
      logo: Budget,
      name: "Budget Tracker",
      Description: "It help us to track our income and expenses",
      link:"https://github.com/MeetPatel1310/JavaScript/tree/main/budgetTracker"
      
    },
    {
      id: 3,
      logo: TicTacToe,
      name: "Tic Tac Toe",
      Description: "I made a Game with many functionalities by using Javascript",
      link: "https://github.com/MeetPatel1310/JavaScript/tree/main/TicTacToe"
    },
    // {
    //   id: 4,
    //   logo: Weather,
    //   name: "Node JS",
    // },
    // {
    //   id: 5,
    //   logo: Eccomerce,
    //   name: "Express",
    // },
    // {
    //   id: 6,
    //   logo: ,
    //   name: "Bootstrap & Tailwind CSS",
    // },
    // {
    //   id: 7,
    //   logo: python,
    //   name: "Python",
    // },
    // {
    //   id: 8,
    //   logo: java,
    //   name: "Java",
    // },
  ];

  function handleSourceCode(link){
    window.open(link, '_blank');
  }
  function handleFeelancing(){
    window.open("https://github.com/MeetPatel1310/HTML/tree/main/HTML%26CSS_Project", '_blank');
  }
  return (
    <div className="text-white mt-11 py-5 xl:mx-8 mx-3 md-3 xl:px-10 px-6 h-full">
      <h1 className="custom-double-underline text-3xl mb-11 font-bold"> Projects </h1>
      <div className="flex justify-evenly flex-wrap gap-y-10">
        {cartItems.map(({ id, logo, name,Description,link }) => (

          //animation
          <motion.div
            key={id}
            className="flex flex-col items-center justify-between gap-2 cart text-black  md md:w-[330px]  border-2 border-black bg-slate-100 rounded-lg p-4 shadow-[0_14px_16px_0_rgba(255,255,255,0.2)] hover:scale-105 duration-500"
            initial={{ scale: 0.2, y: 50 }} // Start small and below the position
            whileInView={{ scale: 1, y: 0 }} // Animate to full size and correct position
            viewport={{ once: false, amount: 0.1 }} // Animate when 20% of the card is visible
            transition={{
              type: "spring", // Spring animation for bounce
              stiffness: 200, // Bounce intensity
              damping: 10, // Smoothness of the bounce
              duration: 2, // Duration of the animation
              delay: id * 0.05, // Staggered delay for each card
            }}
          >
            <img src={logo} className="w-[95%]   bg-white border-[2px] border-slate-300" alt={name} />
            <p className="text-lg font-bold" style={{color:`${props.colorTheme}`}}>{name}</p>
            <p className="text-md text-justify">
              {Description}
              
            </p>

            <button className="w-full self-start rounded-2xl px-5 py-2    hover:opacity-75 duration-300 hover:scale-95 font-semibold text-white" style={{backgroundColor:`${props.colorTheme}`}} onClick={() => handleSourceCode(link)}>
              Source code
            </button>
          </motion.div>
// 
        ))}


          <motion.div
            className="flex flex-col items-center gap-2  mt-10 cart text-black lg:w-[480px] border-2 border-black bg-slate-100 rounded-lg p-4 shadow-[0_14px_16px_0_rgba(255,255,255,0.2)] hover:scale-105 duration-500"
            initial={{ scale: 0.2, y: 50 }} // Start small and below the position
            whileInView={{ scale: 1, y: 0 }} // Animate to full size and correct position
            viewport={{ once: false, amount: 0.1 }} // Animate when 20% of the card is visible
            transition={{
              type: "spring", // Spring animation for bounce
              stiffness: 200, // Bounce intensity
              damping: 10, // Smoothness of the bounce
              duration: 1, // Duration of the animation
              // delay: id * 0.05, // Staggered delay for each card
            }}>

            <img src={Freelancing} className="w-[97%]   bg-white border-[2px] border-slate-300"  />
            <p className="text-xl font-bold" style={{color:`${props.colorTheme}`}}> Freelancing web design</p>
            <p className="text-md text-justify"> </p>

            <button onClick={handleFeelancing} className="w-full self-start rounded-2xl  px-5 py-2  hover:opacity-75 duration-300 hover:scale-95 font-semibold text-white" style={{backgroundColor:`${props.colorTheme}`}} >
              Source code
            </button>
          </motion.div>

          <motion.div
            
            className="flex flex-col items-center gap-2 mt-10 cart text-black lg:w-[480px] border-2 border-black bg-slate-100 rounded-lg p-4 shadow-[0_14px_16px_0_rgba(255,255,255,0.2)] hover:scale-105 duration-500"
            initial={{ scale: 0.2, y: 50 }} // Start small and below the position
            whileInView={{ scale: 1, y: 0 }} // Animate to full size and correct position
            viewport={{ once: false, amount: 0.1 }} // Animate when 20% of the card is visible
            transition={{
              type: "spring", // Spring animation for bounce
              stiffness: 200, // Bounce intensity
              damping: 10, // Smoothness of the bounce
              duration: 1, // Duration of the animation
              // delay: id * 0.05, // Staggered delay for each card
            }}>

            <img src={Ecommerce} className="w-[97%]    bg-white border-[2px] border-slate-300"  />
            <p className="text-xl font-bold" style={{color:`${props.colorTheme}`}}>Eccomerce Website</p>
            <p className="text-md text-justify"> </p>

            <button className="w-full self-start rounded-2xl  px-5 py-2  hover:opacity-75 duration-300 hover:scale-95 font-semibold text-white" style={{backgroundColor:`${props.colorTheme}`}}>
              Source code
            </button>
          </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
