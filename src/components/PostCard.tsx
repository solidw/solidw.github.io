import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { Badge } from "./Badge";
import { neumorphismTheme } from "#/styles/theme";
import { defualtTransition, normalizeLink } from "#/styles/utils";
import { PostSummary } from "#/types/Post";
import { dateUtils } from "#/utils/date";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <Link href={`/posts/${post.path}`} passHref={true}>
      <a css={normalizeLink}>
        <Card>
          <h2>{post.title}</h2>
          <p
            css={css`
              font-size: 1.6rem;
              margin: 12px 0px 40px;
              color: ${neumorphismTheme.textDark};
            `}
          >
            {post.description}
          </p>
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
  /* border: 1px solid ${neumorphismTheme.darkShadow}; */

  &:hover {
    box-shadow: -2px -2px 5px ${neumorphismTheme.lightShadow},
      2px 2px 5px ${neumorphismTheme.darkShadow};
  }

  &:active {
    box-shadow: inset 1px 1px 2px ${neumorphismTheme.darkShadow},
      inset -1px -1px 2px ${neumorphismTheme.lightShadow};
  }
`;
