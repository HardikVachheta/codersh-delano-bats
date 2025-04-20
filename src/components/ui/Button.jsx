import React from 'react';

const Button = ({ className, variant, size, children, ...props }) => {
  let baseClasses = 'inline-flex items-center justify-center rounded-md font-semibold transition-colors';
  let variantClasses = '';
  let sizeClasses = '';

  switch (variant) {
    case 'default':
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-100 text-gray-800 hover:bg-gray-200';
      break;
    case 'outline':
      variantClasses = 'border border-gray-300 text-gray-800 hover:bg-gray-100';
      break;
     case 'ghost':
        variantClasses = 'text-gray-800 hover:bg-gray-100';
        break;
    case 'destructive':
        variantClasses = 'bg-red-500 text-white hover:bg-red-600';
        break;
    case 'link':
        variantClasses = 'text-blue-500 hover:underline';
        break;
    default:
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
  }

  switch (size) {
    case 'sm':
      sizeClasses = 'px-3 py-1.5 text-sm';
      break;
    case 'lg':
      sizeClasses = 'px-6 py-3 text-lg';
      break;
     case 'icon':
        sizeClasses = 'p-2';
        break;
    default:
      sizeClasses = 'px-4 py-2';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className || ''}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
