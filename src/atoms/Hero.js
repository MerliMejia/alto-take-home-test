import styled from 'styled-components';

const HeroImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ImageHero = () => {
  return (
    <HeroImage
      src="https://marketing-queen.com/wp-content/uploads/2020/03/Hero-Image-Responsiveness_166089026.jpg"
      alt="Hero image"
    />
  );
};

export default ImageHero;
