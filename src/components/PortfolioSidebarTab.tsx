import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Images } from "lucide-react";

const PortfolioSidebarTab = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setExpanded(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <AnimatePresence mode="wait">
        {expanded ? (
          <motion.button
            key="expanded"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => navigate("/portfolio")}
            className="flex items-center gap-3 rounded-l-xl bg-secondary px-5 py-4 text-secondary-foreground font-bold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <Images size={20} />
            <span className="text-sm tracking-widest uppercase">Portfolio</span>
          </motion.button>
        ) : (
          <motion.button
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => navigate("/portfolio")}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            className="w-3 h-16 rounded-l-xl bg-secondary hover:w-12 transition-all duration-300 cursor-pointer"
            aria-label="Portfolio bekijken"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioSidebarTab;
