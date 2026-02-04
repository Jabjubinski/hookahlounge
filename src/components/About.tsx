import { ImageWithFallback } from "./ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#132d32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[500px] overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662468527222-e4edb1cda938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29rYWglMjBzbW9rZSUyMGRhcmt8ZW58MXx8fHwxNzcwMjA0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hookah smoke"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#132e34]/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to{" "}
              <span className="text-[#7a000a]">HP Kandelaki Lounge</span>
            </h2>
            <p className="text-lg  mb-4">
              Step into a world where tradition meets sophistication. HP
              Kandelaki Lounge offers an unparalleled hookah experience in an
              atmosphere of refined elegance.
            </p>
            <p className="text-lg  mb-6">
              Our expert staff curates premium flavors from around the world,
              paired with craft cocktails and an ambiance that transforms every
              visit into a memorable evening.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#7a000a]">50+</div>
                <div className="text-sm text-white/80">Premium Flavors</div>
              </div>
              <div className="text-center text-white/80">
                <div className="text-3xl font-bold text-[#7a000a]">10+</div>
                <div className="text-sm ">Years Experience</div>
              </div>
              <div className="text-center text-white/80">
                <div className="text-3xl font-bold text-[#7a000a]">VIP</div>
                <div className="text-sm ">Lounge Areas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
