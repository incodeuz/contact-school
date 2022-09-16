import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import English from "../components/English/English";
import Navbar from "../components/Navbar";
import { navbarData } from '../utils/navbar';
import Notfound from '../components/Notfound/Notfound';


const Root = () => {
  return (
    <Routes>
     
     <Route element={<Navbar/>}>
        {
          navbarData.map((value) => {
            return <Route key={value.id} path={value.path} element={value.component} />
          })
        }
        <Route path='/course/:id' element={<English/>}/>
    </Route>

      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
  );
};

export default Root;
