import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";


const Contact = (props) => {
  return (
    <div className="bg-slate-700 text-white mt-20 xl:mx-8 mx-3 md-3 xl:px-10 px-6 h-full flex flex-col">
      <h1 className="font-bold text-3xl py-4" style={{color:`${props.colorTheme}`}}>Contact Me</h1>
      <p className="text-lg py-2">
        Please fill out the form below to contact me
      </p>
      <div className="flex py-10 justify-center">
       
        <form className="flex flex-col gap-4 p-4 w-[400px] h-auto border-2 border-sky-100 bg-slate-600 rounded-lg shadow-lg">
          <h2 className="text-white text-2xl font-bold text-center mb-4">
            User Form
          </h2>

          {/* Name Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="p-2 text-slate-800 text-lg rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-2 text-slate-800 text-lg rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-1">
            <label className="text-white font-medium" htmlFor="password">
              Message:
            </label>
            <input
              type="text"
              id="message"
              placeholder="Enter your message"
              className="p-2 text-slate-800 text-lg rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={` fancy-button my-4 `}
            // style={{backgroundColor:`${props.colorTheme}`}}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
      <hr class="border-t-2 border-gray-500 mb-9" />
      <div className=" w-full icons flex flex-col items-center justify-center pt-2">
        <div className="flex justify-cente gap-2">
          <a href="https://github.com/MeetPatel1310" target="_blank">
           <div className="text-2xl hover:scale-110"><IoLogoGithub />
           </div>
          </a>
          
          <a href="https://www.linkedin.com/in/meet-patel-19abb4352/" target="_blank">
            <div className="text-2xl hover:scale-110"><IoLogoLinkedin />
            </div>
          </a>
                          
          <a href="https://www.instagram.com/meetpatel5025/?hl=en" target="_blank">
            <div className="text-2xl hover:scale-110"><AiOutlineInstagram />
            </div>
          </a>
                          
          <a href="https://www.linkedin.com/in/meet-patel-19abb4352/" target="_blank">  <div className="text-2xl hover:scale-110">
            <IoLogoFacebook />
          </div>
          </a>
          
          
          
          <div className="text-2xl hover:scale-110">
            <IoLogoLinkedin />
          </div>
          
        </div>
        <hr class="border-t-2 border-gray-500 mb-5 w-20 mt-5" />
        <p>© 2024 Your Company. All rights reserved.</p>
          
      </div>
      
      
      
    </div>
  );
};

export default Contact;

