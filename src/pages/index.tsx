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
import { PostRenderMeatData } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function IndexPage({ posts }: { posts: PostRenderMeatData[] }) {
  return (
    <Page title="포스트">
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
                <PostCard key={post.path} post={post} />
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
  posts: PostRenderMeatData[];
}> = async () => {
  const dir = path.join(process.cwd(), "posts");
  const folders = fs.readdirSync(dir);

  const posts = folders.reduce<PostRenderMeatData[]>((posts, folder) => {
    const postPath = `${dir}/${folder}/post.md`;
    const content = fs.readFileSync(postPath, "utf8");
    const birthDate = dateUtils.formatDate(fs.statSync(postPath).birthtime);

    const { attributes } = postUtils.parseFrontMatter(content);
    const safeAttributes = postUtils.safeParseAttributes(attributes, {
      date: birthDate,
    });

    const post: PostRenderMeatData = {
      ...safeAttributes,
      path: postUtils.getFileNameBase(folder),
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
