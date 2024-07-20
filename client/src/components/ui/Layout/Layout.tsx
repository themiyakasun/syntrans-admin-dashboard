import React from 'react';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className='page-wrapper'>{children}</div>;
};

export default Layout;
