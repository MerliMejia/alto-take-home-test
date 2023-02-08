import usePosts from '@/hooks/use-posts';
import Header from '@/organisms/Header';
import { theme } from '@/pages';
import { ThemeProvider } from 'styled-components';

export default function MainLayout({ posts, children }) {
  const { data, handleOnSearchChange } = usePosts(posts);
  return (
    <ThemeProvider theme={theme}>
      <Header data={data} handleOnChange={handleOnSearchChange} />
      {children}
    </ThemeProvider>
  );
}
