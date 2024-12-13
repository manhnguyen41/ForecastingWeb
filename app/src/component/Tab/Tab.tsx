import React from 'react';
<<<<<<< HEAD
import './tab.css';
=======
import './Tab.css';
>>>>>>> 3a459cbdde10529c926823e1d826d17ed2f35f21

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