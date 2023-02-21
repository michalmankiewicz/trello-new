import { HeroContainer, Description, Headline, Title, Img, StyledLink } from './Hero.styled';
import { useTranslation, Trans } from 'react-i18next';

function Hero() {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <Headline>
        <Title>
          <Trans i18nKey={'hero.title'}>
            Project <span>managment app</span>
          </Trans>
        </Title>
        <Description>{t('hero.description')}</Description>
        <StyledLink to="/boards">{t('hero.getStarted')}</StyledLink>
      </Headline>
      <Img src="assets/hero-section.svg" alt="People using kanban board" />
    </HeroContainer>
  );
}

export default Hero;
