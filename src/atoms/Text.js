import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 16px;
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
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
`;

const StyledSubtitle = styled.h4`
  font-size: 24px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-decoration: none;
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
`;

const Text = ({ children, ...props }) => {
  return <StyledText {...props}>{children}</StyledText>;
};

const Subtitle = ({ children, ...props }) => {
  return <StyledSubtitle {...props}>{children}</StyledSubtitle>;
};

Text.Subtitle = Subtitle;

export default Text;
