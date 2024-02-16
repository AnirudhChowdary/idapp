import React, { useRef, useEffect } from 'react';
import './Projectitem.css';

const ProjectItem = ({ item }) => {
  const itemRef = useRef();

  useEffect(() => {
    if (item.type !== 'image') {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          } else {
            entry.target.classList.remove('appear');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [item.type]);

  const renderContent = () => {
    if (item.type === 'image') {
      return <img src={item.imageUrl} alt={item.title} />;
    } else if (item.type === 'text') {
      return <p>{item.content}</p>;
    }
  };

  return (
    <div className={`item ${item.type}`} ref={itemRef}>
      {renderContent()}
    </div>
  );
};

export default ProjectItem;
