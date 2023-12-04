import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn , faXTwitter ,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const email = "WebMorphers@gmail.com";
  return (
    <div className="footeer text-white py-4 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-8 mb-4 md:mb-0">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/webmorphers/about/"
          className="text-xl"
        >
              <FontAwesomeIcon className="iconss" icon={faLinkedinIn} beat  />

        </a>
        <a
          target="_blank"
          href="https://twitter.com/WebMorphers"
          className="text-xl"
        >
          <FontAwesomeIcon className="iconss" icon={faXTwitter} beat  />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/webmorphers/"
          className="text-xl"
        >
          <FontAwesomeIcon className="iconss" icon={faInstagram} beat   />
        </a>
      </div>
      <div className="text-xl text-center md:text-left mb-4 md:mb-0">
        &copy; Copyright 2023
      </div>
      <div className="flex gap-2 items-center">
        <i
          className="far fa-envelope"
          style={{ color: "#ffffff", width: "17px", height: "17px" }}
        ></i>
        <a className="text-xl hover:text-yellow-400" href={`mailto:${email}`} target="_blank">
          {email}
        </a>
      </div>
    </div>
  );
};

export default Footer;
