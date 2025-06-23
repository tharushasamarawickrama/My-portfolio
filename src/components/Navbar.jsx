import logo from "../assets/TTVLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si"; // <-- Add this import

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-15" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/tharusha-samarawickrama-278069257/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/tharushasamarawickrama"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.hackerrank.com/profile/tharusha_T_T_V"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHackerrank />
        </a>
        
        
      </div>
    </nav>
  );
};

export default Navbar;