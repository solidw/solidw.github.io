---
layout: post
title: "[JFS] Flagyy Bird"
excerpt_separator: <!--more-->
tags: [JFS_5TH, CTF, MISC, Write-Up]
comment: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***

Flaggyy Bird라는 문제. 250점짜리 !!!!

<!--more-->

![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/00.PNG)

시간이 좀 걸렸다.



![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/01.PNG)

"어디까지 읽을 수 있을까."



![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/02.PNG)

링크를 눌러보면 flaggy bird라는 게임이 웹에서 켜진다.

일단 게임을 해봤더니,



![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/03.PNG)

배경에 `J.. F.. S.. {.. ` 와 같이 flag가 하나씩 나온다. 하지만 나오는 속도가 느려서 온전히 깨서 보려면 게임을 엄청 잘해야 할 것이다..



비슷한 문제를 [wargame.kr](wargame.kr) 에서 `fly me to the moon` 이라는 문제에서 풀었던 적이 있다. 그 때의 기억을 살려 F12를 눌러 개발자도구로 접근했다.



![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/04.PNG)

Source - main.js를 누르면 웹에서 게임이 돌아가는 코드가 나온다. 잘 살펴봤더니, 죽어도 죽지 않게 설정할 수 있었다.



![]({{site.baseurl}}/images/2018-12-12-JFS-FlaggyyBird/05.PNG)

> gameOver 변수를 false로 바꿨다 !

이렇게 바꾼 뒤, 저장(Ctrl + S)한 후에 다시 게임을 시작하면 죽었음에도 게임이 진행되며 FLAG가 계속 출력된다.



자 이제 메모장을 켜고 나오는 글자를 하나하나 타이핑 해보자....



`JFS{F1a99yBir1d_i5_700_H4rd!}` 

FlaggyBird는 매우 어렵다...

250점 획득!