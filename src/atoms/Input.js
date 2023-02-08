import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  ${({ color }) =>
    color &&
    `
    color: ${color};
  `}
  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${fontSize}px;
  `}
  ${({ width }) =>
    width &&
    `
    width: ${width};
  `}
  :focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  }
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

export default Input;
