import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Database, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const LearningPlatformProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    title: "Open-Source Learning Platform",
    subtitle: "Interactive Analytics Dashboard",
    description: "A comprehensive learning management system with advanced analytics capabilities, designed to provide interactive data visualization and filtering for educational institutions and online learning providers.",
    image: "/pics/codinglanka.png",
    technologies: [
      { name: "TypeScript", icon: "📘", category: "Language" },
      { name: "React", icon: "⚛️", category: "Frontend" },
      { name: "Next.js", icon: "🚀", category: "Framework" },
      { name: "TailwindCSS", icon: "🎨", category: "Styling" }
    ],
    features: [
      "Interactive data visualization dashboards",
      "Advanced filtering and search capabilities",
      "Real-time analytics and reporting",
      "User progress tracking and analytics",
      "Course management and content delivery",
      "Student performance monitoring",
      "Responsive design for all devices",
      "Role-based access control system"
    ],
    challenges: [
      "Handling large datasets for real-time analytics",
      "Creating intuitive data visualization components",
      "Implementing complex filtering algorithms",
      "Ensuring responsive design across all devices",
      "Optimizing performance for smooth user experience"
    ],
    solutions: [
      "Implemented efficient data caching and pagination strategies",
      "Built custom chart components using D3.js and Chart.js",
      "Developed advanced search with debouncing and autocomplete",
      "Used CSS Grid and Flexbox for responsive layouts",
      "Applied code splitting and lazy loading for better performance"
    ],
    outcomes: [
      "Improved data analysis efficiency by 60%",
      "Enhanced user engagement through interactive visualizations",
      "Reduced page load times by 40%",
      "Increased user satisfaction scores to 92%",
      "Streamlined reporting processes for administrators"
    ],
    demoUrl: "#",
    githubUrl: "#",
    duration: "4 months",
    teamSize: "3 developers",
    role: "Frontend Developer"
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Header */}
      <header className="relative z-10 pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="text-primary">{projectData.title}</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  {projectData.subtitle}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {projectData.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  {projectData.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users size={16} />
                  {projectData.teamSize}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Code size={16} />
                  {projectData.role}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={projectData.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button flex items-center gap-2"
                >
                  <Globe size={16} />
                  Live Demo
                </a>
                <a
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>

            <div className="relative">
              <img
                src={projectData.image}
                alt={projectData.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-24">
        <div className="container mx-auto max-w-6xl space-y-16">
          {/* Technologies */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {projectData.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projectData.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg border-l-4 border-primary"
                >
                  <p className="text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Challenges Faced</h2>
              <div className="space-y-4">
                {projectData.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border-l-4 border-red-500"
                  >
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Solutions Implemented</h2>
              <div className="space-y-4">
                {projectData.solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="bg-card p-4 rounded-lg border-l-4 border-green-500"
                  >
                    <p className="text-muted-foreground">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Project Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
                >
                  <p className="text-lg font-medium">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Project Screenshots */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Project Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                <div className="bg-card p-4 rounded-lg">
                  <div className="aspect-video bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Analytics Dashboard Screenshot</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Data Visualization</h3>
                <div className="bg-card p-4 rounded-lg">
                  <div className="aspect-video bg-muted rounded flex items-center justify-center">
                    <span className="text-muted-foreground">Data Visualization Screenshot</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}; 