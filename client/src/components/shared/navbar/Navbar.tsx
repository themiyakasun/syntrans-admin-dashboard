import React from 'react';
import { RiMessage2Line, RiNotification3Line } from '@remixicon/react';

import './navbar.css';
import useStore from '../../../stores/useStore.ts';
import SearchBar from './SearchBar.tsx';
import Button from '../../ui/Buttons/Button.tsx';

const Navbar = () => {
  const { sidebarToggle } = useStore();
  return (
    <div className={`top-bar ${sidebarToggle ? 'toggle' : ''}`}>
      <div className='top-bar-wrapper'>
        <SearchBar />
        <div className='top-bar-right'>
          <div className='nav'>
            <div className='nav-item'>
              <Button variant='none'>
                <RiMessage2Line />
                <span className='value'>6</span>
              </Button>
            </div>
            <div className='nav-item'>
              <Button variant='none'>
                <RiNotification3Line />
                <span className='value'>6</span>
              </Button>
            </div>
            <div className='nav-item'>
              <div className='user-container'>
                <div className='user-info'>
                  <p className='user-name'>Jessica Doe</p>
                </div>
                <Button variant='none'>
                  <div className='user-img'>
                    <img src='./110x110.png' alt='' />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
