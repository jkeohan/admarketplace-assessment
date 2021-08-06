import './styles.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { getAllPosts } from './services/api-helper';

import Main from './Pages/Main';
import Post from './Pages/Post';
import PageNotFound from './Pages/PageNotFound';

export default function App() {
  const [postsArr, setPostsArr] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      const allPosts = await getAllPosts();
      setPostsArr(allPosts);
    };
    makeApiCall();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={(props) => <Main {...props} postsArr={postsArr} />}/>
        <Route path="/posts/:postId" render={(props) => <Post {...props} />} />
        <Route path="*" render={(props) => <PageNotFound {...props} />} />
      </Switch>
    </div>
  );
}
