import "./footer.css";

const Footer = () => {
  const email = "WebMorphers@gmail.com";
  return (
    <div className="bg-black text-white py-4 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between">
      <div className="flex gap-8 mb-4 md:mb-0">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/webmorphers/about/"
          className="text-xl"
        >
          <i
            className="fab fa-linkedin-in fa-beat"
            style={{ color: "#ffffff", width: "17px", height: "17px" }}
          ></i>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/WebMorphers"
          className="text-xl"
        >
          <i
            className="fa-brands fa-x-twitter fa-beat"
            style={{ color: "#ffffff", width: "17px", height: "17px" }}
          ></i>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/webmorphers/"
          className="text-xl"
        >
          <i
            className="fa-brands fa-instagram fa-beat"
            style={{ color: "#ffffff", width: "17px", height: "17px" }}
          ></i>
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
        <a className="text-xl hover:text-yellow-400" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </div>
  );
};

export default Footer;
