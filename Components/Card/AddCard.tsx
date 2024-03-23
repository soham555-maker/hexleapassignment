import { AddState } from "../../Types/store.types";

export default function AddCard(props: { item: AddState }) {
  return (
    <div
      key={props.item.id}
      className="flex flex-col justify-start  gap-4 max-[500px]:w-[140px] w-[150px] min-[1280px]:w-[222px] h-[424px] min-[1280px]:h-[511px] bg-primary-contrast p-[10px] rounded-sm shadow-md"
    >
      <div className="image">
        <h6 className=" bg-black text-white p-[1px] px-2 absolute min-[1280px]:ml-[171px] text-xs font-semibold">
          Ad
        </h6>
        <img
          src={props.item.poster_path}
          className="h-[150px] w-[150px] min-[1280px]:h-[218px] min-[1280px]:w-[217px] object-cover "
          alt=""
          height="218px"
          width="217px"
        />
      </div>
      <div className=" text-base font-semibold text-center min-[1280px]:text-xl truncate ...">
        {props.item.title}
      </div>
      <div className=" text-offset min-[1280px]:px-5 px-1 min-[1280px]:text-[13.5px] text-[10px] ">
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
