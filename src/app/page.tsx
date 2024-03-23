"use client";
import { RootState } from "./Redux/Store/store";
import { useSelector } from "react-redux";
import CardContainer from "../../Components/Containers/CardContainer";
import SpotContainer from "../../Components/Containers/SpotContainer";

export default function Home() {
  const { data, spotLight, adds } = useSelector(
    (state: RootState) => state.data
  );

  return (
    <main className="flex min-h-screen flex-col gap-[50px] items-center p-24">
      <h1 className="text-6xl font-bold">Hexleap Assignment</h1>
      <CardContainer data={data} adds={adds} />
      <SpotContainer item={spotLight} />
    </main>
  );
}
