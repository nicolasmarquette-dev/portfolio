export const NavBar = (): JSX.Element => {
  return (
    <div className="bg-gray-200 h-[10vh] top-0 sticky">
      <div className="mx-4 sm:mx-6 lg:mx-10 flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-lg sm:text-xl lg:text-2xl font-bold">
          MARQUETTEplace LOGO
        </div>

        {/* Navigation links */}
        <div className=" flex items-center space-x-[4vw]">
          <div>Qui suis-je ?</div>
          <div>Expériences</div>
          <div>Compétences</div>
          <div>Formations</div>
          <div className="bg-white px-5 py-3 rounded-lg">Me contacter</div>
        </div>

        {/* Mobile menu button (for very small screens) */}
        <div className="sm:hidden text-base font-medium">Menu</div>
      </div>
    </div>
  );
};
