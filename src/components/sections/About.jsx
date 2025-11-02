import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "MaterialUI",
    "Bootstrap",
    "Python (+Django+Flask)",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "HTML",
    "CSS",
    "jQuery",
    "Redux",
    "Testcafé",
    "Git",
    "C++ (Hobby)"
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-gray-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-800 mb-6">
              I build modern web applications and craft innovative solutions that bring ideas to life.<br /><br />
              In my spare time - aside from being a husband and father - I enjoy creating music in combination with embedded and audio programming using C++.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-blue-500"> Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-500"> Education </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong> M.Eng. in Mechanical Engineering </strong> - EAH Jena
                  <p className="text-gray-800 mb-4">
                    - Design of Experiments for Python-Scripted Optimization of Ultrasound Sensor Systems.
                  </p>
                </li>
                <li>
                  <strong> B.Eng. in Mechanical Engineering </strong> - EAH Jena
                  <p className="text-gray-800 mb-4">- Acoustic Design Simulations for Percussion Instruments</p>
                </li>
                <li>
                  <strong> LL.B. in Economic Law </strong> - HS Anhalt
                  <p className="text-gray-800 mb-4">- Bad Faith Trademark Registrations Practices</p>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-blue-500"> Work Experience </h3>
              <div className="space-y-4 text-gray-700">
                
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Freelance Software Developer (2022 - present){" "}
                  </h4>
                  <p className="text-gray-800 mb-4">
                    Projects undertaken for companies such as Wackenhut GmbH & Co. KG, MBWell Services GmbH, Texsib GmbH, and MyVision GmbH.
                    </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at Wackenhut GmbH & Co. KG (2021 - 2022){" "}
                  </h4>
                  <p className="text-gray-800 mb-4">
                    Designed and developed full-stack internal applications and automation scripts to streamline processes and enhance operational efficiency.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Developer at Serviceware AG (2020 - 2021){" "}
                  </h4>
                  <p className="text-gray-800 mb-4">
                    Developed and maintained the React-based front end of a large-scale monolithic application as part of a cross-functional Scrum team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
