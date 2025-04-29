"use client";

import { useSelector } from "react-redux";
import { selectPokemonById } from "@/app/RTK/selector";
import FavoriteButton from "@/component/FavoriteButton";
import FlipCard from "@/component/FlipCard";

export default function Detail({ params }) {
  const pokemonId = params.id;
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
      <div className="bg-white flex flex-col  justify-center items-center border border-black py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px]">
        <div className="text-[28px] mb-[10px]">
          {pokemon.name}
          <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>

        <div className="text-center whitespace-pre-wrap ">
          {pokemon.description}
        </div>
        <FlipCard front={pokemon.front} back={pokemon.back} />
      </div>
    </main>
  );
}
