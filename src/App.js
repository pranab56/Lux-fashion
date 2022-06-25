import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products/Products';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import Order from './component/Order/Order';
import NotFound from './Page/NotFound';
import Heder from './component/Home/Heder';
import Register from './component/Login/Register';
import MyProfile from './component/Login/MyProfile';

function App() {
  return (
    <div className="App">
      <Heder></Heder>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={<Products></Products>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
