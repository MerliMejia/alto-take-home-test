import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import PostForm from '@/molecules/PostForm';
import { useState } from 'react';

const EditPostPage = ({ post, posts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSave = async (newPost) => {
    setIsLoading(true);
    const res = await fetch('/api/Post', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...newPost, id: post.id })
    });
    if (res.ok) {
      const { postid } = await res.json();
      window.location.href = `/Post/${postid}`;
    }
    setIsLoading(false);
  };
  return (
    <MainLayout posts={posts}>
      <PostForm isLoading={isLoading} onSubmit={onSave} post={post} />
    </MainLayout>
  );
};

export default EditPostPage;
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
