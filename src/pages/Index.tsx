import { useState, useEffect } from "react";
import { heroArtwork } from "@/data/artworks";
import BidModal from "@/components/BidModal";
import PortfolioSidebarTab from "@/components/PortfolioSidebarTab";
import BusinessCardSidebar from "@/components/BusinessCardSidebar";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import emailjs from '@emailjs/browser';

const Index = () => {
  const [highestBid, setHighestBid] = useState(100);
  const [bidModalOpen, setBidModalOpen] = useState(false);

  useEffect(() => {
    const fetchHighestBid = async () => {
      try {
        const { data, error } = await supabase
          .from('bids')
          .select('bid_amount')
          .order('bid_amount', { ascending: false })
          .limit(10); // Fetch top 10

        if (!error && data && data.length > 0) {
          // Filter out the old test bid of 1250 so it correctly starts at 100
          const validBids = data.filter((b: any) => b.bid_amount !== 1250);
          if (validBids.length > 0) {
            setHighestBid(Math.max(100, validBids[0].bid_amount));
          } else {
            setHighestBid(100);
          }
        }
      } catch (err) {
        console.error("Error fetching highest bid:", err);
      }
    };

    fetchHighestBid();
  }, []);

  const handleBidSubmit = async (
    newBid: number,
    details: { firstName: string; lastName: string; email: string; address: string; zipCode: string; city: string }
  ) => {
    try {
      const { error } = await supabase
        .from('bids')
        .insert([{
          first_name: details.firstName,
          last_name: details.lastName,
          email: details.email,
          address: details.address,
          zip_code: details.zipCode,
          city: details.city,
          bid_amount: newBid
        }]);

      // Also send email
      try {
        await emailjs.send(
          'service_oigctjm',
          'template_p61vwiz',
          {
            from_name: `${details.firstName} ${details.lastName}`,
            from_email: details.email,
            message: `🎉 Er is een nieuw BOD geplaatst via je website!\n\nNaam: ${details.firstName} ${details.lastName}\nBod bedrag: €${newBid}\nEmailadres: ${details.email}\nAdres: ${details.address}, ${details.zipCode}, ${details.city}`,
            reply_to: details.email,
          },
          'B_1Uk4YFUuPpkAWDz'
        );
      } catch (emailErr) {
        console.error("Email sending failed but saved to DB:", emailErr);
      }

      setHighestBid(newBid);
      toast.success(`Bod van €${newBid.toLocaleString("nl-NL")} geplaatst!`);
    } catch (err) {
      console.error("Error submitting bid:", err);
      toast.error("Failed to place bid. Please try again.");
    }
  };

  return (
    <main className="pt-20 min-h-screen">
      <PortfolioSidebarTab />
      <BusinessCardSidebar />

      {/* "Wat is ze nou weer aan het doen?" Highlight Section */}
      <section className="relative mx-auto max-w-4xl px-6 pt-12 pb-14 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5">
          Actueel • November 2026
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-foreground tracking-tight max-w-3xl mx-auto leading-[1.15]">
          Wat is ze nou weer aan het doen?
        </h1>

        <blockquote className="mt-6 text-lg sm:text-xl font-serif italic text-muted-foreground max-w-2xl mx-auto">
          “Ik heb het nog nooit gedaan, dus ik denk dat ik het wel kan.”
          <span className="block text-sm not-italic font-sans text-foreground/70 mt-1 font-medium">
            — Pippi Langkous
          </span>
        </blockquote>

        <p className="mt-6 text-base sm:text-lg text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
          Op <strong>20 november</strong> geef ik een <strong>croquisavond</strong>, waar ik kunstenaars en beginners samenbreng om een naaktmodel vast te leggen op papier.
        </p>

        <div className="mt-8 flex items-center justify-center">
          <Link
            to="/workshop"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-lg hover:scale-105 transition-all duration-200 text-sm tracking-wide uppercase group"
          >
            <span>Lees meer</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle separator / scroll cue */}
        <div className="mt-14 flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-xs uppercase tracking-widest font-semibold">Uitgelicht kunstwerk &amp; Bieden</span>
          <div className="w-8 h-[1px] bg-border" />
        </div>
      </section>

      {/* Hero Auction Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-8">
        <div className="relative overflow-hidden rounded-2xl">
          {heroArtwork.image.match(/\.(mp4|webm|mov)/i) ? (
            <video
              src={heroArtwork.image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover aspect-[4/5] md:aspect-video pointer-events-none"
            />
          ) : (
            <img
              src={heroArtwork.image}
              alt={`${heroArtwork.title} — PLACEHOLDER: vervang door echte afbeelding`}
              className="w-full object-cover aspect-[4/5] md:aspect-video"
            />
          )}

          {/* Bid card top-left */}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 rounded-xl bg-card/90 backdrop-blur-md p-4 shadow-lg">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
              Current highest bid
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
            Place a bid
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
          <p className="text-base leading-relaxed text-foreground whitespace-pre-line">
            This work explores the tension between the head and the heart.
{"\n\n"}
            By literally setting the head aside, the painting questions what we reveal to the world versus what we carry within. It’s a vulnerable look at what happens when you take off the mask and speak from pure feeling: a small, flickering flame that can be blown out in a second.
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
