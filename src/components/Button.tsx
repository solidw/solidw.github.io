import { css } from "@emotion/react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ className, children, ...props }: ButtonProps) => (
  <button className={className} {...props}>
    {children}
  </button>
);

export default Button;
