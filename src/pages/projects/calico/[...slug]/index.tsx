// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";

// export const metadata = {
//   title: "Calico",
//   description: "Calico is a project management tool for developers.",
// };

// export default function Calico() {
//   return (
//     <main className="flex flex-col bg-[#0B0B0B] overflow-hidden">
//       <header className="z-10 fixed right-0">
//         <Navbar />
//       </header>
//       <div className="z-1 absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-600 px-4 py-2 text-white">
//         This web is on progress, for more information contact me through email
//         or linkedin
//       </div>

//       <div className="w-full px-[120px] rounded-[24px]">
//         <Image
//           src="/project1.svg"
//           alt="Picture of project 1"
//           width={1500}
//           height={1500}
//           className="relative w-full object-contain h-auto rounded-md"
//         />
//       </div>

//       <section className="flex flex-col bg-[#0B0B0B] px-[120px] my-10">
//         <h1 className="text-7xl text-white font-bold pb-10">Calico</h1>
//         <div className="flex">
//           {/* year */}
//           <div className="flex flex-col mr-8">
//             <h3 className="text-[32px] text-[#C19C63] font-semibold">YEAR</h3>
//             <p className="text-[24px] text-white">2023</p>
//           </div>
//           {/* role */}
//           <div className="flex flex-col mr-8">
//             <h3 className="text-[32px] text-[#C19C63] font-semibold">ROLE</h3>
//             <p className="text-[24px] text-white">Project Manager &</p>
//             <p className="text-[24px] text-white">Mobile Developer</p>
//           </div>
//           {/* tech stack */}
//           <div className="flex flex-col mr-8">
//             <h3 className="text-[32px] text-[#C19C63] font-semibold">
//               TECH STACK
//             </h3>
//             <p className="text-[24px] text-white">Flutter</p>
//             <p className="text-[24px] text-white">Firebase</p>
//             <p className="text-[24px] text-white">Google Cloud Platform</p>
//             <p className="text-[24px] text-white">GPT-3 Model</p>
//           </div>
//           {/* repo */}
//           <div className="flex flex-col mr-8">
//             <h3 className="text-[32px] text-[#C19C63] font-semibold">
//               REPOSITORY
//             </h3>
//             <a
//               href="https://github.com/Zem-Jos/calico"
//               className="text-[24px] text-white"
//             >
//               github.com/Zem-Jos/calico
//             </a>
//           </div>
//           {/* publication */}
//           <div className="flex flex-col">
//             <h3 className="text-[32px] text-[#C19C63] font-semibold">
//               PUBLICATION
//             </h3>
//             <a
//               href="https://youtu.be/jHTI0ZtOjCY "
//               className="text-[24px] text-white"
//             >
//               youtu.be/jHTI0ZtOjCY
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="flex flex-col bg-[#0B0B0B] px-[120px] my-10">
//         <h1 className="text-5xl text-white font-semibold pb-10">About</h1>
//         <p className="text-[24px] text-white font-light text-justify">
//           Calico is a chatbot designed to assist users in understanding and
//           managing their mental health. It provides appropriate responses and
//           guidance. Users can chat with Calico and share their day, concerns, or
//           problems. Calico will respond by listening, giving advice, and
//           offering solutions to their stories to help users relieve their stress
//           or anxiety.
//         </p>
//       </section>
//       <Footer />
//     </main>
//   );
// }

export default function ProjectDetails() {
  return (
    <div>
      <h1>Project Details</h1>
    </div>
  );
}
