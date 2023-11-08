import "./Links.css";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Links = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,  
  });

  const iconVariants = {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={iconVariants}
    transition={{ duration: 0.5 }}
   >
    <div className="flex flex-row mt-[10%] sm:px-14 flex-wrap items-center xs:ml-[30%] wra justify-center gap-x-20">
      <a
        target="_blank"
        className="   "
        href="https://github.com/WebMorphers"
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 md:w-52 h-24 md:h-32 links  "
        >
          <path
            fill="currentColor"
            d="M6.368 15.671H3.715a.124.124 0 0 0-.124.124v1.296c0 .069.055.124.124.124H4.75v1.612s-.232.078-.874.078c-.758 0-1.817-.278-1.817-2.604 0-2.328 1.102-2.634 2.137-2.634.896 0 1.282.157 1.527.234.077.024.147-.053.147-.122l.296-1.253a.117.117 0 0 0-.047-.097c-.1-.07-.708-.411-2.245-.411-1.771 0-3.588.753-3.588 4.375s2.079 4.16 3.832 4.16c1.451 0 2.332-.62 2.332-.62.036-.02.04-.07.04-.093v-4.045a.125.125 0 0 0-.124-.124zm13.415-3.344H18.29a.124.124 0 0 0-.124.124v2.886h-2.328v-2.886a.124.124 0 0 0-.123-.124h-1.494a.124.124 0 0 0-.122.124v7.814c0 .069.055.125.122.125h1.494a.124.124 0 0 0 .123-.125v-3.342h2.328l-.005 3.342c0 .069.055.124.122.124h1.494a.122.122 0 0 0 .122-.124l.005-7.815a.122.122 0 0 0-.122-.124zm-11.631.177c-.532 0-.963.435-.963.972s.431.973.963.973.963-.435.963-.973a.967.967 0 0 0-.963-.972zm.857 2.507a.124.124 0 0 0-.122-.125H7.398c-.07 0-.129.07-.129.139v5.168c0 .151.094.197.217.197h1.342c.146 0 .185-.072.185-.2l-.001-1.572-.001-3.607zm16.555-.113h-1.482a.123.123 0 0 0-.122.125v3.831s-.376.277-.912.277c-.534 0-.677-.242-.677-.767v-3.342a.125.125 0 0 0-.123-.125h-1.503a.123.123 0 0 0-.123.125v3.595c0 1.555.866 1.935 2.057 1.935.977 0 1.767-.54 1.767-.54s.037.284.055.317c.016.034.06.068.108.068h.952a.124.124 0 0 0 .123-.125l.004-5.25a.13.13 0 0 0-.126-.124zm4.058-.176c-.842 0-1.414.376-1.414.376v-2.646a.124.124 0 0 0-.122-.124h-1.499a.124.124 0 0 0-.122.124l-.004 7.815c0 .069.056.124.123.124h1.044c.046 0 .081-.024.108-.066s.063-.361.063-.361.611.581 1.771.581c1.362 0 2.142-.691 2.142-3.101 0-2.407-1.247-2.722-2.089-2.722zm-.584 4.404c-.514-.016-.862-.249-.862-.249v-2.476s.344-.211.767-.249c.534-.047 1.05.114 1.05 1.387-.003 1.342-.235 1.607-.954 1.586zm-15.714-.029c-.066 0-.233.026-.405.026-.549 0-.737-.256-.737-.587v-2.198h1.121a.123.123 0 0 0 .123-.125v-1.204a.123.123 0 0 0-.123-.125h-1.121l-.002-1.48c0-.056-.03-.084-.094-.084H10.56c-.059 0-.092.026-.092.083v1.529s-.765.185-.817.2-.088.063-.088.119v.962c0 .069.056.125.123.125h.782v2.312c0 1.717 1.205 1.886 2.018 1.886.371 0 .815-.121.889-.147.045-.016.07-.062.07-.111l.001-1.057a.126.126 0 0 0-.122-.125z"
          ></path>
        </svg>{" "}
      </a>
      <a
        target="_blank"
        className="  "
        href="https://www.linkedin.com/company/webmorphers/about/?viewAsMember=true"
      >
        <svg
          width="150"
          height="150"
          fill="currentColor"
          viewBox="1.786 -104.027 287.865 287.865"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 md:w-52 h-28 md:h-36 links  "
        >
          <path d="M213.882 7.245c0-3.015 2.508-5.462 5.6-5.462h64.568c3.093 0 5.6 2.447 5.6 5.462V72.57c0 3.016-2.507 5.461-5.6 5.461h-64.568c-3.092 0-5.6-2.445-5.6-5.46V7.244zM1.785 65.652h31.62V55.27H13.23V15.665H1.785v49.987zm47.629 0v-34.43H37.97v34.43h11.444zm-5.721-39.13c3.99 0 6.474-2.644 6.474-5.95-.074-3.378-2.484-5.947-6.398-5.947-3.915 0-6.475 2.57-6.475 5.947 0 3.306 2.484 5.95 6.324 5.95h.075zm11.034 39.13h11.444V46.424c0-1.029.074-2.058.377-2.791.826-2.056 2.709-4.186 5.871-4.186 4.142 0 5.799 3.158 5.799 7.784v18.42H89.66V45.91c0-10.576-5.646-15.497-13.176-15.497-6.173 0-8.884 3.451-10.39 5.802h.077v-4.993H54.727c.151 3.231 0 34.43 0 34.43zm51.078-49.987H94.361v49.987h11.444V54.489l2.86-3.601 8.96 14.764h14.078l-15.056-21.373 13.174-14.54h-13.776s-9.411 13.008-10.24 14.552V15.665z"></path>
          <path d="M162.306 51.29c.151-.884.377-2.58.377-4.498 0-8.9-4.518-17.936-16.413-17.936-12.724 0-18.597 10.063-18.597 19.19 0 11.288 7.153 18.337 19.65 18.337 4.97 0 9.561-.732 13.327-2.275l-1.506-7.558c-3.088 1.024-6.25 1.537-10.164 1.537-5.345 0-10.012-2.195-10.389-6.871l23.715.072v.002zm-23.79-7.742c.301-2.938 2.26-7.273 7.153-7.273 5.194 0 6.4 4.628 6.4 7.273h-13.552zm52.414-27.883v17.304h-.151c-1.657-2.422-5.12-4.038-9.71-4.038-8.81 0-16.564 7.05-16.49 19.094 0 11.164 7.003 18.435 15.735 18.435 4.744 0 9.26-2.058 11.52-6.024h.225l.453 5.216h10.163c-.15-2.424-.302-6.61-.302-10.723V15.664h-11.444zm0 34.05c0 .88-.075 1.763-.227 2.495-.675 3.16-3.386 5.361-6.699 5.361-4.742 0-7.83-3.818-7.83-9.84 0-5.654 2.637-10.208 7.906-10.208 3.538 0 6.022 2.423 6.7 5.433.15.663.15 1.398.15 2.058v4.7z"></path>
          <path
            d="M236.85 65.61V31.18h-11.444v34.43h11.445zm-5.72-39.13c3.99 0 6.474-2.644 6.474-5.948-.075-3.379-2.484-5.949-6.398-5.949-3.917 0-6.475 2.57-6.475 5.949 0 3.304 2.483 5.948 6.324 5.948h.074zm12.054 39.13h11.443V46.385c0-1.028.075-2.058.377-2.792.827-2.057 2.71-4.186 5.872-4.186 4.14 0 5.797 3.157 5.797 7.786V65.61h11.443V45.869c0-10.575-5.645-15.496-13.174-15.496-6.173 0-8.884 3.45-10.39 5.8h.076v-4.992h-11.443c.149 3.23-.001 34.43-.001 34.43z"
            fill="#fff"
          ></path>
        </svg>
      </a>
      <a
        target="_blank"
        className=  "  "
        href="https://www.fiverr.com/s/VPpBqV"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-28 md:w-52 h-24 md:h-28 links  "
        >
          <path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z"></path>
        </svg>
      </a>
    </div>
    </motion.div>
  );
};

export default Links;
