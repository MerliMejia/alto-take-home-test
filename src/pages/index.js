import { useState } from 'react';
import { POSTS } from '@/constants';
import ImageHero from '@/atoms/Hero';
import Header from '@/organisms/Header';
import { ThemeProvider } from 'styled-components';

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
