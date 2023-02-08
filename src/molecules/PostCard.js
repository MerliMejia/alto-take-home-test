import React from 'react';
import Text from '@/atoms/Text';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  width: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const PostCard = ({ post, ...props }) => {
  return (
    <Card {...props}>
      <Link style={{ textDecoration: 'none' }} href={`/Post/${post.id}`}>
        <Image src={post.image} alt="Post image" />
        <Text.Subtitle>{post.title}</Text.Subtitle>
        <Text>{post.content}</Text>
      </Link>
    </Card>
  );
};

export default PostCard;
