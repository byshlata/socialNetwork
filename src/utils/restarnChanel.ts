const DELAY_RESTART = 3000;

export const closeHandel = (callback: Function): void => {
  setTimeout(callback, DELAY_RESTART);
};
