import styled from 'styled-components';

import Indicator from '../ui/Indicator';
import Button from "../button/Button";

const FooterStyle = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--fluid-container-padding);
  padding-top: 92px;
  padding-bottom: clamp(calc(66px + (72px - 66px) * var(--multiplier-s-min)), calc(66px + (72px - 66px) * (1 - var(--multiplier-s-var))), 72px);
  background-color: rgb(77, 150, 169, .8);
  color: var(--white);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('./assets/mobile/image-footer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }

  h2 {
    margin: 0;
    color: var(--white);
  }

  p {
    font-style: 16px;
    line-height: 26px;
    width: clamp(calc(327px + (457px - 327px) * var(--multiplier-s-min)), calc(327px + (457px - 327px) * var(--multiplier-s-var)), calc(327px + (457px - 327px) * var(--multiplier-s-max)));
    margin-top: clamp(calc(24px + (32px - 24px) * var(--multiplier-s-min)), calc(24px + (32px - 24px) * var(--multiplier-s-var)), calc(24px + (32px - 24px) * var(--multiplier-s-max)));
    margin-bottom: clamp(calc(32px + (40px - 32px) * var(--multiplier-s-min)), calc(32px + (40px - 32px) * var(--multiplier-s-var)), calc(32px + (40px - 32px) * var(--multiplier-s-max)));
  }

  svg {
    margin: 0;
    position: absolute;
    right: 50%;
    top: 0;
    transform-origin: 50% 80%;
    transform: translate(50%, -80%);
  }

  @media (min-width: 768px) {
    &::after {
      background-image: url('./assets/tablet/image-footer.jpg');
    }
  }

  

  @media (min-width: 769px) {
    padding-top: clamp(calc(92px + (116px - 92px) * var(--multiplier-b-min)), calc(92px + (116px - 92px) * var(--multiplier-b-var)), calc(92px + (116px - 92px) * var(--multiplier-b-max)));
    padding-bottom: clamp(calc(66px + (104px - 66px) * var(--multiplier-b-min)), calc(66px + (104px - 66px) * var(--multiplier-b-var)), calc(66px + (104px - 66px) * var(--multiplier-b-max)));
  }

  @media (min-width: 1220px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    p {
      width: 19.45em;
      margin: 0;
    }

    &::after {
      background-image: url('./assets/desktop/image-footer.jpg');
    }
  }
`;

const PurpleButton = styled(Button)`
  background-color: var(--purple);

  span {
    color: var(--light-purple);
  }

  &:hover {
    background-color: #B18BDD;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <Indicator>02</Indicator>
      <h2>Experience more<br/>together</h2>
      <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
      <PurpleButton>Download <span>v1.3</span></PurpleButton>
    </FooterStyle>
  );
};

export default Footer;