import { useState } from "react";
import { artworks, type Artwork } from "@/data/artworks";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-8">Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artworks.map((art) => (
            <ArtworkCard
              key={art.id}
              artwork={art}
              expanded={expandedId === art.id}
              onToggle={() => toggleExpand(art.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

const ArtworkCard = ({
  artwork,
  expanded,
  onToggle,
}: {
  artwork: Artwork;
  expanded: boolean;
  onToggle: () => void;
}) => (
  <div className="group cursor-pointer" onClick={onToggle}>
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src={artwork.image}
        alt={`${artwork.title} — PLACEHOLDER: vervang door echte afbeelding`}
        className={`object-cover aspect-[3/4] w-full transition-all duration-500 group-hover:scale-105 ${
          expanded ? "grayscale-0" : "grayscale-[20%] group-hover:grayscale-0"
        }`}
      />
      <span
        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
          artwork.available
            ? "bg-card/80 text-secondary backdrop-blur-sm"
            : "bg-foreground/70 text-background backdrop-blur-sm"
        }`}
      >
        {artwork.available ? "Beschikbaar" : "Onbeschikbaar"}
      </span>
    </div>

    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden"
        >
          <div className="mt-4 flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
            <p className="text-sm font-bold tabular-nums">{artwork.title}</p>
            <p className="text-sm text-muted-foreground tabular-nums">{artwork.material}</p>
            <p className="text-sm text-muted-foreground tabular-nums">{artwork.year}</p>
            <p className="text-sm text-muted-foreground tabular-nums">Julia van Iersel</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export default Portfolio;
