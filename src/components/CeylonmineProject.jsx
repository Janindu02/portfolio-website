import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Database, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

export const CeylonmineProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    title: "Ceylonmine",
    subtitle: "Digital Mining Operations Platform",
    description: "A comprehensive platform designed to digitalize and streamline mining operations across Sri Lanka, providing real-time monitoring, data analytics, and operational efficiency tools for the mining industry.",
    image: "/pics/ceylonemine.png",
    technologies: [
      { name: "Next.js", icon: "⚛️", category: "Frontend" },
      { name: "Flask", icon: "🐍", category: "Backend" },
      { name: "TailwindCSS", icon: "🎨", category: "Styling" },
      { name: "Supabase", icon: "🔥", category: "Database" },
      { name: "PostgreSQL", icon: "🐘", category: "Database" },
      { name: "ChatGPT API", icon: "🤖", category: "AI Integration" }
    ],
    features: [
      "Real-time mining operation monitoring",
      "Data analytics and reporting dashboard",
      "Resource management and allocation",
      "Environmental impact tracking",
      "Safety compliance monitoring",
      "Predictive maintenance alerts",
      "Mobile-responsive interface",
      "Multi-user role management"
    ],
    challenges: [
      "Integrating multiple data sources from various mining equipment",
      "Ensuring real-time data accuracy and reliability",
      "Designing an intuitive interface for non-technical users",
      "Implementing robust security measures for sensitive mining data",
      "Optimizing performance for large datasets"
    ],
    solutions: [
      "Developed a modular API architecture for seamless data integration",
      "Implemented data validation and error handling mechanisms",
      "Created user-centered design with extensive user testing",
      "Built role-based access control and encryption protocols",
      "Utilized efficient database indexing and caching strategies"
    ],
    outcomes: [
      "Improved operational efficiency by 40%",
      "Reduced manual data entry errors by 85%",
      "Enhanced decision-making through real-time analytics",
      "Streamlined compliance reporting processes",
      "Increased user adoption rate to 95%"
    ],
    demoUrl: "#",
    githubUrl: "#",
    duration: "6 months",
    teamSize: "4 developers",
    role: "Full-stack Developer"
  };

  const ceylonmineImages = [
    { src: "/pics/ceylonmine/image14.jpeg", caption: "Winning moment at Cutting Edge 2025 – 2nd Runners-up 🏆" },
    { src: "/pics/ceylonmine/image3.jpg", caption: "Presenting Our Mining Solution to the Geological Survey & Mines Bureau" },
    { src: "/pics/ceylonmine/image2.jpg", caption: "Pitching the Ceylone Mine App Concept to GSMB" },
    { src: "/pics/ceylonmine/image8.jpg", caption: "Gaining practical insights from active mining environments" },
    { src: "/pics/ceylonmine/image5.jpg", caption: "Receiving Feedback from GSMB Officials After Demo PresentationReceiving " },
    { src: "/pics/ceylonmine/image6.jpg", caption: "Visiting GSMB Office with IIT Lecturers for Project Implementation Discussion" },
    { src: "/pics/ceylonmine/image7.jpg", caption: "Exploring real-world mining operations during our field visit." },
    { src: "/pics/ceylonmine/image4.jpg", caption: "Visitor pass for our official meeting at GSMB headquarters." },
    { src: "/pics/ceylonmine/image9.jpg", caption: "On-site visit to a rock mining location for industry exposure" },
    { src: "/pics/ceylonmine/image10.jpeg", caption: "Collaborative Meeting at GSMB with IIT Lecturers to Plan Ceylone Mine Implementation" },
    { src: "/pics/ceylonmine/image11.jpeg", caption: "Team Discussion with Academic Mentors and GSMB Representatives" },
    { src: "/pics/ceylonmine/image12.jpg", caption: "Presenting Innovative Solutions for the Mining Sector" },
    { src: "/pics/ceylonmine/image13.jpeg", caption: "Discussion with GSMB Chairman on CeylonMine." },
    { src: "/pics/ceylonmine/image1.jpg", caption: "Presenting CeylonMine to the GSMB Director Board" },
    { src: "/pics/ceylonmine/image15.jpeg", caption: "Gained new insights while showcasing CeylonMine" },
    { src: "/pics/ceylonmine/image16.jpeg", caption: "Proud moment holding our achievement!" },
    { src: "/pics/ceylonmine/image17.jpeg", caption: "Learning and presenting at IIT Cutting Edge 2025" },
    { src: "/pics/ceylonmine/image18.jpeg", caption: "Presenting CeylonMine at IIT Cutting Edge 2025" },
  ];

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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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

          {/* Project Images */}
          <section>
            <h2 className="text-3xl font-extrabold mb-8 text-center text-primary drop-shadow-lg tracking-wide">
              Project Images
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {ceylonmineImages.map((img, idx) => (
                <div
                  key={idx}
                  className="relative group bg-gradient-to-br from-primary/20 to-secondary/20 p-1 rounded-3xl fade-in-up transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl flex flex-col items-center"
                  style={{ minHeight: 320 }}
                >
                  <div className="overflow-hidden rounded-2xl bg-background flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.caption || `Ceylonmine Screenshot ${idx + 1}`}
                      className="rounded-2xl border-4 border-primary/40 group-hover:border-primary transition-all duration-300 max-w-full max-h-[400px]"
                    />
                  </div>
                  <div className="mt-4 w-full flex justify-center">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-base rounded-xl shadow text-center">
                      {img.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}; 