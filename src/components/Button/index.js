import React from 'react';

function Button({ children, color = 'black', type = 'default', ...props }) {
  return (
    <div className={`Button Button--${type} Button--${color}`} {...props}>
      {children}
    </div>
  );
}

export default Button;
