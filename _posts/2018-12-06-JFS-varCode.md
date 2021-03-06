---
layout: post
title: "[JFS] varCode"
subtitle: "바코드"
tags: jfs
categories: writeup
comments: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***

varCode_C라는 50점짜리 문제이다.
![varcode00](https://i.imgur.com/hiyz99I.png)



문제에 대한 힌트는 다음과 같이 나타나있다.

![varcode01](https://i.imgur.com/036zbiA.png)



동봉된(?) varCode.pdf 를 열어보았다.

![varcode02](https://i.imgur.com/lyVkwyZ.png)



위와 같은 문자열 하나만 있다.  복사해서 아무데나 붙여 넣으면

> IlIIlIlIIlIIIllIIlIlIIllIllllIllIlllIllIIllIIIIlIlllIIlIIllIIIllIllIllllIllIIlIIIllIIlIlIlIlllllIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlllllIl

다음과 같은 문자열이 나타난다.

문제에서 말하기를


```javascript
var code = "flag";
var I = "0";
var l = "1";
```

이라고 했으므로 `'I'는 "0"`으로 변환,  `'l'은 "1"`로 변환하였다.

코드는 다음과 같이 짜보았다.

```py
line = "IlIIlIlIIlIIIllIIlIlIIllIllllIllIlllIllIIllIIIIlIlllIIlIIllIIIllIllIllllIllIIlIIIllIIlIlIlIlllllIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlllllIl"

res = ""
result = []
toprint = "" 
for i in line:
        if i == "I":
                res += "0"
        elif i == "l":
                res += "1"
```

print res 할 경우	

	01001010010001100101001101111011011101100110000101110010011000110110111101100100011001010101111101001001011011000100100101101100010010010110110001111101

다음과 같은 숫자들이 나오는데, 아스키코드로 영문자 하나를 표현하기 적합한 8bit로 나누었을 때, 이 이진 숫자들을 10진수로 변환한 값을 마지막으로 문자로 변환하면 적절한 Character가 나온다.

```python
line = "IlIIlIlIIlIIIllIIlIlIIllIllllIllIlllIllIIllIIIIlIlllIIlIIllIIIllIllIllllIllIIlIIIllIIlIlIlIlllllIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlIIlIIlIllIllIIIlllllIl"

res = ""
result = []
toprint = "" 
for i in line:
        if i == "I":
            res += "0"
        elif i == "l":
            res += "1"

for i in range(0, len(res)+1):
        if (i%8)==0 and not i == 0:
            result.append(res[i-8:i])
for i in result:    
        toprint += chr(int(i, 2))

print "FLAG is :", toprint
```



`chr(int(i,2))` 를 통해 이진수를 10진수 형태로 바꾼 후 char 형태로 다시 변환하는 모습을 볼 수 있다.



출력은 다음과 같다.

`FLAG is : JFS{varcode_IlIlIl}`

![](https://i.imgur.com/r8IyigD.png)

50점 획득!