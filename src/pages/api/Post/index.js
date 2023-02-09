import { ADD_POST, POSTS } from '@/constants';

export default function handler(req, res) {
  console.log(req.body);
  if (req.method === 'POST') {
    ADD_POST(req.body);
    res.send({ success: true, postid: POSTS().length });
  } else {
    // Handle any other HTTP method
    res.send('ANOTHER');
  }
}
