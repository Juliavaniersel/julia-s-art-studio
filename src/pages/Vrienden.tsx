import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { friends, juliaHand, Friend } from "@/data/friends";

const Vrienden = () => {
  const [activeFriend, setActiveFriend] = useState<Friend | null>(null);
  const [phase, setPhase] = useState<"grid" | "handshake" | "profile">("grid");

  const handleFriendClick = (friend: Friend) => {
    setActiveFriend(friend);
    setPhase("handshake");
  };

  const handleBackClick = () => {
    setPhase("grid");
    setTimeout(() => {
      setActiveFriend(null);
    }, 500); // Wait for transition
  };

  useEffect(() => {
    if (phase === "handshake") {
      const timer = setTimeout(() => {
        setPhase("profile");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto h-full min-h-[calc(100vh-8rem)] relative flex flex-col md:flex-row">
        
        {/* Left Side: Owner Hand */}
        <div className="w-full md:w-2/5 flex flex-col items-center justify-center relative z-40 h-[40vh] md:h-auto">
          <div className="text-center mb-8 md:absolute md:top-0 md:left-0 md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif text-[#4a3b32] mb-4">Vrienden</h1>
            <p className="text-[#6d5e53] max-w-sm text-lg font-light">
              Makers I admire and collaborate with. A handshake connects our creative worlds.
            </p>
          </div>
          
          <motion.div
            animate={{
              x: phase === "grid" ? 0 : phase === "handshake" ? "45%" : "25%",
              y: phase === "grid" ? 0 : 0,
              rotate: phase === "handshake" ? [0, 5, -5, 5, 0] : 0,
            }}
            transition={{
              rotate: phase === "handshake" ? { duration: 1.5, ease: "easeInOut" } : { duration: 0.8, ease: "easeInOut" },
              x: { duration: 0.8, ease: "easeInOut" }
            }}
            className="origin-left flex items-center justify-start"
            style={{ rotate: 0 }}
          >
            <img 
              src={juliaHand} 
              alt="Julia's Hand" 
              className="w-64 h-auto md:w-80 md:h-auto object-contain drop-shadow-xl select-none"
            />
          </motion.div>
        </div>

        {/* Right Side: Friends Grid or Profile */}
        <div className="w-full md:w-3/5 relative min-h-[50vh] md:min-h-0 flex items-center justify-center">
          
          {/* Friends Grid */}
          <AnimatePresence>
            {phase === "grid" && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full p-4"
              >
                {friends.map((friend) => (
                  <motion.div
                    key={friend.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFriendClick(friend)}
                    className="flex flex-col items-center justify-center cursor-pointer group"
                  >
                    <div className="relative mb-4">
                      <motion.div
                        style={{
                          rotate: friend.rotation, // No -90 needed since godHand points left
                          scale: friend.scale
                        }}
                        className="transition-transform duration-500 group-hover:scale-105"
                      >
                        <img 
                          src={friend.handImage} 
                          alt={friend.name} 
                          className="w-36 h-auto md:w-44 md:h-auto object-contain drop-shadow-md opacity-90 group-hover:opacity-100 transition-opacity select-none" 
                        />
                      </motion.div>
                    </div>
                    <span className="font-serif text-lg text-[#4a3b32] text-center">{friend.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Handshake Friend Hand */}
          <AnimatePresence>
            {(phase === "handshake" || phase === "profile") && activeFriend && (
              <motion.div
                initial={{ opacity: 0, x: "100%", rotate: 0 }}
                animate={{ 
                  opacity: 1, 
                  x: phase === "handshake" ? "-45%" : "25%",
                  y: phase === "handshake" ? 0 : "-30%",
                  rotate: phase === "handshake" ? [0, -5, 5, -5, 0] : 10,
                  scale: phase === "profile" ? 0.6 : 1
                }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{
                  rotate: phase === "handshake" ? { duration: 1.5, ease: "easeInOut" } : { duration: 0.8, ease: "easeInOut" },
                  x: { duration: 0.8, ease: "easeInOut" },
                  y: { duration: 0.8, ease: "easeInOut" },
                  scale: { duration: 0.8, ease: "easeInOut" }
                }}
                className="absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 origin-right z-40 pointer-events-none"
              >
                <img 
                  src={activeFriend.handImage} 
                  alt={activeFriend.name + " Hand"} 
                  className="w-64 h-auto md:w-80 md:h-auto object-contain drop-shadow-xl select-none" 
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Profile Panel */}
          <AnimatePresence>
            {phase === "profile" && activeFriend && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 bg-[#FDFBF7]/90 backdrop-blur-sm z-30"
              >
                <button 
                  onClick={handleBackClick}
                  className="flex items-center text-[#6d5e53] hover:text-[#4a3b32] transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                  <span className="font-sans uppercase tracking-widest text-sm font-bold">Terug naar overzicht</span>
                </button>
                
                <h2 className="text-5xl md:text-6xl font-serif text-[#4a3b32] mb-2">{activeFriend.name}</h2>
                <div className="inline-block px-3 py-1 bg-[#f0ebe1] text-[#6d5e53] text-sm tracking-widest uppercase mb-8">
                  {activeFriend.discipline}
                </div>
                
                <p className="text-lg md:text-xl text-[#6d5e53] font-light leading-relaxed mb-10 max-w-xl">
                  {activeFriend.bio}
                </p>
                
                <a 
                  href={activeFriend.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#4a3b32] border-b-2 border-[#4a3b32] pb-1 hover:text-[#E07A5F] hover:border-[#E07A5F] transition-colors"
                >
                  <span className="font-sans uppercase tracking-widest text-sm font-bold mr-2">Bezoek Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default Vrienden;
