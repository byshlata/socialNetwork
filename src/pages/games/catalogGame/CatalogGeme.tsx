import React, { ReactElement } from 'react';

import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { Path } from 'enum';
import s from 'pages/games/catalogGame/CatalogGame.module.sass';
import poster from 'pages/games/catalogGame/duble/assets/Double.png';
import { TypeCatalogGame } from 'pages/games/Games';

type CatalogGameType = {
  baseGame: Array<TypeCatalogGame>;
  startGame: (componentGame: ReactElement) => void;
};

export const CatalogGame = ({ baseGame, startGame }: CatalogGameType): ReactElement => {
  const onStartGameHandler = (tsxGame: ReactElement): void => {
    startGame(tsxGame);
  };

  return (
    <div>
      {baseGame.map(m => (
        <div className={s.catalogGameWrapper} key={m.id}>
          <img className={s.image} src={poster} alt="imgGames" />
          <div className={s.textCatalogGame}>{m.nameGame}</div>
          <div>{m.descriptionGame}</div>
          <NavLink
            className={s.linkButton}
            to={`${Path.Root}${Path.Games}${Path.Root}${m.nameGame.toLowerCase()}`}
          >
            <Button type="primary" onClick={() => onStartGameHandler(m.tsxGame)}>
              Start
            </Button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
