import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { shopItems, type ShopItem } from "@/data/artworks";

type SortMode = "views" | "date-new" | "date-old";

const Shop = () => {
  const navigate = useNavigate();
  const [sortMode, setSortMode] = useState<SortMode>("views");

  const tops = useMemo(() => {
    const items = shopItems.filter((i) => i.type === "top");
    return sortItems(items, sortMode);
  }, [sortMode]);

  const paintings = useMemo(() => {
    const items = shopItems.filter((i) => i.type === "painting");
    return sortItems(items, sortMode);
  }, [sortMode]);

  const handleItemClick = (item: ShopItem) => {
    if (item.externalUrl) {
      window.open(item.externalUrl, "_blank", "noopener,noreferrer");
    } else {
      navigate(`/contact?onderwerp=${encodeURIComponent(`Interesse in: ${item.title}`)}`);
    }
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h1 className="text-4xl font-bold tracking-tight leading-tight">Shop</h1>
          <div className="flex items-center gap-2">
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Sort by</label>
            <select
              value={sortMode}
              onChange={(e) => setSortMode(e.target.value as SortMode)}
              className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value="views">Most viewed</option>
              <option value="date-new">Newest first</option>
              <option value="date-old">Oldest first</option>
            </select>
          </div>
        </div>

        {/* Stropdas topjes */}
        <h2 className="text-2xl font-bold mb-4">NeckTie Tops</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {tops.map((item) => (
            <ShopCard 
              key={item.id} 
              item={item} 
              onClick={() => handleItemClick(item)} 
              ctaLabel={item.externalUrl ? "Buy via Vinted" : "Contact"} 
            />
          ))}
        </div>

        {/* Schilderijen */}
        <h2 className="text-2xl font-bold mb-4">Paintings</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paintings.map((item) => (
            <ShopCard key={item.id} item={item} onClick={() => handleItemClick(item)} ctaLabel={item.externalUrl ? "Buy via Vinted" : "Contact"} />
          ))}
        </div>
      </section>
    </main>
  );
};

const ShopCard = ({ item, onClick, ctaLabel }: { item: ShopItem; onClick: () => void; ctaLabel: string }) => (
  <div className="group cursor-pointer" onClick={onClick}>
    <div className="relative overflow-hidden rounded-2xl">
      {item.image.match(/\.(mp4|webm|mov)/i) ? (
        <video
          src={item.image}
          loop
          muted
          playsInline
          onMouseOver={(e) => (e.currentTarget as HTMLVideoElement).play()}
          onMouseOut={(e) => {
            const v = e.currentTarget as HTMLVideoElement;
            v.pause();
            v.currentTime = 0;
          }}
          className="object-cover aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <img
          src={item.image}
          alt={`${item.title} — PLACEHOLDER: vervang door echte afbeelding`}
          className="object-cover aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-105"
        />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-4 pt-12">
        <p className="text-sm font-bold text-background">{item.title}</p>
        <p className="text-xs text-background/80">€{item.price.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
      </div>
    </div>
    <button className="mt-3 w-full rounded-lg bg-primary py-2 text-sm font-bold text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200">
      {ctaLabel}
    </button>
  </div>
);

function sortItems(items: ShopItem[], mode: SortMode): ShopItem[] {
  switch (mode) {
    case "views":
      return [...items].sort((a, b) => b.views - a.views);
    case "date-new":
      return [...items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    case "date-old":
      return [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
}

export default Shop;
