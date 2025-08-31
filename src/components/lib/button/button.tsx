import React from 'react';
import './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingText?: string;    
  iconLeft?: React.ReactNode;    // React element or <img />
  iconRight?: React.ReactNode;   // React element or <img />
  className?: string;            // external override
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  loadingText, 
  iconLeft,
  iconRight,
  className = '',
  ...props
}) => {
  const classNames = `ui-button ${loading ? 'loading' : ''} ${className}`.trim();

  return (
    <button
      className={classNames}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="spinner" />}
      
      {/* ✅ If loadingText is provided, show it instead of children */}
      <span className="label">
        {loading ? loadingText || children : children}
      </span>

      {!loading && iconLeft && <span className="icon-left">{iconLeft}</span>}
      {!loading && iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
