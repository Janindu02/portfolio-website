import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base md:text-lg">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Email</h4>
                  <a
                    href="mailto:janiduamaraweera@gmail.com"
                    className="text-base md:text-lg text-muted-foreground hover:text-primary transition-colors break-all"
                  >
                    janiduamaraweera@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Phone</h4>
                  <a
                    href="tel:071 397 4674"
                    className="text-base md:text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    071 397 4674
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-lg md:text-xl">Location</h4>
                  <span className="text-base md:text-lg text-muted-foreground">Panadura, Sri Lanka</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-xl md:text-2xl"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://linkedin.com/in/janinduamaraweera/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={32} />
                </a>
                <a href="https://medium.com/@janiduamaraweera" target="_blank" rel="noopener noreferrer" aria-label="Medium">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="12" r="4.5" />
                    <ellipse cx="17" cy="12" rx="3" ry="4.5" />
                    <ellipse cx="22" cy="12" rx="1" ry="4.5" />
                  </svg>
                </a>
                <a href="https://github.com/Janindu02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={32} />
                </a>
                <a href="https://instagram.com/third_eye_of_janindu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={32} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john ..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
