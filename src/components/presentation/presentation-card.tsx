import Me from "../../assets/me.jpg";
import { Button } from "../ui/moving-border";

export const PresentationCard = (): JSX.Element => {
  return (
    <div className="relative">
      <img
        src={Me}
        alt="Ma photo"
        className="absolute top-[-30%] left-[-2%]  w-[30vh] h-[30vh] z-10"
      />
      <div>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Borders are cool
        </Button>
      </div>
      <div className="bg-gray-300 w-[60vw] h-[40vh] rounded-3xl border-2"></div>
    </div>
  );
};
