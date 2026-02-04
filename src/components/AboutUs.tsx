import { ImageWithFallback } from "./ImageWithFallback";
import about from "../assets/pictures/about.jpeg";
import cocktail from "../assets/pictures/cocktail2.webp";

const AboutUs = () => {
  return (
    <div className="bg-[#152e32] text-white font-sans">
      {/* SECTION 1: HEADER (Full Hero style) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={about}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[0.9] tracking-tighter">
            About <br /> Kandelaki
          </h1>
        </div>
      </section>

      {/* SECTION 2: CENTERED TEXT BLOCK (Tight) */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto border-[5px] border-white/10 p-12 md:p-20 text-center">
          <h2 className="text-[#7a000a] text-3xl md:text-4xl font-bold mb-8 uppercase tracking-widest">
            The Bar
          </h2>
          <div className="space-y-6 text-xl md:text-2xl font-light text-white/90 leading-snug">
            <p>
              HP Kandelaki is a straightforward spot for premium hookah and
              proper cocktails. No gimmicks, just a solid atmosphere for those
              who know what they're looking for.
            </p>
            <p>
              Located in the center of the city, we focus on high-end product
              and a space designed for real use.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPLIT CONTENT (Typo matched to Hero) */}
      <section className="py-24 bg-black/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] uppercase tracking-tight">
                Quality <br /> Focus
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light mb-10 leading-relaxed max-w-md">
                We handle the details so you don't have to. From the tobacco to
                the ice in your glass, everything is selected for a specific
                reason.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#contact"
                  className="px-10 py-4 bg-[#7a000a] text-white font-bold uppercase tracking-widest hover:bg-[#8e000c] transition-all text-center"
                >
                  Reserve a Table
                </a>
              </div>
            </div>
            <div className="border-[5px] border-white/5">
              <ImageWithFallback
                src={cocktail}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CONTACT (Simple Grid) */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 tracking-tighter">
            Reservations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-xl font-bold">
            <div className="p-8 border-[5px] border-white/5">
              <p className="text-[#7a000a] uppercase text-sm mb-2">Call Us</p>
              <p>(+995) 596 844 884</p>
            </div>
            <div className="p-8 border-[5px] border-white/5">
              <p className="text-[#7a000a] uppercase text-sm mb-2">Location</p>
              <p>Tbilisi, Georgia</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
