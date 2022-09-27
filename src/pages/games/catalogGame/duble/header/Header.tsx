import React, { ReactElement } from 'react';

import s from 'pages/games/catalogGame/duble/header/Heade.module.sass';

type HeaderType = {
  score: number;
  newGame: () => void;
  hint: () => void;
};

export const Header = ({ hint, newGame, score }: HeaderType): ReactElement => {
  const onClickStartGame = (): void => {
    newGame();
  };
  const onSeeHint = (): void => {
    hint();
  };

  return (
    <header className={s.header}>
      <div className={s.score}>{score}</div>
      <button type="button" onClick={onClickStartGame} className={s.button}>
        New game
      </button>
      <button type="button" onClick={onSeeHint} className={s.button}>
        Hint
      </button>
    </header>
  );
};
