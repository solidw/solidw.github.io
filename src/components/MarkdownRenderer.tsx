import styled from "@emotion/styled";
import highlight from "rehype-highlight";
import html from "rehype-stringify";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remark2rehype from "remark-rehype";
import { neumorphismTheme, theme } from "#/styles/theme";
import { createNeumorphismBoxShadow } from "#/styles/utils";

interface MarkdownRendererProps {
  markdown: string;
}

export function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const htmlText = remark()
    .use(remarkParse)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(html, { allowDangerousHtml: true })
    .use(highlight, { prefix: "token " })
    .processSync(markdown)
    .toString();

  return <MarkdownRenderBlock dangerouslySetInnerHTML={{ __html: htmlText }} />;
}

const MarkdownRenderBlock = styled.div`
  line-height: 3rem;
  blockquote {
    box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
    margin: 0;
    padding: 5px;
    border-left: 0.25em solid ${neumorphismTheme.secondary};
    & > * {
      margin: 0;
    }
  }

  p > code {
    box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
    padding: 5px;
    margin-left: 3px;
    margin-right: 3px;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #000;
    background: 0 0;
    text-shadow: 0 1px #fff;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  code[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  pre[class*="language-"]::-moz-selection {
    text-shadow: none;
  }
  code[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  pre[class*="language-"]::selection {
    text-shadow: none;
    background: #b3d4fc;
  }
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }
  :not(pre) > code[class*="language-"],
  pre {
    background: ${theme.palette.primary.light};
    box-shadow: ${createNeumorphismBoxShadow(3, 5, { inset: true })};
    background: none;
    border: none;
    padding: 15px;
  }
  :not(pre) > code[class*="language-"] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }
  .token.cdata,
  .token.comment,
  .token.doctype,
  .token.prolog {
    color: #708090;
  }
  .token.punctuation {
    color: #999;
  }
  .token.namespace {
    opacity: 0.7;
  }
  .token.boolean,
  .token.constant,
  .token.deleted,
  .token.number,
  .token.property,
  .token.symbol,
  .token.tag {
    color: #905;
  }
  .token.attr,
  .token.builtin,
  .token.char,
  .token.inserted,
  .token.selector,
  .token.string {
    color: #690;
  }
  .language-css .token.string,
  .style .token.string,
  .token.entity,
  .token.operator,
  .token.url {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }
  .token.class_,
  .token.function_ {
    color: #dd4a68;
  }
  .token.important,
  .token.regex,
  .token.variable {
    color: #e90;
  }
  .token.bold,
  .token.important {
    font-weight: 700;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`;
