import fs from "fs";
import path from "path";
import { css } from "@emotion/react";
import { GetStaticProps } from "next";
import { Fragment } from "react";
import { Block } from "#/components/Block";
import { Container } from "#/components/Container";
import { Hr } from "#/components/Hr";
import { Page } from "#/components/Page";
import { PostCard } from "#/components/PostCard";
import { SEO } from "#/components/SEO";
import { Title } from "#/components/Title";
import { usePostsViews } from "#/hooks/usePostsViews";
import { PostRenderMetadata } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function IndexPage({ posts }: { posts: PostRenderMetadata[] }) {
  const postViewsMap = usePostsViews();

  return (
    <Page title="포스트" css={{ marginTop: 20 }}>
      <SEO title="포스트" description="포스팅" canonical={`/`} />
      <Container>
        <Block css={{ padding: 0 }}>
          <Title css={{ padding: 20 }}>포스트</Title>
          <Hr />
          <div
            css={css`
              display: flex;
              flex-direction: column;
              margin: 0;
              padding: 0;
              padding: "0px 30px";
            `}
          >
            {posts.map((post, index) => (
              <Fragment key={post.path}>
                <PostCard
                  key={post.path}
                  post={{ ...post, views: postViewsMap[post.id]?.views ?? 0 }}
                />
                {index !== posts.length - 1 && <Hr />}
              </Fragment>
            ))}
          </div>
        </Block>
      </Container>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<{
  posts: PostRenderMetadata[];
}> = async () => {
  const dir = path.join(process.cwd(), "posts");
  const postFiles = fs.readdirSync(dir);

  const posts = postFiles.map((postFile) => {
    const postPath = `${dir}/${postFile}`;
    const content = fs.readFileSync(postPath, "utf-8");
    const { attributes } = postUtils.parseFrontMatter(content);
    const timestamp = dateUtils.formatDate(fs.statSync(postPath).birthtime);
    const safeAttributes = postUtils.safeParseAttributes(attributes, {
      timestamp,
    });

    const post: PostRenderMetadata = {
      ...safeAttributes,
      path: postUtils.getFileNameBase(postFile),
    };

    return post;
  }, []);

  posts.sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return {
    props: {
      posts,
    },
  };
};
