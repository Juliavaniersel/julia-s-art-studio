import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import posterImage from "@/assets/nude-live-painting-workshop.png";

const Workshop = () => {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Back navigation */}
        <Link
          to="/"
          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
          Terug naar home
        </Link>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Poster image column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full overflow-hidden rounded-2xl shadow-2xl bg-black border border-primary/20">
              <img
                src={posterImage}
                alt="Nude Live Painting Workshop poster — 20 November TG Spaces Amsterdam"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Details & Info column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit text-xs font-bold tracking-widest uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Evenement • 20 November
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-tight mb-4">
              Nude Live Painting Workshop
            </h1>

            <blockquote className="border-l-2 border-primary pl-4 my-2 text-muted-foreground italic text-lg font-serif">
              “Ik heb het nog nooit gedaan, dus ik denk dat ik het wel kan.”
              <span className="block text-sm not-italic font-sans mt-1 text-foreground/80 font-medium">
                — Pippi Langkous
              </span>
            </blockquote>

            <div className="mt-6 space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed font-light">
              <p>
                Op <strong>20 november</strong> organiseer ik een speciale croquisavond in Amsterdam, waar ik kunstenaars en beginners samenbreng om een naaktmodel vast te leggen op papier.
              </p>
              <p>
                Of je nu een doorgewinterde schilder bent of voor het eerst een schetsblok openslaat: iedereen is welkom om in een ontspannen, creatieve en intieme setting te experimenteren met snelle schetsen, verf en houtskool.
              </p>
            </div>

            {/* Event quick details card */}
            <div className="mt-8 p-6 rounded-2xl bg-card border border-border/60 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">Datum</h4>
                  <p className="text-base font-semibold text-foreground mt-0.5">20 November 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">Sessies</h4>
                  <p className="text-sm font-semibold text-foreground mt-0.5">Sessie 1: 17:00 – 19:00</p>
                  <p className="text-sm font-semibold text-foreground">Sessie 2: 20:00 – 22:00</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs font-bold tracking-wider uppercase text-muted-foreground">Locatie</h4>
                  <p className="text-base font-semibold text-foreground mt-0.5">TG spaces Amsterdam</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="https://tg-spaces.com/events/painting-workshop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg hover:scale-105 transition-all duration-200 text-center text-base group"
              >
                <span>Tickets & Aanmelden bij TG Spaces</span>
                <ExternalLink className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-4 font-bold text-foreground hover:bg-muted transition-colors text-center text-sm"
              >
                Bekijk ook mijn Portfolio
              </Link>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              * Plekken per sessie zijn beperkt om iedereen voldoende ruimte en aandacht te bieden.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Workshop;
