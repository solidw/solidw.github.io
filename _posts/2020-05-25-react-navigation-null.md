---
layout: post
title: "react-navigation Error: null is not an object (evaluating '_rngesturehandlermodule.default.direction')"
categories: devlog
tags: yarn npm
comments: true
---

# react-navigation Error: null is not an object

React Native 프로젝트를 시작했다.

React에서는 'react-router-dom'을 통해 navigation을 하는 반면 react-native에서는 'react-navigation'이 주로 쓰이는 것 같다.

공식 [document](https://reactnavigation.org/docs/getting-started)를 따라갔는데 가상 머신에서 계속 에러가 떴다.

stackoverflow와 github를 찾아보니 다양한 해결법이 있었지만 해결되지 않았다.

이 때 yarn 대신 npm을 썼다는 말이 있어서 

`yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

대신에

`npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`

을 사용해 dependencies를 설치했다.

이를 통해 해결되었다!

Yarn에서는 왜 안되는 건지는 잘 모르겠다.. 시간이 된다면 contribution도 하고 싶다.