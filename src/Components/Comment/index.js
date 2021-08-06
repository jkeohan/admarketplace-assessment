import './styles.css';

const Comment = (props) => {
  return (
    <>
      <div className="comment-name">{props.name}</div>
      <div className="comment-body">{props.body}</div>
    </>
  );
};

export default Comment;
