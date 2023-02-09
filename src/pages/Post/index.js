import SimpleGrid from '@/atoms/SimpleGrid';
import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import PostCard from '@/molecules/PostCard';

export default function Post({ posts }) {
  return (
    <MainLayout posts={posts}>
      <SimpleGrid>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </SimpleGrid>
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      posts: POSTS()
    }
  };
}
