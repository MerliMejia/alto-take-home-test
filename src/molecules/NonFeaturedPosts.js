import SimpleGrid from '@/atoms/SimpleGrid';
import Text from '@/atoms/Text';
import PostCard from './PostCard';

const NonFeaturedPosts = ({ posts, ...props }) => {
  return (
    <SimpleGrid {...props}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </SimpleGrid>
  );
};

export default NonFeaturedPosts;
