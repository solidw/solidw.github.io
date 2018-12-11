---
layout: post
title: "[JFS] Rock Paper Cesare!!"
excerpt_separator: <!--more-->
tags: [JFS_5TH, CTF, MISC, Write-Up]
comment: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***

Rock Paper Cesare!!_K 라는 문제이다. scissor를 cesare라고 표현한 것을 보아 caesar에 대한 힌트를 준 것 같다.

<!--more-->

![]({{site.baseurl}}/images/2018-12-10-JFS-RockPaperCesare/00.PNG)

50점 짜리 문제이다.

클릭




![]({{site.baseurl}}/images/2018-12-10-JFS-RockPaperCesare/01.PNG)

가위바위보를 해야한다 !



`RPC.zip` 의 압축을 풀어보면

`RPC.py` 라는 python 코드와  `RPC_module.pyc` 라는 컴파일된 파일이 나온다.



우선 `RPC.py` 의 코드를 확인했다.

```py
import random
import string
import RPC_Module

count = 1;
play = True
pc = 0
while pc<5 :
    #player_choice
    player = raw_input("Enter your choice (rock/paper/scissors): ")
    player = player.lower()

    while (player != "rock" and player != "paper" and player != "scissors"):
        player = raw_input("Enter your choice (rock/paper/scissors): ")
        player = player.lower()
    pc = pc +1

    #computer_random
    computer = random.randint(1,3)
    if (computer == 1):
        computer = "rock"
    elif (computer == 2):
        computer = "paper"
    elif (computer == 3):
        computer = "scissors"
    else:
        print ("Error. Enter your choice from rock, paper, scissors.")

    #result
    if (player == computer):
        print ("Draw!")
    elif (player == "rock"):
        if (computer == "paper"):
            print ("You won.")
        if (computer == "scissors"):
            print ("You lost.")
    elif (player == "paper"):
        if (computer == "rock"):
            print ("You won.")
        if (computer == "scissors"):
            print ("You lost.")
    elif (player == "scissors"):
        count = count +2
        if (computer == "rock"):
            print ("You lost.")
        if (computer == "paper"):
            print ("You won.")

RPC_Module.hi(count)
```



컴퓨터와 가위바위보해서 축적된 count 값을 인자로 RPC_Module의 hi 함수를 실행하는 구조다.

실행해봤다.

![]({{site.baseurl}}/images/2018-12-10-JFS-RockPaperCesare/02.PNG)

ROCK만 5번 냈는데 2번 비기고 3번 졌다.... T.T



가위바위보가 끝나면 `KGT{CJCCJEJ_CPCCJEJ_CPP}` 라는 수상한 FLAG 비슷하게 생긴 문자열이 출력된다.

문제 이름에서 scissor가 아니라 cesare임을 보고 카이사르 암호임을 짐작해서 코딩해봤다.



```py
_input = "KGT{CJCCJEJ_CPCCJEJ_CPP}"
for i in range (0, 26):
        result = ""
        for j in range(0, len(_input)):
                if ord(_input[j]) > 90 or ord(_input[j]) < 65: #A-Z가 아닌 문자는
                        result += chr(ord(_input[j])) #shift 하지 않음 '_', '{', '}'
                elif ord(_input[j])+i < 91: #shift 했을 때 'Z'보다 작을 때 정상 출력
                        result += chr(ord(_input[j]) + i)
                elif ord(_input[j])+i > 90: #shift 했을 때 아스키코드 상에서 A-Z를 벗어나면
                        result += chr(ord(_input[j]) + i - 26) #다시 A로 돌아와서 result에 추가
        print result
```



사실 카이사르 암호는 구글에 `카이사르 암호 복호화` 라고만 쳐도 구현된 소스들이 많지만 파이썬에 익숙해지자는 목적으로 한번 짜봤다.



간단히 설명하자면 해당 문자열을 1번에서 26번씩 shift하는데 ( {a > b, b > c , ...}, {a > c, b > d, ...}, {a > d, b > e, ...})  26번 shift하는 이유는 a-z가 26가지이기 때문이다. 즉 카이사르(시저라고도 불린다.) 암호는 모든 경우의 수를 출력하여 그럴싸한 문자열을 찾으면 암호가 해독되는 간단한 고전 암호이다.



위의 코드를 실행하면 다음과 같은 결과가 출력된다.

![]({{site.baseurl}}/images/2018-12-10-JFS-RockPaperCesare/03.PNG)



제일 그럴싸한 문자열

`JFS{BIBBIDI_BOBBIDI_BOO}` 가 flag임을 알 수 있다.



50점 획득!
