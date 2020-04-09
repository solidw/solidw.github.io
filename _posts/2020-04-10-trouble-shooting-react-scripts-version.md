---
layout: post
title: "TypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string. Received type undefined"
categories: devlog
tags: react-scripts^3.4.0
comments: true
---

# Trouble Shooting

React에서 개인 프로젝트를 하던 중, `axios`에서 post 요청이 특정 api에서만 안되는 문제가 생겨 홧김에 `npm i` 했다가

```
TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined
```

이런 오류를 만났다.



이 오류는 react-scripts 3.3.x series에서 발생한다고 한다.

`package.json`에서 `"react-scripts": ^3.4.0"` 으로 수정해주었다.



함부로 `npm install`하면 안되겠다.

해결~

> 아직 axios에서 post 요청이 405 error: method not allowd 가 발생하는 현상은 해결 못했다.. 계속되는 삽질ㅠ