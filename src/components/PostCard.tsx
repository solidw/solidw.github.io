import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Suspense } from "react";
import { Badge } from "./Badge";
import { Flex } from "./Flex";
import { Pre } from "./Pre";
import { ViewCount } from "./ViewCount";
import { neumorphismTheme } from "#/styles/theme";
import { createNeumorphismBoxShadow, defualtTransition } from "#/styles/utils";
import { PostRenderMeatData } from "#/types/Post";
import { dateUtils } from "#/utils/date";

export function PostCard({
  post,
}: {
  post: PostRenderMeatData & { views: number };
}) {
  return (
    <Link href={`/posts/${post.path}`} passHref={true}>
      <Card role="link" css={{ cursor: "pointer" }} as="article">
        <h2>{post.title}</h2>
        <span
          css={css`
            flex-basis: 30%;
            font-size: 1.3rem;
          `}
        >{`to. ${post.to}`}</span>
        <Pre
          css={css`
            font-size: 1.6rem;
            color: ${neumorphismTheme.primaryText};

            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          {post.description}
        </Pre>
        <Flex justify="space-between" align="center">
          <Badge size="small">
            {dateUtils.formatDateToShow(post.timestamp)}
          </Badge>
          <ViewCount count={post.views} />
        </Flex>
      </Card>
    </Link>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  padding: 30px;

  ${defualtTransition};

  &:hover {
    box-shadow: ${createNeumorphismBoxShadow(2, 5)};
  }

  &:active {
    box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
  }
`;
