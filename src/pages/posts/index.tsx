import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import frontMatterParser from "front-matter";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import { Article } from "#/components/Article";
import { Hr } from "#/components/Hr";
import { Page } from "#/components/Page";
import { PostCard } from "#/components/PostCard";
import { Title } from "#/components/Title";
import { PostFrontMatters, PostSummary } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostsPage({ posts }: { posts: PostSummary[] }) {
  return (
    <Page title="포스트">
      <Article
        css={css`
          padding: 0;
        `}
      >
        <Title
          css={css`
            padding: 30px 30px;
          `}
        >
          포스트
        </Title>
        <Hr />
        <ul
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          {posts.map((post, index) => (
            <Fragment key={post.path}>
              <PostCard key={post.path} post={post} />
              {index !== posts.length - 1 && <Hr />}
            </Fragment>
          ))}
        </ul>
      </Article>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: PostSummary[];
}> = async () => {
  const dir = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(dir);

  const posts = await Promise.all(
    fileNames.reduce<PostSummary[]>((posts, fileName) => {
      const path = `${dir}/${fileName}`;
      const content = fs.readFileSync(path, "utf8");
      const birthDate = dateUtils.formatDate(fs.statSync(path).birthtime);

      const { attributes } = frontMatterParser<PostFrontMatters>(content);
      const safeAttributes = postUtils.safeParseAttributes(attributes, {
        date: birthDate,
      });

      const post: PostSummary = {
        path: postUtils.getFileNameBase(fileName),
        ...safeAttributes,
      };
      posts.push(post);
      return posts;
    }, [])
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      posts,
    },
  };
};
