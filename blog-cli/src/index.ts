import { Cli } from "clipanion";
import { GeneratePostMetadata } from "./GeneratePostCommand";

const cli = new Cli({
  binaryLabel: "blog cli",
  binaryName: "blog-cli",
});

cli.register(GeneratePostMetadata);
cli.runExit(process.argv.slice(2), Cli.defaultContext);
