import React from "react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary"> Education</span>
        </h2>
        <div className="flex flex-col gap-12">
          {/* University of Westminster */}
          <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8">
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
          <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8">
            <img
              src="/pics/rahula.png"
              alt="Rahula College Logo"
              className="w-32 h-32 object-contain rounded-2xl border-4 border-white mb-4 md:mb-0 md:mr-8"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Rahula College</h3>
              <p className="text-lg mt-2">2014 - 2023</p>
              <ul className="list-disc ml-5 mt-2 text-md">
                <li>G.C.E. Ordinary Level (O/L): Achieved 9 A's in English Medium including ICT (2019).</li>
                <li>G.C.E. Advanced Level (A/L): Completed in Mathematics (Combined Maths, Physics, Chemistry) (2022).</li>
              </ul>
            </div>
          </div>

          {/* Vijitha Central College */}
          <div className="flex flex-col md:flex-row items-center rounded-xl p-8 gap-8">
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
  );
}; 