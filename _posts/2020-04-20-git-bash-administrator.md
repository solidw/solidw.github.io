---
layout: post
title: "git-bash를 관리자 권한으로 실행해보자"
categories: devlog
tags: git-bash
comments: true
---

# Run git-bash as administrator

새 프로젝트를 만들기 위해 CRA를 사용하기 위해 git-bash에서 `yarn create react-app somerepo`를 입력했는데, 관리자 권한이 필요하다는 오류와 함께 실행되지 않았다.

나는 git bash를 파일 탐색기에서 우클릭을 통해 실행했는데, 이 git bash에 관리자 권한을 어떻게 부여해야할 지 생각했다.



#### 1. User를 항상 administrator로 둔다
> 나중에 보안상으로 문제가 있을 것 같아 철회



#### 2. git-bash 오리지널 파일에 관리자 권한 부여

Menu bar에서 `git bash`를 입력하면 기존의 아이콘과 다른 일반 실행프로그램이 나온다.

![1587369325209](C:\Users\solidw\AppData\Roaming\Typora\typora-user-images\1587369325209.png)

우클릭해서 `파일 위치 열기`를 누를 경우에 해당 디렉토리로 이동한다.

우리가 우클릭으로 사용하는 `Git Bash Here`의 위치는 그 디렉토리의 한층 위에 위치하는데,

기본 디렉토리는 다음과 같다.

> Program Files > Git

`git-bash.exe` 파일의 속성에서 

> 호환성 > 관리자 권한으로 이 프로그램 실행 ( 윈도우 10 기준 )

을 통해 git bash를 항상 관리자 권한으로 실행할 수 있다.



#### 단, 이 경우에 당연하지만 관리자 권한으로 실행하겠냐는 uac(User Account Control) 가 뜬다.

이런 부분이 번거로워서 특정 프로그램의 uac를 해제하는 방법을 찾아보았다.

윈도우의 `작업 스케쥴러`를 이용해서 특정 프로그램만 uac를 해제할 수 있었다. 하지만 git bash에 직접 적용하는 방법은 찾지 못했고 바로가기에만 적용할 수 있었다.



#### 3. 너무 돌아왔다. 그냥 바로가기를 두자

단순하게 git bash의 바로가기를 자주 쓰는 폴더 ( 나같은 경우에는 git을 이용하는 레포지토리들을 한 폴더 안에 모아둔다. )에 두고 `우클릭 > 관리자 권한으로 실행하기` 라는 간단한 방법을 채택했다.

사실상 개발하면서 관리자 권한이 필요한 경우는 많지 않을 것 같아 필요한 경우 (CRA)에만 관리자 권한으로 실행하는 것이 가장 좋을 것 같다고 생각했다.

>Program Files > Git 

`git-bash.exe` 우클릭 후 바로가기 만들기 => 바탕화면에 바로가기가 생긴다.

이후 원하는 폴더에 두고

![1587369831039](C:\Users\solidw\AppData\Roaming\Typora\typora-user-images\1587369831039.png)

>  우클릭으로 실행, 관리자 권한은 필요할 때만 실행하는 것이 합리적이라고 생각한다.



> 근데 이럴거면 굳이 git-bash 안써고 필요할 때만 잠깐 PowerShell을 관리자 권한으로 실행해도 될 것 같다 .... ㅎ ㅎ