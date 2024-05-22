import React from "react";
import { socialprofils } from "../../content_option";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Socialicons = () => {
  return (
    <div className="social-icons">
      <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a
        href={socialprofils.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Socialicons;
