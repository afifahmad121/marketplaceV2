import background from "../../assets/img/background-Hero.png";
import { Categories } from "./Categories";
import { FeaturedProduct } from "./FeaturedProduct";
import { Trending } from "./Trending";
export const Hero = () => {
  return (
    <main>
      <section className="mt-9 mx-12">
        {/* Div utama yang memuat gambar sebagai background */}
        <div
          className="w-full max-w-232 h-120 min-h-120 mx-auto bg-cover bg-center rounded-xl relative flex flex-col items-center justify-center overflow-hidden px-6"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* Overlay Gelap agar teks mudah dibaca (Gradasi hitam) */}
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/40"></div>

          {/* Konten Teks (Wajib diberi 'relative' dan z-10 agar berada di atas overlay) */}
          <div className="relative z-10 text-center max-w-2xl px-6 text-white">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Discover the Future of Work with AI
            </h1>
            <h3 className=" text-[0.66rem]/[15px] text-fontWhite font-bold tracking-normal md:text-base md:leading-6 ">
              Explore a curated marketplace of AI-powered tools designed to
              transform your workflow and unlock new possibilities.
            </h3>
          </div>
        </div>
      </section>
      <div>
        <Categories />
      </div>
      <div>
        <FeaturedProduct />
      </div>
      <div>
        <Trending />
      </div>
    </main>
  );
};
