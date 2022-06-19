import { css } from "@emotion/react";
import { neumorphismTheme } from "#/styles/theme";
import { normalizeLink } from "#/styles/utils";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      css={css`
        display: flex;
        padding: 30px;
        justify-content: center;
        white-space: pre;
      `}
    >
      <span>Copyright {year}. </span>
      <a
        href="https://github.com/solidw"
        target="_blank"
        rel="noopener noreferrer"
        css={css`
          ${normalizeLink};
          color: ${neumorphismTheme.primary};
          text-shadow: 1px 1px 0 ${neumorphismTheme.white};
        `}
      >
        <span>@solidw</span>
      </a>
      <span> All rights reserved.</span>
    </footer>
  );
}
