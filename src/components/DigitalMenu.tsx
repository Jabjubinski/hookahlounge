import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Expanded Data
const menuData = {
  hookah: [
    {
      name: "Love 66",
      price: "45 GEL",
      type: "Fruity",
      desc: "Watermelon, melon, and passion fruit.",
    },
    {
      name: "Lady Killer",
      price: "45 GEL",
      type: "Fruity",
      desc: "Mango, melon, and mixed berries.",
    },
    {
      name: "Cane Mint",
      price: "55 GEL",
      type: "Minty",
      desc: "The strongest, coldest mint leaf available.",
    },
    {
      name: "Supernova",
      price: "50 GEL",
      type: "Minty",
      desc: "Pure menthol chill for mixing or solo.",
    },
    {
      name: "Darkside Cookie",
      price: "55 GEL",
      type: "Dessert",
      desc: "Chocolate chip cookie dough richness.",
    },
  ],
  // ... cocktails and food
};

export function DigitalMenu() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("hookah");
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique filters based on the current tab
  const filters = [
    "All",
    ...new Set(menuData[activeTab].map((item) => item.type)),
  ];

  const filteredItems =
    activeFilter === "All"
      ? menuData[activeTab]
      : menuData[activeTab].filter((item) => item.type === activeFilter);

  return (
    <section className="min-h-screen pt-32 pb-20 bg-[#0f2428] text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">Selection</h2>

        {/* Main Categories */}
        <div className="flex justify-center gap-8 border-b border-white/10 mb-8">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map(
            (tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setActiveFilter("All");
                }}
                className={`pb-4 px-2 capitalize transition-all ${activeTab === tab ? "text-[#7a000a] border-b-2 border-[#7a000a]" : "text-white/40"}`}
              >
                {tab}
              </button>
            ),
          )}
        </div>

        {/* Sub-Filters (Flavor Profiles) */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-full text-sm border transition-all ${
                activeFilter === filter
                  ? "bg-white text-[#0f2428]"
                  : "border-white/20 text-white/60"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-between items-end border-b border-white/5 pb-4 group"
              >
                <div>
                  <h3 className="text-xl font-medium group-hover:text-[#7a000a] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm">{item.desc}</p>
                </div>
                <span className="font-mono text-[#7a000a]">{item.price}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
