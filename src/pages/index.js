import { useMemo, useState } from 'react';
import { POSTS } from '@/constants';
import ImageHero from '@/atoms/Hero';
import Header from '@/organisms/Header';
import { ThemeProvider } from 'styled-components';
import NonFeaturedPosts from '@/molecules/NonFeaturedPosts';

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

  const [featuredPosts, nonFeaturedPosts] = useMemo(
    () =>
      posts.reduce(
        (acc, post) => {
          if (post.featured) {
            acc[0].push(post);
          } else {
            acc[1].push(post);
          }
          return acc;
        },
        [[], []]
      ),
    [posts]
  );

  const handleOnSearchChange = (value) => {
    console.log(value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Header data={data} handleOnChange={handleOnSearchChange} />
      <ImageHero />
      <NonFeaturedPosts
        style={{ marginTop: '2rem' }}
        posts={nonFeaturedPosts}
      />
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
