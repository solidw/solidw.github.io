import { readFileSync } from "fs";
import path from "path";
import { GetStaticProps } from "next";
import { Article } from "#/components/Article";
import { Container } from "#/components/Container";
import { MarkdownRenderer } from "#/components/MarkdownRenderer";
import { Page } from "#/components/Page";
import { Section } from "#/components/Section";
import { SEO } from "#/components/SEO";

export default function MePage({ body }: { body: string }) {
  return (
    <Page>
      <SEO title="고태완 (solidw)" />
      <Container>
        <Article>
          <Section>
            <MarkdownRenderer markdown={body} />
          </Section>
        </Article>
      </Container>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const meDir = path.join(process.cwd(), "me");
  const fileName = `${meDir}/me.md`;

  const content = readFileSync(fileName, "utf-8");

  return {
    props: {
      body: content,
    },
  };
};
