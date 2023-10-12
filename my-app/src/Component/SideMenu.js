import React from 'react';
import '../SideMenu.css';
const SideMenu = () => {
  return (
    <div className="sidebar">
            <div className="sidebar-menu">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">메뉴1</li>
                    <li className="sidebar-list-item">메뉴2</li>
                    <li className="sidebar-list-item">메뉴3</li>
                    <li className="sidebar-list-item">메뉴4</li>
                </ul>
            </div>
    </div>
  );
};

export default SideMenu;