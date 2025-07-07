import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

export const MyJourney = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
          🌟 My Journey – From Curious Kid to Aspiring Software Engineer
        </h1>
        <section className="mb-12">
          <p className="text-lg md:text-xl mb-4">
            Hi, I'm <span className="font-semibold">Janindu Amaraweera</span>, a passionate tech explorer and Software Engineering undergraduate from Panadura, Sri Lanka, currently studying at the Informatics Institute of Technology (IIT) affiliated with the University of Westminster.
          </p>
          <p className="text-lg md:text-xl">
            Ever since I was a kid, I've had a deep curiosity about how things work—especially in the world of technology.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">📺 It All Started with a YouTube Channel (2015)</h2>
          <p className="mb-2">Back in Grade 7, I launched my first tech-focused YouTube channel, recording tutorials, app reviews, and tech tips from my home using just a basic mobile phone. It wasn't perfect—but it was real.</p>
          <a href="https://www.youtube.com/@janinduamaraweera" target="_blank" rel="noopener noreferrer" className="text-primary underline">👉 View My Old YouTube Videos</a>
          <div className="flex gap-4 mt-4">
            {/* Embed video thumbnails or screenshots here */}
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">YouTube Thumbnail</div>
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">YouTube Thumbnail</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🛍️ Turning Lockdown Into Opportunity – My Entrepreneurial Chapter</h2>
          <p className="mb-2">During the COVID-19 lockdown, while many were stuck indoors, I launched my own online store and became a Daraz seller. I handled real customer orders, managed logistics, and generated income—turning theory into action and learning business the hard (and rewarding) way.</p>
          <div className="flex gap-4 mt-4">
            {/* Images/screenshots of store, product listings, etc. */}
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Store Screenshot</div>
            <div className="w-40 h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">Product Listing</div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">🏫 Academic Highlights with a Twist</h2>
          <ul className="list-disc ml-6 mb-2">
            <li>Studied at Rahula College, Matara</li>
            <li>Scored 181 marks in the Grade 5 scholarship</li>
            <li>Earned 9 A's in O/Ls</li>
            <li>Used A/L time to build, create, and experiment</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-2">📸 Creativity Is My Secret Superpower</h2>
          <p className="mb-2">Beyond code, I express myself through photography, video editing, drawing, and creative writing. I've won awards in Sinhala writing and drawing competitions, and my visual storytelling passion shines through in UI/UX design and front-end development.</p>
          <div className="flex gap-4 mt-4">
            {/* Add a photography gallery, sketches, creative pieces here */}
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
            {/* Screenshots of UI, dashboards, project structure, meeting photos */}
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