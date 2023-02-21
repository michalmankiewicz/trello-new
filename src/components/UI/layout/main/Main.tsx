import { MainContainer } from './Main.styled';

const Main = (props: React.PropsWithChildren) => {
  return <MainContainer>{props.children}</MainContainer>;
};

export default Main;
