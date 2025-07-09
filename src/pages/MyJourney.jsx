import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";
import { Helmet } from 'react-helmet-async';

export const MyJourney = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Helmet>
        <title>My Journey | Janindu Amaraweera</title>
        <meta name="description" content="Read the inspiring journey of Janindu Amaraweera, from a curious kid to an aspiring software engineer in Sri Lanka." />
        <meta name="keywords" content="Janindu Amaraweera, My Journey, Software Engineer, Sri Lanka, Story, Portfolio" />
        <link rel="canonical" href="https://yourdomain.netlify.app/my-journey" />
      </Helmet>
      <ThemeToggle />
      <StarBackground />
      {/* Header */}
      <header className="relative z-10 pt-24 pb-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => navigate("/#about")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to About Me
          </button>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary text-center">
              <span className="text-muted-foreground">My</span> <span className="text-primary">Journey</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground text-center mb-8">
              From Curious Kid to Aspiring Software Engineer
            </h2>
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-4xl px-4 pb-24">
        {/* --- My Journey Content --- */}
        <section className="mb-12">
          <div className="bg-card/80 rounded-3xl shadow-lg border border-primary/30 p-8 max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 flex flex-col items-center text-center justify-center">
              <p className="text-lg md:text-xl mb-4 font-medium">
                Hi, I'm <span className="font-semibold">Janindu Amaraweera</span>, a passionate tech explorer and Software Engineering undergraduate from Panadura, Sri Lanka, currently studying at the Informatics Institute of Technology (IIT) affiliated with the University of Westminster.
              </p>
              <p className="text-lg md:text-xl font-medium">
                Ever since I was a kid, I've been curious about how things work especially in tech. That curiosity grew into a passion for building user-friendly, scalable software and solving real-world problems through code.
              </p>
            </div>
            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <img
                src="/pics/janindua.jpg"
                alt="Janindu Amaraweera Profile"
                loading="lazy"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-3xl shadow-xl border-4 border-primary transition-transform duration-700 ease-in-out hover:scale-105 animate-fade-in"
                style={{ animation: 'fadeInUp 1s both' }}
              />
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">📺 It All Started with a YouTube Channel (2015)</h2>
          <p className="mb-2">Back in Grade 7, I launched my first tech-focused YouTube channel, recording tutorials, app reviews, and tech tips from my home using just a basic mobile phone. It wasn't perfect—but it was real.</p>
          <a href="https://www.youtube.com/@janinduamaraweera" target="_blank" rel="noopener noreferrer" className="text-primary underline">👉 View My Old YouTube Videos</a>
          <div className="flex gap-4 mt-4">
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">YouTube Thumbnail</div>
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">YouTube Thumbnail</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🛍️ Turning Lockdown Into Opportunity – My Entrepreneurial Chapter</h2>
          <p className="mb-2">During the COVID-19 lockdown, while many were stuck indoors, I launched my own online store and became a Daraz seller. I handled real customer orders, managed logistics, and generated income—turning theory into action and learning business the hard (and rewarding) way.</p>
          <div className="flex gap-4 mt-4">
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Store Screenshot</div>
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Product Listing</div>
          </div>
        </section>
        {/* --- Education Section (replaces Academic Highlights) --- */}
        <section className="mb-12">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              <span className="text-primary">Education Highlights</span>
            </h2>
            <div className="flex flex-col gap-12">
              {/* University of Westminster */}
              <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8 bg-card/70">
                <img
                  src="/pics/westmin.png"
                  alt="University of Westminster Logo"
                  className="w-32 h-32 object-contain rounded-2xl border-4 border-white mb-4 md:mb-0 md:mr-8"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">University of Westminster</h3>
                  <p className="text-lg mt-2">2023 - 2027</p>
                  <p className="text-lg mt-2">BEng in Software Engineering</p>
                </div>
              </div>

              {/* Rahula College */}
              <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8 bg-card/70">
                <img
                  src="/pics/rahula.png"
                  alt="Rahula College Logo"
                  className="w-32 h-32 object-contain rounded-2xl border-4 border-white mb-4 md:mb-0 md:mr-8"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">Rahula College</h3>
                  <p className="text-lg mt-2">2014 - 2023</p>
                  <ul className="list-disc ml-5 mt-2 text-md">
                    <li>Scored 181 marks in the Grade 5 scholarship</li>
                    <li>Earned 9 A's in O/Ls (English Medium, including ICT, 2019)</li>
                    <li>Used A/L time to build, create, and experiment (Completed in Mathematics: Combined Maths, Physics, Chemistry, 2022)</li>
                  </ul>
                </div>
              </div>

              {/* Vijitha Central College */}
              <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8 bg-card/70">
                <img
                  src="/pics/vijhitha.jpeg"
                  alt="Vijitha Central College Logo"
                  className="w-32 h-32 object-contain rounded-2xl border-4 border-white mb-4 md:mb-0 md:mr-8"
                />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold">Vijitha Central College</h3>
                  <p className="text-lg mt-2">2009 - Feb 2014</p>
                  <ul className="list-disc ml-5 mt-2 text-md">
                    <li>Grade 5 Scholarship Exam: Achieved 181 marks (2013)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">📸 Creativity Is My Secret Superpower</h2>
          <p className="mb-2">Beyond code, I express myself through photography, video editing, drawing, and creative writing. I've won awards in Sinhala writing and drawing competitions, and my visual storytelling passion shines through in UI/UX design and front-end development.</p>
          <div className="flex gap-4 mt-4">
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Photo</div>
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Sketch</div>
            <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Award</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">💡 Real-World Impact – GSMB ERP Project</h2>
          <p className="mb-2">For our second-year university group project, we built a full-fledged ERP solution for the Geological Survey and Mines Bureau (GSMB), a major government institution in Sri Lanka.</p>
          <ul className="list-disc ml-6 mb-2">
            <li>✅ Online mining license applications</li>
            <li>💰 Royalty calculation and online payment system</li>
            <li>🧠 AI-powered chatbot</li>
            <li>🛠 Admin dashboards with role-based access</li>
            <li>🌐 Dedicated web portals for miners and officials</li>
          </ul>
          <p className="mb-2">📊 With over 8,000 license applications per year and LKR 3.79 billion in revenue in 2022, this was a project that taught us the real value of building software that matters.</p>
          <div className="flex gap-4 mt-4">
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">UI Screenshot</div>
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Dashboard</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🔁 Always Learning, Always Building</h2>
          <p className="mb-2">Even today, I continue to write articles on Medium, explore emerging tech, and contribute to the community by sharing what I learn. I don't just consume knowledge—I create, share, and improve.</p>
          <a href="https://medium.com/@janinduamaraweera" target="_blank" rel="noopener noreferrer" className="text-primary underline">📖 Read My Articles on Medium</a>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🚀 Why This Matters</h2>
          <p>I believe technology is not just a career—it's my playground, my canvas, and my toolkit to change lives.<br />Whether it's building solutions that scale, designing beautiful interfaces, writing meaningful content, or helping others get started—I'm here for it all.<br /><br />If you're looking for someone who's not afraid to try, fail, learn, and grow, you're in the right place.</p>
        </section>
        <div className="text-center text-lg mt-8 text-muted-foreground">
          👇 Scroll down to view my full project portfolio, blog posts, and photography gallery.
        </div>
      </main>
      <Footer />
    </div>
  );
}; 