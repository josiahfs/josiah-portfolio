// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// type Heading = {
//   level: number;
//   content: string;
// };

// type RichTextNode = {
//   nodeType: string;
//   content: {
//     value: string;
//   }[];
// };

// type RichTextContent = {
//   content: RichTextNode[];
// };

// type TableOfContentsProps = {
//   richText: RichTextContent; // Pass the rich text content as prop
// };

// const TableOfContents: React.FC<TableOfContentsProps> = ({ richText }) => {
//   const [headings, setHeadings] = useState<Heading[]>([]);

//   useEffect(() => {
//     const parseRichTextForTableOfContents = (richText: RichTextContent) => {
//       const toc: Heading[] = [];
//       const nodes = richText.content;

//       if (richText && richText.content) {
//         richText.content.forEach((node) => {
//           if (node.nodeType.startsWith("heading")) {
//             const level = parseInt(node.nodeType.split("-")[1]);
//             const content = node.content[0].value;
//             toc.push({ level, content });
//           }
//         });
//       }

//       return toc;
//     };

//     setHeadings(parseRichTextForTableOfContents(richText));
//   }, [richText]);

//   const [activeHeading, setActiveHeading] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       let activeIndex = null;
//       headings.forEach((heading, index) => {
//         const section = document.getElementById(`section-${index}`);
//         if (section && section.offsetTop <= scrollPosition + 200) {
//           activeIndex = index;
//         }
//       });
//       setActiveHeading(activeIndex);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [headings]);

//   const handleClick = (index: number) => {
//     const section = document.getElementById(`section-${index}`);
//     if (section) {
//       window.scrollTo({
//         top: section.offsetTop - 100,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="flex flex-col mt-4">
//       <p className="text-xl font-semibold">Table of Contents</p>
//       <ul>
//         {headings.map((heading, index) => (
//           <li
//             key={index}
//             className={activeHeading === index ? "active" : ""}
//             onClick={() => handleClick(index)}
//             style={{ marginLeft: `${(heading.level - 2) * 24}px` }}
//           >
//             <span className="text-[#B1B0B0] hover:text-[#C19C63] transition-colors duration-300 ease-in-out hover:font-semibold">
//               {heading.content}
//             </span>
//           </li>
//         ))}
//       </ul>

//       <style jsx>{`
//         ul {
//           list-style-type: none;
//           padding: 0;
//         }
//         li.active {
//           font-weight: bold;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TableOfContents;
