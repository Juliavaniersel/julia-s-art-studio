import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import emailjs from '@emailjs/browser';

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

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim() || !subject.trim() || !message.trim()) {
      toast.error("Please fill out all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setSending(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([{
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone || null,
          subject: subject,
          message: message
        }]);

      // Also send email
      try {
        await emailjs.send(
          'service_oigctjm',
          'template_p61vwiz',
          {
            from_name: `${firstName} ${lastName}`,
            from_email: email,
            message: `Je hebt een nieuw contactbericht ontvangen via de website!\n\nNaam: ${firstName} ${lastName}\nEmailadres: ${email}\nTelefoon: ${phone || 'Niet opgegeven'}\n\nOnderwerp: ${subject}\n\nBericht:\n${message}`,
            reply_to: email,
          },
          'B_1Uk4YFUuPpkAWDz'
        );
      } catch (emailErr) {
        console.error("Email sending failed but saved to DB:", emailErr);
        // We don't throw, we just log it since Supabase succeeded
      }

      toast.success("Message sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error("Error inserting into Supabase:", err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="pt-20 min-h-screen">
      <section className="mx-auto max-w-2xl px-6 py-12">
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-8">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              maxLength={20}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Subject *</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              maxLength={200}
              required
            />
          </div>

          <div>
            <label className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Message *</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-y"
              maxLength={5000}
              required
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
