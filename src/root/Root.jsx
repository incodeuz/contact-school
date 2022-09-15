import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { navbarData } from '../utils/navbar';

const Root = () => {
  return (
    <Routes>
     
     <Route element={<Navbar/>}>
        {
          navbarData.map((value) => {
            return <Route key={value.id} path={value.path} element={value.component} />
          })
        }
        <Route path='/course/:id' element={<h1>'Bu course params uchun'</h1>}/>
    </Route>

      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  );
};

export default Root;
