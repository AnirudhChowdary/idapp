import React from 'react';
import './ProjectContainer.css';
import ProjectItem from './ProjectItem';

const ProjectContainer = () => {
  const items = [
    { id: 1, type: 'image', title: 'Home office where you can relax.', imageUrl: 'path-to-your-image-1.jpg' },
    { id: 2, type: 'text', content: 'Design philosophy text content...' },
    // ...other items
  ];

  return (
    <div className="portfolio-container">
      <div className="items-container">
        {items.map(item => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
