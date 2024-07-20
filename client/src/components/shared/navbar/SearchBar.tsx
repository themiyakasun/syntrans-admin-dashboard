import React from 'react';
import { RiSearchLine } from '@remixicon/react';
import Button from '../../ui/Buttons/Button.tsx';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='search' />
        <div className='search-btn'>
          <Button variant='none' icon={true}>
            <RiSearchLine />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
