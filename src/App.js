import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import NapraviPost from './pages/NapraviPost';
import IzmeniPost from './pages/IzmeniPost';
import ObrisiPost from './pages/ObrisiPost';
import Home from './pages/Home';
import NapraviUser from './pages/NapraviUser';
import IzmeniUser from "./pages/IzmeniUser";
import ObrisiUser from "./pages/ObrisiUser";
import Login from "./pages/Login";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Test from './pages/Test';
import Logout from './pages/Logout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path='test' element={<Test/>}/>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
            <Route path="resetpassword/:value" element={<ResetPassword/>}/>
            <Route path="user/napravi" element={<NapraviUser/>}/>
            <Route path="user/izmeni" element={<IzmeniUser/>}/>
            <Route path="user/obrisi" element={<ObrisiUser/>}/>
            <Route path="post/napravi" element={<NapraviPost/>}/>
            <Route path="post/izmeni" element={<IzmeniPost/>}/>
            <Route path="post/obrisi" element={<ObrisiPost/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>  
      </Routes>  
    </BrowserRouter>
  );
}


export default App;
