import { ComponentProps } from "react";
import ReactMarkdown from "react-markdown";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/prism/dark";
import { createNeumorphismBoxShadow } from "#/styles/utils";

interface MarkdownRendererProps extends ComponentProps<typeof ReactMarkdown> {}

export function MarkdownRenderer(renderProps: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      components={{
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style={dark as any}
              customStyle={{
                background: "none",
                border: "none",
                boxShadow: createNeumorphismBoxShadow(3, 5, {
                  inset: true,
                }),
              }}
              language={match[1]}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      {...renderProps}
    />
  );
}
