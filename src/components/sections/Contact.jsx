import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="text-center px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            robert[at]robschmidt[dot]info
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};
