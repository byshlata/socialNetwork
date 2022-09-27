import { GameOptions } from 'pages/games/catalogGame/duble/enums/gameOptions';
import { RectangleType } from 'pages/games/catalogGame/duble/types/types';

export const hintRectangles = (
  valueRectangle: number,
  rectangles: RectangleType[],
): RectangleType[] => {
  const rectangleNew = [...rectangles];
  const ONE = 1;
  const ZERO = 0;
  if (valueRectangle === GameOptions.initialCheckValue) {
    let value = 0;
    for (let i = ZERO; i < rectangleNew.length; i += ONE) {
      if (!rectangleNew[i].isDone) {
        value = rectangleNew[i].value;
        break;
      }
    }
    hintRectangles(value, rectangleNew);
  } else {
    for (let i = ZERO; i < rectangleNew.length; i += ONE) {
      if (rectangleNew[i].value === valueRectangle) {
        rectangleNew[i].hint = 'hintOn';
      }
    }
  }
  return rectangleNew;
};
