import { AnyObject } from "#/types";

interface FrontMatter extends AnyObject {
  [key: string]: string;
}

const FRONT_MATTER_REGEX = /^---([\s\S][^---]*)---/;

export function frontMatterParser(text: string) {
  const match = matcher(trimmer(text));

  if (match == null) {
    return null;
  }

  if (match.length < 1) {
    return null;
  }

  const body = match[1];

  const lines = body.split("\n");
  const frontMatters = lines.map(trimmer).reduce((lines, line) => {
    const [key, ...values] = line.split(/:/);
    if (key.length === 0) {
      return lines;
    }

    lines[key] = trimmer(values.join(":"));

    return lines;
  }, {} as FrontMatter);

  return frontMatters;
}

function matcher(text: string) {
  return text.match(FRONT_MATTER_REGEX);
}

function trimmer(text: string) {
  return text.trim();
}
