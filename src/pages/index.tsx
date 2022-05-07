import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/posts",
      permanent: true,
    },
  };
};
