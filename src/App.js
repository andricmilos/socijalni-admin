import {BrowserRouter,Route,Routes} from 'react-router-dom'; 
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import NapraviPost from './pages/NapraviPost';
import IzmeniPost from './pages/IzmeniPost';
import Home from './pages/Home';
import NapraviUser from './pages/NapraviUser';
import IzmeniUser from "./pages/IzmeniUser";
import Login from "./pages/Login";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Logout from './pages/Logout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="logout" element={<Logout/>}/>
            <Route path="forgotpassword" element={<ForgotPassword/>}/>
            <Route path="resetpassword/:value" element={<ResetPassword/>}/>
            <Route path="user/napravi" element={<NapraviUser/>}/>
            <Route path="user/izmeni" element={<IzmeniUser/>}/>
            <Route path="post/napravi" element={<NapraviPost/>}/>
            <Route path="post/izmeni" element={<IzmeniPost/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Route>  
      </Routes>  
    </BrowserRouter>
  );
}


export default App;
