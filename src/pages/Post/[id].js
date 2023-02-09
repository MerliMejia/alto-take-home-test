import Text from '@/atoms/Text';
import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import Link from 'next/link';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '..';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding-left: 2%;
  padding-right: 2%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 800px;
  max-height: 600px;
  margin-bottom: 3rem;
  border-radius: 2rem;
`;

export default function Post({ post, posts }) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout posts={posts}></MainLayout>
      <StyledContainer>
        <Image src={post.image} alt="Post Image" />
        <Text.Subtitle>{post.title}</Text.Subtitle>
        <Text>{post.content}</Text>
        <Link
          style={{ textDecoration: 'none', marginTop: '2rem' }}
          href={`/Post/edit/${post.id}`}
        >
          <Text.Subtitle>Edit</Text.Subtitle>
        </Link>
      </StyledContainer>
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const post = POSTS().find((post) => post.id.toString() === id);
  return {
    props: {
      post,
      posts: POSTS()
    }
  };
}
