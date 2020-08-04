---
layout: post
title: "Easy way to positioning when position: absolute"
categories: devlog
tags: position absolute transform translate
comments: true
---

# 쉽게 position: absolute 배치하는 방법

CSS에는 position이라는 attribute가 있다.

가로 혹은 세로로 쌓이게 되는 HTML 태그들을 입맛대로 배치할 수 있게 하기 위해 사용하는데, 예를 들면 다음과 같다.

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
}
```
부모 태그의 position이 relative이어야 child가 parent안에서 움직인다.

만약 부모 태그가 기본값인 `position: static`일 경우에는 브라우저 전체인 window에 대해서 absolute하게 움직인다.
```html
<div className="parent">
  <div className="child">
    this is child.
  </div>
</div>
```

이 때 자식 태그가 움직일 때 영역의 왼쪽 위 모서리를 중심점으로 움직이게 되는데, 이럴 경우 원하는 대로 배치가 안되는 불상사가 일어난다. 따라서 중심점을 영역의 정 가운데로 하기 위해 다음과 같은 속성을 추가할 수 있다.

```css
.child {
  position: absolute;
  transform: translate(50%, -50%);
}
```

### 테스트
```html
<html>
	<head>
		<link rel="stylesheet" href="./index.css" />
	</head>
	<body>
		<div class="parent">
			<div class="child">
				I'm child.
			</div>
		</div>
	</body>
</html>
```
```css
.parent {
	position: relative;
	width: 200px;
	height: 200px;
	background: indianred;
}

.child {
	position: absolute;
	background: indigo;
	top: 50%;
	right: 50%;
	/* transform: translate(50%, -50%); */
}
```
결과

![before](https://github.com/solidw/solidw.github.io/blob/master/_posts/images/before.JPG?raw=true)

transform 주석 해제 후 결과

![after](https://github.com/solidw/solidw.github.io/blob/master/_posts/images/after.JPG?raw=true)