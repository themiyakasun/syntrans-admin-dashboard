import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/ui/Layout/Layout.tsx';
import Dashbord from './pages/Dashbord.tsx';
import Sidebar from './components/shared/sidebar/Sidebar.tsx';
import Navbar from './components/shared/navbar/Navbar.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';

const DashboardLayout = ({ children }) => (
  <>
    <Sidebar />
    <Navbar />
    {children}
  </>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route
            path='/dashboard'
            element={
              <DashboardLayout>
                <Dashbord />
              </DashboardLayout>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
