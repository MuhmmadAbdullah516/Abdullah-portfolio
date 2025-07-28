import React from 'react';
import Tilt from 'react-parallax-tilt';
import { SkillsInfo } from '../../Constant';

const Skills = () => {
  const allSkills = SkillsInfo.flatMap(category => category.skills);
  const half = Math.ceil(allSkills.length / 2);
  const firstRow = allSkills.slice(0, half);
  const secondRow = allSkills.slice(half);

  return (
    <section id="skills" className="clip-path-custom py-24 px-[12vw] font-sans bg-skills-gradient">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          These skills reflect my practical experience gained through real-world projects, internships, and continuous learning as a frontend developer.
        </p>
      </div>

      {/* Row 1 */}
      <div className="relative overflow-hidden w-full py-5">
        <div className="flex animate-marquee gap-6 w-max">
          {firstRow.map((skill, index) => (
            <Tilt
              key={`row1-${skill.name}-${index}`}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={400}
              glareEnable={false}
              className="w-36 h-40 sm:w-40 sm:h-44 bg-[#0e1b29] border border-[#2f3c4e] rounded-xl shadow-md flex flex-col items-center justify-center p-3"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="text-sm sm:text-base text-blue-300 font-medium text-center">
                {skill.name}
              </span>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden w-full py-5">
        <div className="flex animate-marqueeReverse gap-6 w-max">
          {secondRow.map((skill, index) => (
            <Tilt
              key={`row2-${skill.name}-${index}`}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={400}
              glareEnable={false}
              className="w-36 h-40 sm:w-40 sm:h-44 bg-[#0e1b29] border border-[#2f3c4e] rounded-xl shadow-md flex flex-col items-center justify-center p-3"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-14 h-14 object-contain mb-2"
              />
              <span className="text-sm sm:text-base text-blue-300 font-medium text-center">
                {skill.name}
              </span>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
