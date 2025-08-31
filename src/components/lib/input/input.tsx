import React, { useState } from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  passwordToggle?: React.ReactNode;
  phone?: boolean;
  countryCodes?: string[];
  className?: string;
  style?: React.CSSProperties;
}

const EyeOpenIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const EyeClosedIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
       strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a21.7 21.7 0 0 1 5.06-5.94M1 1l22 22"/>
  </svg>
);

const Input: React.FC<InputProps> = ({
  variant = 'primary',
  size = 'medium',
  disabled,
  error,
  success,
  prefix,
  suffix,
  passwordToggle,
  phone,
  countryCodes = ['+1', '+91', '+44'],
  type = 'text',
  className = '',
  style,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCode, setSelectedCode] = useState(countryCodes[0]);

  const wrapperClass = [
    'ui-input-wrapper',
    variant,
    size,
    error ? 'error' : '',
    success ? 'success' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass} style={style}>
      {phone && (
        <select
          className="country-code"
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
          disabled={disabled}
        >
          {countryCodes.map(code => <option key={code} value={code}>{code}</option>)}
        </select>
      )}

      {prefix && <span className="prefix">{prefix}</span>}

      <input
        className="ui-input"
        type={passwordToggle ? (showPassword ? 'text' : 'password') : type}
        disabled={disabled}
        {...props}
      />

      {passwordToggle && (
        <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? EyeOpenIcon : EyeClosedIcon}
        </span>
      )}

      {suffix && <span className="suffix">{suffix}</span>}
    </div>
  );
};

export default Input;
