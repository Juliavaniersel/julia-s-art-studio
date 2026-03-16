import { useState } from "react";
import { heroArtwork } from "@/data/artworks";
import BidModal from "@/components/BidModal";
import PortfolioSidebarTab from "@/components/PortfolioSidebarTab";
import { toast } from "sonner";

const Index = () => {
  const [highestBid, setHighestBid] = useState(1250);
  const [bidModalOpen, setBidModalOpen] = useState(false);

  const handleBidSubmit = (
    newBid: number,
    details: { firstName: string; lastName: string; email: string; city: string }
  ) => {
    setHighestBid(newBid);
    toast.success(`Bod van €${newBid.toLocaleString("nl-NL")} geplaatst!`);

    // TODO: Send email via EmailJS to vanierseljulia@gmail.com
    console.log("Bid submitted:", { newBid, ...details });
  };

  return (
    <main className="pt-20 min-h-screen">
      <PortfolioSidebarTab />

      {/* Hero Auction Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-8">
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={heroArtwork.image}
            alt={`${heroArtwork.title} — PLACEHOLDER: vervang door echte afbeelding`}
            className="w-full object-cover aspect-[4/5] md:aspect-video"
          />

          {/* Bid card top-left */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 rounded-xl bg-card/90 backdrop-blur-md p-4 shadow-lg">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Huidig hoogste bod
            </p>
            <p className="text-2xl md:text-3xl font-bold text-foreground mt-1">
              €{highestBid.toLocaleString("nl-NL")}
            </p>
          </div>

          {/* Bieden button bottom-right */}
          <button
            onClick={() => setBidModalOpen(true)}
            className="absolute bottom-4 right-4 md:bottom-6 md:right-6 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Bieden
          </button>
        </div>

        {/* Museum Specs */}
        <div className="mt-8 max-w-[200px] flex flex-col gap-1 border-l-2 border-primary/20 pl-4">
          <p className="text-sm font-bold tabular-nums">{heroArtwork.title}</p>
          <p className="text-sm text-muted-foreground tabular-nums">{heroArtwork.material}</p>
          <p className="text-sm text-muted-foreground tabular-nums">{heroArtwork.year}</p>
        </div>

        {/* Context paragraph */}
        <div className="mt-6 max-w-[65ch]">
          <p className="text-base leading-relaxed text-foreground">
            Dit werk onderzoekt de spanning tussen vergankelijkheid en blijvende schoonheid. 
            De warme aardetinten en expressieve penseelstreken nodigen de kijker uit om hun eigen 
            verhaal in het doek te ontdekken — precies waar Julia's kunst om draait.
          </p>
          <p className="mt-2 text-xs text-muted-foreground italic">
            ⚠ PLACEHOLDER TEKST — vervang door de echte beschrijving van het werk.
          </p>
        </div>
      </section>

      <BidModal
        open={bidModalOpen}
        onClose={() => setBidModalOpen(false)}
        currentBid={highestBid}
        onBidSubmit={handleBidSubmit}
      />
    </main>
  );
};

export default Index;
