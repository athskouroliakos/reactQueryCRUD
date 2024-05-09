import { Route, Routes } from 'react-router-dom';
import PostLists from './pages/PostLists';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

function App() {
  return (
    <div>
      <h1>Lolz</h1>
      <Routes>
        <Route path="/" element={<PostLists />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/post/:id/edit" element={<EditPost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
