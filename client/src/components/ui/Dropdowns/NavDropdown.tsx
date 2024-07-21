import React from 'react';
import './dropdown.css';

interface DropDownProps {
  messages?: any;
  type: string;
  active?: boolean;
}
const NavDropdown: React.FC<DropDownProps> = ({
  messages,
  type,
  active = false,
}) => {
  return (
    <div className={`dropdown-menu ${active ? 'show' : ''}`}>
      <div className='msg-header'>
        <h6 className='msg-header-title'>6 New</h6>
        <p className='msg-header-subtitle'>
          Application{' '}
          {type === 'message'
            ? 'Messages'
            : type === 'notification'
            ? 'Notification'
            : ''}
        </p>
      </div>
      <div className='header-message-list'>
        <a href='/' className='header-message-link'>
          <div className='media'>
            <div className='user-online'>
              <img src='./110x110.png' alt='' />
            </div>
            <div className='media-body'>
              <h6 className='msg-name'>
                Daisy Anderson{' '}
                <span className='msg-time float-right'>5 sec ago</span>
              </h6>
              <p className='msg-info'>The standard chunk of lorem</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavDropdown;
