import { ArrowDown, Linkedin, Github, Instagram } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="inline-block opacity-0 animate-slide-in-left"> Hi, I'm</span>
            <span className="inline-block text-primary opacity-0 animate-slide-in-left-delay-1">
              {" "}Janindu
            </span>
            <span className="inline-block text-gradient ml-2 opacity-0 animate-slide-in-left-delay-2">
              {" "}Amaraweera
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Software Engineering undergraduate seeking a one year internship 
          to build scalable, user-focused software and gain industry experience.

          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="/cv/Janindu%20Amaraweera.pdf"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-base md:text-lg"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="flex space-x-6 mb-6 justify-center">
          <a href="https://linkedin.com/in/janinduamaraweera/" target="_blank" rel="noopener noreferrer" className="transition-transform transform hover:scale-110 hover:text-primary">
            <Linkedin size={36} />
          </a>
          <a href="https://medium.com/@janiduamaraweera" target="_blank" rel="noopener noreferrer" aria-label="Medium" className="transition-transform transform hover:scale-110 hover:text-primary">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="12" r="4.5" />
              <ellipse cx="17" cy="12" rx="3" ry="4.5" />
              <ellipse cx="22" cy="12" rx="1" ry="4.5" />
            </svg>
          </a>
          <a href="https://github.com/Janindu02" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition-transform transform hover:scale-110 hover:text-primary">
            <Github size={36} />
          </a>
          <a href="https://instagram.com/third_eye_of_janindu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-transform transform hover:scale-110 hover:text-primary">
            <Instagram size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};
