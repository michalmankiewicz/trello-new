import styled from 'styled-components';
import theme from '../../utils/styledCompentsUtils/theme';
import { MEDIA_QUERIES } from '../../GlobalStyles';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: ${MEDIA_QUERIES.w64}) {
    flex-direction: column;
  }
`;

export const Headline = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  gap: 2.4rem;

  @media (max-width: ${MEDIA_QUERIES.w64}) {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 4.4rem;

  & span {
    display: block;
  }

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    font-size: 3.6rem;
  }
`;
export const Description = styled.p`
  font-size: 2.6rem;
  color: ${theme.colors.greyDark};

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    font-size: 2.4rem;
  }
`;
export const StyledLink = styled(Link)`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  font-size: 2rem;
  padding: 1.8rem 3.6rem;
  align-self: flex-start;

  &:hover {
    cursor: pointer;
    background-color: #6591e6;
  }

  @media (max-width: ${MEDIA_QUERIES.w64}) {
    align-self: center;
  }
`;

export const ImgContianer = styled.div``;

export const Img = styled.img`
  height: 85vh;
  max-height: 65rem;

  @media (max-width: ${MEDIA_QUERIES.w85}) {
    max-height: 55rem;
  }

  @media (max-width: ${MEDIA_QUERIES.w50}) {
    height: auto;
    width: 100%;
  }
`;
