import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "../utils/theme-switch";
import { Image } from "@nextui-org/react";

export const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const handleMenuItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
    setActiveSection(href); 
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "#home";

      menuItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement;
        if (section) {
          const sectionTop = section.offsetTop - 100; 
          const sectionHeight = section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = item.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="shadow-md h-20 bg-blue-800">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-white"
          />
          
          <NavbarBrand>
            <Image
              src="/images/logo/kramatas_logo.png"
              alt="Kramatas"
              className="w-16 rounded-sm me-2"
              style={{maxWidth: 'max-content'}}
            />
            <div>
            <p className="hollow-splice-text text-xl" data-text="KRAMATAS">KRAMATAS</p>
           {/*  <p className="text-sm">IT Solutions &amp; Services</p> */}
            </div>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={`${item.name}-${index}`} className="px-1">
              <Link
                className={`w-full text-white hover:text-blue-500 ${
                  activeSection === item.href ? "border-b-2 border-blue-600" : ""
                }`}
                href={item.href}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="xs:w-20">
          <NavbarItem className="lg:flex">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="top-[80px]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href={item.href}
                onClick={(e) => handleMenuItemClick(e, item.href)}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};
