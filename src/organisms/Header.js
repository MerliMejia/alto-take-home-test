const { default: Button } = require('@/atoms/Button');
const { default: AutocompleteInput } = require('@/molecules/AutocompleteInput');
const { default: MainMenu } = require('@/molecules/MainMenu');
const { default: styled } = require('styled-components');

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledSearchSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ data, handleOnChange }) => (
  <StyledHeader>
    <MainMenu />
    <StyledSearchSection>
      <AutocompleteInput
        data={data}
        onChange={handleOnChange}
        style={{ marginRight: '1rem' }}
      />
      <Button>BUSCAR</Button>
    </StyledSearchSection>
  </StyledHeader>
);

export default Header;
