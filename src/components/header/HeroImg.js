import styled from 'styled-components';

const HeroImg = styled.div`
  /* background-color: var(--black); */
  height: clamp(calc(153px + (303px - 153px) * var(--multiplier-s-min)), calc(153px + (303px - 153px) * var(--multiplier-s-var)), calc(153px + (303px - 153px) * var(--multiplier-s-max)));
  width: 100%;
  min-width: 370px;
  margin-bottom: var(--hero-image-mb);
  background-image: url('./assets/desktop/image-hero-left.png'), url('./assets/desktop/image-hero-right.png');
  background-repeat: no-repeat;
  background-position: top 0 left var(--hero-offset), top 0 right var(--hero-offset);
  background-size: clamp(calc(199px + (394px - 199px) * var(--multiplier-s-min)), calc(199px + (394px - 199px) * var(--multiplier-s-var)), calc(199px + (394px - 199px) * var(--multiplier-s-max)));

  @media (min-width: 769px) {
    & {
      display: none;
    }
  }
`;

export default HeroImg;