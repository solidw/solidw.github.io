---
id: 0
title: "개발 블로그에서 마크다운을 다루는 방법"
description: "개발 블로그에 기본이라고 할 수 있는 Markdown 파서와 Syntax highlight 삽질을 들여다보자"
to: "한 땀 한 땀 블로그를 만들고 싶은 사람들에게"
timestamp: "2022-06-19T00:00:00.000Z"
---

# 마크다운?

> 마크다운은 일반 텍스트 기반의 경량 마크업 언어다. 일반 텍스트로 서식이 있는 문서를 작성하는 데 사용되며, 일반 마크업 언어에 비해 문법이 쉽고 간단한 것이 특징이다. [위키백과](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4)

````markdown
# 이처럼 #이 하나 붙으면 h1 태그로 렌더함

- list도 만들 수 있고

`Code도 표현할 수 있다.`

```ts
const HelloBlog = () => "Hello Blog";
```
````

# 이처럼 #이 하나 붙으면 h1 태그로 렌더함

- list도 만들 수 있고

`Code도 표현할 수 있다.`

```ts
const HelloBlog = () => "Hello Blog";
```

---

블로그 글을 쓸 때 매번 `<h1>제목</h1>` `<code>const a = 1</code>` 이렇게 작성한다면 나는 글도 써야하고 마크업도 신경써야 할 것이다.
이 때 마크다운 형식으로 포스팅을 작성한다면

1. 앞서 말한 것처럼 글감에만 집중할 수 있다.
2. 마크다운 형식을 사용하는 다른 곳에 사용하기 용이하다.(대표적으로 GitHub Issue, Pull Request 등)
3. 몇가지 스타일을 커스텀해두면 그 다음에는 디자인을 신경 쓰지 않아도 글을 작성하는 것이 수월하다.

본론으로 돌아와서, 나의 블로그 제작 계획은 이러했다.
`/posts/`에 `포스팅.md` 형식으로 작성하고, 웹페이지를 렌더할 때(정확히는 빌드타임) 해당 파일을 읽어서 html로 변환하여 보여주는 것이다. 즉 내가 포스팅을 작성하기 위해서는 마크다운 파일을 `/posts/` 아래에 작성만 하면 되는 것이다.

우선 렌더하는 곳 `/posts/[postid]` 에서 `getStaticPaths`/`getStaticProp`를 통해 마크다운 파일을 읽도록 했다. 이 함수들은 빌드타임에 실행되고, 빌드 후에는 다시 실행되지 않는 함수이다. (즉 유저가 접속할 때 마다 실행되는 것이 아니고 빌드 시에 호출한 getStaticXXX()의 결과물을 보여줄 것이다.) [next 도큐먼트](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)

```ts
export const getStaticPaths: GetStaticPaths = async () => {
  const dir = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(dir);

  const paths = fileNames.map((fileName) => ({
    params: { fileName: postUtils.getFileNameBase(fileName) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.fileName == null) {
    throw new Error("fileName을 찾을 수 없습니다.");
  }

  const dir = path.join(process.cwd(), "posts");
  const fileName = `${dir}/${params.fileName}.md`;

  const content = fs.readFileSync(fileName, "utf8");
  const { attributes, body } = postUtils.parseFrontMatter(content);

  const safeAttributes = postUtils.safeParseAttributes(attributes, {
    date: dateUtils.formatDate(fs.statSync(fileName).birthtime),
  });

  return {
    props: {
      attributes: safeAttributes,
      body,
    },
  };
};
```

이 때 포스트의 메타데이터를 주입해주기 위해 `frontMatterParser` 를 사용했는데, 파일 맨 위에 선엄함으로써 이 포스트의 title, description, date 등의 정보들을 정의할 수 있다. yaml 파일 형식에서 많이 사용하는 듯 하다. 나는 예전에 jekyll을 이용한 깃허브 블로그를 만들 때 front matter를 사용했던 기억이 떠올라 같은 방식을 선택했다.

```markdown
---
title: "블로그 만들기(1) - 마크다운 이 녀석"
description: "개발 블로그에 기본이라고 할 수 있는 마크다운 파서와 Syntax highlight 삽질을 들여다보자"
date: "2022-06-19"
---
```

> 이 포스팅의 FrontMatter

작업을 요약하자면

1. 마크다운 파일을 불러와서
2. front matter를 분리한 본문(body)를 획득했다.

남은 작업은 아래의 3번 4번 정도인데..

3. markdown을 html로 바꾸어 렌더하기
4. syntax highlighting을 통해 고도화하기

Markdown 문법의 텍스트를 html로 바꾸어주는 라이브러리는 꽤나 많은데, 가장 유명하고 커뮤니티가 큰 라이브러리는 [unifiedjs](https://unifiedjs.com/) 이다. unified는 `remark`(마크다운) / `rehype`(HTML), `retext`(자연어) 등등을 지원하는데, 블로그 포스팅을 위해서는 remark와 rehype만 있으면 된다.
추가적으로 Code Syntax를 하이라이팅 해주고 싶어서 `rehype-prism-plus` 라는 라이브러리도 추가했다.

```ts
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify/lib";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";

function MarkdownRenderer({ markdown }: { markdown: string }) {
  const htmlText = remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .use(rehypePrism)
    .processSync(markdown)
    .toString();

  return <MarkdownRenderBlock dangerouslySetInnerHTML={{ __html: htmlText }} />;
}

const MarkdownRenderBlock = styled.div`
  line-height: 3rem;
  blockquote {
    box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
    margin: 0;
    padding: 5px;
    border-left: 0.25em solid ${neumorphismTheme.secondary};
    & > * {
      margin: 0;
    }
  }

  p > code {
    box-shadow: ${createNeumorphismBoxShadow(1, 2, { inset: true })};
    padding: 5px;
    margin-left: 3px;
    margin-right: 3px;
  }

  :not(pre) > code[class*="language-"],
  pre {
    background: ${theme.palette.primary.light};
    box-shadow: ${createNeumorphismBoxShadow(3, 5, { inset: true })};
    border: none;
    padding: 15px;
  }

  // 여기 아래부터 커스텀(prism-themes)
  /**
 * VS theme by Andrew Lock (https://andrewlock.net)
 * Inspired by Visual Studio syntax coloring
 */

  code[class*="language-"],
  pre[class*="language-"] {
    color: #393a34;
    font-family: "Consolas", "Bitstream Vera Sans Mono", "Courier New", Courier,
      monospace;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    font-size: 0.9em;
    line-height: 1.2em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre > code[class*="language-"] {
    font-size: 1em;
  }

  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    background: #c1def1;
  }

  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection {
    background: #c1def1;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
    border: 1px solid #dddddd;
    background: none;
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: 0.2em;
    padding-top: 1px;
    padding-bottom: 1px;
    background: #f8f8f8;
    border: 1px solid #dddddd;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #008000;
    font-style: italic;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.string {
    color: #a31515;
  }

  .token.punctuation,
  .token.operator {
    color: #393a34; /* no highlight */
  }

  .token.url,
  .token.symbol,
  .token.number,
  .token.boolean,
  .token.variable,
  .token.constant,
  .token.inserted {
    color: #36acaa;
  }

  .token.atrule,
  .token.keyword,
  .token.attr-value,
  .language-autohotkey .token.selector,
  .language-json .token.boolean,
  .language-json .token.number,
  code[class*="language-css"] {
    color: #0000ff;
  }

  .token.function {
    color: #393a34;
  }

  .token.deleted,
  .language-autohotkey .token.tag {
    color: #9a050f;
  }

  .token.selector,
  .language-autohotkey .token.keyword {
    color: #00009f;
  }

  .token.important {
    color: ${theme.palette.secondary.dark};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.class-name,
  .language-json .token.property {
    color: #2b91af;
  }

  .token.tag,
  .token.selector {
    color: #800000;
  }

  .token.attr-name,
  .token.property,
  .token.regex,
  .token.entity {
    color: #ff0000;
  }

  .token.directive.tag .tag {
    background: #ffff00;
    color: #393a34;
  }

  /* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
  .line-numbers.line-numbers .line-numbers-rows {
    border-right-color: #a5a5a5;
  }

  .line-numbers .line-numbers-rows > span:before {
    color: #2b91af;
  }

  /* overrides color-values for the Line Highlight plugin
* http://prismjs.com/plugins/line-highlight/
*/
  .line-highlight.line-highlight {
    background: rgba(193, 222, 241, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(193, 222, 241, 0.2) 70%,
      rgba(221, 222, 241, 0)
    );
    background: linear-gradient(
      to right,
      rgba(193, 222, 241, 0.2) 70%,
      rgba(221, 222, 241, 0)
    );
  }
`;
```

> 스타일은 조금씩 커스텀했다.

만족스러운 디자인의 포맷을 만들어서 기분이 좋다.
글을 열심히 써야겠다.
