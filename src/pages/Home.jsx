import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { EducationSection } from "../components/EducationSection";
import { ExtracurricularSection } from "../components/ExtracurricularSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>Janindu Amaraweera | Software Engineer Portfolio</title>
        <meta name="description" content="Portfolio of Janindu Amaraweera, a third-year Software Engineering undergraduate from Sri Lanka." />
        <meta name="keywords" content="Janindu Amaraweera, Software Engineer, React Developer, Sri Lanka, Internship" />
        <link rel="canonical" href="https://yourdomain.netlify.app/" />
      </Helmet>
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExtracurricularSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
