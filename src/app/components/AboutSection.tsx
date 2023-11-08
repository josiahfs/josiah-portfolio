// "use client";
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import Image from "next/image";
// import Button from "./Button";

// const AboutSection = () => {
//   return (
//     <section className="h-screen my-auto flex flex-col justify-center items-center">
//       <div>
//         <div className="w-full h-[20vh] flex justify-center items-end"></div>
//         <div className="h-screen w-10/12 flex flex-col lg:flex-row justify-evenly items-center">
//           <div className="w-full lg:w-[618px] space-y-4 lg:order-1">
//             <div>
//               <p className="text-[#ECECEC] font-bold text-[24px] lg:text-[40px]">
//                 Hi! My name is Josiah<br></br>
//                 I&rsquo;m&nbsp;
//                 <span className="text-[#C19C63] text-[24px] lg:text-[40px]">
//                   <TypeAnimation
//                     sequence={[
//                       "a Compsci Student.",
//                       1000,
//                       "a Mobile Developer.",
//                       1000,
//                       "a Frontend Developer.",
//                       1000,
//                       "a Product Manager.",
//                       1000,
//                       "a UI/UX Designer.",
//                       1000,
//                     ]}
//                     wrapper="span"
//                     speed={50}
//                     repeat={Infinity}
//                   />
//                 </span>
//               </p>
//             </div>
//             <p className="text-[#B1B0B0] text-[14px] lg:text-[16px] text-justify font-regular">
//               Hi there! My name is [Your Name] and I am a [Your Profession]. I
//               have [Number of Years] years of experience in [Your Field] and
//               have worked on projects such as [Project 1], [Project 2], and
//               [Project 3]. Hi there! My name is [Your Name] and I am a [Your
//               Profession]. I have [Number of Years] years of experience in [Your
//               Field] and have worked on projects such as [Project 1], [Project
//               2], and [Project 3].
//             </p>
//             <Button text="Download CV" onClick={} />
//           </div>
//           <div className="w-[30vh] lg:w-[480px] lg:order-2">
//             <Image
//               src="/about-pic.svg"
//               alt="Picture of the author"
//               width={480}
//               height={480}
//               className="relative w-full object-contain h-auto"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Button from "./Button";

type AboutSectionProps = {
  onClick: () => void; // Define the type for the onClick prop
};

const AboutSection: React.FC<AboutSectionProps> = ({ onClick }) => {
  return (
    <section className="h-screen my-auto flex flex-col justify-center items-center">
      <div className="w-full h-[20vh] flex justify-center items-end"></div>
      <div className="h-screen w-10/12 flex flex-col lg:flex-row justify-evenly items-center">
        <div className="w-full lg:w-[618px] space-y-4 lg:order-1">
          <div>
            <p className="text-[#ECECEC] font-bold text-[24px] lg:text-[40px]">
              Hi! My name is Josiah<br></br>
              I&rsquo;m&nbsp;
              <span className="text-[#C19C63] text-[24px] lg:text-[40px]">
                <TypeAnimation
                  sequence={[
                    "a Compsci Student.",
                    1000,
                    "a Mobile Developer.",
                    1000,
                    "a Frontend Developer.",
                    1000,
                    "a Product Manager.",
                    1000,
                    "a UI/UX Designer.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
          </div>
          <p className="text-[#B1B0B0] text-[14px] lg:text-[16px] text-justify font-regular">
            Hi there! My name is [Your Name] and I am a [Your Profession]. I
            have [Number of Years] years of experience in [Your Field] and have
            worked on projects such as [Project 1], [Project 2], and [Project
            3]. Hi there! My name is [Your Name] and I am a [Your Profession]. I
            have [Number of Years] years of experience in [Your Field] and have
            worked on projects such as [Project 1], [Project 2], and [Project
            3].
          </p>
          <Button text="Download CV" onClick={onClick} />
        </div>
        <div className="w-[30vh] lg:w-[480px] lg:order-2">
          <Image
            src="/about-pic.svg"
            alt="Picture of the author"
            width={480}
            height={480}
            className="relative w-full object-contain h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
