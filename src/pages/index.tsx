import { GetStaticProps } from "next";

export default function IndexPage() {
  return null;
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/posts",
      permanent: true,
    },
  };
};
