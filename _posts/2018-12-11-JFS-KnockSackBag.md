---
layout: post
title: "[JFS] KnockSackBag"
excerpt_separator: <!--more-->
tags: [JFS_5TH, CTF, CRYPTO, Write-Up]
comment: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***

KnockSackBag 이라는 문제로, 암호 분야(CRYPTO)의 200점 짜리! 😮

<!--more-->

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/00.PNG)

풀어서 매우 뿌듯했다.




![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/01.PNG)

녹색가방을 판다고 한다. 첨부된 파일은 `.hwp` 한글 파일이다.



![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/02.PNG)



한글 파일을 열면 다음과 같은 그림이 나온다.

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/03.PNG)



이것저것 뒤져보던 중, 가방을 옮겼더니 가방 안에 알집이 있었다.

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/04.PNG)

> KnockSackBag.zip

처음엔 이미지 파일이었는데, 드래그해보니까 알집 파일이 튀어나왔다....

(한글 파일에는 이미지만 들어갈 수 있는 줄 알았는데, zip파일 자체를 삽입할 수 있는 지 몰랐다.)



![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/05.PNG)



압축을 해제하면 python 코드가 하나 나온다.

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/06.PNG)

> 마트료시카..?



> KnockSackBag.py

```py
flag="###SECRET###"
bit_encode=[]
bit_code="abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ0123456789~!@#$%^&*()_+{}"#77word

def encode():
	Serial = ""
	for i in flag:
		bit_encode.append(bit_code.find(i))

	for i in range(0,len(bit_encode)):
		 Serial += chr(bit_encode[i])

	print("Serial No :"),
	print(Serial.encode("hex").upper())

if __name__ in '__main__':
	encode()

```



encode 과정이 나와있다. `flag` 는 "###SECRET###" 이라고 되있는 걸 보아하니 decode 해야 하는 것 같다.

혹시 몰라서 `flag` 에 `JFS{}` 를 넣어보았더니

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/07.PNG)

Serial No가 `KnockSackBag.hwp` 의 Serial No와 비슷하다.

(" 231F2C4B ~~ 4C ")

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/08.PNG)



자세히 보니, decode 과정은 Serial No를 2자씩 자른 수를 10진수로 바꾼 후, bit_code의 index로 넣으면 알파벳 하나가 decoding 되는 것 같다.



코드는 다음과 같이 짰다.

> bit.py

```py
bit_encode=[]

def decode():
        bit = ""
        Serial =                                                              "231F2C4B221349160012490E110806080C000B0B18490049030805050411040C13490207000B0B040C06044C"
        i = 0;
        while i < len(Serial): #
                temp = Serial[i] + Serial[i+1]
                k = int(temp,16) #16진수를 10진수 정수로 변환
                i = i+2
                bit += bit_code[k]
        print bit

if __name__ in '__main__':
        decode()

```



0x23 == 35,  bit_code[35] == 'J' 와 같은 방식이다.



> flag

![]({{site.baseurl}}/images/2018-12-11-JFS-KnockSackBag/09.PNG)



200점 획득!