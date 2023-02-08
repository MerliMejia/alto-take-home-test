import styled from 'styled-components';

const SimpleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  grid-gap: 1rem;
`;

export default SimpleGrid;