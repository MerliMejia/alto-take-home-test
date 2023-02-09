import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';

const { default: PostForm } = require('@/molecules/PostForm');

const CreatePost = ({ posts }) => {
  const onSave = (post) => {
    console.log(post);
  };

  return (
    <MainLayout posts={posts}>
      <PostForm onSubmit={onSave} />
    </MainLayout>
  );
};

export default CreatePost;

export async function getServerSideProps(context) {
  return {
    props: {
      posts: POSTS
    }
  };
}
