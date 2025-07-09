import React from "react";

export const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary"> Extracurricular Activities</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Medium Blog Writer Card */}
          <div className="flex flex-col items-center bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/pics/medium.png"
              alt="Medium Logo"
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">Medium Blog Writer</h3>
            <p className="text-md text-muted-foreground text-center mb-6">
              I write tech-focused blog posts on Medium, covering software engineering, web development, and the latest trends.
            </p>
            <a
              href="https://medium.com/@janiduamaraweera"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-base md:text-lg"
            >
              Visit My Medium
            </a>
          </div>

          {/* Photography Enthusiast Card */}
          <div className="flex flex-col items-center bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src="/pics/third.jpeg"
              alt="Photography Sample"
              className="w-20 h-20 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-center">Photography Enthusiast</h3>
            <p className="text-md text-muted-foreground text-center mb-6">
              Actively involved in photography as an extracurricular activity, capturing moments and creative visuals.
            </p>
            <a
              href="https://thirdeyeofjanindu.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-base md:text-lg"
            >
              Visit My Photography Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 