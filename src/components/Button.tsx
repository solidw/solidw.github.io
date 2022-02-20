import { css, useTheme } from "@emotion/react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  const theme = useTheme();

  return (
    <button
      css={css`
        padding: 8px 20px;
        color: #f5f5f5;
        font-size: 16px;
        background: ${theme.palette.primary.main};
        box-shadow: 0 4px 8px 0 ${theme.palette.primary.light};
        border: none;
        border-radius: 12px;

        &:hover {
          background: ${theme.palette.primary.light};
        }
        &:active {
          background: ${theme.palette.primary.main};
        }

        transition: background-color 0.1s;
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
