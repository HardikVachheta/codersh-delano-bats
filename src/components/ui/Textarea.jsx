import React, { forwardRef } from 'react';

const Textarea = forwardRef(
  ({ className, ...props }, ref) => {
    const baseStyles =
      'w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none';
    const combinedClassNames = baseStyles + ' ' + (className || '');
    return <textarea ref={ref} className={combinedClassNames} {...props} />;
  }
);
Textarea.displayName = 'Textarea';

export default Textarea;
