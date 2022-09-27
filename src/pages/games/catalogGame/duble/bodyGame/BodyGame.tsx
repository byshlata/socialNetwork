import React, { ReactElement } from 'react';

import s from 'pages/games/catalogGame/duble/bodyGame/BodyGame.module.sass';
import { Header } from 'pages/games/catalogGame/duble/header/Header';
import { PlayingField } from 'pages/games/catalogGame/duble/plaingField/PlayingField';
import { RectangleType, statusGameType } from 'pages/games/catalogGame/duble/types/types';
import { YouLuser } from 'pages/games/catalogGame/duble/youLoser/YouLuser';
import { YouWin } from 'pages/games/catalogGame/duble/youWin/YouWin';

type BodyGameType = {
  rectangles: RectangleType[];
  flipCard: (idRectangles: number, valueOnRectangle: number) => void;
  score: number;
  newGame: () => void;
  hint: () => void;
  statusGame: statusGameType;
};

export const BodyGame = ({
  rectangles,
  newGame,
  flipCard,
  hint,
  score,
  statusGame,
}: BodyGameType): ReactElement => {
  let bodyGame: ReactElement;
  if (statusGame === 'pending') {
    bodyGame = <PlayingField rectangles={rectangles} flipCard={flipCard} />;
  } else if (statusGame === 'loss') {
    bodyGame = <YouLuser />;
  } else {
    bodyGame = <YouWin />;
  }

  return (
    <div className={s.BodyGame}>
      <Header score={score} newGame={newGame} hint={hint} />
      {bodyGame}
    </div>
  );
};
