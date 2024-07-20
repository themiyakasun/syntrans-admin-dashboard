import React from 'react';
import Button from './components/ui/Buttons/Button.tsx';
import { RiHeartFill } from '@remixicon/react';

const App = () => {
  return (
    <div style={{ backgroundColor: '#000' }}>
      <Button variant='secondary' icon={true}>
        <RiHeartFill size={24} />
        Text
      </Button>
    </div>
  );
};

export default App;
