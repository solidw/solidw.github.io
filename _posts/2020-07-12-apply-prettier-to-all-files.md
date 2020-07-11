---
layout: post
title: "apply prettier to all files"
categories: devlog
tags: yarn error
comments: true
---

# Prettier ?

`Prettier`란 코드 포맷팅을 강제하는 라이브러리이다.

주로 코드의 일관성을 통해 협업 증가, 코드 포맷팅의 편의성 들을 이용해 사용한다.

기존의 Prettier를 사용하던 프로젝트에서, options를 추가하고 싶었는데, 100개 가까이 되는 파일을 하나하나 적용하기에는 너무 아찔했다.

하지만 Prettier에서는 recursive하게 모든 파일에 대해서 적용하는 cli가 있었다.

`prettier --write \"**/*.js\"` 이다.

> 윈도우에서는 npx prettier --write "\*_/_.js".

> 단 prettier 가 설치되어 있을 때. 설치되지 않았다면 설치하자 `yarn add prettier`

이 명령어를 실행하면 실행된 경로부터 재귀적으로 .js로 끝나는 모든 파일들에 대해서 prettier가 실행된다.

50개 정도 되는 파일이 한번에 수정되어 깃에 통째로 올려버렸다.

![prettier](https://i.imgur.com/4wFwYo4.png)

참고로 내가 사용한 prettier 설정 파일은 다음과 같다. [airbnb/javascript](github.com/airbnb/javascript) 를 참고한 설정)

`.prettierrc` 프로젝트의 root 디렉토리에 `.prettierrc` 파일을 생성하고 아래와 같이 입력하면 된다.

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "semi": true,
  "useTabs": true,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "bracketSpacing": true
}
```

만약 .js 파일로 적용하고 싶다면

`.prettierrc.js` 에

```javascript
module.export = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: "all",
  semi: true,
  useTabs: true,
  jsxSingleQuote: true,
  arrowParens: "always",
  bracketSpacing: true,
};
```

이렇게 입력하면 된다!
