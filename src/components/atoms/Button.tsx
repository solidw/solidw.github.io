interface ButtonProps {
  children: React.ReactElement;
  otherProps?: React.HTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, ...otherProps }: ButtonProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <button type="button" {...otherProps}>
    {children}
  </button>
);

export default Button;
