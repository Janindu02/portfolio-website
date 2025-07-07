import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ceylonmmine",
    description: "A platform to digitalize and streamline mining operations in Sri Lanka.",
    image: "/pics/ceylonemine.png",
    tags: ["Next.js", "Flask", "TailwindCSS", "Supabase", "PostgreSQL","Chatgpt API"],
    demoUrl: "#",
    githubUrl: "#",
    detailPage: "/project/ceylonmine"
  },
  {
    id: 2,
    title: "Open-Source Learning Platform",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/pics/codinglanka.png",
    tags: ["TypeScript", "React", "Next.js", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "#",
    detailPage: "/project/learning-platform"
  },
  {
    id: 3,
    title: "Plane Seat Management System",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Spring Boot", "oop"],
    demoUrl: "#",
    githubUrl: "#",
    detailPage: "/project/plane-seat"
  },
];

export const ProjectsSection = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.detailPage) {
      navigate(project.detailPage);
    }
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          {" "}
          My <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-base md:text-lg">
          A showcase of real-world projects demonstrating my skills in software development, 
          problem-solving, and creating user-focused solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${
                project.detailPage ? 'cursor-pointer' : ''
              }`}
              onClick={() => project.detailPage && handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold mb-2"> {project.title}</h3>
                <p className="text-muted-foreground text-base md:text-lg mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  {project.detailPage && (
                    <button
                      className="cosmic-button w-full flex items-center justify-center gap-2 text-lg py-3 mt-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Janindu02"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
