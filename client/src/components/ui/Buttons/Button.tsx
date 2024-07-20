import React from 'react';
import './button.css';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant: string;
  rounded?: string;
  size?: string;
  icon?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant,
  rounded = '',
  size = '',
  icon = false,
  children,
}) => {
  const className = `btn ${variant} ${rounded} ${size} ${icon ? 'icon' : ''}`;
  if (href && href !== '#') {
    return (
      <a href={href} className={className}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
