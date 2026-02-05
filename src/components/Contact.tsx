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
    <section id="contact" className="py-16 md:py-20 bg-[#7a000a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Contact Info & Socials */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 text-center lg:text-left">
                Visit Us
              </h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="shrink-0">
                        <div className="w-10 h-10 bg-white/10 flex items-center justify-center rounded-sm">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
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
            </div>

            {/* Social Media - Centered on mobile, Left on Desktop */}
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-[#7a000a] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 bg-white/10 hover:bg-white hover:text-[#7a000a] text-white flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Reserve Your Table
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 mb-1 ml-1">Date</span>
                  <input
                    type="date"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/60 mb-1 ml-1">Time</span>
                  <input
                    type="time"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <select
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "1.5em",
                  }}
                >
                  <option className="bg-[#7a000a]">Number of Guests</option>
                  <option value="2" className="bg-[#7a000a]">
                    2 Guests
                  </option>
                  <option value="4" className="bg-[#7a000a]">
                    4 Guests
                  </option>
                  <option value="6" className="bg-[#7a000a]">
                    6 Guests
                  </option>
                  <option value="8" className="bg-[#7a000a]">
                    8+ Guests
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-8 py-4 bg-white text-[#7a000a] hover:bg-gray-100 active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-wider text-sm"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © 2026 HP Kandelaki Lounge Bar. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
