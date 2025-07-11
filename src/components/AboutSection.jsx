import { Briefcase, Code, User } from "lucide-react";
import { Helmet } from "react-helmet-async";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Aspiring Software Engineer & Problem Solver
            </h3>

            <p className="text-base md:text-lg text-muted-foreground">
              As a third-year Software Engineering undergraduate, I'm passionate about building scalable, 
              user-centered software solutions. With hands-on experience in real-world projects, I thrive on 
              turning complex problems into clean, efficient code.
            </p>

            <p className="text-base md:text-lg text-muted-foreground">
              Currently seeking a one-year internship as part of my academic requirements, 
              I'm eager to contribute to dynamic development teams and further enhance my technical 
              and problem-solving skills through real industry exposure.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="/my-journey" className="cosmic-button text-base md:text-lg">
                More About Me
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

          <div className="flex justify-center md:justify-end">
            <img
              src="/pics/janindua.jpg"
              alt="Janindu Amaraweera Profile"
              loading="lazy"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl border-4 border-primary transition-transform duration-700 ease-in-out hover:scale-105 animate-fade-in"
              style={{ animation: 'fadeInUp 1s both' }}
            />
          </div>
        </div>
      </div>
      <Helmet>
        <title>Janindu Amaraweera | Software Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Janindu Amaraweera, a third-year Software Engineering undergraduate from Sri Lanka." />
        <meta name="keywords" content="Janindu Amaraweera, Software Engineer, React Developer, Sri Lanka, Internship" />
        <link rel="canonical" href="https://yourdomain.netlify.app/" />
        {/* Open Graph */}
        <meta property="og:title" content="Janindu Amaraweera | Software Engineer Portfolio" />
        <meta property="og:description" content="Portfolio of Janindu Amaraweera, a third-year Software Engineering undergraduate from Sri Lanka." />
        <meta property="og:image" content="https://yourdomain.netlify.app/pics/janindua.webp" />
        <meta property="og:url" content="https://yourdomain.netlify.app/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Janindu Amaraweera | Software Engineer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Janindu Amaraweera, a third-year Software Engineering undergraduate from Sri Lanka." />
        <meta name="twitter:image" content="https://yourdomain.netlify.app/pics/janindua.webp" />
      </Helmet>
    </section>
  );
};
