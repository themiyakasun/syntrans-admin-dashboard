import React from 'react';

import useStore from '../../../stores/useStore.ts';
import Button from '../../ui/Buttons/Button.tsx';
import { RiMenuFill } from '@remixicon/react';

const SidebarHeader = () => {
  const { sidebarToggle, setSidebarToggle } = useStore();
  const toggleSidebar = () => setSidebarToggle(!sidebarToggle);

  return (
    <div className={`sidebar-header  ${sidebarToggle ? 'sidebar-shrink' : ''}`}>
      <div className=''>
        <img src='./logo-icon.png' alt='' className='sidebar-logo' />
      </div>
      <div>
        <h4 className='logo-text'>Syntrans</h4>
      </div>
      <div className='sidebar-toggle'>
        <Button variant='none' onClick={toggleSidebar}>
          <RiMenuFill />
        </Button>
      </div>
    </div>
  );
};

export default SidebarHeader;
