import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import twitter from "../../assets/icon/twitter.svg";

export const Footer = () => {
  return (
    <footer>
      <div
        className="
      grid grid-cols-2 
      md:grid-cols-4 gap-x-16
      md:gap-x-8 gap-y-4 justify-items-center
      mt-31.75 max-w-5xl mx-auto px-12
      text-fontPeriwinkle text-sm 
      font-normal"
      >
        <a href="#" className="hover:text-fontWhite">
          About Us
        </a>
        <a href="#" className="hover:text-fontWhite">
          Contact
        </a>
        <a href="#" className="hover:text-fontWhite">
          Terms of Service
        </a>
        <a href="#" className="hover:text-fontWhite">
          Privacy Policy
        </a>
      </div>

      <div className="flex items-center justify-center mt-12 gap-x-11">
        <img src={twitter} alt="twitter" />
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
      </div>

      <div className="flex items-center justify-center mt-12 text-fontPeriwinkle">
        <p className="font-normal text-base/[24px]">
          © 2026 DibiTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
