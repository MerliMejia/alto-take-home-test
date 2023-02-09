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

const StyledTextArea = styled(StyledInput).attrs({
  as: 'textarea'
})`
  height: 100px;
  resize: vertical;
`;

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const StyledSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = ({ ...props }) => {
  return <StyledInput {...props} />;
};

const TextArea = ({ ...props }) => {
  return <StyledTextArea {...props} />;
};

const Switch = ({ ...props }) => {
  return (
    <StyledSwitch>
      <StyledSwitchInput type="checkbox" {...props} />
      <StyledSlider className="slider" />
    </StyledSwitch>
  );
};

Input.TextArea = TextArea;
Input.Switch = Switch;

export default Input;
