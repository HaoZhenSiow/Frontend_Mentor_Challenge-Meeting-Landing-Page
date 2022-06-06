import styled from 'styled-components';

import HeaderCTA from './HeaderCTA';
import Indicator from '../ui/Indicator';

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;

  & .logo {
    align-self: center;
    margin-top: 48px;
    margin-bottom: clamp(calc(54px + (64px - 54px) * var(--multiplier-s-min)), calc(54px + (64px - 54px) * var(--multiplier-s-var)), calc(54px + (64px - 54px) * var(--multiplier-s-max)));

    @media (min-width: 768px) {
      margin-top: clamp(calc(48px + (80px - 48px) * var(--multiplier-b-min)), calc(48px + (80px - 48px) * var(--multiplier-b-var)), calc(48px + (80px - 48px) * var(--multiplier-b-max)));
      margin-bottom: clamp(calc(61px + (64px - 61px) * var(--multiplier-b-min)), calc(61px + (64px - 61px) * (1 - var(--multiplier-b-var))), calc(61px + (64px - 61px) * var(--multiplier-b-max)));
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <img className='logo' src="./assets/logo.svg" alt="logo"/>
      <HeaderCTA></HeaderCTA>
      <Indicator alt="indicator">01</Indicator>
    </HeaderStyled>
    
  );
  

};

export default Header;