---
layout: post
title: "SHA-1 is not computed."
categories: devlog
tags: react-native sha-1
comments: true
---

# SHA-1 is not computed.

React Native 프로젝트에서 .png는 잘 import 되는데, .jpg 파일의 경우에는 `SHA-1 not computed.` 라는 에러가 발생했다.

이 경우에는 `react-native-cli`를 업데이트하면 해결된다.

`npm i -g react-native-cli`

