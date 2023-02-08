import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { POSTS } from '@/constants';
import MainMenu from '@/molecules/MainMenu';
import AutocompleteInput from '@/molecules/AutocompleteInput';
import Button from '@/atoms/Button';
import ImageHero from '@/atoms/Hero';
import Header from '@/organisms/Header';

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
  const handleOnSearchChange = (value) => {
    console.log(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header data={data} handleOnChange={handleOnSearchChange} />
      <ImageHero />
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
