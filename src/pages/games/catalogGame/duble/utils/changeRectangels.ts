import {
  RectangleType,
  RectangleUtilType,
} from 'pages/games/catalogGame/duble/types/types';

export const changeRectangles = (
  idRectangle: number,
  rectangles: RectangleType[],
): RectangleUtilType => {
  let numberOpenRectangle = 0;
  const ONE = 1;
  const ZERO = 0;
  const rectanglesNew: RectangleType[] = [...rectangles];
  for (let i = ZERO; i < rectanglesNew.length; i += ONE) {
    if (rectanglesNew[i].id === idRectangle) {
      rectanglesNew[i].isDone = !rectanglesNew[i].isDone;
    }
    if (rectanglesNew[i].isDone) {
      rectanglesNew[i].hint = 'hintPassed';
    }
    if (rectanglesNew[i].isDone) {
      numberOpenRectangle += ONE;
    }
  }

  return { rectangles: rectanglesNew, numberOpenRectangle };
};
