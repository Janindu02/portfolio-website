import { ArrowLeft, ExternalLink, Github, Calendar, Users, Code, Database, Globe, Linkedin, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const CeylonmineProject = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    title: "Ceylonmine",
    subtitle: "Revolutionizing Mining Operations in Sri Lanka",
    description: "CeylonMine is a smart ERP platform built to digitalize and streamline Sri Lanka's mining sector. Designed with Next.js, Flask, and PostgreSQL, it simplifies the mining license process, royalty tracking, and data management for both government and private stakeholders. By replacing outdated manual workflows, CeylonMine increases transparency, reduces processing time, and supports real-time decision-making. The platform also offers personalized dashboards and AI-driven insights, aiming to modernize regulatory processes and support smarter mining operations across the country.",
    image: "/pics/ceylonemine.png",
    technologies: [
      { name: "Next.js", icon: "/pics/ceylonmine/nextjs.png", category: "Frontend" },
      { name: "Flask", icon: "/pics/ceylonmine/flask.png", category: "Backend" },
      { name: "TailwindCSS", icon: "/pics/ceylonmine/tailwind.png", category: "Styling" },
      { name: "Supabase", icon: "/pics/ceylonmine/database.png", category: "Database" },
      { name: "PostgreSQL", icon: "/pics/ceylonmine/postgresql.png", category: "Database" },
      { name: "ChatGPT API", icon: "/pics/ceylonmine/chatgpt.png", category: "AI Integration" }
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

  const featureSet = [
    {
      name: "Fully digital licensing platform",
      image: "/pics/ceylonmine/Picture1.png",
      description: "End-to-end digital workflow for mining licenses."
    },
    {
      name: "Chatbot",
      image: "/pics/ceylonmine/Picture2.png",
      description: "Instant support and guidance for users."
    },
    {
      name: "Digital map",
      image: "/pics/ceylonmine/Picture3.jpg",
      description: "Interactive map for mining locations and activities."
    },
    {
      name: "Automatic Royalty calculator",
      image: "/pics/ceylonmine/Picture4.png",
      description: "Automated, accurate royalty calculations."
    },
    {
      name: "Anonymous complain page",
      image: "/pics/ceylonmine/Picture5.png",
      description: "Report issues securely and anonymously."
    },
    {
      name: "Real time updates",
      image: "/pics/ceylonmine/Picture6.png",
      description: "Stay informed with instant notifications."
    }
  ];

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage() {
    setPageNumber((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function goToNextPage() {
    setPageNumber((prev) => (prev < numPages ? prev + 1 : prev));
  }

  // Presentation image slider state
  const [slideIndex, setSlideIndex] = useState(1);
  const totalSlides = 15;
  const presentationImages = Array.from({ length: totalSlides }, (_, i) => `/presentation/${i + 1}.png`);

  function goToPrevSlide() {
    setSlideIndex((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function goToNextSlide() {
    setSlideIndex((prev) => (prev < totalSlides ? prev + 1 : prev));
  }

  const demoSectionRef = useRef(null);

  function scrollToDemoSection() {
    if (demoSectionRef.current) {
      demoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

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

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); scrollToDemoSection(); }}
                  className="cosmic-button flex items-center gap-2"
                >
                  <Globe size={16} />
                  Live Demo
                </a>
                <a
                  href={"https://www.ceylonmine.lk/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <Globe size={16} />
                  Marketing Web
                </a>
                <a
                  href="https://www.linkedin.com/company/ceylon-mine/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/ceylon_mine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
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
                  <div className="text-2xl mb-2">
                    {typeof tech.icon === 'string' && tech.icon.startsWith('/') ? (
                      <img src={tech.icon} alt={tech.name + ' icon'} className="w-8 h-8 mx-auto" />
                    ) : (
                      tech.icon
                    )}
                  </div>
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.category}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Problem Space */}
          <section>
            <h2 className="text-3xl font-bold mb-8">🤔 Problem Space</h2>
            <div className="bg-card p-6 rounded-lg border-l-4 border-primary">
              <h3 className="text-xl font-semibold mb-2">Problems to Solve / Requirements to Create</h3>
              <p className="text-lg text-muted-foreground">
                Sri Lanka's mining sector processes over 1 million license applications annually through outdated, manual systems. These inefficiencies lead to project delays, revenue loss, and lack of visibility into critical mining operations. Without real-time digital tools, illegal mining goes undetected, environmental damage is hard to assess, and collaboration between key stakeholders is slow and disconnected. This negatively impacts company performance and investor confidence in the sector.
              </p>
            </div>
          </section>

          {/* Detailed Problems & Solutions */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Key Problems & Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Problem 1 */}
              <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-500 flex flex-col h-full text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">👉 Outdated Manual Processes & Licensing Delays</h3>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Problem Statement:</span>
                  <p className="text-left">Manual processing of over 1M+ license applications each year leads to delays, human errors, and slow approvals, making it difficult for miners and officials to track progress or meet deadlines.</p>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Current Solution:</span>
                  <p className="text-left">CeylonMine replaces paper-based workflows with an end-to-end digital license management system, enabling faster processing, centralized tracking, and easier access for all users.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">How do we know it's a problem:</span>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-left">
                    <li>📂 GSMB officers report high workload and missing documents</li>
                    <li>⏱️ Delayed project approvals due to paper-based backlog</li>
                    <li>📉 Canceled projects affecting mining companies and share market trust</li>
                  </ul>
                </div>
              </div>

              {/* Problem 2 */}
              <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-500 flex flex-col h-full text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">👉 No Real-Time Royalty Tracking & Revenue Leakage</h3>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Problem Statement:</span>
                  <p className="text-left">There's no digital system to track royalty payments or detect irregularities, leading to lost revenue and delayed reporting.</p>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Current Solution:</span>
                  <p className="text-left">CeylonMine includes automated royalty calculation tools, real-time dashboards, and reporting modules to ensure accurate and timely payment tracking.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">How do we know it's a problem:</span>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-left">
                    <li>📊 Inconsistent royalty records and missed payments</li>
                    <li>🔍 Lack of real-time insights for financial monitoring</li>
                    <li>📉 Estimated 15–20% potential revenue loss due to manual handling</li>
                  </ul>
                </div>
              </div>

              {/* Problem 3 */}
              <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-500 flex flex-col h-full text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">👉 Undetected Illegal Mining & Environmental Risks</h3>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Problem Statement:</span>
                  <p className="text-left">Illegal mining operations remain untracked, and environmental damage caused by activities like blasting or over-extraction is not measured or reported in real time.</p>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Current Solution:</span>
                  <p className="text-left">Future expansion of CeylonMine includes GPS tracking, drone-based volume detection, and environmental reporting tools powered by AI and image analysis.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">How do we know it's a problem:</span>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-left">
                    <li>🚫 No system to detect unlicensed operations</li>
                    <li>🌍 No mechanism for tracking environmental impact</li>
                    <li>📉 Risk of regulatory failure and ecosystem damage</li>
                  </ul>
                </div>
              </div>

              {/* Problem 4 */}
              <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-500 flex flex-col h-full text-left">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-center">👉 Poor Stakeholder Collaboration & Data Access</h3>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Problem Statement:</span>
                  <p className="text-left">Key partner agencies (environmental, defense, etc.) lack access to centralized systems, relying on manual communication, which causes delays in decision-making and compliance.</p>
                </div>
                <div className="mb-2">
                  <span className="font-semibold text-primary">Current Solution:</span>
                  <p className="text-left">CeylonMine provides multi-role dashboards and secure access for external stakeholders, enabling joint workflows and faster approvals.</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">How do we know it's a problem:</span>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-left">
                    <li>🗂️ Fragmented data sharing between departments</li>
                    <li>⏳ Delayed coordination between GSMB and partner bodies</li>
                    <li>❌ No unified platform for collaborative decision-making</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureSet.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300 border-b-4 border-primary"
                >
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-20 h-20 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-primary mb-2 text-center">{feature.name}</h3>
                  <p className="text-md text-muted-foreground text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Image Section */}
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Why CeylonMine?</h2>
            <div className="flex justify-center">
              <img
                src="/pics/ceylonmine/image19.png"
                alt="Benefits of CeylonMine Web App"
                className="w-full max-w-3xl h-auto rounded-xl border-2 border-primary shadow-sm object-contain bg-white"
              />
            </div>
          </section>

          {/* Software Demo Showcase */}
          <section className="my-16" ref={demoSectionRef}>
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">CeylonMine Demo Platform</h2>
            <div className="max-w-3xl mx-auto mb-8">
              <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold mb-2 text-red-600">🚧 Please Note – Demo Version Only</h3>
                <p className="text-md text-muted-foreground whitespace-pre-line">
This platform showcases a demo version of the CeylonMine system. We have developed and implemented separate user and admin portals with intuitive user interfaces to simulate real-world functionality. However, this version is not the fully hosted or finalized product.

We are currently in the implementation and approval phase in collaboration with the Geological Survey & Mines Bureau (GSMB). Due to GSMB's request, we are not permitted to fully host or deploy the live version until official approval is granted.

This demo is made available solely for testing and demonstration purposes. Some features are intentionally limited or unavailable in this version. The final release will include enhanced functionality, complete backend integration, and improved performance once approved for live deployment.

Thank you for your understanding.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* User Portal Card */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary">
                <img
                  src="/pics/ceylonemine.png"
                  alt="User Portal Demo"
                  className="w-full max-w-xs h-56 object-contain rounded-lg border mb-4 bg-white"
                />
                <h3 className="text-xl font-bold text-primary mb-2 text-center">User Portal</h3>
                <a
                  href="https://ceylonmine-front.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-semibold"
                >
                  Visit User Demo
                </a>
              </div>
              {/* Admin Portal Card */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary">
                <img
                  src="/pics/ceylonmineadmin.png"
                  alt="Admin Portal Demo"
                  className="w-full max-w-xs h-56 object-contain rounded-lg border mb-4 bg-white"
                />
                <h3 className="text-xl font-bold text-primary mb-2 text-center">Admin Portal</h3>
                <a
                  href="https://ceylonmineadmin.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-semibold"
                >
                  Visit Admin Demo
                </a>
              </div>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes</h2>
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

          {/* What GSMB Says About CeylonMine */}
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">What GSMB Says About CeylonMine</h2>
            <div className="flex justify-center">
              <img
                src="/pics/ceylonmine/Picture14.png"
                alt="What GSMB Says About CeylonMine"
                className="w-full max-w-2xl h-auto rounded-xl border-2 border-primary shadow-sm object-contain bg-white"
              />
            </div>
          </section>

          {/* Presentation Viewer */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Project Presentation</h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="bg-card p-4 rounded-lg flex flex-col items-center">
                <img
                  src={presentationImages[slideIndex - 1]}
                  alt={`Presentation Slide ${slideIndex}`}
                  className="w-full max-w-2xl h-auto rounded-lg border-2 border-primary mb-4 object-contain"
                  style={{ background: '#fff' }}
                />
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={goToPrevSlide}
                    disabled={slideIndex <= 1}
                    className="px-4 py-2 rounded bg-primary text-white disabled:opacity-50"
                  >
                    ← Prev
                  </button>
                  <span className="text-lg font-medium">
                    Slide {slideIndex} of {totalSlides}
                  </span>
                  <button
                    onClick={goToNextSlide}
                    disabled={slideIndex >= totalSlides}
                    className="px-4 py-2 rounded bg-primary text-white disabled:opacity-50"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision & Expansion Goals */}
          <section className="my-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Future Vision & Expansion Goals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {/* Goal 1 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture7.png"
                  alt="Mobile App Integration"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">Mobile App Integration</h3>
              </div>
              {/* Goal 2 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture8.png"
                  alt="AI-Powered Environmental Insights"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">AI-Powered Environmental Insights</h3>
              </div>
              {/* Goal 3 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture9.png"
                  alt="Rock & Mineral Extraction Tracking"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">Rock & Mineral Extraction Tracking</h3>
              </div>
              {/* Goal 4 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture10.png"
                  alt="Illegal Transport Detection"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">Illegal Transport Detection</h3>
              </div>
              {/* Goal 5 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture11.png"
                  alt="Dashboards for external authorities"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">Dashboards for external authorities</h3>
              </div>
              {/* Goal 6 */}
              <div className="bg-card p-6 rounded-2xl flex flex-col items-center shadow-lg border-b-4 border-primary hover:scale-105 transition-transform duration-300">
                <img
                  src="/pics/ceylonmine/Picture12.png"
                  alt="Drone-based AI for volume tracking"
                  className="w-24 h-24 object-contain mb-4 rounded-full border-2 border-primary bg-white shadow-sm"
                />
                <h3 className="text-lg font-bold text-primary text-center">Drone-based AI for volume tracking</h3>
              </div>
            </div>
          </section>

          {/* Project Images */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Research and Site Visits</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {ceylonmineImages.map((img, idx) => (
                <div
                  key={idx}
                  className="p-1 rounded-3xl border-2 border-primary fade-in-up transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col items-center bg-background"
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
                    <span className="inline-block px-4 py-2 text-primary font-semibold text-base rounded-xl text-center">
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