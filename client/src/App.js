
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Product } from './components/Product/Product';
import { Login } from './components/Login/Login';
import { Form } from './components/AddProduct/Form';
import RequiredAuth from './hoc/RequiredAuth';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route
          path="/add"
          element={
            <RequiredAuth>
              <Form />
            </RequiredAuth>
          }
        />
        {/* <Route path='/add' element={<Form/>}></Route> */}
      </Routes>
      
    </div>
  );
}

export default App;
