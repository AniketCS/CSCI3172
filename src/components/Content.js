import React from 'react';

function Content() {
  const handleClick = () => {
    alert('Hi!');
  };

  return (
    <div className="content">
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Content;