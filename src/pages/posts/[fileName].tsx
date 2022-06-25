import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Article } from "#/components/Article";
import { Hr } from "#/components/Hr";
import { MarkdownRenderer } from "#/components/MarkdownRenderer";
import { Page } from "#/components/Page";
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
    <Page title={attributes.title}>
      <Article>
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
          {dateUtils.formatDateToShow(attributes.date)}
        </span>
        <Hr />
        <Stack.Vertical>
          <MarkdownRenderer markdown={body} />
        </Stack.Vertical>
      </Article>
    </Page>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(dir);

  const paths = fileNames.map((fileName) => ({
    params: { fileName: postUtils.getFileNameBase(fileName) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.fileName == null) {
    throw new Error("fileName을 찾을 수 없습니다.");
  }

  const dir = path.join(process.cwd(), "posts");
  const fileName = `${dir}/${params.fileName}.md`;

  const content = fs.readFileSync(fileName, "utf8");
  const { attributes, body } = postUtils.parseFrontMatter(content);

  const safeAttributes = postUtils.safeParseAttributes(attributes, {
    date: dateUtils.formatDate(fs.statSync(fileName).birthtime),
  });

  return {
    props: {
      attributes: safeAttributes,
      body,
    },
  };
};
