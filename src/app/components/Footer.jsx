import React from "react";
const footerLinks = [
  {
    name: "All rights reserved",
    href: "/",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    name: "Cookie Policy",
    href: "/cookie-policy",
  },
  {
    name: "Contact Us",
    href: "/contact-us",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          {
            // iterating over all the links in the footerLinks array
            footerLinks.map((link, index) => (
              <a href={link.href} key={index}>
                {link.name}

                {
                  // checking if the current link is the last link in the array
                  // so I don't have to put the |
                  index < footerLinks.length - 1 ? " | " : ""
                }
              </a>
            ))
          }
        </div>

        <div className="social-links">
          <a href="https://www.instagram.com/too_smooth.ww/">Instagram</a>
          {" | "}<a href="https://za.linkedin.com/in/belo-adrien">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
