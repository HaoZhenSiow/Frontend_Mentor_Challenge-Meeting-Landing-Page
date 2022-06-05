import styled from "styled-components";

const Article = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(calc(327px + (573px - 327px) * var(--multiplier-s-min)), calc(327px + (573px - 327px) * var(--multiplier-s-var)), calc(327px + (573px - 327px) * var(--multiplier-s-max)));
  margin-top: clamp(calc(48px + (64px - 48px) * var(--multiplier-s-min)), calc(48px + (64px - 48px) * (1 - var(--multiplier-s-var))), 64px);
  margin-bottom: clamp(calc(176px + (192px - 176px) * var(--multiplier-s-min)), calc(176px + (192px - 176px) * var(--multiplier-s-var)), calc(176px + (192px - 176px) * var(--multiplier-s-max)));
  h2 {
    max-width: 11.125em;
  }
  p {
    margin: 0;
  }

  .content {
    max-width: clamp(calc(540px + (573px - 540px) * var(--multiplier-b-min)), calc(540px + (573px - 540px) * (1 - var(--multiplier-b-var))), calc(540px + (573px - 540px) * var(--multiplier-b-max)));
  }

  @media (min-width: 768px) {
    margin-top: clamp(calc(48px + (80px - 48px) * var(--multiplier-b-min)), calc(48px + (80px - 48px) * var(--multiplier-b-var)), calc(48px + (80px - 48px) * var(--multiplier-b-max)));
    margin-bottom: clamp(calc(184px + (192px - 184px) * var(--multiplier-b-min)), calc(184px + (192px - 184px) * (1 - var(--multiplier-b-var))), calc(184px + (192px - 184px) * var(--multiplier-b-max)));
  }
`;

const Overline = styled.p`
  font-weight: 900;
  color: var(--blue);
  letter-spacing: 4px;
`;

const FeatureContent = () => {
  return (
    <Article>
      <Overline>BUILT FOR MODERN USE</Overline>
      <h2 id="feature">Smarter meetings, all in one place</h2>
      <p className="content">Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</p>
    </Article>
  )
};

export default FeatureContent;