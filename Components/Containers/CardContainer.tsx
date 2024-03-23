import Card from "../Card/Card";
import AddCard from "../Card/AddCard";
import React, { useEffect, useState } from "react";
import Buttons from "../Utils/Buttons";
import { DataState, AddState } from "../../Types/store.types";

interface CardContainerProps {
  data: DataState[];
  adds: AddState[];
}

interface showState {
  limit: number;
  status: boolean;
}

export default function CardContainer({
  data,
  adds,
}: CardContainerProps): JSX.Element {
  const [show, setShow] = useState<showState>({ limit: 4, status: false });
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  const handleShow = (): void => {
    if (!show.status) {
      setShow({
        limit: show.limit + 4,
        status: data.length <= show.limit + 4 ? true : false,
      });
    } else {
      setShow({
        limit: 4,
        status: data.length <= show.limit - 4 ? true : false,
      });
    }
  };
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="flex flex-col gap-2 justify-center items-start">
      <div className="py-[10px]">
        <h3 className="inline-block border-b-2  pb-1 text-2xl border-blue-400 hover:text-transparent bg-clip-text hover:bg-blue-500 cursor-pointer">
          Sports
        </h3>
      </div>
      <div className="grid max-[520px]:grid-cols-2 grid-cols-3 w-[80vw] md:grid-cols-4 lg:grid-cols-5  sm:[560px] md:w-[844px] min-[1280px]:w-[1244px] gap-[5px] xl:gap-[30px] container">
        {data
          .filter((item) => item.id < show.limit)
          .map((item, indx) => (
            <React.Fragment key={indx}>
              <Card item={item} />
              {(item.id + 1) % 4 == 0 ? (
                <AddCard item={adds[getRandomInt(adds.length)]} />
              ) : null}
            </React.Fragment>
          ))}
      </div>
      <div className="flex justify-center w-full pt-4">
        <Buttons
          text={show.status ? "see less" : "see more"}
          onClick={handleShow}
        />
      </div>
    </div>
  );
}
