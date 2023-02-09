import { ADD_POST, POSTS, UPDATE_POST } from '@/constants';

export default function handler(req, res) {
  if (req.method === 'POST') {
    ADD_POST(req.body);
    res.send({ success: true, postid: POSTS().length });
  } else if (req.method === 'PATCH') {
    UPDATE_POST(req.body);
    console.log('req.body>>>>>>>>>>>>>>>>>>>>>>>', req.body);
    res.send({ success: true, postid: req.body.id });
  } else {
    // Handle any other HTTP method
    res.send('ANOTHER');
  }
}
