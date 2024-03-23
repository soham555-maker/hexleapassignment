import { spotLightState } from "../../Types/store.types";
import SpotCard from "../Card/SpotCard";
import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

export default function SpotContainer(props: { item: spotLightState[] }) {
  //   const [limits, setLimits] = useState([0, 3]);
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  //   const nextMovie = () => {
  //     if (limits[1] >= props.item.length) {
  //       setLimits([0, 3]);
  //       return;
  //     }
  //     setLimits([limits[0] + 3, limits[1] + 3]);
  //   };
  //   const prevMovie = () => {
  //     if (limits[0] <= 0) {
  //       setLimits([props.item.length - 3, props.item.length]);
  //       return;
  //     }
  //     setLimits([limits[0] - 3, limits[1] - 3]);
  //   };
  const nextMovie = (ele: HTMLDivElement | null) => {
    if (ele !== null) {
      ele.scrollLeft += 880 / 3;
    }
  };
  const prevMovie = (ele: HTMLDivElement | null) => {
    if (ele !== null) {
      ele.scrollLeft -= 880 / 3;
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 w-[307px] sm:w-[590px] md:w-[779px] lg:w-[839px] xl:w-[1240px] md:h-[732px] xl:h-[918px] ${
        theme === "dark"
          ? "bg-gradient-to-b from-[#18272a] via-[#1c212b] to-[#201c2b] "
          : "bg-primary"
      } p-[10px] `}
    >
      <h1 className="font-bold  max-[500px]:text-[28px] sm:text-[42px]  md:text-[52px] py-3">
        Collection Spotlight
      </h1>
      <p className="w-[80%] text-center max-[500px]:pb-1 pb-4 md:pb-8 sm:text-[16px] max-[500px]:text-[12px]">
        Discover extraordinary moments with our Spotlight Collection
        metatickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </p>
      <div className="flex justify-center w-full">
        <div
          ref={ref}
          className="crousel w-[155px] sm:w-[375px] md:w-[570px] xl:w-[860px] h-[430px] xl:h-[624px] overflow-x-auto md:scrollbar-none scrollbar-hide md:scroll-smooth flex justify-start  gap-10 transition-all duration-500 ease-in-out"
        >
          {/* {props.item.filter((item)=> item.id>=limits[0] && item.id<limits[1] ).map((item) => (
          <SpotCard key={item.id} item={item} />
        ))} */}
          {props.item.map((item) => (
            <SpotCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <SlArrowLeft
        className=" cursor-pointer absolute hidden md:block md:mt-[0px] xl:mt-[180px] md:mr-[700px] xl:mr-[1000px] xl:size-[30px] md:size-[20px] "
        onClick={() => prevMovie(ref.current)}
      />
      <SlArrowRight
        size={30}
        className=" cursor-pointer absolute hidden md:block md:mt-[0px] xl:mt-[180px] md:ml-[700px] xl:ml-[1000px] xl:size-[30px] md:size-[20px] "
        onClick={() => nextMovie(ref.current)}
      />
    </div>
  );
}
