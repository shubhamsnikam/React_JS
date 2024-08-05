import React from 'react';

const DynamicMenu = ({ items }) => {
  return (
    <div className="dynamic-menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicMenu;
