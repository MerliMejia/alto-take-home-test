import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '..';

export default function Post({ post, posts }) {
  console.log(post);
  return (
    <ThemeProvider theme={theme}>
      <MainLayout posts={posts}></MainLayout>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  console.log(id);
  const post = POSTS.find((post) => post.id.toString() === id);
  console.log(post);
  return {
    props: {
      post,
      posts: POSTS
    }
  };
}
