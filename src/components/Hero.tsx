import { ImageWithFallback } from "./ImageWithFallback";
import cocktail from "../assets/pictures/cocktail.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-dvh flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={cocktail}
          alt="Hookah Lounge Interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-10 border-[#152e32] w-[95%] h-[85%] md:h-[80%] border-[5px] flex justify-end relative">
        <div className="hidden lg:flex bg-[#7a000a] absolute -bottom-10 left-10 flex-col w-80 h-64 text-3xl p-8 justify-center items-start shadow-2xl z-20">
          <div className="flex flex-col gap-y-2 text-white font-serif italic">
            <span>Great Hookah,</span>
            <span>Great People,</span>
            <span>Great Food</span>
          </div>
        </div>

        <div className="relative z-10 w-full md:w-[60%] h-full flex flex-col justify-center text-left bg-[#152e32]/85 backdrop-blur-sm px-8 md:px-16 lg:px-24">
          <span className="uppercase text-white/70 text-sm font-mono tracking-widest mb-4">
            Join us
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            HP KANDELAKI <br /> BAR & <br />
            <span className="text-white/80">HOOKAH LOUNGE</span>
          </h1>

          <div className="space-y-2 mb-10">
            <p className="text-lg md:text-xl text-white/90 font-light tracking-wide">
              Premium Hookah • Craft Cocktails • Refined Atmosphere
            </p>
            <p className="text-[#7a000a] font-bold text-xl md:text-2xl">
              (+995) 596 844 884
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <a
              href="#contact"
              className="px-10 py-4 bg-[#7a000a] text-white font-semibold hover:bg-[#8e000c] transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              Reserve Your Table
            </a>
            <a
              href="#services"
              className="px-10 py-4 bg-transparent border border-white/50 text-white hover:bg-white hover:text-[#152e32] transition-all duration-300"
            >
              Explore Menu
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
