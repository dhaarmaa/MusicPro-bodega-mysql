import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './views/register';
import Login from './views/login';
import Home from './views/home';



const Router = () => (
    <BrowserRouter>
        <Routes>  
            <Route path='/' element={<Home/>} /> 
            <Route path='/registro' element={<Register/>} />
            <Route path="/login" element={<Login/>} />

            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;