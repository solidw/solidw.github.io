import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Badge } from "./Badge";
import { Flex } from "./Flex";
import { Pre } from "./Pre";
import { neumorphismTheme } from "#/styles/theme";
import {
  createNeumorphismBoxShadow,
  defualtTransition,
  normalizeLink,
} from "#/styles/utils";
import { PostRenderMeatData } from "#/types/Post";
import { dateUtils } from "#/utils/date";

export function PostCard({ post }: { post: PostRenderMeatData }) {
  return (
    <Link href={`/posts/${post.path}`} passHref={true}>
      <a css={normalizeLink}>
        <Card>
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
          <Badge size="small">{dateUtils.formatDateToShow(post.date)}</Badge>
        </Card>
      </a>
    </Link>
  );
}

const Card = styled.li`
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
