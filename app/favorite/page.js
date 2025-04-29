"use client";
import { useSelector } from "react-redux";
import { selectFavoritePokemons } from "@/app/RTK/selector";
import { Card } from "@/component/Card";

export default function Favorite() {
  const pokemon = useSelector(selectFavoritePokemons);
  return (
    <main className="bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]">
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </main>
  );
}
