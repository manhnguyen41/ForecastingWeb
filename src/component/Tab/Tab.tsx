import React from 'react';
import './Tab.css';

interface ButtonProps {
  children: React.ReactNode;
}

const Tab: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div >
      <button className="tab">{children}</button>
    </div>
  );
};

export default Tab;