import { Link } from 'react-router-dom';

const InvalidPost = ({postId}) => {
  return (
    <article>
    <p>invalid postId: {postId}</p>
    <Link to="/">Go to home</Link>
  </article>
  )
}

export default InvalidPost