import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SplitText from "split-text";

const NavLink: React.FC = () => {
  const [tlHover, setTlHover] = useState<gsap.Timeline | null>(null);
  const textRef1 = useRef<HTMLDivElement | null>(null);
  const textRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const $text1 = textRef1.current;
    const $text2 = textRef2.current;

    if (!$text1 || !$text2) return;

    const $text1Split = new SplitText($text1, { type: "words,chars" });
    const chars1 = $text1Split.chars;

    const $text2Split = new SplitText($text2, { type: "words,chars" });
    const chars2 = $text2Split.chars;

    const tl = gsap
      .timeline({ paused: true })
      .staggerTo(chars1, 0.8, { yPercent: -100, ease: "power3.inOut" }, 0.03)
      .staggerFrom(
        chars2,
        0.8,
        { yPercent: 100, ease: "power3.inOut" },
        0.03,
        0.1
      );

    setTlHover(tl);
  }, [textRef1, textRef2]);

  const handleHover = () => {
    if (tlHover) tlHover.play();
  };

  const handleLeave = () => {
    if (tlHover) tlHover.reverse();
  };

  return (
    <>
      <link
        href="//db.onlinewebfonts.com/c/55d433372d270829c51e2577a78ef12d?family=Monument+Extended"
        rel="stylesheet"
        type="text/css"
      />
      <a
        href="#"
        className="text-[#ECECEC] overflow-y-hidden absolute"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div ref={textRef1} className="text">
          boring text
        </div>
      </a>
      <a
        href="#"
        className="text-[#ECECEC] overflow-y-hidden absolute"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div ref={textRef2} className="text">
          boring text
        </div>
      </a>
    </>
  );
};

export default NavLink;
