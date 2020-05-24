---
layout: post
title: "absolute-path-in-react-native"
categories: devlog
tags: path absolute react-native
comments: true
---

# Absolute path in React Native

React 그리고 React Native에서는(ES6) import 할 때 다음과 같이 사용한다.

`import { SomeComponent } from '../../components/SomeComeponents';`

디렉토리 구조가 단순하다면 문제가 되지 않지만 리팩토링 할 때 다른 디렉토리 depth로 넘어갈 때 일일이 수정해줘야 하는 등 번거롭다.

이 때 Vscode를 사용하여 개발할 경우 React에서 다음과 같이 해결할 수 있다.

root 디렉토리의 `jsconfig.json` 파일을 만들어

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "*": [
        "*",
        "src/*"
      ]
    }
  }
}
```

이렇게 설정해줄 경우 위의 import 문을 상대경로가 아닌 절대경로로 사용할 수 있다.

`import { SomeComponent } from 'src/components/SomeComeponents';`



하지만 React Native에서는 위와 같이 해결할 수 없다.

대신 이런 방법이 있다.

/src 안에 `package.json` 파일을 생성한다. (원래는 package.json은 package 관리를 위해 root에만 존재한다. CRA, CRNA 기준)

```json
{
  "name": "src"
}
```

이렇게 설정해줄 경우 React Native에서도 절대경로를 통한 import가 가능하다!

`import { SomeComponent } from 'src/components/SomeComeponents';`



디렉토리 구조가 단순할 경우에는 './~~' 형태가 더 편리할지도 모르나, 추후에 리팩토링이나 depth가 깊어지는 것을 생각하면 절대경로를 사용하는 것이 편리할 것 같다.