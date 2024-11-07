import { ButtonHTMLAttributes, ReactNode } from 'react';
import css from './Button.module.css';
import clsx from 'clsx';

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  newClassName?: string;
}

const Button = ({ children = 'Search', newClassName, ...props }: BtnProps) => {
  return (
    <button className={clsx(css.button, newClassName)} {...props}>
      {children}
    </button>
  );
};

export default Button;
