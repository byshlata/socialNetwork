import { ReactElement, useEffect, useState } from 'react';

import { BodyGame } from 'pages/games/catalogGame/duble/bodyGame/BodyGame';
import { GameOptions } from 'pages/games/catalogGame/duble/enums/gameOptions';
import {
  RectangleCheckType,
  RectangleType,
  statusGameType,
} from 'pages/games/catalogGame/duble/types/types';
import { changeRectangles } from 'pages/games/catalogGame/duble/utils/changeRectangels';
import { createRectangleNewGame } from 'pages/games/catalogGame/duble/utils/createRectangleNewGame';
import { hintRectangles } from 'pages/games/catalogGame/duble/utils/hintRectangles';

export const Double = (): ReactElement => {
  const [rectangles, setRectangles] = useState<RectangleType[]>([]);
  const [statusGame, setStatusGame] = useState<statusGameType>('pending');
  const [score, setScore] = useState<number>(GameOptions.startScore);
  const [invertedRectangles, setInvertedRectangles] = useState<RectangleCheckType>({
    idRectangle: GameOptions.initialCheckValue,
    valueOnRectangle: GameOptions.initialCheckValue,
  });

  useEffect(() => {
    setRectangles(createRectangleNewGame());
  }, []);

  const flipCard = (idRectangle: number, valueOnRectangle: number): void => {
    if (invertedRectangles.valueOnRectangle === valueOnRectangle) {
      setInvertedRectangles({
        idRectangle: GameOptions.initialCheckValue,
        valueOnRectangle: GameOptions.initialCheckValue,
      });
      const result = changeRectangles(idRectangle, rectangles);
      setRectangles(result.rectangles);
      setScore(score + GameOptions.bonus);
      if (
        result.numberOpenRectangle === rectangles.length &&
        score < GameOptions.lossScore
      ) {
        setStatusGame('loss');
        setScore(score);
      }
      if (
        result.numberOpenRectangle === rectangles.length &&
        score >= GameOptions.lossScore
      ) {
        setStatusGame('victory');
      }
    }
    if (
      invertedRectangles.valueOnRectangle !== valueOnRectangle &&
      invertedRectangles.valueOnRectangle === GameOptions.initialCheckValue
    ) {
      setInvertedRectangles({ idRectangle, valueOnRectangle });
      const result = changeRectangles(idRectangle, rectangles);
      setRectangles(result.rectangles);
    }
    if (
      invertedRectangles.valueOnRectangle !== valueOnRectangle &&
      invertedRectangles.valueOnRectangle !== GameOptions.initialCheckValue
    ) {
      setInvertedRectangles({
        idRectangle: GameOptions.initialCheckValue,
        valueOnRectangle: GameOptions.initialCheckValue,
      });
      const result = changeRectangles(invertedRectangles.idRectangle, rectangles);
      setRectangles(result.rectangles);
      setScore(score + GameOptions.antiBonus);
    }
  };

  const newGame = (): void => {
    setScore(GameOptions.startScore);
    setRectangles(createRectangleNewGame());
    setStatusGame('pending');
  };

  const hint = (): void => {
    setRectangles(hintRectangles(invertedRectangles.valueOnRectangle, rectangles));
    setScore(score + GameOptions.antiBonus * GameOptions.indexHint);
  };
  return (
    <BodyGame
      rectangles={rectangles}
      flipCard={flipCard}
      score={score}
      newGame={newGame}
      hint={hint}
      statusGame={statusGame}
    />
  );
};
