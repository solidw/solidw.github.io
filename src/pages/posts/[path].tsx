import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { Block } from "#/components/Block";
import { Comments } from "#/components/Comments";
import { Container } from "#/components/Container";
import { Hr } from "#/components/Hr";
import { MarkdownRenderer } from "#/components/MarkdownRenderer";
import { Page } from "#/components/Page";
import { getCanonicalAbsolutePath, SEO } from "#/components/SEO";
import { Stack } from "#/components/Stack";
import { Title } from "#/components/Title";
import { useIncreasePostViews } from "#/hooks/useIncreasePostViews";
import { PostRenderMetadata } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostPage({
  metadata,
  body,
}: {
  metadata: PostRenderMetadata;
  body: string;
}) {
  const { mutateAsync: increaseCount } = useIncreasePostViews(metadata.id);

  useEffect(() => {
    increaseCount();
  }, []);

  return (
    <Page css={{ marginTop: 20 }}>
      <SEO
        title={metadata.title}
        description={metadata.description}
        canonical={getCanonicalAbsolutePath(`/posts/${metadata.path}`)}
      />
      <Container>
        <Block>
          <Title
            css={css`
              margin-bottom: 10px;
            `}
          >
            {metadata.title}
          </Title>
          <span
            css={css`
              margin-bottom: 10px;
            `}
          >
            {dateUtils.formatDateToShow(metadata.timestamp)}
          </span>
          <Hr css={{ marginBottom: 20 }} />
          <Stack.Vertical align="stretch">
            <MarkdownRenderer markdown={body} />
          </Stack.Vertical>
        </Block>
        <Comments />
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

  if (typeof params.path === "object") {
    throw new Error("path는 string이어야 합니다.");
  }

  const dir = path.join(process.cwd(), "posts");
  const fileName = `${dir}/${params.path}.md`;

  const content = fs.readFileSync(fileName, "utf8");
  const { attributes, body } = postUtils.parseFrontMatter(content);

  const safeAttributes = postUtils.safeParseAttributes(attributes, {
    timestamp: dateUtils.formatDate(fs.statSync(fileName).birthtime),
  });

  const renderMetatData: PostRenderMetadata = {
    ...safeAttributes,
    path: params.path,
  };

  return {
    props: {
      metadata: renderMetatData,
      body,
    },
  };
};
