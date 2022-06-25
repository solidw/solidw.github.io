import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import { Article } from "#/components/Article";
import { Hr } from "#/components/Hr";
import { Page } from "#/components/Page";
import { PostCard } from "#/components/PostCard";
import { SEO } from "#/components/SEO";
import { Title } from "#/components/Title";
import { PostRenderMeatData } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostsPage({ posts }: { posts: PostRenderMeatData[] }) {
  return (
    <Page title="포스트">
      <SEO title="포스트" description="포스팅" canonical={`/posts`} />
      <Article>
        <Title>포스트</Title>
        <Hr />
        <ul
          css={css`
            display: flex;
            flex-direction: column;
            margin: 0;
            padding: 0;
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
  posts: PostRenderMeatData[];
}> = async () => {
  const dir = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(dir);

  const posts = fileNames.reduce<PostRenderMeatData[]>((posts, fileName) => {
    const path = `${dir}/${fileName}`;
    const content = fs.readFileSync(path, "utf8");
    const birthDate = dateUtils.formatDate(fs.statSync(path).birthtime);

    const { attributes } = postUtils.parseFrontMatter(content);
    const safeAttributes = postUtils.safeParseAttributes(attributes, {
      date: birthDate,
    });

    const post: PostRenderMeatData = {
      ...safeAttributes,
      path: postUtils.getFileNameBase(fileName),
    };

    posts.push(post);
    return posts;
  }, []);

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    props: {
      posts,
    },
  };
};
