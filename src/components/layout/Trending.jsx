import Assistant from "../../assets/img/Assistant.png";
import Generator from "../../assets/img/Generator.png";
import Analysis from "../../assets/img/Analysis.png";
import Support from "../../assets/img/Support.png";

export const Trending = () => {
  return (
    <section
      className="
    flex flex-col 
    justify-start 
    mx-12 md:items-center 
    md:justify-center "
    >
      <div className="w-232 h-7 mt-5">
        <h2 className="font-bold text-[22px]/[28px] tracking-normal">
          Trending
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
        <article className="snap-start shrink-0 w-55.75">
          <img src={Assistant} alt="assistant" />
          <h3 className="font-medium text-base/6 tracking-normal">
            AI Writing Assistant
          </h3>
          <p className="font-normal text-sm/[21px] tracking-normal text-fontPeriwinkle">
            Generate high-quality content effortlessly with this AI writing
            assistant.
          </p>
        </article>

        <article className="snap-start shrink-0 w-55.75">
          <img src={Generator} alt="generator" />
          <h3 className="font-medium text-base/6 tracking-normal ">
            AI Image Generator
          </h3>
          <p className="font-normal text-sm/[21px] tracking-normal text-fontPeriwinkle">
            Create stunning visuals with the power of AI image generation.
          </p>
        </article>

        <article className="snap-start shrink-0 w-55.75">
          <img src={Analysis} alt="analysis" />
          <h3 className="font-medium text-base/6 tracking-normal ">
            AI Data Analysis Tool
          </h3>
          <p className="font-normal text-sm/[21px] tracking-normal text-fontPeriwinkle">
            Analyze complex data sets and gain valuable insights with this AI
            tool.
          </p>
        </article>

        <article className="snap-start shrink-0 w-55.75">
          <img src={Support} alt="suport" />
          <h3 className="font-medium text-base/6 tracking-normal ">
            AI Customer Support
          </h3>
          <p className="font-normal text-sm/[21px] tracking-normal text-fontPeriwinkle">
            Enhance your customer service with AI-powered support solutions.
          </p>
        </article>
      </div>
    </section>
  );
};
