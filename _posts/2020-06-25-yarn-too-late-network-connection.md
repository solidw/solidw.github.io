---
layout: post
title: "info There appears to be trouble with your network connection. Retrying..."
categories: devlog
tags: yarn error
comments: true
---

# info There appears to be trouble with your network connection. Retrying...

새로운 프로젝트를 위해 `@material-ui/icon`을 다운 받기 위해

`yarn add @material-ui/icon`를 입력했다.

하지만 패키지를 다운 받는데에 어느 정도의 시간이 걸리면 yarn에서 connection을 끊는 것 같았다.

`info There appears to be trouble with your network connection. Retrying...`

라는 에러가 반복되고 설치가 되지 않아 찾아보았다.

이 경우에는

`yarn add @material-ui/icons --network-timeout 1000000` 과 같이 timeout 시간을 엄청 크게 잡아주면 시간이 좀 걸리더라도 취소되지 않고 이어서 설치하게 된다.

아무래도 icon이 1100개 가량 되다보니까 너무 오래 걸려서 멈췄던 것 같다.

