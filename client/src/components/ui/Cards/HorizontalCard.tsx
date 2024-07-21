import React from 'react';
import './card.css';

interface HorizontalCardProps {
  children: React.ReactNode;
  img: string;
}
const HorizontalCard: React.FC<HorizontalCardProps> = ({ children, img }) => {
  return (
    <div className='card'>
      <div className='row no-gutters'>
        <div className='col-lg-6'>{children}</div>
        <div className='col-lg-6'>
          <img src={img} alt='' />
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
