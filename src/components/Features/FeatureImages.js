import styled from "styled-components";

const DIV = styled.div`
  padding: var(--fluid-container-padding);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 24px;

  img {
    width: 100%;
    border-radius: 8px;
  }  

  div:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
  div:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
  div:nth-child(3) { grid-area: 2 / 1 / 3 / 2; }
  div:nth-child(4) { grid-area: 2 / 2 / 3 / 3; }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: clamp(calc(11px + (30px - 11px) * var(--multiplier-b-min)), calc(11px + (30px - 11px) * var(--multiplier-b-var)), calc(11px + (30px - 11px) * var(--multiplier-b-max)));

    div:nth-child(1) { grid-area: 1 / 1 / 2 / 2; }
    div:nth-child(2) { grid-area: 1 / 2 / 2 / 3; }
    div:nth-child(3) { grid-area: 1 / 3 / 2 / 4; }
    div:nth-child(4) { grid-area: 1 / 4 / 2 / 5; }
  }
`;

const FeatureImages = () => {
  return (
    <DIV>
      <div><img src="./assets/desktop/image-woman-in-videocall.jpg" alt="woman in videocall" /></div>
      <div><img src="./assets/desktop/image-women-videochatting.jpg" alt="women video chatting" /></div>
      <div><img src="./assets/desktop/image-men-in-meeting.jpg" alt="men in meeting" /></div>
      <div><img src="./assets/desktop/image-man-texting.jpg" alt="man texting" /></div>
    </DIV>
  );
};

export default FeatureImages;