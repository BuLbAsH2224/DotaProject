import React, { useState } from "react";
import { IHeroStats } from "../../types";
import "./hero-roulette.styles.css";
import "react-roulette-pro/dist/index.css";
import RoulettePro from "react-roulette-pro";
import { getHeroImageUrlFromName } from "../../utils";
import { Link } from "react-router-dom";

interface IHeroRouletteProps {
  heroes: IHeroStats[];
}

export const HeroRouletteComponent: React.FC<IHeroRouletteProps> = ({
  heroes,
}) => {
  const heroPrizes = [
    ...heroes.map((item: IHeroStats) => {
      return {
        id: item.hero_id,
        image: getHeroImageUrlFromName(item.name),
        text: item.localized_name,
      };
    }),
  ];
  const [start, setStart] = useState(false);

  const jackpotSound = new Audio("jackpot-sound.mp3");
  const [prizeIndex,setPrizeIndex] = useState<number>(0)
  

  const handleStart = () => {
    setPrizeIndex(Math.floor((Math.random() * heroes.length)))
    setStart(true);
  };

  const handlePrizeDefined = () => {
    if (heroes[prizeIndex].localized_name.toLowerCase() === "pudge")
      jackpotSound.play();
      setRenderPreview(true)
    
  };
  const [renderPreview,setRenderPreview] = useState<boolean>(false)
  const handleOnClickClose :  React.MouseEventHandler<HTMLButtonElement> = ()  => {
    setRenderPreview(false)
    setStart(false);
  }
  return (
    <>
      <div className="rouletteHeroPreview" style={{ visibility: !renderPreview ? "hidden" : "visible"}}>
        <Link to={`/singleHero/${heroes[prizeIndex].id}`}><img src={`${getHeroImageUrlFromName(heroes[prizeIndex].name)}`} alt="hero img" /></Link>
        <button onClick={handleOnClickClose}>Закрыть</button>
      </div>
      <RoulettePro
        prizes={[...heroPrizes,...heroPrizes.slice(heroPrizes.length - 20)]}
        prizeIndex={prizeIndex}
        start={start}
        options={{stopInCenter: true}}
        defaultDesignOptions={{ prizesWithText: true}}
        soundWhileSpinning="roulette-spin.mp3"
        spinningTime={2}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart} disabled={start}>
        {start ? "Крутится..." : "Крутить"}
      </button>
    </>
  );
};
