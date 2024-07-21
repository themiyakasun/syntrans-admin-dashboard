import React from 'react';
import './input.css';

interface InputProps {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  type: string;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  type,
}) => {
  return (
    <div className='form-input'>
      <label htmlFor='firstname'>{label ? label : ''}</label>
      <input
        type={type}
        name={name}
        id={id}
        className='form-control'
        placeholder={placeholder ? placeholder : ''}
      />
    </div>
  );
};

export default Input;
