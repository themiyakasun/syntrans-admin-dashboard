import React from 'react';

import './auth.css';

interface FormHeaderProps {
  pathname?: string;
}
const FormHeader: React.FC<FormHeaderProps> = ({ pathname }) => {
  return (
    <div className='auth-header'>
      <img src='./logo-icon.png' alt='' />
      <h2 className=''>
        {pathname === '/'
          ? 'Welcome Back'
          : pathname === '/register'
          ? 'Create an Account'
          : ''}
      </h2>
    </div>
  );
};

export default FormHeader;
