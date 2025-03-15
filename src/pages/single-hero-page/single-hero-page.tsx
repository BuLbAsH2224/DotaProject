import "./single-hero-page.styles.css";
import { useParams } from "react-router-dom";
import { IHeroStats, IItems } from "../../types";
import React, { useEffect, useState } from "react";
import { HeroFullComponent } from "../../components";
import { getOneHeroWithId } from "../../utils";

interface ISingleHeroPageProps {
  heroesStats: IHeroStats[] | undefined;
  items: IItems | undefined
}

const SingleHeroPage: React.FC<ISingleHeroPageProps> = ({ heroesStats,items }) => {
  const { id } = useParams<{ id: string }>();
  const [heroStats, setHeroStats] = useState<IHeroStats | null>(null);

  useEffect(() => {
    if (id && heroesStats) {
      const hero = getOneHeroWithId(heroesStats, parseInt(id));
      setHeroStats(hero);
    }
  }, [id, heroesStats]);

  return (
    <>{heroStats ? <HeroFullComponent hero={heroStats} items={items}/> : <p>notFound</p>}</>
  );
};

export { SingleHeroPage };
