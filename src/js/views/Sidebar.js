import React from 'react';

function Sidebar({ onSelect }) {
  return (
    <div className="sidebar">
      <h6 className="browse mb-3">BROWSE</h6>
      <div className="d-flex flex-column">
        <span className="sidebar-item mb-1" onClick={() => onSelect('characters')}>
          CHARACTERS
        </span>
        <span className="sidebar-item mb-1" onClick={() => onSelect('vehicles')}>
          VEHICLES
        </span>
        <span className="sidebar-item" onClick={() => onSelect('planets')}>
          PLANETS
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
