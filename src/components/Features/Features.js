import styled from "styled-components";

import FeatureImages from "./FeatureImages";
import FeatureContent from "./FeatureContent";

const Sect = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Features = () => {
  return (
    <Sect aria-labelledby="feature">
      <FeatureImages/>
      <FeatureContent/>
    </Sect>
    
  );
};

export default Features;