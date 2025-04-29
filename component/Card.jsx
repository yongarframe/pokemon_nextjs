import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";
import { useRouter } from "next/navigation";

const CardContainer = styled.section`
  background-color: white;
  width: 150px;
  border: 1px solid gray;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  border-bottom: 5px solid black;
  border-right: 5px solid black;
  img {
    width: 120px;
  }
`;

const Spiner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f0f3f7;
  border-top: 5px solid red;
  border-radius: 50%;
  animation: rotatespinner 1s infinite;
  animation-timing-function: linear;

  @keyframes rotatespinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Card = memo(({ pokemon }) => {
  const router = useRouter();
  const [isImageLoading, setisImageLoading] = useState(true);
  return (
    <CardContainer onClick={() => router.push(`/detail/${pokemon.id}`)}>
      {isImageLoading ? <Spiner></Spiner> : null}
      <img
        onLoad={() => setisImageLoading(false)}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
      ></img>
      <div>
        {pokemon.name}
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
    </CardContainer>
  );
});
