import Me from "../../assets/me_marquette_2.png";
export const PresentationCard = (): JSX.Element => {
  return (
    <div className="grid place-items-center h-[90vh] text-white">
      <main className="container mx-auto px-4">
        <div className="bg-black bg-opacity-30 rounded-3xl p-8 backdrop-blur-sm hover:shadow-purple-500 hover:shadow-2xl hover:duration-1000">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={Me}
              alt="Nicolas MARQUETTE"
              className="w-48 h-48 rounded-full border-4 border-purple-400 shadow-lg"
            />
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-2">Nicolas MARQUETTE</h2>
              <h3 className="text-2xl text-purple-300 mb-6">
                Développeur Web Fullstack - Ingénieur en Informatique
              </h3>
              <ul className="space-y-3">
                {[
                  "Développeur Web Fullstack et Ingénieur en informatique.",
                  "Plus de 3 ans d'expérience dans le développement Web.",
                  "Capacité à concevoir des solutions innovantes et performantes",
                  "Saisir rapidement les enjeux et les besoins des clients.",
                  "Proposer des solutions adaptées à chaque projet.",
                  "Dynamique, motivé et à l'écoute des nouvelles technologies, avec un effort constant d'amélioration des compétences.",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
