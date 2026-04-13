import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BidModalProps {
  open: boolean;
  onClose: () => void;
  currentBid: number;
  onBidSubmit: (bid: number, details: { firstName: string; lastName: string; email: string; address: string; zipCode: string; city: string }) => void;
}

const BidModal = ({ open, onClose, currentBid, onBidSubmit }: BidModalProps) => {
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bidAmount = parseFloat(amount);

    if (!bidAmount || bidAmount <= currentBid) {
      setError(`Bod moet hoger zijn dan €${currentBid.toLocaleString("nl-NL")}`);
      return;
    }
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !address.trim() || !zipCode.trim() || !city.trim()) {
      setError("Please fill out all fields.");
      return;
    }
    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Voer een geldig e-mailadres in.");
      return;
    }

    setError("");
    onBidSubmit(bidAmount, { firstName: firstName.trim(), lastName: lastName.trim(), email: email.trim(), address: address.trim(), zipCode: zipCode.trim(), city: city.trim() });
    setAmount("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setZipCode("");
    setCity("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md rounded-2xl bg-card p-8 shadow-xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={20} />
              </button>

              <h2 className="text-2xl font-bold tracking-tight mb-1">Place a bid</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Current highest bid: <span className="font-bold text-primary">€{currentBid.toLocaleString("nl-NL")}</span>
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Bid (€) *</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value); setError(""); }}
                    placeholder={`Minimum €${(currentBid + 1).toLocaleString("nl-NL")}`}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    min={currentBid + 1}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">First Name *</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      maxLength={100}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Last Name *</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Email Address *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    maxLength={254}
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Street and number *</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    maxLength={200}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Postal Code *</label>
                    <input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      maxLength={20}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">City *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      maxLength={100}
                      required
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-destructive font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary py-3 font-bold text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
                >
                  Confirm Bid
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BidModal;
