import { RectangleType } from 'pages/games/catalogGame/duble/types/types';

export const createRectangleNewGame = (): RectangleType[] => {
  const startArray: RectangleType[] = [
    { id: 1, value: 1, isDone: false, hint: 'hintNotPassed' },
    { id: 2, value: 1, isDone: false, hint: 'hintNotPassed' },
    { id: 3, value: 2, isDone: false, hint: 'hintNotPassed' },
    { id: 4, value: 2, isDone: false, hint: 'hintNotPassed' },
    { id: 5, value: 3, isDone: false, hint: 'hintNotPassed' },
    { id: 6, value: 3, isDone: false, hint: 'hintNotPassed' },
    { id: 7, value: 4, isDone: false, hint: 'hintNotPassed' },
    { id: 8, value: 4, isDone: false, hint: 'hintNotPassed' },
    { id: 9, value: 5, isDone: false, hint: 'hintNotPassed' },
    { id: 10, value: 5, isDone: false, hint: 'hintNotPassed' },
    { id: 11, value: 6, isDone: false, hint: 'hintNotPassed' },
    { id: 12, value: 6, isDone: false, hint: 'hintNotPassed' },
    { id: 13, value: 7, isDone: false, hint: 'hintNotPassed' },
    { id: 14, value: 7, isDone: false, hint: 'hintNotPassed' },
    { id: 15, value: 8, isDone: false, hint: 'hintNotPassed' },
    { id: 16, value: 8, isDone: false, hint: 'hintNotPassed' },
  ];
  const ONE = 1;
  const ZERO = 0;
  for (let i = startArray.length - ONE; i > ZERO; i -= ONE) {
    const j = Math.floor(Math.random() * (i + ONE));
    [startArray[i], startArray[j]] = [startArray[j], startArray[i]];
  }
  return startArray;
};
