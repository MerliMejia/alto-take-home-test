import { useRouter } from 'next/router';

export default function Post({ post }) {
  const { query } = useRouter();
  const id = query.id;
  return <div></div>;
}
