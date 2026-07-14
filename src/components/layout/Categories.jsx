import imgCategories from "../../assets/img/Categories.png";
import Marketing from "../../assets/img/Marketing.png";
import Code from "../../assets/img/Code.png";
import Design from "../../assets/img/Design.png";
import AITools from "../../assets/img/AITools.png";
export const Categories = () => {
  return (
    <div className="flex flex-col justify-start mx-12 md:items-center md:justify-center ">
      <div className="w-232 h-7 mt-5">
        <h2 className="font-bold text-[22px]/[28px] tracking-normal">
          Categories
        </h2>
      </div>

      <div
        className="
    flex
    overflow-x-auto
    overflow-y-hidden
    md:overflow-x-visible
    flex-nowrap
    gap-3
    snap-x
    snap-mandatory
    no-scrollbar py-6 px-6
    md:justify-center
    md:items-center
  "
      >
        <article className="snap-start shrink-0 w-44">
          <img
            src={imgCategories}
            alt="categories"
            className="duration-300 ease-in"
          />
          <h3 className="font-medium text-base/6">Productivity</h3>
          <p className="font-normal text-sm/[21px] text-fontPeriwinkle">
            Boost your efficiency with our productivity tools.
          </p>
        </article>

        <article className="snap-start shrink-0 w-44">
          <img src={Marketing} alt="marketing" />
          <h3 className="font-medium text-base/6">Marketing</h3>
          <p className="font-normal text-sm/[21px] text-fontPeriwinkle">
            Enhance your marketing strategies with AI-driven insights.
          </p>
        </article>

        <article className="snap-start shrink-0 w-44">
          <img src={Code} alt="Code" />
          <h3 className="font-medium text-base/6">Code</h3>
          <p className="font-normal text-sm/[21px] text-fontPeriwinkle">
            Accelerate your coding with intelligent AI assistants.
          </p>
        </article>

        <article className="snap-start shrink-0 w-44">
          <img src={Design} alt="Design" />
          <h3 className="font-medium text-base/6">Design</h3>
          <p className="font-normal text-sm/[21px] text-fontPeriwinkle">
            Unleash your creativity with AI-enhanced design tools.
          </p>
        </article>

        <article className="snap-start shrink-0 w-44">
          <img src={AITools} alt="AI Tools" />
          <h3 className="font-medium text-base/6">AI Tools</h3>
          <p className="font-normal text-sm/[21px] text-fontPeriwinkle">
            Explore a wide range of innovative AI tools for various
            applications.
          </p>
        </article>
      </div>
    </div>
  );
};
