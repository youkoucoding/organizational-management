import { FooterLink } from "components/footer/Links";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="sticky bg-gray-400 shadow-lg dark:bg-dark-700 bottom-0 block py-3 rounded-t-sm">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text- font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}
              <a
                href="/"
                className="text-dark-700 dark:text-light-300 hover:text-dark-300 dark:hover:text-light-500 text-sm font-semibold p-1"
              >
                Organizational Management
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4 mt-2 md:mt-0">
            <ul className="flex flex-wrap list-none md:justify-end justify-center">
              <li>
                <FooterLink onClick={() => alert("Thank you")}>
                  <FaGithub size={20} />
                </FooterLink>
              </li>
              <li>
                <FooterLink onClick={() => alert("Thank you")}>
                  <FaTwitter size={20} />
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
