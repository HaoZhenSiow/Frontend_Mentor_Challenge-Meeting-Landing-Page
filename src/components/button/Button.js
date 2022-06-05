import styled from 'styled-components';

const Button = styled.button`
  width: 193px;
  height: 58px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 900;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 29px;
  padding: 0;
  margin: 0;
  font-family: 'Red Hat Display', sans-serif;

  &:hover {
    background-color: #71C0D4;
  }

  & span {
    color: var(--light-blue);
    font-size: 16px;
    line-height: 26px;
    font-weight: 900;
  }
`;

export default Button;