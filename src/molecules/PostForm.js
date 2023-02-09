import Button from '@/atoms/Button';
import Input from '@/atoms/Input';
import Text from '@/atoms/Text';
import { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SwitchesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const PostForm = ({ post, onSubmit, isLoading }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const [image, setImage] = useState(post ? post.image : '');
  const [isFeatured, setIsFeatured] = useState(post ? post.isFeatured : false);
  const [isSuperFeatured, setIsSuperFeatured] = useState(
    post ? post.isSuperFeatured : false
  );

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleIsFeaturedChange = (e) => {
    setIsFeatured(e.target.checked);
  };
  const handleIsSuperFeaturedChange = (e) => {
    setIsSuperFeatured(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title,
      content,
      image,
      isFeatured,
      isSuperFeatured
    });
  };

  return (
    <StyledForm>
      <Text>Title</Text>
      <Input
        placeholder="Type the post title here"
        defaultValue={post ? post.title : ''}
        onChange={handleTitleChange}
      />
      <Text>Content</Text>
      <Input.TextArea
        placeholder="Type the post content here"
        defaultValue={post ? post.content : ''}
        onChange={handleContentChange}
      />
      <Text>Image URL</Text>
      <Input
        placeholder="Image URL"
        defaultValue={post ? post.image : ''}
        onChange={handleImageChange}
      />
      <SwitchesContainer>
        <Input.Switch
          defaultChecked={post ? post.isFeatured : false}
          onChange={handleIsFeaturedChange}
        />
        <Text>Featured</Text>
        <Input.Switch
          defaultChecked={post ? post.isSuperFeatured : false}
          onChange={handleIsSuperFeaturedChange}
        />
        <Text>Super Featured</Text>
      </SwitchesContainer>
      <Button disabled={isLoading} onClick={handleSubmit} type="button">
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </StyledForm>
  );
};

export default PostForm;
