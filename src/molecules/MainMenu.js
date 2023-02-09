import Logo from '@/atoms/Logo';
import Text from '@/atoms/Text';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@/atoms/Button';
import { useState } from 'react';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  justify-content: flex-start;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-left: 1rem;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media (max-width: 767px) {
    display: block;
    order: 2;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 60px;
  right: 0;
  width: 80%;
  max-width: 300px;
  padding: 1rem;
  z-index: 100;
`;

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Nav>
        <Link href="/">
          <Logo />
        </Link>
        <Ul>
          <li>
            <Text.Subtitle as="a" href="/">
              Home
            </Text.Subtitle>
          </li>
          <li>
            <Text.Subtitle as="a" href="/Post/create">
              Create Post
            </Text.Subtitle>
          </li>
          <li>
            <Text.Subtitle as="a" href="/Post">
              Blog
            </Text.Subtitle>
          </li>
        </Ul>
      </Nav>
      <MobileNav>
        <Button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'}
        </Button>
        {isOpen && (
          <MenuContainer>
            <Text.Subtitle as="a" href="/">
              Home
            </Text.Subtitle>
            <Text.Subtitle as="a" href="/about">
              About
            </Text.Subtitle>
            <Text.Subtitle as="a" href="/blog">
              Blog
            </Text.Subtitle>
            <Text.Subtitle as="a" href="/contact">
              Contact
            </Text.Subtitle>
          </MenuContainer>
        )}
      </MobileNav>
    </>
  );
};

export default MainMenu;
