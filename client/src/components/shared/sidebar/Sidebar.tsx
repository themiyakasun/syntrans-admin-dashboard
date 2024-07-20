import React from 'react';

import useStore from '../../../stores/useStore.ts';
import './sidebar.css';
import SidebarHeader from './SidebarHeader.tsx';
import SidebarItems from './SidebarItems.tsx';

const Sidebar = () => {
  const { sidebarToggle, setSidebarToggle } = useStore();
  return (
    <aside
      className={`sidebar-wrapper ${sidebarToggle ? 'sidebar-shrink' : ''}`}
    >
      <SidebarHeader />
      <SidebarItems />
    </aside>
  );
};

export default Sidebar;
