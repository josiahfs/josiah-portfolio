import React from "react";

const NavMenu: React.FC<NavMenuProps> = ({ links }) => {
  return (
    <section className="fixed left-0 top-0 w-screen h-screen bg-[#0B0B0B]">
      <div className="flex justify-center items-center h-screen px-[100px] py-[60px]">
        <div className="h-screen w-screen absolute left-0 top-0 backdrop-blur-[15px] opacity-0"></div>
        <nav className="relative z-1 text-center">
          <ul className="list-none">
            <li className="overflow-hidden">
              <a
                href="javascript:void(0)"
                className="text-5xl uppercase font-bold inline-block leading-tight tracking-widest text-transparent -webkit-text-stroke-2 text-white no-underline"
              >
                <span data-clip="Home" className="relative block">
                  Home
                </span>
              </a>
            </li>
            <li className="overflow-hidden">
              <a
                href="javascript:void(0)"
                className="text-5xl uppercase font-bold inline-block leading-tight tracking-widest text-transparent -webkit-text-stroke-2 text-white no-underline"
              >
                <span data-clip="About" className="relative block">
                  About
                </span>
              </a>
            </li>
            <li className="overflow-hidden">
              <a
                href="javascript:void(0)"
                className="text-5xl uppercase font-bold inline-block leading-tight tracking-widest text-transparent -webkit-text-stroke-2 text-white no-underline"
              >
                <span data-clip="Work" className="relative block">
                  Work
                </span>
              </a>
            </li>
            <li className="overflow-hidden">
              <a
                href="javascript:void(0)"
                className="text-5xl uppercase font-bold inline-block leading-tight tracking-widest text-transparent -webkit-text-stroke-2 text-white no-underline"
              >
                <span data-clip="Contact" className="relative block">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NavMenu;
