import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import NavigationHeader from './components/NavigationHeader.js';
import SideBarLayout from './layout/SideBarLayout.js';
import ProductsDisplay from './components/ProductsDisplay.js';
import NotFound from './pages/NotFound.js';
import LogInForm from './pages/LogInForm.js';
import Cart from './pages/Cart.js';
import Orders from './pages/Orders.js';
function App() {
  return (
    <BrowserRouter>
      <div className="App" id='Home'>
        <Routes>
          <Route path='/' element={<NavigationHeader />}>
            <Route path='/' element={<SideBarLayout />}>
              <Route index element={<HomePage />} />
              <Route path='laptop' element={<ProductsDisplay />} />
              <Route path='mousepad' element={<NotFound />} />
              <Route path='mouse' element={<NotFound />} />
              <Route path='keyboard' element={<NotFound />} />
              <Route path='UITproducts' element={<NotFound />} />
              <Route path='others' element={<NotFound />} />
              <Route path='orders' element={<Orders />} />
              <Route path='cart' element={<Cart />} />
            </Route>
          </Route>
          <Route path='login' element={<LogInForm />} />

        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
