import Input from '@/atoms/Input';
import Text from '@/atoms/Text';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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

const AutocompleteInput = ({ data, onChange, ...props }) => {
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
    onChange(item);
  };

  return (
    <AutocompleteContainer {...props}>
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onBlur={() => inputValue.length === 0 && setFilteredData([])}
        placeholder="Search..."
      />
      {filteredData.length > 0 && (
        <AutocompleteList>
          {filteredData.map((item, index) => (
            <Link
              style={{ textDecoration: 'none' }}
              key={index}
              href={`/Post/${item.id}`}
            >
              <AutocompleteItem onClick={() => handleSelect(item)}>
                <Text>{item.title}</Text>
              </AutocompleteItem>
            </Link>
          ))}
        </AutocompleteList>
      )}
    </AutocompleteContainer>
  );
};

export default AutocompleteInput;
