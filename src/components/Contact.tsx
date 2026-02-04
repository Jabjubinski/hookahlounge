import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "123 Lounge Street, Downtown",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Sun: 6PM - 2AM",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#7a000a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Visit Us
            </h2>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h3>
                      <p className="text-white/80">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-[#7a000a] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-[#7a000a] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Reserve Your Table
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="time"
                  className="px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white transition-colors">
                  <option className="bg-[#7a000a]">Number of Guests</option>
                  <option className="bg-[#7a000a]">2 Guests</option>
                  <option className="bg-[#7a000a]">4 Guests</option>
                  <option className="bg-[#7a000a]">6 Guests</option>
                  <option className="bg-[#7a000a]">8+ Guests</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-[#7a000a] hover:bg-white/90 transition-all duration-300 font-semibold"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © 2026 HP Kandelaki Lounge Bar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
