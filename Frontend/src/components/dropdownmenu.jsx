//THIS COMPONENT IS NOT USED


import React, { useState } from 'react';
const Dropdown = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonStyle = {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
  };

  const ulStyle = {
    display: isOpen ? 'block' : 'none',
    position: 'absolute',
    top: '40px',
    left: 0,
    zIndex: 1,
    backgroundColor: 'white',
    border: '1px solid black',
    padding: '10px',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        About GDSC
      </button>
      <ul style={ulStyle}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
