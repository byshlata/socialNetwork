export type RectangleType = {
  id: number;
  value: number;
  isDone: boolean;
  hint: hintStatusType;
};
export type RectangleCheckType = {
  idRectangle: number;
  valueOnRectangle: number;
};

export type RectangleUtilType = {
  rectangles: RectangleType[];
  numberOpenRectangle: number;
};

export type statusGameType = 'victory' | 'loss' | 'pending';

export type hintStatusType = 'hintOn' | 'hintPassed' | 'hintNotPassed';
