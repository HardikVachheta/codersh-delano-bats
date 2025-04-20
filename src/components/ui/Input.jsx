import React, { forwardRef } from 'react';

const Input = forwardRef(
  ({ className, type, ...props }, ref) => {
    const baseStyles =
      'w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500';
    const combinedClassNames = baseStyles + ' ' + (className || '');

    return (
      <input ref={ref} type={type || 'text'} className={combinedClassNames} {...props} />
    );
  }
);
Input.displayName = 'Input';

export default Input;
