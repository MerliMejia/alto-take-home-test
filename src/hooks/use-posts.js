import { useMemo, useState } from 'react';

const usePosts = (posts) => {
  const [data, setData] = useState(posts);

  const [featuredPosts, superFeatured, nonFeaturedPosts] = useMemo(
    () =>
      posts.reduce(
        (acc, post) => {
          if (post.featured && !post.superFeatured) {
            acc[0].push(post);
          } else if (post.superFeatured) {
            acc[1].push(post);
          } else {
            acc[2].push(post);
          }
          return acc;
        },
        [[], [], []]
      ),
    [posts]
  );

  return {
    data,
    featuredPosts,
    superFeatured,
    nonFeaturedPosts
  };
};

export default usePosts;
