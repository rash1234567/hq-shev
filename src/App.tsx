import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GeneralRoutes from './Routes/GeneralRoutes';
import userRoutes from './Routes/UserRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          GeneralRoutes.length > 0 && GeneralRoutes.map((route, index) => {
            return (
              <Route key={index} path={route.path} Component={route.component} />
            )
          })
        }
        {
          userRoutes.length > 0 && userRoutes.map((route,index)=>{
            return (
              <Route key={index} path={route.path} element={<route.component children={<route.children/>}/>} />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
