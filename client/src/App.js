
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Products } from './components/Products/Products';
import { Product } from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
