import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";

const BusinessCardSidebar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed left-0 top-[60%] md:top-1/2 -translate-y-1/2 z-40">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.div
            key="expanded"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onMouseLeave={() => setExpanded(false)}
            onClick={() => navigate("/about")}
            className="flex flex-col gap-2 rounded-r-xl bg-primary px-5 py-4 text-primary-foreground shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)] hover:scale-[1.02] transition-transform duration-200 cursor-pointer border border-primary-foreground/20"
          >
            <div className="flex items-center gap-2 mb-1 border-b border-primary-foreground/20 pb-2">
              <User size={20} />
              <span className="font-bold tracking-widest uppercase">Wat doe ik?</span>
            </div>
            <ul className="text-sm list-disc mt-1 ml-2 space-y-1 font-medium">
              <li>Kunst op aanvraag</li>
              <li>Stropdastopjes</li>
              <li>Hondenportretten</li>
            </ul>
          </motion.div>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/about")}
            onMouseEnter={() => setExpanded(true)}
            className="w-3 h-24 rounded-r-xl bg-primary hover:w-16 transition-all duration-300 cursor-pointer flex items-center justify-center p-0 shadow-[4px_0_15px_-3px_rgba(0,0,0,0.1)]"
            aria-label="Over mij bekijken"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BusinessCardSidebar;
