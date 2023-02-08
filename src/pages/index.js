import { POSTS } from '@/constants';
import ImageHero from '@/atoms/Hero';
import Header from '@/organisms/Header';
import styled, { ThemeProvider } from 'styled-components';
import NonFeaturedPosts from '@/molecules/NonFeaturedPosts';
import SuperFeaturedPostCard from '@/molecules/SuperFeaturedPostCard';
import PostCard from '@/molecules/PostCard';
import usePosts from '@/hooks/use-posts';
import MainLayout from '@/layouts/MainLayout';

export const theme = {
  colors: {
    primary: 'blue',
    primaryDark: 'darkblue',
    white: 'white'
  }
};

const SuperPostsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 1493px) {
    flex-direction: column;
  }
`;

const SuperPostsColumn = styled.div`
  display: flex;
  flex: ${(props) => (props.flex ? flex : '1')};
  align-items: stretch;
  justify-content: space-evenly;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default function Home({ posts }) {
  const { featuredPosts, superFeatured, nonFeaturedPosts } = usePosts(posts);

  return (
    <ThemeProvider theme={theme}>
      <MainLayout posts={posts}>
        <ImageHero />
        <NonFeaturedPosts
          style={{ marginTop: '2rem' }}
          posts={nonFeaturedPosts}
        />
        <SuperPostsContainer>
          <SuperPostsColumn style={{ width: '100%', height: '100%' }}>
            {superFeatured.map((post) => (
              <SuperFeaturedPostCard key={post.id} post={post} />
            ))}
          </SuperPostsColumn>
          <SuperPostsColumn>
            {featuredPosts.map((post) => (
              <PostCard
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                key={post.id}
                post={post}
              />
            ))}
          </SuperPostsColumn>
        </SuperPostsContainer>
      </MainLayout>
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
