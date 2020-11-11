import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorClasses = classNames('cursor', {
    'cursor--hidden': hidden,
  });

  const addEventListeners = () => {
    document.body.addEventListener('mousemove', onMouseMove);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);
  };

  const removeEventListeners = () => {
    document.body.removeEventListener('mousemove', onMouseMove);
    document.body.removeEventListener('mouseenter', onMouseEnter);
    document.body.removeEventListener('mouseleave', onMouseLeave);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseEnter = () => {
    console.log('mouse entering');
    setHidden(false);
  };

  const onMouseLeave = () => {
    console.log('mouse leaving');
    setHidden(true);
  };

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

//* CSS cursor styles:

// .cursor {
//   width: 40px;
//   height: 40px;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   position: fixed;
//   transform: translate(-50%, -50%);
//   pointer-events: none;
//   z-index: 9999;
//   mix-blend-mode: difference;
//   transition: all 150ms ease;
// }
