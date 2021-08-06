import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loremIpsum } from 'lorem-ipsum';

import Comment from '../Components/Comment';
import AddComment from '../Components/AddComment';
import InvalidPost from '../Pages/InvalidPost';

import {
  getSinglePost,
  getComments,
  postComment
} from '../services/api-helper';

const Post = (props) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([
    {
      name: 'id labore ex et quam laborum',
      body:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
    }
  ]);
  const postId = props.match.params.postId;

  useEffect(() => {
    const makeApiCall = async () => {
      const post = await getSinglePost(postId);
      console.log('useEffect - post', post);
      const comments = await getComments(postId);
      setPost(post);
      setComments(comments);
    };
    makeApiCall();
  }, []);

  const handleAddComment = async (comment) => {
    console.log('comment', comment);
    const resp = await postComment(comment);
    console.log('resp', resp);
    if (resp.id === 501) {
      const commentObj = {
        name: loremIpsum({ count: 1 }),
        body: comment.comment
      };
      setComments([commentObj, ...comments]);
    }
  };

  const loaded = () => (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <section>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </section>
      <section>
        <AddComment handleAddComment={handleAddComment} />
      </section>
      <Link to="/">Go to home</Link>
    </article>
  );

  const invalidId = () => <InvalidPost postId={postId} />;

  return <>{post.title ? loaded() : invalidId()} </>;
};

export default Post;
