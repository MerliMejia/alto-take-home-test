import { POSTS } from '@/constants';
import MainLayout from '@/layouts/MainLayout';
import { useState } from 'react';

const { default: PostForm } = require('@/molecules/PostForm');

const CreatePost = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(false);
  const onSave = async (post) => {
    setIsLoading(true);
    const res = await fetch('/api/Post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    });
    if (res.ok) {
      const { postid } = await res.json();
      window.location.href = `/Post/${postid}`;
    }
    setIsLoading(false);
  };

  return (
    <MainLayout posts={posts}>
      <PostForm isLoading={isLoading} onSubmit={onSave} />
    </MainLayout>
  );
};

export default CreatePost;

export async function getServerSideProps(context) {
  return {
    props: {
      posts: POSTS()
    }
  };
}
