import Fetured from "../../assets/img/Featured.png";
import { Button } from "../shared/Button";

export const FeaturedProduct = () => {
  return (
    <section className=" flex flex-col justify-start mx-12  md:justify-center md:items-center">
      <div className="w-232 h-7 mt-5 mb-3 ">
        <h2 className="font-bold text-[22px]/[28px] tracking-normal">
          Featured Product
        </h2>
      </div>

      <div
        id="featured-componen"
        className=" flex items-center gap-3 md:gap-4 md:mr-41  "
      >
        <img src={Fetured} alt="featured" className="w-44 h-64 md:w-102.5" />
        <div className="mt-2">
          <h3 className="font-bold w-42 h-5.75 text-lg/[23px] tracking-normal md:mb-1">
            Top Rated AI Tool
          </h3>
          <p className="font-normal w-45.5 h-36 text-base/[24px] text-fontPeriwinkle md:w-86 md:h-18 md:mb-4">
            Revolutionize your workflow with this highly-rated AI tool.
            Experience unparalleled efficiency and innovation.
          </p>
          <div className="mb-8 md:mb-10">
            <Button title="Learn More" />
          </div>
        </div>
      </div>
    </section>
  );
};
