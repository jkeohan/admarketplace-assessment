import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <article>
      <h1>404: Page Not Found</h1>
      <Link to="/">Go to home</Link>
  </article>
  )
}

export default PageNotFound