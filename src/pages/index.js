import Button from '@/atoms/Button';
import ImageHero from '@/atoms/Hero';
import Input from '@/atoms/Input';
import Logo from '@/atoms/Logo';
import Text from '@/atoms/Text';
import MainMenu from '@/molecules/MainMenu';
import AutocompleteInput from '@/molecules/AutocompleteInput';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: 'blue',
    primaryDark: 'darkblue',
    white: 'white'
  }
};

export default function Home() {
  const [data, setData] = useState([
    'Apple',
    'Banana',
    'Orange',
    'Pineapple',
    'Strawberry',
    'Watermelon'
  ]);
  const handleOnSelect = (value) => {
    console.log(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Button>Test</Button>
      <Text>Normal text</Text>
      <Text.Subtitle>Subtitle</Text.Subtitle>
      <Input />
      <Logo />
      <MainMenu />
      <ImageHero />
      <AutocompleteInput data={data} onSelect={handleOnSelect}>
        Auto complete?
      </AutocompleteInput>
    </ThemeProvider>
  );
}
