import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;

export default Button;
