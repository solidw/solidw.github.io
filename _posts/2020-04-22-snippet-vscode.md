---
layout: post
title: "vscode의 유용한 기능 snippet"
categories: devlog
tags: vscode snippet
comments: true
---

# Snippet

한글로는 코드 조각, 단어 자동완성 하듯이 snippet을 이용하여 원하는 텍스트를 snippet으로 지정하여 불러올 수 있다.

예를 들어 React Functional Component를 의미하는 `rfc`를 입력 후 Ctrl+Space, 그리고 Tab을 누른다면 내가 미리 지정해놓은 함수형 컴포넌트의 skeleton을 불러올 수 있다.

![](https://i.imgur.com/iAWpl22.gif)

> 이렇게 말이다. 이 때 format을 자동변환 해준 것은 vscode의 extension인 prettier.



이 snippet 기능을 사용하기 위해선 다음과 같은 step이 필요하다.

1. Ctrl + Shift + p를 눌러 "기본 설정: 설정 열기(JSON)" 혹은 "Open Settings(JSON)" 을 열어 settings.json을 편집한다.
2. `"editor.snippetSuggestions": "top",`을 아무데나 넣어준다.
3. Ctrl + Shift + p를 통해 `Configure User Snippets`를 연다.
4. 글로벌 혹은 특정 프로젝트에 한정 지을 수 있는데 나는 모든 프로젝트에서 사용하고 싶어 전역으로 지정했다. `새 전역 코드 조각 파일`
5. 파일명을 지정한다. 확장자는 필요없다. `snippetForReact`
6. 친절히 예제가 나와있다.

```
// Example:
"Print to console": {
"scope": "javascript,typescript", 
"prefix": "log", 
"body": [ 
	"console.log('$1');",
	"$2"
	],
"description": "Log output to console"
}
```

```
"Print to console"
	> snippet에 대한 설명, 원하는 이름으로 수정 가능
"scope"
	> snippet을 사용할 확장자에 대한 설명. JSX에서 snippet을 사용하고 싶다면 
	> "javascriptreact"를 추가
"prefix"
	> 단축어, 이 경우 log를 입력하면 body의 있는 데이터를 불러온다.
"body"
	> 알맹이, 이 때 $1은 cursor의 위치를 말한다. 입력한 후 tab을 누르면 $2로 커서가 이동
```



나는 주로 `styled-component`를 쓰고, div tag를 `styled-compoent`를 `ComponentWrapper`라는 이름으로 사용하기 때문에 다음과 같이 snippet을 구성했다.

```
"React Functinal Component": {
		"scope": "javascript,typescript,javascriptreact",
		"prefix": "rfc",
		"body": [
			"import React from \"react\";",
			"import styled from \"styled-components\";",
			"",
			"const $1 = () => {",
			"  return (<$1Wrapper></$1Wrapper>)",
			"};",
			"",
			"const $1Wrapper = styled.div`",
			"",
			"`;",
			"export default $1",
		],
		"description": "Generate React function component with styled-component import"
	},
```

> 이 다중 커서는 ESC를 누르면 제거되고, Ctrl + 클릭 혹은 Ctrl + Alt로도 다중 커서를 만들 수 있다.

snippet 기능을 사용하면 파일을 만들 때 마다 무의식적으로 반복 했던 작업들을 줄여 개발 효율이 향상될 것 같다. 만족~

이렇게 일일이 적어주기 귀찮다면 vscode extension인 `JS JSX Snippets`를 사용하자.

[JS JSX Snippets](https://marketplace.visualstudio.com/items?itemName=skyran.js-jsx-snippets)