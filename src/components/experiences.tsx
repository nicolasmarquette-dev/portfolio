export const Experiences = () => {
  return (
    <div className="text-white">
      <h1 className="underline text-3xl sm:text-4xl lg:text-6xl text-center py-10 sm:py-16 tracking-widest">
        Mes expériences
      </h1>

      <div className="flex flex-col sm:flex-row justify-around items-center sm:items-stretch space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="w-80 sm:w-96 bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-40 sm:h-56">
            <img
              className="w-full h-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Minist%C3%A8re_des_Arm%C3%A9es.svg/1200px-Minist%C3%A8re_des_Arm%C3%A9es.svg.png"
              alt="Logo du Ministère des Armées"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Développeur Web Fullstack - 02/2022 - Maintenant
            </h5>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Développement d'une application Web de visualisation de données
              massive en ReactJs et Java 21.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              En savoir plus
            </button>
          </div>
        </div>

        <div className="w-80 sm:w-96 bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="relative h-40 sm:h-56">
            <img
              className="w-full h-full object-cover"
              src="https://images-porsche.imgix.net/-/media/A94EBA201B724DCA8080B04040108A3D_156FB71137CF4DD59989FD82350B325E_porsche-normal?w=1344&h=756&q=45&crop=faces%2Centropy%2Cedges&auto=format"
              alt="Logo de Porsche France"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h5 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Stage Support IT - 02/2021 - 08/2021
            </h5>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Support technique et informatique de tous les collaborateurs de
              Porsche France ainsi que les concessions en France.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
