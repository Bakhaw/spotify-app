import React from 'react';

export default function Button({ children, type = 'default', ...props }) {
  return (
    <div className={`Button Button--${type}`} {...props}>
      {children}
    </div>
  );
}
