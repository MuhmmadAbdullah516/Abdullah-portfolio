import React from "react";
import { Typewriter } from "react-simple-typewriter";
import BlurBlob from "../../BlurBlob";
import Tilt from "react-parallax-tilt";
import profileImage from "/src/assets/profile.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw]  font-sans mt-16 md:mt-16 lg:mt-16 relative"
    >
      <BlurBlob
        position={{ top: "50%", left: "30%" }}
        size={{ width: "40%", height: "100%" }}
      />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-[60%] text-center  md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl  md:text-6xl font-bold  text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl  font-bold text-white mb-4  leading-tight">
            M Abdullah
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight ">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Web Developer",
                "Frontend Developer",
                "UI/Ux Designer",
                "Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            ></Typewriter>
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10  mt-8 leading-relaxed ">
            I am a Frontend Developer with 11 months of experience in building
            responsive and user-friendly web applications. Skilled in React.js,
            JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, and Redux, I focus
            on clean UI/UX design and performance optimization. I’m passionate
            about creating seamless digital experiences using modern frontend
            technologies.
          </p>
          <a
            href="https://drive.google.com/file/d/1P3hY0OdW5oTLtPtS6jgFdlF-Twv3UEm8/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-[1.15]"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec,0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>
         <div className="md:w-1/2 flex justify-center md:justify-end">
         <Tilt  className=" md:w-[30rem] border-4 border-purple-700 rounded-full ml-6" tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05} transitionSpeed={1000} gyroscope={true}>
          <img src={profileImage} alt="M Abdullah" className="  w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
         </Tilt>
         
         </div>
      </div>
    </section>
  );
};

export default About;
