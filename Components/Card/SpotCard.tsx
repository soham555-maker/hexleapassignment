import { spotLightState } from "../../Types/store.types";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function SpotCard(props: { item: spotLightState }) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  useEffect(() => setMounted(true), []);
  if (!mounted) return;
  <div key={props.item.id}>
    <div className="flex flex-col justify-start  gap-4 w-[257px] h-[624px]  p-[10px] rounded-sm  bg-primary-contrast ">
      <div className="image w-[100%] flex justify-center ">
        <div className="h-[386.41px] w-[217px] object-cover hover:scale-[1.02] z-0 hover:z-0 transition duration-300 ease-in-out cursor-pointer rounded-sm bg-primary-contrast"></div>
      </div>
      <div className="flex flex-col justify-center items-center pt-6">
        <div className="font-bold text-xl h-[27px] mb-[15px] bg-primary-contrast"></div>
        <div>
          <p className=" text-center text-offset text-[12px] font-normal h-[12px] mb-[15px] bg-primary-contrast"></p>
        </div>
        <div>
          <p className=" font-thin text-offset  text-center text-sm h-[31px] bg-primary-contrast"></p>
        </div>
        <div
          id="button"
          className={`font-mono text-md z-[-1] hover:scale-[1.02] active:scale-[0.98] items-center w-[213px] py-2 mt-8 bg-primary-contrast text-white rounded-sm cursor-pointer hover:text-gray-1000  hover:bg-gradient-to-r from-[#c740fe] via-[#8735fe] to-[#4a2bff] hover:text-white transition duration-300 ease-in-out`}
        ></div>
      </div>
    </div>
  </div>;
  return (
    <div key={props.item.id} className="relative">
      <div
        className={`circle absolute w-3 h-5 rounded-r-full  ${
          theme === "dark" ? "bg-[#1d212b]" : "bg-[#f7f7f8]"
        } xl:mt-[410px] mt-[262px]`}
      ></div>
      <div
        className={`circle z-20 absolute w-3 h-5 rounded-l-full  ${
          theme === "dark" ? "bg-[#1d212b]" : "bg-[#f7f7f8]"
        } xl:mt-[410px] mt-[262px] ml-[140px] xl:ml-[245px] `}
      ></div>
      <div className="flex flex-col items-center">
        <div className="dashed-line h-0 xl:w-[220px] w-[100px] border-[1px] absolute border-dashed border-gray-400 bo xl:mt-[420px] mt-[270px] "></div>
      </div>

      <div className="flex flex-col justify-start  gap-4 w-[152px] h-[424px] xl:w-[257px] xl:h-[624px]  p-[10px] rounded-sm  bg-primary-contrast ">
        <div className="image w-[100%] flex justify-center ">
          <img
            src={props.item.poster_path}
            className="h-[247px] w-[150px] min-[1280px]:h-[386.41px] min-[1280px]:w-[217px] object-cover hover:scale-[1.02] z-0 hover:z-0 transition duration-300 ease-in-out cursor-pointer rounded-sm"
            alt=""
            height="386.41px"
            width="217px"
          />
        </div>
        <div className="flex flex-col justify-center items-center pt-6">
          <div className="font-bold text-sm xl:text-xl xl:h-[27px] mb-[10px] xl:mb-[15px] truncate ...">
            {props.item.title}
          </div>
          <div>
            <p className=" text-center text-offset text-[10px] xl:text-[12px] font-normal xl:h-[12px] xl:mb-[15px]">
              {props.item.Date} | {props.item.Day} | {props.item.Time}
            </p>
          </div>
          <div>
            <p className=" font-thin text-offset  text-center text-[9px] xl:text-sm xl:h-[31px]">
              {props.item.Venue}
            </p>
          </div>
          <button
            id="button"
            className={`font-mono text-xs xl:text-md hover:scale-[1.02] h-[40px] active:scale-[0.98] items-center xl:w-[213px] xl:py-2 mt-[10px] xl:mt-8 bg-black text-white rounded-sm cursor-pointer hover:text-gray-1000  hover:bg-gradient-to-r from-[#c740fe] via-[#8735fe] to-[#4a2bff] hover:text-white transition duration-300 ease-in-out`}
          >
            {props.item.Collection_Name}
          </button>
        </div>
      </div>
    </div>
  );
}
