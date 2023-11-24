import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Create from './components/Create/Create';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
