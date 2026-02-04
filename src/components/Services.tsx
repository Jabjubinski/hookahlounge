import { Sparkles, Wine, Users, Music } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Premium Hookah',
      description: 'Hand-selected tobacco blends and exotic flavors from around the world, prepared by our expert staff.',
    },
    {
      icon: Wine,
      title: 'Craft Cocktails',
      description: 'Signature drinks and classic cocktails crafted by our talented mixologists using premium spirits.',
    },
    {
      icon: Users,
      title: 'VIP Experience',
      description: 'Private lounge areas with bottle service, perfect for intimate gatherings and celebrations.',
    },
    {
      icon: Music,
      title: 'Live Entertainment',
      description: 'Curated music selection and live DJ performances every weekend to enhance your experience.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#132e34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/80">
            Everything you need for an unforgettable evening
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 hover:bg-[#7a000a]/20 transition-all duration-300 border border-white/10"
              >
                <div className="mb-4">
                  <Icon className="w-12 h-12 text-[#7a000a]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
