---
layout: post
title: "yarn start without opening browser in windows 10"
categories: devlog
tags: yarn npm
comments: true
---

# yarn start

Create React App을 이용하여 React 보일러플레이트를 만들었고, 개발 환경에서 yarn을 사용할 때  React 프로젝트를 시작하는 명령어이다.

이 때 불편한 것이 하나 있었는데 바로 `yarn start`를 할 경우 `package.json`에 있는 scripts 명령어에 따라 `react-scripts start` 가 실행된다.

이 경우 주로 사용하는 브라우저의 new tab이 localhost:3000으로 시작하게 되는데, 개발하다가 중간에 잠깐 끄고 다시 켜는 경우 사용하던 탭은 남아있는데 계속 탭이 생겨 일일이 꺼줘야하는 불편함이 있다.

이는 이렇게 해결가능하다.

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

를 다음과 같이 수정한다.

```
"scripts": {
    "start": "react-scripts start",
    "dev": "set BROWSER=none&&react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

set 은 환경변수를 설정해주는 윈도우의 명령어인데, set BROWSER=none를 사용할 경우 새 탭이 뜨지 않게 된다. 그리고 &&를 이용해 바로 react-scripts start 명령어를 불러오는 명령어를 "dev"에 저장하고



`yarn dev` 와 같이 실행할 경우 새 탭이 뜨지 않는 것을 볼 수 있다.



나는 이렇게 설정해두고 새 탭이 필요할 경우 `yarn start`, 이미 개발하던 중 잠깐 껐다가 다시 켜는 경우에는 `yarn dev`를 이용한다.