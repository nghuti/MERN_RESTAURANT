import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeSection, setActiveSection] = useState('món chính');

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };


  return (
    <div className="menu-container">
      <aside className="menu-sidebar">
        <ul>
          {['món chính', 'salads', 'tráng miệng', 'súp', 'thức uống'].map((section) => (
            <li key={section}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {['món chính', 'salads', 'tráng miệng', 'súp', 'thức uống'].map((section) => (
        <section
          key={section}
          id={section}
          className="menu-section"
          style={{ display: activeSection === section ? 'block' : 'none' }}
        >
          <div className="title-menu">
            <h1>{section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}</h1>
          </div>
          <div className="menu-grid">
            {getItemsForSection(section).map((item, index) => (
              <div className="menu-item" key={index}>
                <img src={item.imgSrc} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

// Function to get the items based on the section
const getItemsForSection = (section) => {
  const items = {
    'món chính': [
      { imgSrc: '/assets/a1.jpg', name: 'Chilli Octopus' },
      { imgSrc: '/assets/a2.jpg', name: 'Chilli Octopus' },
      { imgSrc: '/assets/a3.jpg', name: 'Chilli Octopus' },
      
    ],
    'salads': [
      { imgSrc: '/assets/a4.jpg', name: 'Chilli Octopus' },
    ],
    'tráng miệng': [
      { imgSrc: '/assets/b1.jpg', name: 'Chilli Octopus' },
    ],
    'súp': [
      { imgSrc: '/assets/b2.jpg', name: 'Chilli Octopus' },
    ],
    'thức uống': [
      { imgSrc: '/assets/a5.jpg', name: 'Chilli Octopus' },
    ],
  };
  
  return items[section] || [];
};

export default Menu;