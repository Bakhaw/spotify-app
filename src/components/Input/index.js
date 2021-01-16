import React from 'react';

function Input({ onSubmit, ...props }) {
  return (
    <input
      className='Input'
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.target.blur();
          e.preventDefault();
          onSubmit();
        }
      }}
      {...props}
    />
  );
}

export default Input;
