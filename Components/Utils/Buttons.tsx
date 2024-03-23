import { use, useEffect } from "react";

interface ButtonProps {
  text: string;
  onClick?(): void;
}
export default function Buttons({ text, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      id="button"
      className={`font-mono hover:scale-[1.02] active:scale-[0.98] items-center px-2 py-1 max-[320px]:text-[10px] max-[320px]:px-[0.8px] max-[320px]:py-0 text-sm md:px-4 md:py-2 bg-secondary text-primary rounded-md md:text-base cursor-pointer hover:text-gray-1000  hover:bg-gradient-to-r from-[#c740fe] via-[#8735fe] to-[#4a2bff] hover:text-white transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
}
