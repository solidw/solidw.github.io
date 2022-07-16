import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Block } from "#/components/Block";
import { Button } from "#/components/Button";
import { Container } from "#/components/Container";
import { Page } from "#/components/Page";
import { SEO } from "#/components/SEO";
import { Stack } from "#/components/Stack";
import { Title } from "#/components/Title";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <Page full={true} css={{ marginTop: 20 }}>
      <SEO title="잘못된 경로에요" />
      <Container>
        <Block
          css={css`
            height: 100%;
          `}
        >
          <Stack.Vertical
            align="stretch"
            css={{ flex: 1, position: "relative" }}
          >
            <Title css={{ textAlign: "center", whiteSpace: "pre-wrap" }}>
              이 페이지는 사라졌거나, 잘못된 URL이에요.
            </Title>
            <p>아래 버튼을 눌러서 돌아갈 수 있어요.</p>
            <Button
              onClick={() => router.replace("/")}
              css={{
                alignSelf: "center",
                position: "absolute",
                bottom: 0,
                width: 200,
                height: 200,
              }}
            >
              홈으로 돌아가기
            </Button>
          </Stack.Vertical>
        </Block>
      </Container>
    </Page>
  );
}
