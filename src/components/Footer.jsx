import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Janindu Amaraweera. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-bold mb-4 text-primary">Connect With Me</h3>
        <div className="flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:janiduamaraweera@gmail.com" className="hover:underline text-primary">janiduamaraweera@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Phone:</span>
            <a href="tel:0713974674" className="hover:underline text-primary">071 397 4674</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Location:</span>
            <span>Panadura, Sri Lanka</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
