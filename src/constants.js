import fs from 'fs';
import path from 'path';

export const POSTS = () => {
  const posts = fs.readFileSync(path.resolve('./src/data.json'), 'utf8');
  console.log('posts', posts);
  return JSON.parse(posts);
};

export const ADD_POST = (post) => {
  const posts = POSTS();
  posts.push({ ...post, id: posts.length + 1 });
  fs.writeFileSync(path.resolve('./src/data.json'), JSON.stringify(posts));
};

export const UPDATE_POST = (post) => {
  const posts = POSTS();
  const index = posts.findIndex((p) => p.id === post.id);
  posts[index] = post;
  fs.writeFileSync(path.resolve('./src/data.json'), JSON.stringify(posts));
};

export const DELETE_POST = (id) => {
  const posts = POSTS();
  const index = posts.findIndex((p) => p.id === id);
  posts.splice(index, 1);
  fs.writeFileSync(path.resolve('./src/data.json'), JSON.stringify(posts));
};
