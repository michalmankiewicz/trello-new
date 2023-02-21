import React, { PropsWithChildren } from 'react';
import Header from './header/Header';
import Main from './main/Main';
import { LayoutContainer } from './Layout.styled';

type Props = {
  isLoading: boolean;
};

function Layout(props: PropsWithChildren<Props>) {
  return (
    <LayoutContainer>
      <Header isLoading={props.isLoading} />
      <Main>{props.children}</Main>
    </LayoutContainer>
  );
}

export default Layout;
