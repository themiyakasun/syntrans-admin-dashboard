import React from 'react';
import { useLocation } from 'react-router-dom';

import './auth.css';
import HorizontalCard from '../ui/Cards/HorizontalCard.tsx';
import Input from '../ui/Inputs/Input.tsx';
import FormHeader from './FormHeader.tsx';
import Button from '../ui/Buttons/Button.tsx';

const AuthForm = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className='auth-form'>
      <div className='row'>
        <div className='col-lg-10 col-12 auth-item'>
          <HorizontalCard img='./login.jpg'>
            <form action='' className=''>
              <FormHeader pathname={pathname} />
              <div className='row'>
                <div className='col-12'>
                  <Input
                    type='email'
                    name='email'
                    id='email'
                    label='Email'
                    placeholder='Email Address'
                  />
                </div>
                {pathname === '/register' && (
                  <div className='col-12'>
                    <div className='row no-gutters'>
                      <div className='col-lg-6' style={{ paddingRight: 10 }}>
                        <Input
                          type='text'
                          name='firstname'
                          id='firstname'
                          label='First Name'
                          placeholder='First Name'
                        />
                      </div>
                      <div className='col-lg-6' style={{ paddingLeft: 10 }}>
                        <Input
                          type='text'
                          name='lastname'
                          id='lastname'
                          label='Last Name'
                          placeholder='Last Name'
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className='col-12'>
                  <Input
                    type='password'
                    name='password'
                    id='password'
                    label='Password'
                    placeholder='Password'
                  />
                </div>

                <div className='col-12'>
                  <input type='checkbox' style={{ marginTop: 20 }} />{' '}
                  <span style={{ color: '#fff' }}>
                    I read and agree to Terms & Conditions
                  </span>
                </div>
                <div className='col-12 submit-btn'>
                  {pathname === '/' && (
                    <Button variant='transparent' rounded='medium'>
                      Login
                    </Button>
                  )}
                  {pathname === '/register' && (
                    <Button variant='transparent' rounded='medium'>
                      Register
                    </Button>
                  )}
                </div>
                <hr />

                <div className='additional-auth'>
                  {pathname === '/register' ? (
                    <p>
                      Already Have an account <a href='/'>Login</a>
                    </p>
                  ) : (
                    <p>
                      Don't Have an Account <a href='/register'>Register</a>
                    </p>
                  )}
                </div>
              </div>
            </form>
          </HorizontalCard>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
