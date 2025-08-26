import { RevealOnScroll } from "../RevealOnScroll";
import { StarBackground } from "../StarBackground";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <StarBackground />
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-500 to-gray-400 bg-clip-text text-transparent leading-right">
            Robert Schmidt
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm a Full Stack Developer - mainly experienced (5+ years) in React. <br/> Backed by strong skills in Python and PHP, I can develop and contribute to cutting-edge systems of many kinds, including Agentic AI Applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-green-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="https://github.com/robschmidtdev/"
              target="blank"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
            >
              View Github
            </a>

            <a
              href="#contact"
              className="border border-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-green-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
