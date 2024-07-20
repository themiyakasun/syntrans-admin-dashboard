import React from 'react';

import { sidebar } from '../../../data/sidebar';
import Button from '../../ui/Buttons/Button.tsx';

const SidebarItems = () => {
  return (
    <div className='sidebar-items'>
      {sidebar.map((item) => (
        <div className='sidebar-item'>
          <Button variant='none' size='md' icon={true} href={item.link}>
            {item.icon}
            <span className='sidebar-link'>{item.text}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SidebarItems;
