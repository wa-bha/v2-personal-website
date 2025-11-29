"use client";

import { useEffect, MouseEvent } from "react";
import Link from "next/link";

const navItems = [
  { path: "#", name: "bhavit" },
  { path: "#experience", name: "experience" },
  { path: "#bio", name: "bio" }
];

const Navbar = () => {
  useEffect(() => {
    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href")?.substring(1);
      if (targetId === "") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 64;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    const navLinks = document.querySelectorAll<HTMLAnchorElement>("#nav-bar a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleScroll as unknown as EventListener);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleScroll as unknown as EventListener);
      });
    };
  }, []);

  return (
    <nav
      id="nav-bar"
      className="from-floral-white fixed top-0 right-0 bottom-auto left-0 z-10 h-14 bg-linear-to-b shadow-md"
    >
      <div className="m-auto flex h-full max-w-[90%] items-center px-5">
        <div className="flex flex-row space-x-4 pr-10">
          {navItems.map(({ path, name }) => (
            <Link key={path} href={path} scroll={false}>
              <span className="slide-in-underline after:bg-tomato flex align-middle font-medium">
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
