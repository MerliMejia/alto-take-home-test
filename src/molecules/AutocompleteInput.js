import Input from '@/atoms/Input';
import Text from '@/atoms/Text';
import { useState } from 'react';
import styled from 'styled-components';

const AutocompleteContainer = styled.div`
  position: relative;
`;

const AutocompleteList = styled.ul`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background-color: white;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  z-index: 10;
`;

const AutocompleteItem = styled.li`
  padding: 0.5rem;
  &:hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;

const AutocompleteInput = ({ data, onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSelect = (item) => {
    setInputValue(item.title);
    setFilteredData([]);
    onSelect(item);
  };

  return (
    <AutocompleteContainer>
      <Input value={inputValue} onChange={handleInputChange} />
      {filteredData.length > 0 && (
        <AutocompleteList>
          {filteredData.map((item, index) => (
            <AutocompleteItem key={index} onClick={() => handleSelect(item)}>
              <Text>{item.title}</Text>
            </AutocompleteItem>
          ))}
        </AutocompleteList>
      )}
    </AutocompleteContainer>
  );
};

export default AutocompleteInput;
