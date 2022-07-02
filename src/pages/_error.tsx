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
    <Page>
      <SEO title="잘못된 경로예요.." />
      <Container>
        <Block>
          <Stack.Vertical align="stretch">
            <Title css={{ textAlign: "center" }}>잘못된 경로예요.</Title>
            <Button
              onClick={() => router.replace("/")}
              css={{ alignSelf: "center" }}
            >
              홈으로 돌아가기
            </Button>
          </Stack.Vertical>
        </Block>
      </Container>
    </Page>
  );
}
