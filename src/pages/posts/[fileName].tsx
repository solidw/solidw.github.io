import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import frontMatterParser from "front-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { Article } from "#/components/Article";
import { Hr } from "#/components/Hr";
import { Page } from "#/components/Page";
import { Stack } from "#/components/Stack";
import { Title } from "#/components/Title";
import { PostAttributes, PostFrontMatters } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostPage({
  fileName,
  attributes,
  body,
}: {
  fileName: string;
  attributes: PostAttributes;
  body: string;
}) {
  return (
    <Page title={fileName}>
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

        <Stack.Vertical
          css={css`
            margin-top: 40px;
          `}
        >
          <ReactMarkdown children={body} />
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
  const fileNameBase = params.fileName;
  const fileName = `${dir}/${fileNameBase}.md`;

  const content = fs.readFileSync(fileName, "utf8");
  const { attributes, body } = frontMatterParser<PostFrontMatters>(content);

  if (attributes.title == null) {
    throw new Error("title은 반드시 입력해야 합니다.");
  }

  const safeAttributes = postUtils.safeParseAttributes(attributes, {
    date: dateUtils.formatDate(fs.statSync(fileName).birthtime),
  });

  return {
    props: {
      fileName: fileNameBase,
      attributes: safeAttributes,
      body,
    },
  };
};
