import $ from './Button.module.scss';

interface ButtonProps {
  children: React.ReactElement;
  otherProps?: React.HTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, ...otherProps }: ButtonProps) => (
  <button className={$.button} type="button" {...otherProps}>
    {children}
  </button>
);

export default Button;
