import { css } from "@emotion/react";

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
          text-decoration: none;
        `}
      >
        <span>@solidw</span>
      </a>
      <span> All rights reserved.</span>
    </footer>
  );
}
