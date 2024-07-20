import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/ui/Layout/Layout.tsx';
import Dashbord from './pages/Dashbord.tsx';
import Sidebar from './components/shared/sidebar/Sidebar.tsx';

const App = () => {
  return (
    <Router>
      <Layout>
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashbord />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
