import styled from "styled-components";

import FeatureImages from "./FeatureImages";
import FeatureContent from "./FeatureContent";

const MAIN = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Features = () => {
  return (
    <MAIN>
      <FeatureImages/>
      <FeatureContent/>
    </MAIN>
    
  );
};

export default Features;