import { ImageWithFallback } from "./ImageWithFallback";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1704383014662-b6b1799d1bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAyMDQ0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Luxury bar interior",
    },
    {
      src: "https://images.unsplash.com/photo-1635547821500-77542481940c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29rYWglMjBzaGlzaGElMjBzbW9rZXxlbnwxfHx8fDE3NzAyMDQ0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Hookah shisha smoke",
    },
    {
      src: "https://images.unsplash.com/photo-1720750165999-5161fff95267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb3VuZ2UlMjBzZWF0aW5nfGVufDF8fHx8MTc3MDIwNDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Modern lounge seating",
    },
    {
      src: "https://images.unsplash.com/photo-1650691960684-c15e3e2d5c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMGRyaW5rc3xlbnwxfHx8fDE3NzAxODA4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Cocktail bar drinks",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#132e34] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into the{" "}
            <span className="text-[#7a000a]">HP Kandelaki experience</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-80 overflow-hidden group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132e34]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
