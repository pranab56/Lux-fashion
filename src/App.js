import './App.css';
import Home from './component/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Products from './component/Products/Products';
import Blogs from './component/Blogs/Blogs';
import Contact from './component/Contact/Contact';
import Login from './component/Login/Login';
import NotFound from './Page/NotFound';
import Heder from './component/Home/Heder';
import Register from './component/Login/Register';
import MyProfile from './component/Login/MyProfile';
import RequireAuth from './Page/RequireAuth';
import { Toaster } from 'react-hot-toast';
import UpdateProfile from './component/Login/UpdateProfile';
import ProductDetails from './component/Products/ProductDetails';
import CheckOut from './component/CheckOut';
import OrderModal from './component/Products/OrderModal';
import Order from './component/Order/Order';






function App() {
  return (
    <div className="App">
      <Heder></Heder>
      
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/product' element={
        <RequireAuth>
        <Products></Products>
        </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
        <Route path='/OrderModel' element={<OrderModal></OrderModal>}>
          <Route path='order' element={<Order></Order>}/>
        <Route path='checkout' element={<CheckOut></CheckOut>}/>
        </Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='myProfile' element={
        <RequireAuth>
        <MyProfile></MyProfile>
        </RequireAuth>
        }></Route>
        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      
      <Toaster />
    </div>
  );
}

export default App;
