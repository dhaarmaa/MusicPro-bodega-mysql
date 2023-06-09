import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Register from './views/register';
import Login from './views/login';
import Home from './views/home';
import TransportIntegration from './views/transportIntegration';
import WareHouseIntegration from './views/wareHauseIntegration'



const Router = () => (
    <BrowserRouter>
        <Routes>  
            <Route path='/home' element={<Home/>} /> 
            <Route path='/registro' element={<Register/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/transport" element={<TransportIntegration/>} />
            <Route path="wareHouse" element={<WareHouseIntegration/> } />
            <Route path="*" element={<div>404</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;