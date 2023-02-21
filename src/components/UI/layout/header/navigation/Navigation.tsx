import React from 'react';
import { NavList, NavItem } from './Navigation.style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../../../../types/redux';
import { selectIsAuth } from '../../../../../store/auth/authSelectors';
import { logOut } from '../../../../../services/auth';

type Props = {
  closeMenu: () => void;
};

function Navigation(props: Props) {
  const { t } = useTranslation();
  const isAuth = useAppSelector(selectIsAuth);

  let content: JSX.Element;
  if (isAuth) {
    content = (
      <>
        <NavItem
          onClick={() => {
            props.closeMenu();
            logOut();
          }}
        >
          <Link to="/">{t(`header.signOut`)}</Link>
        </NavItem>
        <NavItem onClick={props.closeMenu}>
          <Link to="/boards">{t(`header.boards`)}</Link>
        </NavItem>
        <NavItem onClick={props.closeMenu}>
          <Link to="/edit-profile">{t(`header.editProfile`)}</Link>
        </NavItem>
      </>
    );
  } else {
    content = (
      <>
        <NavItem onClick={props.closeMenu}>
          <Link to="/login">{t(`header.logIn`)}</Link>
        </NavItem>
        <NavItem onClick={props.closeMenu}>
          <Link to="/signup">{t(`header.signUp`)}</Link>
        </NavItem>
      </>
    );
  }

  return (
    <nav>
      <NavList>{content}</NavList>
    </nav>
  );
}

export default Navigation;
