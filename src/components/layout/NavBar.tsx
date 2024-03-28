import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import NavLink from "../ui/NavLink";

export type LinkType = {
  url: string;
  text: string;
};

const links: LinkType[] = [
  { url: "/", text: "Home" },
  { url: "/about", text: "About" },
  { url: "/portfolio", text: "Portfolio" },
  { url: "/contact", text: "Contact" },
];

const NavBar = (): JSX.Element => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen((prev) => !prev);
  };

  return (
    <div className=" flex h-full items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* Navigation Link List */}
      <div className="hidden gap-4  text-lg md:flex xl:w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.url} />
        ))}
      </div>
      {/* LOGO */}
      <div className="flex md:hidden  lg:flex xl:w-1/3 xl:justify-center ">
        <Link
          href="/"
          className="flex  items-center justify-center rounded-md bg-slate-800 p-1.5 text-sm  font-semibold text-slate-800 "
        >
          <span className="mx-2 text-white">Lama</span>
          <span className="flex h-8 w-12 items-center justify-center rounded-md bg-white">
            .dev
          </span>
        </Link>
      </div>
      {/* Social Media Icons */}

      <div className="hidden justify-center gap-4 text-white md:flex xl:w-1/3">
        <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
      </div>
      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          className=" z-50 flex h-8 w-10 flex-col justify-between"
          onClick={toggleHamburger}
        >
          <div className="h-1 w-10 rounded bg-white"></div>
          <div className="h-1 w-10 rounded bg-white"></div>
          <div className="h-1 w-10 rounded bg-white"></div>
        </button>
        {/* Hamburger Menu Opened Content */}
        {isHamburgerOpen && (
          <div className="absolute left-0 top-0 flex h-screen  w-screen flex-col items-center justify-center gap-8 bg-slate-800 text-4xl text-white">
            {links.map((link) => (
              <Link href={link.url} key={link.url}>
                {link.text}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
