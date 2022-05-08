import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { Button } from "./Button";
import { neumorphismTheme, theme } from "#/styles/theme";
import { normalizeLink } from "#/styles/utils";

Header.height = 80;

export function Header() {
  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        height: ${Header.height}px;
        z-index: 1;

        display: flex;
        justify-content: space-between;
        align-items: stretch;
        padding: 0px 30px;

        background-color: ${neumorphismTheme.background};

        box-shadow: 0px 5px 5px ${neumorphismTheme.darkShadow};
      `}
    >
      <Ul>
        <Li>
          <ALink
            href="/"
            passHref
            css={css`
              font-size: 2.4rem;
              font-weight: bold;
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
          <ALink href="/me" passHref={true}>
            <Button>ME</Button>
          </ALink>
        </Li>
        <Li>
          <ALink href="/posts" passHref={true}>
            <Button>POST</Button>
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

const Li = styled.li``;
