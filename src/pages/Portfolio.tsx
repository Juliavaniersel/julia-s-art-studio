import { useState, useMemo } from "react";
import { artworks, type Artwork } from "@/data/artworks";
import { motion, AnimatePresence } from "framer-motion";

type SortMode = "default" | "year-new" | "year-old" | "available";

const Portfolio = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>("default");

  const sortedArtworks = useMemo(() => {
    let sorted = [...artworks];
    switch (sortMode) {
      case "year-new":
        sorted.sort((a, b) => b.year - a.year);
        break;
      case "year-old":
        sorted.sort((a, b) => a.year - b.year);
        break;
      case "available":
        sorted.sort((a, b) => (a.available === b.available ? 0 : a.available ? -1 : 1));
        break;
      case "default":
      default:
        break;
    }
    return sorted;
  }, [sortMode]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight leading-tight">Portfolio</h1>
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Sort by</label>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="default">Default order</option>
              <option value="year-new">Newest first</option>
              <option value="year-old">Oldest first</option>
              <option value="available">Available first</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sortedArtworks.map((art) => (
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
  <div className={`group cursor-pointer ${artwork.isHorizontal ? "md:col-span-2" : ""}`} onClick={onToggle}>
    <div className="relative overflow-hidden rounded-2xl">
      {artwork.image.match(/\.(mp4|webm|mov)/i) ? (
        <video
          src={artwork.image}
          loop
          muted
          playsInline
          onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
          onMouseOut={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
          }}
          className={`object-cover ${artwork.isHorizontal ? "aspect-[3/2] sm:aspect-[16/9]" : "aspect-[3/4]"} w-full transition-all duration-500 group-hover:scale-105 ${
            expanded ? "grayscale-0" : "grayscale-[20%] group-hover:grayscale-0"
          }`}
        />
      ) : (
        <img
          src={artwork.image}
          alt={`${artwork.title} — PLACEHOLDER: vervang door echte afbeelding`}
          className={`object-cover ${artwork.isHorizontal ? "aspect-[3/2] sm:aspect-[16/9]" : "aspect-[3/4]"} w-full transition-all duration-500 group-hover:scale-105 ${
            expanded ? "grayscale-0" : "grayscale-[20%] group-hover:grayscale-0"
          }`}
        />
      )}
      <span
        className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
          artwork.available
            ? "bg-card/80 text-secondary backdrop-blur-sm"
            : "bg-foreground/70 text-background backdrop-blur-sm"
        }`}
      >
        {artwork.available ? "Available" : "Sold"}
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
