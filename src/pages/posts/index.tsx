import fs from "fs";
import path from "path";
import frontMatterParser from "front-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import { Article } from "#/components/Article";
import { Page } from "#/components/Page";
import { Section } from "#/components/Section";
import { Title } from "#/components/Title";
import { PostFrontMatters, PostSummary } from "#/types/Post";
import { dateUtils } from "#/utils/date";
import { postUtils } from "#/utils/post";

export default function PostsPage({ posts }: { posts: PostSummary[] }) {
  return (
    <Page title="포스트">
      <Article>
        <Title>포스트</Title>
        <Section>
          {posts.map((post) => (
            <Link key={post.path} href={`/posts/${post.path}`}>
              <span>
                {post.title} | {dateUtils.formatKRDate(post.date)}
              </span>
            </Link>
          ))}
        </Section>
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
