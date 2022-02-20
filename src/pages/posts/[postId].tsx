import { Page } from "#/components/Page";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostPage({ postId }: { postId: string }) {
  return <Page title={String(postId)}>postId: {postId}</Page>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array(100)
    .fill(undefined)
    .map((_, index) => ({
      params: { postId: String(index) },
    }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      postId: params?.postId,
    },
  };
};
