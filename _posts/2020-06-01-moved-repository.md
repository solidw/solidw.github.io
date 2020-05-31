---
layout: post
title: "remote: This repository moved."
categories: devlog
tags: git rename
comments: true
---

# remote: This repository moved.

프로젝트를 진행하다가 이름을 바꿀 일이 생겨서 레포 이름을 부랴부랴 이름을 바꿨다.

바꾸고 나서 한동안 git add, commit, push를 잘하다가 어떤 경고문을 봤다.



`This repository moved. Please use the new location:`

생각해보니 레포 이름이 바뀌어서 url도 바뀌었을테인데 그동안 push가 잘도 되었다. github가 알아서 조정해줬나보다.

이 경고문을 더 이상 보고 싶지 않다면 

` git remote set-url origin {new url}`



예를 들면

`git remote set-url origin https://github.com/some-user/new-url.git`

과 같이 set-url 해주면 된다.