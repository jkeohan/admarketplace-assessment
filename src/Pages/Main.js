const Main = (props) => {

  const postsArr = props.postsArr.map((post, index) => (
    <option key={index} value={post.id}>
      {post.title}
    </option>
  ))

  const handleChange = (event) => {
    console.log('event', event.target.value)
    props.history.push(`/posts/${event.target.value}`)
  }

  return (
    <select onChange={handleChange}>
      <option value='select-post'>Select a Post</option>
      {postsArr}
    </select>
  )
}

export default Main