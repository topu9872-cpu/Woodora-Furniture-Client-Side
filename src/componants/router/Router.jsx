import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar/NavBar';

const Router = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Router;