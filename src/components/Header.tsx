import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { Button } from "./Button";
import { neumorphismTheme } from "#/styles/theme";
import { createNeumorphismBoxShadow, normalizeLink } from "#/styles/utils";

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

        background-color: ${neumorphismTheme.primary};
        box-shadow: ${createNeumorphismBoxShadow(5, 5)};
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
            solidw
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
          <ALink href="/" passHref={true}>
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
    <Link
      css={css`
        ${normalizeLink}
      `}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

const Ul = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 20px;
  font-size: 1.4rem;

  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li``;
