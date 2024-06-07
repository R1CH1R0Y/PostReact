import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import RemovePost from './components/RemovePost';
import SearchPost from './components/SearchPost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPost/>}/>
      <Route path='/r' element={<RemovePost/>}/>
      <Route path='/s' element={<SearchPost/>}/>
      <Route path='/v' element={<ViewPost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
