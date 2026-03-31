import React, { useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";
import { GoArrowUpRight } from "react-icons/go";

const experiences = [
  {
    company: "Sabhyasha Retail Tech",
    role: "Software Engineer II",
    date: "Present",
    location: "Ranchi, India",
    description: "Design and develop scalable backend APIs and data pipelines for the Artisans' Wizard Seller App and Near Delight (XORA), implementing caching strategies, asynchronous services, and optimized database queries for high-performance backend systems",
  },
  {
    company: "Sparrow Softech Pvt LTD",
    role: "Django Developer",
    date: "September 2024 – September 2025",
    location: "Ranchi, India",
    description: "Developed and maintained the official municipal websites for Rajasthan, Sujangarh, and Churu using Django and PostgreSQL. Managed large, complex taxation-related datasets and built secure backend systems for government operations and citizen services.",
  },
  {
    company: "beenaIT Solutions",
    role: "Junior Full-Stack Developer",
    date: "April 2023 – September 2024",
    location: "Ranchi, India (Onsite)",
    description: "Developed web applications for Scotland-based projects using MERN stack, including Hospital management systems, billing services, and donation platforms, with a focus on full-stack development.",
  },
  {
    company: "Central Coalfields Limited",
    role: "Intern",
    date: "June 2023 – July 2023",
    location: "Ranchi, India (Onsite)",
    description: "Developed a real-time chat app using MERN stack",
  },
];

export const Experience: React.FC = () => {
  const [activeExperience, setActiveExperience] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-12 md:py-20 min-[2000px]:py-[10vh] px-4 md:px-8 min-[2000px]:px-[5vw] relative bg-[#EBEAE9] dark:bg-[#141517]"
    >
      <div className="max-w-5xl min-[2000px]:max-w-[70vw] mx-auto">
        <div className="flex flex-col justify-between items-start gap-6 min-[2000px]:gap-[3vw] mb-12 md:mb-16 min-[2000px]:mb-[8vh]">
          <h2 className="text-[10vw] md:text-[6vw] lg:text-6xl min-[2000px]:text-[5vw] font-medium flex flex-wrap uppercase">
            {"Experience".split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex mr-3 md:mr-4 last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: (wordIndex * 12 + charIndex) * 0.03,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
        </div>

        <div className="border-t-[1.5px] border-black dark:border-white">
          {experiences.map((experience, index) => (
            <div
              key={experience.company}
              className="group flex flex-col justify-between items-start py-6 md:py-10 min-[2000px]:py-[5vh] border-b border-black/10 dark:border-white/10 cursor-pointer relative"
              onMouseEnter={() => setActiveExperience(index)}
              onMouseLeave={() => {
                setActiveExperience(null);
              }}
            >
              <div className="flex flex-col md:flex-row justify-between w-full gap-4 min-[2000px]:gap-[2vw]">
                <div className="flex flex-col gap-2 min-[2000px]:gap-[1vw] z-10 w-full md:w-2/3">
                  <h3
                    className="text-[6vw] md:text-[3vw] lg:text-2xl min-[2000px]:text-[2vw] font-bold transition-all duration-500 group-hover:opacity-40 md:group-hover:translate-x-4 max-w-2xl"
                  >
                    {experience.company}<span className="font-medium italic opacity-80">, {experience.role}</span>
                  </h3>
                  <p
                    className="text-sm min-[2000px]:text-[1vw] min-[2000px]:leading-[1.5vw] opacity-60 transition-all duration-500 md:group-hover:translate-x-4 mt-2 max-w-3xl"
                  >
                    {experience.description}
                  </p>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-1 min-[2000px]:gap-[0.5vw] z-10 w-full md:w-1/3 opacity-80 mt-2 md:mt-0 transition-all duration-500 md:group-hover:-translate-x-4">
                  <span className="text-sm md:text-base min-[2000px]:text-[1vw] font-medium text-right w-full">{experience.date}</span>
                  <span className="text-xs md:text-sm min-[2000px]:text-[0.8vw] text-right w-full">{experience.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
