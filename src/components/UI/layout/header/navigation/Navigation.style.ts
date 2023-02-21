import styled from 'styled-components';
import { MEDIA_QUERIES } from '../../../../../GlobalStyles';
import { menuGap } from '../Header.styled';

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: ${menuGap};

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const NavItem = styled.li`
  font-size: 2.4rem;

  &:hover {
    cursor: pointer;
  }

  & a {
    color: inherit;
    text-decoration: none;
  }
`;
