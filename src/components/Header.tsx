import { theme } from "#/styles/theme";
import { normalizeLink } from "#/styles/utils";
import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

Header.height = 80;

export function Header() {
  const theme = useTheme();

  return (
    <header
      css={css`
        position: fixed;
        width: 100%;
        height: ${Header.height}px;
        background: ${theme.palette.primary.dark};
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding: 0px 30px;
        color: ${theme.palette.fontColor.main};
      `}
    >
      <Ul>
        <Li>
          <ALink
            href='/'
            passHref
            css={css`
              font-size: 2.4rem;
            `}
          >
            solidw.dev
          </ALink>
        </Li>
      </Ul>
      <Ul
        css={css`
          justify-content: flex-end;
          font-size: 1.8rem;
        `}
      >
        <Li>
          <ALink href='/me' passHref>
            ME
          </ALink>
        </Li>
        <Li>
          <ALink href='/posts' passHref>
            POST
          </ALink>
        </Li>
      </Ul>
    </header>
  );
}

function ALink({
  className,
  children,
  ...props
}: LinkProps & { className?: string; children: ReactNode }) {
  return (
    <Link {...props}>
      <a
        className={className}
        css={css`
          ${normalizeLink}
        `}
      >
        {children}
      </a>
    </Link>
  );
}

const Ul = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 20px;
  font-size: 1.4rem;
`;

const Li = styled.li(({ theme }) => ({
  color: theme.palette.fontColor.main,
  "&:hover": {
    color: theme.palette.fontColor.dark,
  },
  "&:active": {
    color: theme.palette.fontColor.main,
  },
  transition: "color 0.1s",
}));
