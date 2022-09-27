import { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { NavBar } from './NavBar/NavBar';
import s from './NavBarContainer.module.sass';

import { LoginUser, SVGFriend, SvgGame, SVGPost, SVGUser } from 'components';
import { SVGMyProfile } from 'components/SVGComponent';
import { Path } from 'enum';
import { selectIsAuthUser } from 'state';
import { NavBarItemType } from 'types';

export const NAN_BAR_ITEMS: NavBarItemType[] = [
  {
    nameItem: `${Path.Profile}`,
    svg: <SVGMyProfile />,
  },
  {
    nameItem: `${Path.Games}`,
    svg: <SvgGame />,
  },
  {
    nameItem: `${Path.Friends}`,
    svg: <SVGFriend />,
  },
  {
    nameItem: `${Path.Posts}`,
    svg: <SVGPost />,
  },
  {
    nameItem: `${Path.Users}`,
    svg: <SVGUser />,
  },
];

export const NavBarContainer = (): ReactElement => {
  const isAuth = useSelector(selectIsAuthUser);

  return (
    <div className={s.container}>
      <NavBar navBarItems={NAN_BAR_ITEMS} />
      {isAuth && <LoginUser />}
    </div>
  );
};
