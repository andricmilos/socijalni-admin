import { ReactDOM } from "react-dom";
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
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
