import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const onderwerp = searchParams.get("onderwerp");
    if (onderwerp) setSubject(onderwerp);
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast.error("Vul alle verplichte velden in.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Voer een geldig e-mailadres in.");
      return;
    }

    setSending(true);

    // TODO: Integrate EmailJS here
    // emailjs.send(serviceId, templateId, { firstName, lastName, email, phone, subject, message })
    console.log("Contact form submitted:", { firstName, lastName, email, phone, subject, message });

    setTimeout(() => {
      setSending(false);
      toast.success("Bericht verzonden!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    }, 800);
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-8">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Voornaam *</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                maxLength={100}
              />
            </div>
            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Achternaam *</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                maxLength={100}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">E-mailadres *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              maxLength={254}
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Telefoonnummer</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              maxLength={20}
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Onderwerp *</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              maxLength={200}
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Bericht *</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
              maxLength={5000}
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50"
          >
            {sending ? "Verzenden..." : "Versturen"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
