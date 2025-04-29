"use client";
import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
// import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "@/app/RTK/selector";
import { Card } from "@/component/Card";

export default function Search({ searchParams }) {
  const params = searchParams.pokemon;
  const reg = getRegExp(params);
  // const [searchParams] = useSearchParams();
  // const params = searchParams.get("pokemon");
  // const reg = getRegExp(params);

  const pokemon = useSelector(selectPokemonByRegExp(reg));

  return (
    <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </main>
  );
}
