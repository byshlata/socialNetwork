import React, { ReactElement, useState } from 'react';

import { useSelector } from 'react-redux';

import { LoginPage } from 'components/loginPage/LoginPage';
import { CatalogGame } from 'pages/games/catalogGame/CatalogGeme';
import { Double } from 'pages/games/catalogGame/duble/Duoble';
import { selectIsAuthUser } from 'state';

export type TypeCatalogGame = {
  id: string;
  nameGame: string;
  descriptionGame: string;
  tsxGame: ReactElement;
};

const baseGame: Array<TypeCatalogGame> = [
  {
    id: '1',
    nameGame: 'DOUBLE',
    descriptionGame: 'Find two double number',
    tsxGame: <Double />,
  },
];

export const Games = (): ReactElement => {
  const [game, setGame] = useState<ReactElement>();
  const isAuth = useSelector(selectIsAuthUser);

  const startGame = (tsxGame: ReactElement): void => {
    setGame(tsxGame);
  };

  return (
    <>
      {isAuth || <LoginPage />}
      {game || <CatalogGame baseGame={baseGame} startGame={startGame} />}
    </>
  );
};
