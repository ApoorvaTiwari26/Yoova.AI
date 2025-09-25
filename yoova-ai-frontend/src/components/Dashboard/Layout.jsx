import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ user }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar user={user} />
      <div style={{ marginLeft: "250px", padding: "20px", width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
