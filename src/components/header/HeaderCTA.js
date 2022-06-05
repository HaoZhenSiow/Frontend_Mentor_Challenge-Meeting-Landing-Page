import styled from 'styled-components';

import HeroImg from './HeroImg';
import Button from '../button/Button';

const HeaderCTAstyled = styled.section`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;


  h1 {
    padding: 0;
    margin: 0;
  }

  & p {
    width: clamp(calc(327px + (457px - 327px) * var(--multiplier-s-min)), calc(327px + (457px - 327px) * var(--multiplier-s-var)), calc(327px + (457px - 327px) * var(--multiplier-s-max)));
    margin-top: clamp(calc(24px + (34px - 24px) * var(--multiplier-s-min)), calc(24px + (34px - 24px) * var(--multiplier-s-var)), calc(24px + (34px - 24px) * var(--multiplier-s-max)));
    margin-bottom: 32px;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px
  }

  @media (min-width: 768px) {
    & p {
      width: clamp(calc(457px + (540px - 457px) * var(--multiplier-b-min)), calc(457px + (540px - 457px) * var(--multiplier-b-var)), calc(457px + (540px - 457px) * var(--multiplier-b-max)));
      margin-top: 34px;
    }

    .buttons {
      flex-direction: row;
    }
  }

  @media (min-width: 769px) {
    background-image: url('./assets/desktop/image-hero-left.png'), url('./assets/desktop/image-hero-right.png');
    background-repeat: no-repeat;
    background-position: top 0 right var(--hero-offset), bottom 0 left var(--hero-offset);
    background-size: 394px;
    padding-top: calc((47/18) * 1em);
    padding-bottom: calc((7/18) * 1em);
  }
`;

const PurpleButton = styled(Button)`
  background-color: var(--purple);
  width: 139px;
  &:hover {
    background-color: #B18BDD;
  }
`;

const HeaderCTA = () => {
  return (
    <HeaderCTAstyled aria-label='hero'>
      <HeroImg/>
      <h1>
        Group Chat<br/>for Everyone
      </h1>
      <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</p>
      <div className='buttons'>
        <Button>Download <span>v1.3</span></Button>
        <PurpleButton>What is it?</PurpleButton>
      </div>
    </HeaderCTAstyled>
  );
};

export default HeaderCTA;