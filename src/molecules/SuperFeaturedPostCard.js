import React from 'react';
import Text from '@/atoms/Text';
import styled from 'styled-components';
import Link from 'next/link';

const Card = styled.div`
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const SuperFeaturedPostCard = ({ post }) => {
  return (
    <Card>
      <Link href={`/Post/${post.id}`}>
        <Image src={post.image} alt="Post Image" />
        <Overlay>
          <Text.Subtitle color="white">{post.title}</Text.Subtitle>
          <Text color="white" style={{ textAlign: 'center' }}>
            {post.content}
          </Text>
        </Overlay>
      </Link>
    </Card>
  );
};

export default SuperFeaturedPostCard;
