import React from "react";
import { motion } from "framer-motion";
import "../../Components/Experiance/Experiance.css";
import html from "../../assets/Img/html.png";
import css from "../../assets/Img/css.png";
import javascript from "../../assets/Img/javascript.png";
import react from "../../assets/Img/reactjs.png";
import nodejs from "../../assets/Img/nodejs.png";
import tailwind from "../../assets/Img/tailwind.png";
import java from "../../assets/Img/java.png";
import python from "../../assets/Img/python.png";
import mongodb from "../../assets/Img/mongoDB.png";
import bootsrap from "../../assets/Img/bootsrap.png";
import { useEffect } from "react";

const Experiance = (props) => {
  // useEffect(() => {
  //   document.documentElement.style.setProperty('--primary-color', props.colorTheme);
  // }, [props.colorTheme]);
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--Experiance-primary-color",
      props.colorTheme
    );
  }, [props.colorTheme]);

  const logo = [
    {
      index: 1,
      img: html,
    },
    {
      index: 2,
      img: javascript,
    },
    {
      index: 3,
      img: css,
    },
    {
      index: 4,
      img: react,
    },
    {
      index: 5,
      img: nodejs,
    },
    {
      index: 6,
      img: tailwind,
    },
    {
      index: 7,
      img: bootsrap,
    },
    {
      index: 8,
      img: java,
    },
    {
      index: 9,
      img: python,
    },

    {
      index: 10,
      img: mongodb,
    },
  ];
  return (
    <div className="text-white mt-20 xl:mx-8 mx-3 md-3 xl:px-10 px-6 h-full flex flex-col">
      <h1 className="custom-double-underline  w-20 pb-2 font-bold text-3xl my-4">
        Experiance
      </h1>
      <p className="text-lg py-2 text-slate-200">
        I've more than a years of experiance in below technologies.
      </p>
      <div className="technologies mt-10 mb-5 flex justify-evenly flex-wrap gap-20">
        {logo.map(({ img }, index) => (
          // <div className="w-[180px] h-[180px] flex justify-center items-center rounded-full bg-white border-[2px] border-slate-500 overflow-hidden shadow-[0_14px_16px_0_rgba(255,255,255,0.2)] hover:scale-105 duration-500">
          //     <img
          //     key={index}
          //     className="w-full h-full"
          //     src={img}
          //     alt=""
          //   />
          // </div>

          // <motion.div
          //     key={index}
          //     className="Tech-shadow w-[150px] h-[150px] flex justify-around items-center rounded-full bg-white border-[2px] border-slate-500 overflow-hidden  hover:scale-105 duration-500"

          //     initial={{ opacity: 0, y: 100 }} // Initially off-screen and invisible
          //     whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position when in view
          //     viewport={{ once: false, amount: 0.3 }} // Triggers the animation once 30% of the element is in view
          //     transition={{
          //       duration: 0.8,
          //       delay: index * 0.1, // Staggered animation based on index
          //     }}
          //   >
          //     <img className="w-full h-full" src={img} alt="" />
          // </motion.div>

          <motion.div
            key={index}
            className="Tech-shadow w-[150px] h-[150px] flex justify-around items-center rounded-full bg-white border-[2px] border-slate-500 overflow-hidden hover:scale-105 duration-500"
            initial={{ opacity: 1, y: 100 }} // Initially off-screen and invisible
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and in position when in view
            viewport={{ once: false, amount: 0.3 }} // Triggers the animation once 30% of the element is in view
            
            animate={{
              y: [0, -20, 0], // Keyframes for up-down movement
            }}
            transition={{
              repeat: Infinity, // Infinite loop
              repeatType: "loop",
              duration: 4 + index * 0.3, // Duration for one complete cycle
              delay: index * 0.2, // Staggered animation based on index
            }}
          >
            <img className="w-full h-full" src={img} alt="" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experiance;
