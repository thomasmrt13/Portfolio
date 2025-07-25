import Timeline from "../components/Timeline";
import { educationData } from "../datas/education";

function AboutSection() {
  return (
    <div className="w-full text-center py-10 sm:py-20 px-4 sm:px-10 md:px-20 xl:px-60">
      <h1 className="text-5xl sm:text-7xl text-slate-50 font-bold">A propos de moi</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        {/* Avatat */}
        <div className="flex justify-center items-center p-10 bg-test min-h-80 border border-zinc-800 rounded-2xl shadow-lg">
          <img
            src="/images/avatar.png"
            alt="Avatar"
            className="rounded-full w-52 h-52 object-cover object-top mt-1 border border-gray-700"
          />
        </div>

        {/* Présentation */}
        <div className="flex p-10 bg-test md:col-span-2 border border-zinc-800 rounded-2xl shadow-lg">
          <div className="flex flex-col justify-around h-full">
            <p className="text-left text-sm text-slate-400 font-mono font-semibold">
              {"<p>"}
            </p>
            <div className="flex border-l-2 border-slate-400 pl-4 ml-3">
              <p className="text-left text-base sm:text-lg text-slate-50 leading-relaxed font-mono">
                Bonjour ! Je suis Thomas, 24 ans, développeur passionné par la
                création d'applications web et mobiles. J'aime relever des défis
                techniques et apprendre de nouvelles technologies pour améliorer
                mes compétences 🚀.
              </p>
            </div>
            <p className="text-left text-sm text-slate-400 font-mono font-semibold">
              {"</p>"}
            </p>
          </div>
        </div>

        {/* Formation */}
        <div className="flex flex-col p-5 bg-test md:col-span-2 border border-zinc-800 rounded-2xl shadow-lg">
          <div className="mb-4">
            <span className="relative inline-block">
              <span className="relative z-10 text-2xl font-bold">
                Formation
              </span>
              <span className="absolute inset-x-0 top-1/2 h-1/2 bg-purple-900 z-0"></span>
            </span>
          </div>
          <div className="flex-1 flex items-center">
            <Timeline items={educationData} />
          </div>
        </div>

        {/* CV */}
        <div className="flex flex-col justify-between bg-test h-80 border border-zinc-800 rounded-2xl shadow-lg p-5">
          <div>
            <span className="relative inline-block">
              <span className="relative z-10 text-2xl font-bold">
                Télécharger mon CV
              </span>
              <span className="absolute inset-x-0 top-1/2 h-1/2 bg-purple-900 z-0"></span>
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <a
              href="/documents/CV_Thomas_Martin.pdf"
              download
              className="relative px-6 py-3 text-white font-mono text-lg font-semibold rounded-md bg-purple-900 hover:bg-purple-700 transition-colors duration-300 animate-bounce"
            >
              Cliquez ici
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
