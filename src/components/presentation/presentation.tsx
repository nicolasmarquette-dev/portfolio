import { PresentationCard } from "./presentation-card";
import { TechCard } from "./tech-card";

export const Presentation = (): JSX.Element => {
  return (
    <>
      <div className="z-0">
        <PresentationCard />
      </div>
      <TechCard />
    </>
  );
};
