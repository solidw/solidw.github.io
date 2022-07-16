import { css } from "@emotion/react";
import { neumorphismTheme } from "#/styles/theme";
import { normalizeLink } from "#/styles/utils";

const year = new Date().getFullYear();

Footer.height = 80;

export function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        padding: 30px;
        justify-content: center;
        white-space: pre;
        height: ${Footer.height}px;
      `}
    >
      <span>Copyright {year}. </span>
      <a
        href="https://github.com/solidw"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          ${normalizeLink};
          color: ${neumorphismTheme.secondary};
        `}
      >
        <span>@solidw</span>
      </a>
      <span> All rights reserved.</span>
    </footer>
  );
}
