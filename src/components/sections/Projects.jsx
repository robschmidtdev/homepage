import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">A Minimalistic Frontend Framework</h3>
              <p className="text-gray-400 mb-4">
                RobJS - offers a React-like experience while staying within the vanilla JavaScript ecosystem, providing fully functional features with fast build performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://robjs.org"
                  target="blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Agentic AI TeamBuilder</h3>
              <p className="text-gray-400 mb-4">
                Agentic AI TeamBuilder uses employee data and skills to intelligently suggest optimal project teams.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "RobJS", "PHP"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://robschmidtdev.github.io/agenticai/"
                  target="blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            
            </div> */}

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">The Krell Patch</h3>
              <p className="text-gray-400 mb-4">
                Implementation of the legendary Krell Patch from the movie Forbidden Planet. A fun webapp that generates unique soundscapes to inspire creativity and relaxation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://robschmidtdev.github.io/krellpatch/"
                  target="blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">TuneSpring Product Animation</h3>
              <p className="text-gray-400 mb-4">
                A sleek 3D animation that brings the product to life, captivate users and showcase the brand with style.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "Three.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://robschmidtdev.github.io/tunespring/"
                  target="blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>  */}

            {/* <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-green-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Timing God</h3>
              <p className="text-gray-400 mb-4">
                A webapp that hones your inner metronome. Practice timing, stay in the groove, and level up your rhythm skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "RobJS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-green-500/10 text-green-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-green-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  target="blank"
                  className="text-green-400 hover:text-green-300 transition-colors my-4"
                >
                  Coming Soon
                </a>
              </div>
            
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};