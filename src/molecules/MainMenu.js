import Logo from '@/atoms/Logo';
import Text from '@/atoms/Text';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-left: 1rem;
  }
`;

const MainMenu = () => {
  return (
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
          <Text.Subtitle as="a" href="/about">
            About
          </Text.Subtitle>
        </li>
        <li>
          <Text.Subtitle as="a" href="/blog">
            Blog
          </Text.Subtitle>
        </li>
        <li>
          <Text.Subtitle as="a" href="/contact">
            Contact
          </Text.Subtitle>
        </li>
      </Ul>
    </Nav>
  );
};

export default MainMenu;
