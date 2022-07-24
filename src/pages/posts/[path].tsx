import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Block } from "#/components/Block";
import { Container } from "#/components/Container";
import { Hr } from "#/components/Hr";
import { MarkdownRenderer } from "#/components/MarkdownRenderer";
import { Page } from "#/components/Page";
import { SEO } from "#/components/SEO";
import { Stack } from "#/components/Stack";
import { Title } from "#/components/Title";
import { PostRenderMeatData } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostPage({
  attributes,
  body,
}: {
  attributes: PostRenderMeatData;
  body: string;
}) {
  return (
    <Page css={{ marginTop: 20 }}>
      <SEO
        title={attributes.title}
        description={attributes.description}
        canonical={`/posts/${encodeURIComponent(attributes.title)}`}
      />
      <Container>
        <Block>
          <Title
            css={css`
              margin-bottom: 10px;
            `}
          >
            {attributes.title}
          </Title>
          <span
            css={css`
              margin-bottom: 10px;
            `}
          >
            {dateUtils.formatDateToShow(attributes.timestamp)}
          </span>
          <Hr css={{ marginBottom: 20 }} />
          <Stack.Vertical align="stretch">
            <MarkdownRenderer markdown={body} />
          </Stack.Vertical>
        </Block>
      </Container>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), "posts");
  const folders = fs.readdirSync(dir);

  const paths = folders.map((folder) => ({
    params: { path: postUtils.getFileNameBase(folder) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.path == null) {
    throw new Error("path를 찾을 수 없습니다.");
  }

  const dir = path.join(process.cwd(), "posts");
  const fileName = `${dir}/${params.path}/post.md`;

  const content = fs.readFileSync(fileName, "utf8");
  const { attributes, body } = postUtils.parseFrontMatter(content);

  const safeAttributes = postUtils.safeParseAttributes(attributes, {
    timestamp: dateUtils.formatDate(fs.statSync(fileName).birthtime),
  });

  return {
    props: {
      attributes: safeAttributes,
      body,
    },
  };
};
