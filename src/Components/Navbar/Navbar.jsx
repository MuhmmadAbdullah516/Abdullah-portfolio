import React, { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
      const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }

  };
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
    // {id:"about",label:"About"}
  ];
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg  font-semibold  cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-[#FFFFFF]">Muhammad</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-[#FFFFFF]">Abdullah</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>
        {/* Desktop menu*/}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "#8245ec" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="https://github.com/dashboard" target="blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
          <FaGithub size={24}/>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abdullah-a7913b313/" target="blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
          <FaLinkedin size={24}/>
          </a>
        </div>
        <div className="md:hidden">{isOpen ? (<FiX className="text-3xl text-[#8245ec] cursor-pointer" onClick={()=>setIsOpen(false)} />):(<FiMenu className="text-3xl text-[#8245ec] cursor-pointer" onClick={()=>setIsOpen(true)}/>)}</div>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform  -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50  backdrop-filter backdrop-blur-lg  z-50  rounded-lg  shadow-lg ">
          <ul className="flex flex-col items-center  space-y-4  py-4 text-gray-300">
            {menuItems.map((item)=>(
              <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                <button onClick={()=>handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
               
            ))}
            <div className="flex space-x-4">
              <a href="https://github.com/codingmastr" target="blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
          <FaGithub size={24}/>
          </a>
          <a href="https://github.com/codingmastr" target="blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
          <FaLinkedin size={24}/>
          </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
