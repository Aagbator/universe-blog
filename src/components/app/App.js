import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Header from '../header';
import AllPosts from '../../pages/AllPosts.page';
import SinglePost from '../../pages/SinglePost.page';
import AuthorPosts from '../../pages/AuthorPosts.page';

function App() {  
  return (
    <BrowserRouter>
      <Header title='Universe Blog' />
      <div>
        <Route component={AllPosts} path="/" exact />
        <Route exact component={SinglePost} path="/:postId" />
        <Route component={AuthorPosts} path="/author/:authorId/posts" />
      </div>
    </BrowserRouter>
  );
}

export default App;
