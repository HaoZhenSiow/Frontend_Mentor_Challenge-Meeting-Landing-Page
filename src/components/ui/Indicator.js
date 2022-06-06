import styled from 'styled-components';

const SVG = styled.svg`
  align-self: center;
  margin-top: clamp(calc(64px + (80px - 64px) * var(--multiplier-s-min)), calc(64px + (80px - 64px) * var(--multiplier-s-var)), calc(64px + (80px - 64px) * var(--multiplier-s-max)));
  margin-bottom: clamp(calc(64px + (67px - 64px) * var(--multiplier-s-min)), calc(64px + (67px - 64px) * var(--multiplier-s-var)), calc(64px + (67px - 64px) * var(--multiplier-s-max)));

  ellipse {
    fill: var(--white);
  }

  @media (min-width: 768px) {
    margin-top: clamp(calc(80px + (110px - 80px) * var(--multiplier-b-min)), calc(80px + (110px - 80px) * var(--multiplier-b-var)), calc(80px + (110px - 80px) * var(--multiplier-b-max)));
    margin-bottom: clamp(calc(64px + (67px - 64px) * var(--multiplier-b-min)), calc(64px + (67px - 64px) * (1 - var(--multiplier-b-var))), calc(64px + (67px - 64px) * var(--multiplier-b-max)));
  }
`;

const Text = styled.text`
  font-size: 16px;
  line-height: 26px;
  font-weight: 900;
  font-family: 'Red Hat Display', sans-serif;
`;

const Indicator = props => {
  return (
    <SVG width="56" height="140">
      <g>
        <line y2="84" x2="28" y1="0" x1="28" stroke="#87879d" strokeOpacity={0.25} fill="none"/>
        <ellipse ry="27" rx="27" cy="112" cx="28" stroke="#87879d" strokeOpacity={0.25} fill="none"/>
        <Text font-weight="normal" text-anchor="start" stroke-width="0" y="117" x="19" stroke="none" fill="#87879d">{props.children}</Text>
      </g>
    </SVG>
  );
}

export default Indicator;