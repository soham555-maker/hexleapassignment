import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch(props: { className: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (theme === "light") {
    return (
      <FiSun
        onClick={() => setTheme("dark")}
        className={`cursor-pointer ${props.className} max-[320px]:w-[18px] max-[320px]:h-[18px] w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] `}
      />
    );
  } else {
    return (
      <FiMoon
        onClick={() => setTheme("light")}
        className={`cursor-pointer ${props.className} max-[320px]:w-[18px] max-[320px]:h-[18px] w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]`}
      />
    );
  }
}
