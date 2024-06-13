import logo from './logo.svg';
import './App.css';
import AddMusic from './components/AddMusic';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchMusic from './components/SearchMusic';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/add' element={<AddMusic/>} />
      <Route path='/search' element={<SearchMusic/>} />
      <Route path='/view' element={<view/>} />
      </Routes></BrowserRouter>
  );
}

export default App;
