import Button from "#/components/Button";
import { Page } from "#/components/Page";
import { Stack } from "#/components/Stack";

export default function MePage() {
  return (
    <Page title='ME' wide>
      <Stack.Vertical>
        ME
        <Button>test</Button>
      </Stack.Vertical>
    </Page>
  );
}
