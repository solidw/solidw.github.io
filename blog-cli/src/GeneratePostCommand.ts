import fs from "fs";
import { Command, Option } from "clipanion";

export class GeneratePostMetadata extends Command {
  name = Option.String("-n,--name", "created", {
    description: "Path of the post",
  });
  title = Option.String("-t,--title", "", { description: "Title of the post" });
  description = Option.String("-d,--description", "", {
    description: "Description of the post",
  });
  to = Option.String("-to", " 에게", {
    description: "To whom the post is sent",
  });

  static paths = [[`g-post`]];

  async execute() {
    const id = fs.readdirSync("posts").length;
    const separator = "---";
    const title = this.title;
    const description = this.description;
    const to = this.to;
    const metadata = `${separator}\nid: ${id}\ntitle: "${title}"\ndescription: "${description}"\nto: "${to}"\ntimestamp: "${new Date().toISOString()}"\n${separator}\n`;

    fs.writeFileSync(`posts/${this.name}.md`, metadata);
    console.log(
      `Successfully created post file at posts/${this.name}.md ${this.title}`
    );
  }
}
