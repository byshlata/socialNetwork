import React, { ReactElement } from 'react';

import s from 'pages/games/catalogGame/duble/plaingField/PlayingField.module.sass';
import { RectangleType } from 'pages/games/catalogGame/duble/types/types';

type PlayingFieldType = {
  rectangles: RectangleType[];
  flipCard: (idRectangle: number, valueOnRectangle: number) => void;
};

export const PlayingField = ({
  rectangles,
  flipCard,
}: PlayingFieldType): ReactElement => (
  <div className={s.playingField}>
    {rectangles.map(m => {
      if (m.isDone) {
        return (
          <div key={m.id} className={m.hint === 'hintOn' ? s.rectangleHint : s.rectangle}>
            {m.value}
          </div>
        );
      }
      return (
        <div
          key={m.id}
          className={m.hint === 'hintOn' ? s.rectangleHint : s.rectangle}
          role="button"
          aria-label="change"
          tabIndex={0}
          onKeyDown={() => 'void'}
          onClick={() => {
            flipCard(m.id, m.value);
          }}
        />
      );
    })}
  </div>
);
