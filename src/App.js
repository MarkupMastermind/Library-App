import logo from './logo.svg';
import './App.css';
import AddBook from './componentz/AddBook';
import DeleteBook from './componentz/DeleteBook';
import SearchBook from './componentz/SearchBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddBook/>}/>
        <Route path='/delete' element={<DeleteBook/>}/>
        <Route path='/search' element={<SearchBook/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
