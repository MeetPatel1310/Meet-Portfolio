import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import img2 from "../../assets/Img/img-2.png";
// import "../../Components/About/About.css";



const About = (props) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--about-color",
      props.colorTheme
    );
  }, [props.colorTheme]);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, amount: 0.2 }); // Runs every time it enters the viewport

  // Skill Progress Bar
  const Skill = [
    {
      id: 1,
      name: "HTML&CSS",
      PR: "75%",
    },
    {
      id: 2,
      name: "Javascript",
      PR: "70%",
    },
    {
      id: 3,
      name: "ReactJs",
      PR: "80%",
    },
    {
      id: 4,
      name: "NodeJS",
      PR: "70%",
    },
  ];

  function handleGithubLink(){
    window.open('https://github.com/MeetPatel1310', '_blank');
  }
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, x: -100 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
    transition={{ duration: 0.5 }}
     className="lg:px-11 md:px-7 px-3 bg-slate-700  h-2/3 text-slate-100 py-5 overflow-hidden  md:mx-8 mx-2 flex flex-col">
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1, delay: 0.1 }}
       className="w-20 text-white custom-double-underline text-3xl font-bold ">
        About
      </motion.h1>
      <div className="flex mt-8">
        {/* <div className='w-1/2'><img src={img2} alt="" /></div> */}
        <div className="w-full">
          <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="my-3 text-justify text-lg mb-7">
            Hello, I'm{" "}
            <span
              className="font-medium"
              style={{ color: `${props.colorTheme}` }}
            >
              Meet Patel
            </span>{" "}
            , a passinate Web developer with a keen eye for MERN Stack With a
            background in IT, I strive to create impactful and visually stunning
            Software solutions that leave a lasting impression.
          </motion.h2>

          <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="themeTextColor text-2xl mt-5 mb-2 text-justify">
            Education
          </motion.h2>
          {/* <p className='text-justify md:text-lg'>

                </p> */}
          <motion.ul 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="list-disc ml-5 marker:text-white text-lg ">
            <li>
              BE: Computer Engineering from GTU [Gujarat Technological
              University] with 8.5 CGPA.
            </li>
            <li>
              HSC: From Annanya Vidhyalaya [Gujarat Higher Secondary Education
              Board] with 76 PR.
            </li>
            <li>
              SSC: From Holly Child School [Gujarat Secondary Education Board]
              with 87 PR.
            </li>
          </motion.ul>
          

          <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="themeTextColor text-2xl mt-5 mb-2 text-justify">
            Personal Details & Skills
          </motion.h2>
          
          <div className="md:px-3 px-2 my-5 lg:flex lg:flex-row flex flex-col items-center gap-5 lg:gap-0  lg:justify-around">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className=" md:gap-3 lg:w-[50%] flex flex-col gap-3 lg:items-center">
              <div className="md:flex md:flex-row md:justify-between flex-col w-full   ">
                <div className="left flex flex-col md:gap-1 gap-2 ">
                  <div className="birth flex gap-2 ">
                    <h2 className="text-lg">Birth: </h2>
                    <p className="text-lg">13/10/2001</p>
                  </div>
                  <div className="Degree flex text-lg gap-2">
                    <h2>Degree:</h2>
                    <p>BE</p>
                  </div>

                  <div className="Phone flex text-lg gap-2">
                    <h2>Phone:</h2>
                    <p >76218-20722</p>
                  </div>
                </div>
                <div className="right flex flex-col md:gap-1 gap-2 ">
                  <div className="email flex text-lg gap-2">
                    <h2>Email:</h2>
                    <p>meetpatel2877@gmail.com</p>
                  </div>
                  <div className="GitHub flex text-lg gap-2">
                    <h2>Github:</h2>
                    <p onClick={handleGithubLink} style={{color:"#1E90FF", wordBreak: 'break-word',whiteSpace: 'normal',}} className="cursor-pointer">https://github.com/MeetPatel1310</p>
                  </div>

                  <div className="City flex text-lg gap-2">
                    <h2>City :</h2>
                    <p>Kalol,Gandhinagar</p>
                  </div>
                  
                </div>
              </div>
              <hr className="lg:w-[90%] md:w-[0%] w-[100%] mx-auto" style={{ borderColor: props.colorTheme }} />
              <div className=" Skill "
              style={{
                wordBreak: 'break-word',
                whiteSpace: 'normal',
              }}>
                <h2 className="text-lg text-justify ">
                  <span className="text-xl font-medium " style={{ color: props.colorTheme }}>Skills :</span> HTML &
                  CSS, Javascript, ReactJS, NodeJS, ExpressJS, Redux, MySQL, MongoDB, TailwindCSS, Bootstrap, Java, Python, Git & Github.
                </h2>
              </div>
            </motion.div>
            <hr className="lg:w-[0%] md:w-[90%] w-[100%] lg:mt-0  text-center" style={{ borderColor: props.colorTheme }} />
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:w-[50%] w-[95%]  lg:py-0 lg:flex lg:flex-col lg:items-center  lg:justify-center">
              
              {Skill.map(({ id, name, PR }) => {
                return(
                  <div key={id} class="w-[90%] flex items-center space-x-4">
                    <h2 class="text-white text-lg font-medium whitespace-nowrap my-2">
                      {name}
                    </h2>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className=" h-3 rounded-full"
                        style={{ width: `${PR}`, backgroundColor: `${props.colorTheme}` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </div>

          <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="themeTextColor text-2xl mt-5 mb-2 text-justify">
            Professional Experience
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-justify text-lg">
           Working at TechAmdavad as a Full-Stack Developer, I design and develop scalable, responsive applications using React.js, Node.js, MongoDB, and Express.js.
          </motion.p>

          

          <motion.h2 
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="themeTextColor text-2xl mt-5 mb-2 text-justify">
            Mission Statement
          </motion.h2>
          <motion.p 
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-justify text-lg">
            My mission is to leverage my skills and creativity to deliver
            innovative software solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;


