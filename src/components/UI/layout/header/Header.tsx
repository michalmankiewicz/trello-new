import { useState } from 'react';
import { HeaderContainer, Logo, Menu, LanguageButton, ActionsMobile } from './Header.styled';
import { List } from 'phosphor-react';
import { useTranslation } from 'react-i18next';
import Navigation from './navigation/Navigation';

type Props = {
  isLoading: boolean;
};

function Header(props: Props) {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    if (i18n.language === 'en') i18n.changeLanguage('pl');
    else if (i18n.language === 'pl') i18n.changeLanguage('en');

    closeMenu();
  };

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <HeaderContainer>
      <Logo onClick={closeMenu} to="/">
        <img src="assets/kanban_logo.svg" />
        <p>Trello</p>
      </Logo>
      <Menu isMenuOpened={isMenuOpened}>
        {!props.isLoading && <Navigation closeMenu={closeMenu} />}
        <LanguageButton onClick={toggleLanguage}>{i18n.language.toUpperCase()}</LanguageButton>
      </Menu>
      <ActionsMobile onClick={toggleMenu}>
        <List weight="bold" />
      </ActionsMobile>
    </HeaderContainer>
  );
}

export default Header;
