import './styles.css'

const AddComment = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const comment = {
      name: event.target.name.value,
      email: event.target.email.value,
      comment: event.target.comment.value,
    }
    props.handleAddComment(comment)
    event.target.name.value = ''
    event.target.email.value = ''
    event.target.comment.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className='form-inputs'>
          <input type='text' name='name' placeholder='Name'/>
          <input type='text' name='email' placeholder='Email'/>
        </div>
        <textarea name="comment" rows="4" cols="50"  placeholder='comment'/>
      </div>
      <button>Post</button>
    </form>
  )
}

export default AddComment