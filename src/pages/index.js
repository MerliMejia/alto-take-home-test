import Button from '@/atoms/Button';
import ImageHero from '@/atoms/Hero';
import Input from '@/atoms/Input';
import Logo from '@/atoms/Logo';
import Text from '@/atoms/Text';
import MainMenu from '@/molecules/MainMenu';
import AutocompleteInput from '@/molecules/AutocompleteInput';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { POSTS } from '@/constants';

const theme = {
  colors: {
    primary: 'blue',
    primaryDark: 'darkblue',
    white: 'white'
  }
};

export default function Home({ posts }) {
  console.log(posts);
  const [data, setData] = useState(posts);
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

export async function getServerSideProps(context) {
  return {
    props: {
      posts: POSTS
    }
  };
}
