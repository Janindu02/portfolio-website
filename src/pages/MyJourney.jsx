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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">📺 It All Started with a YouTube Channel (2015)</span>
          </h2>
          <p className="mb-2 text-lg md:text-xl"> 
            In Grade 7, armed with just a basic mobile phone and endless curiosity, I launched my first tech YouTube channel. I recorded tutorials, app reviews, and tech tips from my bedroom, no fancy gear, just passion.<br /><br />
            That first channel sparked something in me. I went on to manage several others, constantly exploring new ideas and sharing what I learned. I wasn't chasing views, I was driven by a genuine love for technology and a desire to help others understand it.<br /><br />
            Looking back, those early videos weren't perfect, but they were the foundation of everything I've built since.
          </p>
          <a href="https://www.youtube.com/@januj4430" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 mt-4">
            <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566a2.994 2.994 0 0 0-2.112 2.12A31.36 31.36 0 0 0 0 12a31.36 31.36 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12A31.36 31.36 0 0 0 24 12a31.36 31.36 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            View My Old YouTube Videos
          </a>
        </section>
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-8 mt-8 items-center justify-center">
            <div className="bg-card/80 rounded-2xl shadow-xl p-4 px-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-[28rem]">
              <img
                src="/pics/youtube1.jpeg"
                alt="Recording my first tech tutorial video on a basic mobile phone."
                className="w-full h-auto rounded-xl shadow-md mb-4 transition-transform duration-300"
              />
              <span className="text-xl md:text-2xl font-bold text-primary mb-2 text-center">Recording my first tech tutorial video on a basic mobile phone.</span>
              <p className="text-base md:text-lg text-center mt-4">
                Back in 2019, I grew my tech-focused YouTube channel to over 500 subscribers and gained 15,000+ views on a single video within a short time. It was more than just numbers, it reflected my ability to create content that connects, informs, and adds real value to viewers interested in tech.
              </p>
            </div>
            <div className="bg-card/80 rounded-2xl shadow-xl p-4 px-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-[28rem]">
              <img
                src="/pics/youtube2.jpeg"
                alt="Editing and uploading YouTube content from my bedroom setup."
                className="w-full h-auto rounded-xl shadow-md mb-4 transition-transform duration-300"
              />
              <span className="text-xl md:text-2xl font-bold text-primary mb-2 text-center">Editing and uploading YouTube content from my bedroom setup.</span>
              <p className="text-base md:text-lg text-center mt-4">
                I started my YouTube journey around 8–9 years ago at the age of 12, using a basic bedroom setup to share my passion for technology. I created videos teaching people about apps, software, and digital tools an experience that sparked my creativity and love for explaining tech in simple, practical ways.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">🛍️ Turning Lockdown Into Opportunity – My Entrepreneurial Chapter</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center mb-6 gap-6">
            <img
              src="/pics/Daraz.jpg"
              alt="Daraz Seller Experience"
              className="w-40 md:w-56 rounded-2xl shadow-xl mb-4 md:mb-0"
            />
            <p className="text-base md:text-lg text-center md:text-left">
              During the COVID-19 lockdown, while many were stuck indoors, I launched my own online store and became a Daraz seller. I handled real customer orders, managed logistics, and generated income turning theory into action and learning business the hard (and rewarding) way.
            </p>
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
                    <li>Earned 9 A's in O/Ls (English Medium, including ICT, 2019)</li>
                    <li>Completed G.C.E. Advanced Level in 2022 in the Mathematics stream (Combined Maths, Physics, Chemistry).</li>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">📸 Creativity Is My Secret Superpower</span>
          </h2>
          <div className="w-full max-w-6xl md:max-w-7xl mx-auto bg-card/90 rounded-3xl shadow-2xl p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-stretch">
            {/* Photo */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[420px]">
              <img
                src="/pics/janinduabout.jpg"
                alt="Janindu Amaraweera Photography"
                className="h-full w-full max-h-[420px] md:max-h-[420px] object-cover rounded-none md:rounded-l-3xl shadow-2xl"
                style={{ aspectRatio: '4/5' }}
              />
            </div>
            {/* Text and Buttons */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 md:py-0 md:pl-16 items-center md:items-start text-center md:text-left">
              <p className="text-base md:text-lg mb-4 mt-10">
                Photography and videography have been a part of my life since school, what began as a hobby has grown into a deep passion for creativity and visual storytelling. Through my brand "The Third Eye of Janindu", I capture moments that reflect emotion, detail, and perspective in unique ways.
              </p>
              <p className="text-base md:text-lg mb-8">
                I actively share my creative work on platforms like Instagram, Facebook, and my own personal website. It's a space where I express my artistic side and push the boundaries of visual expression. Feel free to explore and enjoy my work through the links below:
              </p>
              <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start mt-6 w-full pb-6">
                <a href="https://thirdeyeofjanindu.netlify.app/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2 2 4-4" /></svg>
                  Photography Website
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById('through-my-lens');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/></svg>
                  View My Photo Gallery
                </button>
                <a href="https://www.instagram.com/third_eye_of_janindu/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zm4.25 2.25a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 1.5a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm5.25.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" /></svg>
                  Instagram
                </a>
                <a href="https://web.facebook.com/p/Janu-Janindu-photography-100076554227233/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 group">
                  <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="w-full max-w-7xl mx-auto bg-card/90 rounded-2xl shadow-xl border border-primary/30 p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[28rem] bg-background">
              <img
                src="/pics/myjourney/cameralk.jpeg"
                alt="CameraLK Photography Certificate"
                className="w-full h-auto rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 py-8 items-center md:items-start text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Certificate in Photography from CameraLK</h3>
              <p className="text-base md:text-lg mb-6">
                I've had a strong passion for photography since my school days, which led me to complete a Certificate in Photography from CameraLK last year. I joined the course not only to improve my technical skills but also to connect with like-minded individuals and experienced professionals in the field. Since then, I've actively participated in various photography events and workshops organized by CameraLK and other renowned photography communities and professionals, allowing me to learn from senior photographers and build meaningful connections in the field.
              </p>
              <a href="https://www.linkedin.com/posts/janinduamaraweera_photography-cameralk-learningjourney-activity-7250177938933919744-ffTf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEGO24IBx5Lz1jGQ7om7lEJCTTcXvcA7OKw" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
                <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                View Certificate Details on LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">💡 Real-World Impact – GSMB ERP Project</span>
          </h2>
          <div className="w-full max-w-6xl md:max-w-7xl mx-auto bg-card/90 rounded-3xl shadow-2xl p-0 md:p-0 overflow-hidden flex flex-col items-center">
            <img
              src="/presentation/1.png"
              alt="GSMB ERP Project Presentation"
              className="w-full rounded-t-3xl shadow-2xl mb-8"
            />
            <div className="w-full flex flex-col justify-center px-8 pb-10 items-center text-center">
              <p className="text-base md:text-lg mb-4">
                For our second-year university group project, we built a full-fledged ERP solution for the Geological Survey and Mines Bureau (GSMB), a major government institution in Sri Lanka.
              </p>
              <ul className="list-disc ml-5 mb-4 text-base md:text-lg text-left">
                <li>✅ Online mining license applications</li>
                <li>💰 Royalty calculation and online payment system</li>
                <li>🧠 AI-powered chatbot</li>
                <li>🛠 Admin dashboards with role-based access</li>
                <li>🌐 Dedicated web portals for miners and officials</li>
              </ul>
              <p className="text-base md:text-lg mb-6">
                With over 1 million license applications per year and LKR 3.79 billion in revenue in 2022, this was a project that taught us the real value of building software that matters.
              </p>
              <a href="/project/ceylonmine" className="inline-block px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300">
                View Full Project Details
              </a>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">🔁 Always Learning, Always Building</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-card/80 rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-48">
              <img
                src="/pics/medium.png"
                alt="Medium Logo"
                className="w-32 h-32 object-contain rounded-2xl shadow-md"
              />
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-base md:text-lg mb-6">
                Even today, I continue to write articles on Medium, explore emerging tech, and contribute to the community by sharing what I learn. I don't just consume knowledge. I create, share, and improve.
              </p>
              <a href="https://medium.com/@janiduamaraweera" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 mt-2">
                <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.61-131.93 296.14-294.33 296.14S0 459.75 0 296.14 131.93 0 294.34 0s294.33 132.53 294.33 296.14z"/><ellipse cx="775.66" cy="296.5" rx="168.49" ry="296.21"/><path d="M1043.63 296.14c0 163.61-75.45 296.14-168.49 296.14s-168.49-132.53-168.49-296.14S782.1 0 875.14 0s168.49 132.53 168.49 296.14z"/></g></svg>
                Read My Articles on Medium
              </a>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">🚀 Why This Matters</span>
          </h2>
          <p className="text-lg md:text-xl text-center">
            I believe technology is not just a career. it's my playground, my canvas, and my toolkit to change lives.<br />Whether it's building solutions that scale, designing beautiful interfaces, writing meaningful content, or helping others get started, I'm here for it all.
          </p>
          <div className="bg-card/90 rounded-2xl shadow-xl border-2 border-primary px-8 py-8 max-w-3xl mx-auto mt-10 mb-8 flex items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="text-2xl md:text-3xl text-primary font-extrabold text-center drop-shadow-lg m-0">
              If you're looking for someone who's not afraid to try, fail, learn, and grow, you're in the right place.
            </p>
          </div>
        </section>
        <div className="text-center text-lg mt-8 text-muted-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">👇 Scroll down to view my full project portfolio, blog posts, and photography gallery.</span>
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-muted-foreground">
            My Medium Blog Posts
          </h2>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-card/90 rounded-2xl shadow-xl border border-primary/30 p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64 bg-background">
            <img
              src="/pics/ceylonmine/image3.jpg"
              alt="Our First Visit to GSMB: Understanding the Challenges in Mining"
              className="w-full h-auto rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 py-8 items-center md:items-start text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Our First Visit to GSMB: Understanding the Challenges in Mining</h3>
            <a href="https://medium.com/@janiduamaraweera/our-first-visit-to-gsmb-understanding-the-challenges-in-mining-84f6e118b113" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 mt-2">
              <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.61-131.93 296.14-294.33 296.14S0 459.75 0 296.14 131.93 0 294.34 0s294.33 132.53 294.33 296.14z"/><ellipse cx="775.66" cy="296.5" rx="168.49" ry="296.21"/><path d="M1043.63 296.14c0 163.61-75.45 296.14-168.49 296.14s-168.49-132.53-168.49-296.14S782.1 0 875.14 0s168.49 132.53 168.49 296.14z"/></g></svg>
              Read Full Medium Post
            </a>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-card/90 rounded-2xl shadow-xl border border-primary/30 p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64 bg-background">
            <img
              src="/pics/myjourney/medium1.png"
              alt="How I Learnt React and Spring Boot in Less Than a Week While Under Time Pressure"
              className="w-full h-auto rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 py-8 items-center md:items-start text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">How I Learnt React and Spring Boot in Less Than a Week While Under Time Pressure</h3>
            <a href="https://medium.com/@janiduamaraweera/how-i-learnt-react-and-spring-boot-in-less-than-a-week-while-under-time-pressure-dbf9245483ef" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 mt-2">
              <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.61-131.93 296.14-294.33 296.14S0 459.75 0 296.14 131.93 0 294.34 0s294.33 132.53 294.33 296.14z"/><ellipse cx="775.66" cy="296.5" rx="168.49" ry="296.21"/><path d="M1043.63 296.14c0 163.61-75.45 296.14-168.49 296.14s-168.49-132.53-168.49-296.14S782.1 0 875.14 0s168.49 132.53 168.49 296.14z"/></g></svg>
              Read Full Medium Post
            </a>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto bg-card/90 rounded-2xl shadow-xl border border-primary/30 p-0 md:p-0 overflow-hidden flex flex-col md:flex-row items-center mb-12">
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-64 bg-background">
            <img
              src="/pics/myjourney/medium2.jpeg"
              alt="Reflecting on an Inspiring Day at Google I/O Extended Sri Lanka!"
              className="w-full h-auto rounded-l-2xl md:rounded-l-2xl md:rounded-r-none shadow-md"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center px-8 py-8 items-center md:items-start text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Reflecting on an Inspiring Day at Google I/O Extended Sri Lanka!</h3>
            <a href="https://medium.com/@janiduamaraweera/reflecting-on-an-inspiring-day-at-google-i-o-extended-sri-lanka-cb45993eae4a" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-primary text-primary font-bold text-base shadow-sm hover:bg-primary hover:text-white transition-all duration-300 mt-2">
              <svg className="w-5 h-5 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 1043.63 592.71"><g><path d="M588.67 296.14c0 163.61-131.93 296.14-294.33 296.14S0 459.75 0 296.14 131.93 0 294.34 0s294.33 132.53 294.33 296.14z"/><ellipse cx="775.66" cy="296.5" rx="168.49" ry="296.21"/><path d="M1043.63 296.14c0 163.61-75.45 296.14-168.49 296.14s-168.49-132.53-168.49-296.14S782.1 0 875.14 0s168.49 132.53 168.49 296.14z"/></g></svg>
              Read Full Medium Post
            </a>
          </div>
        </div>
        <div className="text-center text-lg mt-8 text-muted-foreground">
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-muted-foreground">
            Event Highlights & Workshop Memories
          </h2>
        </div>
        <section className="mb-12">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              I've had the privilege of taking part in several photography events and workshops. These photos capture moments and memories from my journey through those incredible experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
              >
                <img
                  src={`/pics/myjourney/pho${num}.jpeg`}
                  alt={`Photography Event ${num}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">Photography Event #{num}</h3>
                    <p className="text-sm opacity-90">Capturing moments and stories</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  📸
                </div>
              </div>
                        ))}
          </div>
        </section>
        <div className="text-center text-lg mt-8 text-muted-foreground">
          <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-muted-foreground">
            Through My Lens
          </h2>
        </div>
        <section className="mb-12" id="through-my-lens">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              These are my captured moments, my personal gallery of photographs that tell stories through my unique perspective. Each image represents a moment in time that I found worth preserving, showcasing my journey as a photographer and my passion for visual storytelling.
            </p>
          </div>
          {/* --- Through My Lens Photo Gallery --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              "janindu1.jpg","janindu2.jpg","janindu3.jpg","janindu4.jpg","janindu5.jpg",
              "janindu6.jpg",
              "janindu9.jpg","janindu10.jpg","janindu11.jpg","janindu12.jpg","janindu13.jpg","janindu14.jpg","janindu15.jpg","janindu19.jpg","janindu20.jpg","janindu21.jpg","janindu22.jpg","janindu23.jpg","janindu26.jpg","janindu27.jpg","janindu29.jpg","janindu30.jpg","janindu31.jpg","janindu32.jpg","janindu33.jpg","janindu34.jpg","janindu35.jpg","janindu36.jpg","janindu37.jpg","janindu38.JPG","janindu39.JPEG","janindu41.JPEG","janindu42.JPEG","janindu43.PNG","janindu44.JPEG","janindu44.PNG"
            ].map((filename, idx) => (
              <div
                key={filename}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform bg-card animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <img
                  src={`/pics/myjourney/photograthy/${filename}`}
                  alt={`Through My Lens Photo ${idx + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">Photo #{idx + 1}</h3>
                    <p className="text-sm opacity-90">Through My Lens</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  📷
                </div>
              </div>
            ))}
          </div>
        </section>
        </main>
        <Footer />
    </div>
  );
}; 