import React from "react";

function NavBar() {
  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
  ];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
