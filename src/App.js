import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import NapraviPost from './pages/NapraviPost';
import IzmeniPost from './pages/IzmeniPost';
import Home from './pages/Home';
import NapraviUser from './pages/NapraviUser';
import IzmeniUser from "./pages/IzmeniUser";
import Login from "./pages/Login";
import Logout from './pages/Logout';
import NapraviGroup from './pages/NapraviGroup';
import IzmeniGroup from './pages/IzmeniGroup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="user/napravi" element={<NapraviUser />} />
          <Route path="user/izmeni" element={<IzmeniUser />} />
          <Route path="post/napravi" element={<NapraviPost />} />
          <Route path="post/izmeni" element={<IzmeniPost />} />
          <Route path="group/izmeni" element={<IzmeniGroup />} />
          <Route path="group/napravi" element={<NapraviGroup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
