import { DataState } from "../../Types/store.types";

export default function Card(props: { item: DataState }) {
  return (
    <div
      key={props.item.id}
      className="flex flex-col justify-start  gap-4 max-[500px]:w-[140px] w-[152px] min-[1280px]:w-[222px] h-[424px] min-[1280px]:h-[511px] bg-primary-contrast p-[10px] rounded-sm shadow-md"
    >
      <div className="image">
        <img
          src={props.item.poster_path}
          className="h-[247px] w-[150px] min-[1280px]:h-[386.41px] min-[1280px]:w-[217px] object-cover hover:scale-[1.02] z-0 hover:z-0 transition duration-300 ease-in-out cursor-pointer rounded-sm"
          alt=""
          height="386.41px"
          width="217px"
        />
      </div>
      <div className="font-bold text-[15px] xl:text-lg h-[40px] truncate ...">
        {props.item.title}
      </div>
      <div className="flex bg-primary  justify-between px-2 rounded-sm h-[85px] w-[90%]">
        {/* <div>
          <small className="text-offset text-[10px] h-[20px] ">
            Total Events
          </small>
          <p className="font-semibold">{props.item.total_events} Events</p>
        </div>
        <div>
          <small className="text-offset text-[10px] h-[20px]">Sports</small>
          <p className=" font-semibold">{props.item.category}</p>
        </div> */}
        <table className="w-[100%] table-fixed" width={2}>
          <tbody>
            <tr>
              <td className=" max-[400px]:p-0 ">
                <small className="text-offset text-[10px] xl:text-sm truncate ... w-[50%]">
                  Total Events
                </small>
              </td>
              <td>
                <small className="text-offset text-[10px] xl:text-sm truncate ...">
                  Sports
                </small>
              </td>
            </tr>
            <tr>
              <td>
                <p className="font-semibold text-[10px] lg:text-sm xl:text-base truncate ...">
                  {props.item.total_events} Events
                </p>
              </td>
              <td>
                <p className=" font-semibold text-[10px] lg:text-sm xl:text-base truncate ...">
                  {props.item.category}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
