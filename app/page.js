"use client";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import { useEffect } from "react";
import { Card } from "@/component/Card";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
  }, []);
  const pokemonData = useSelector((state) => state.pokemon.data);

  return (
    <>
      <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
        {pokemonData.map((el) => (
          <Card key={el.id} pokemon={el} />
        ))}
      </main>
    </>
  );
}
