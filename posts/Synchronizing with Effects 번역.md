---
title: "Synchronizing with Effects 번역"
description: "React 18에서는 개발 환경에서 useEffect를 일부러 2번 호출한다는데,, 대체 왜?"
to: "React의 useEffect의 철학이 궁금한 사람"
date: "2022-06-25"
---

> 원문: [https://beta.reactjs.org/learn/synchronizing-with-effects](https://beta.reactjs.org/learn/synchronizing-with-effects)

어떤 컴포넌트는 외부 시스템과 동기되어야 한다. 예를 들면 리액트 상태를 통해 non-리액트 컴포넌트를 컨트롤 하고 싶다던가, 서버와 커넥션을 연다던가, 컴포넌트가 화면에 나타날 때 분석 로그를 보내는 것들이 있다. `Effects` 는 컴포넌트를 리액트 외부의 시스템들과 동기화 하기 위해 렌더 이후에 코드를 실행한다.

```markdown
You will learn

- Effects가 무엇인지
- Effects와 events가 어떻게 다른지
- 컴포넌트에 Effect를 어떻게 선언할 것인지
- 어떻게 Effect가 불필요하게 re-run하지 않도록 skip 할 수 있는지
- 왜 Effects는 개발 환경에서 2번 실행되고 어떻게 고치는지
```

## Effects와 events는 어떻게 다른가?

Effects를 알기 전에, 리액트 컴포넌트 내부의 2가지 로직과 친해져야 한다.

- Rendering Code(introduced in [Describing the UI](https://beta.reactjs.org/learn/describing-the-ui))는 컴포넌트의 탑 레벨에 있다. 이것은 props와 state를 다루고 그것들을 변환하며, JSX를 화면에 원하는 곳에 리턴하는 곳이다. [Rendering code must be pure](https://beta.reactjs.org/learn/keeping-components-pure). 수학 공식처럼 그것은 결과를 계산하는 것 외에는 아무것도 하면 안된다.
- **Event handlers**(introduced in [Adding Interactivity](https://beta.reactjs.org/learn/adding-interactivity)) 는 단순 계산하는 것 보다는 무언가를 하는 컴포넌트 내부의 중첩된 함수다. `event handler`는 input field를 update 하거나, 제품을 구매하기 위해 HTTP POST 요청을 보내거나, 다른 화면으로 유저가 이동하게 할 것이다. `event handler` 는 [“side effects”](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>) (이것은 프로그램의 상태를 바꾼다)를 포함하고 유저의 특별한 액션으로 발생한다.(예를 들면 버튼 클릭이나 타이핑)

때때로 그것은 충분하지 않다. `ChatRoom` 컴포넌트를 생각해보면, 컴포넌트는 화면에 보이지 않아도 chat server와 연결되어 있어야 한다. 서버와 연결하는 것은 `pure calculation` 이 아니므로(side effect임) 그것은 렌더링 도중에 일어날 수 없다. 하지만 `ChatRoom` 을 보이게 하는 클릭과 같은 특정 이벤트는 없다.

**Effects를 사용하면 특정 이벤트가 아닌 렌더링 때문에 발생하는 side effects를 지정할 수 있다.** 채팅창에서 메시지를 보내는 것은 유저가 버튼을 클릭함으로써 발생하기 때문에 이벤트다. 하지만 서버 커넥션을 세팅하는 것은 어떤 인터랙션과 상관없이 컴포넌트가 나타남으로써 발생하기 때문에 `Effect` 이다. Effect는 화면의 업데이트의 마지막 [rendering process](https://beta.reactjs.org/learn/render-and-commit) 에 실행된다. 이것은 리액트 컴포넌트가 외부 시스템(네트워크나 서드파티)와 동기화하기 좋은 타이밍이다.

> 💡 NOTE
>
> 이 아래에서 부터는 capitalized “Effect”는 위에서 React와 관련있는 Effect를 말한다. 다시 말해서 렌더링으로 인한 side effect를 말한다. 폭넓은 프로그래밍 개념으로는 우리는 “side effect”라고 부를 것이다.

## 너는 아마도 Effect가 필요없다.

컴포넌트에 Effects를 무작정 추가하지 마라. Effects는 일반적으로 외부 시스템과 리액트 코드를 동기화하기 위해 “잠깐” 사용한다는 것을 명심하자. 브라우저 API나 서드파티 위젯, 네트워크 등이 여기에 해당한다. 만약 너의 effect가 어떤 상태에 기반한 상태만을 조정한다면, [you might not need an Effect.](https://beta.reactjs.org/learn/you-might-not-need-an-effect)

## Effect를 쓰는 방법

Effect를 작성하기 위해서는 다음 세 스텝을 따라라.

1. **Effect를 정의해라**. 기본적으로 너의 Effect는 매 렌더마다 실행될 것이다.
2. **Effect의 dependencies를 명시해라.** 대부분의 Effects는 매번 렌더되기 보다는 필요할 때만 re-render 되어야 한다. 예를 들어 fade-in 애니메이션은 컴포넌트가 나타날 때만 동작해야 한다. 채팅방을 연결하고 해제하는 일은 오직 컴포넌트가 나타나고 사라질 때나 채팅방이 바뀌었을 때만 일어나야 한다. dependencies를 명시함으로써 이것을 어떻게 컨트롤 하는 것인지 배울 것이다.
3. 필요하다면 cleanup을 추가해라. 어떤 Effects는 그것이 뭘 하든 멈추거나 되돌리거나 clean up 하는 법을 할 지 명시해주어야 한다. 예를 들어 `connect` 는 `disconnect`, `subscribe` 는 `unsubscribe` 그리고 `fetch` 는 `cancel` 이나 `ignore` 가 필요하다. cleanup function을 리턴함으로써 이렇게 하는 방법을 배울 것이다.

자세히 알아보자.

## Step 1: Effect를 정의해라

컴포넌트에 Effect를 정의하기 위해서는 useEffect Hook을 import 하자:

```tsx
import { useEffect } from "react";
```

그리고 컴포넌트의 탑레벨에서 이 코드가 추가된 이펙트를 호출하자:

```tsx
function MyComponent() {
  useEffect(() => {
    // Code here will run after *every* render
  });
  return <div />;
}
```

컴포넌트가 렌더할 때 마다 React는 스크린을 업데이트하고 useEffect 내부의 코드를 실행할 것이다. 다시 말해서 useEffect는 화면에서 렌더링이 반영될 때 까지 코드 조각들을 지연한다.

Effect를 외부 시스템과 동기화하기 위해 어떻게 할 수 있는지 보자. `<VideoPlayer>` 컴포넌트를 생각해보자. 컴포넌트에 `isPlaying` prop을 넘겨서 재생하거나 멈추게 컨트롤한다면 좋을 것이다.

```tsx
<VideoPlayer isPlaying={isPlaying} />
```

VideoPlayer 컴포넌트는 브라우저 `<video>` 태그를 렌더한다:

```tsx
function VideoPlayer({ src, isPlaying }) {
  // TODO: do something with isPlaying
  return <video src={src} />;
}
```

하지만 브라우저의 `<video>` tag는 `isPlaying` prop이 없다. 유일하게 컨트롤할 수 있는 방법은 수동으로 DOM element의 play()와 pause() 메소드를 호출하는 것이다. 동영상을 재생해야 하는지를 알려주는 isPlaying prop과 play, pause 같은 필수 호출과 동기화 해야한다.

우리는 `<video>` DOM node의 ref를 얻어야 한다.

play나 pause를 렌더링 중에 호출하고 싶을 것이다. 하지만 그것은 잘못됐다.

이 코드가 틀린 이유는 DOM node가 렌더링 중에 뭔가를 하려고 했기 때문이다. 리액트에서는 JSX의 렌더링은 순수 함수이어야 하며 DOM을 수정하는 것 같은 side effects를 포함하면 안된다.

게다가 VideoPlayer가 처음 호출될 때 그것의 DOM은 아직 없다! play나 pause를 호출할 DOM node가 아직 없다. 왜나하면 리액트는 JSX가 리턴하기 전 까지 생성될 DOM에 대해서 모른다.

방법은 렌더링 계산에서 side effect를 밖으로 꺼내기 위해 useEffect로 래핑하는 것이다.

```tsx
import { useEffect, useRef } from "react";

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}
```

Effect 안에서 DOM update를 래핑함으로써 리액트가 화면을 먼저 업데이트 하게 했다. 그리고 Effect가 실행된다.

`VideoPlayer` 컴포넌트가 렌더될 때(첫 render나 re-render든) 몇가지 일이 일어난다. 먼저 리액트가 스크린을 업데이트하며 올바른 prop으로 DOM에 `<video>` 태그가 있는지 확인한다. 그리고 리액트는 Effect를 실행할 것이다. 마지막으로 Effect는 play나 pause를 isPlaying prop에 따라 호출할 것이다.

Play/Puase를 여러 번 누르고 video player가 isPlaying 값과 어떻게 동기화되는지 보자.

예제에서 리액트 상태와 동기화된 “외부 시스템”은 브라우저 media API 였다. 비슷한 접근법을 선언적 리액트 컴포넌트 내부에 legacy non-리액트 코드(jQuery plugin 같은)를 래핑하여 적용할 수 있다.

비디오 플레이어를 컨트롤하는 것은 실제로 더 복잡하다. play를 호출하거나 사용자가 내장 브라우저 컨트롤로 play 혹은 pause 할 수 있다. 이 예제는 매우 단순하고 불완전하다.

> 💡 Pitfall
> 기본적으로 Effects는 매 렌더 후에 실행된다. 이 말은 왜 아래의 코드가 무한루프를 발생하는 지를 알려준다.
>
> ```tsx
> const [count, setCount] = useState(0);
> useEffect(() => {
>   setCount(count + 1);
> });
> ```
>
> Effects는 렌더링의 결과로 실행한다. 상태를 set하는 것은 렌더링을 발생시킨다. Effect 안의 상태를 그대로 set하는 것은 전원 단자를 스스로 플러그를 꽃는 것과 같다. Effect가 실행되면, 상태를 set하고 이것은 리렌더를 발생시킨다. 이것은 Effect를 실행하고, 상태를 다시 set하고 또 다른 리렌더를 발생시킨다.
> Effects는 컴포넌트가 외부의 시스템과 동기화할 때 사용한다. 만약 외부 시스템이 없고 단순히 상태를 조정하기 위해 Effect를 사용한다면 Effect가 필요하지 않은 것이다.

## Step 2: Effect의 dependencies를 명시하자

기본적으로 Effect는 매 렌더 이후에 실행된다. 종종 그것은 원치 않던 것이다.

- 가끔, 느리다. 외부시스템과 동기화하는 것은 항상 즉시인 것은 아니기 때문에 필요할 때 까지 스킵하길 원할 것이다. 예를 들어 매 타이핑마다 챗 서버와 재연결 하는 것을 원치 않을 것이다.
- 가끔 틀린다. 예를 들어 fade-in 애니메이션을 모든 타이핑에 동작하고 싶지 않을 것이다. 애니메이션은 최초에 컴포넌트가 나타날 때 한번만 동작해야 한다.

이 현상을 설명하기 위해 아까의 예제를 몇개의 console.log 호출과 부모 컴포넌트의 상태를 업데이트 하는 text input 이 있다. 타이핑할 때 Effect가 실행되는 것을 보자.

[playground example](https://codesandbox.io/s/8jyd5t?file=%2FApp.js&from-sandpack=true)

useEffect 호출의 두번째 인자로 dependencies를 명시함으로써 Effect가 불필요하게 재실행되지 않도록 할 수 있다. 빈 `[]` 배열을 추가해보자.

```tsx
useEffect(() => {
  // ...
}, []);
```

`React Hook useEffect has a missing dependency: 'isPlaying'` 라는 에러를 볼 수 있을 것이다.

문제는 isPlaying prop에 의존하는 effect 내부의 코드가 어떻게 동작할 지 정하지만 이 dependency는 외부에 정의되지 않았다. 이걸 고치기 위해서는 `isPlaying`을 dependency array에 추가하자.

```tsx
useEffect(() => {
  if (isPlaying) {
    // It's used here...
    // ...
  } else {
    // ...
  }
}, [isPlaying]); // ...so it must be declared here!
```

이제 모든 의존성들이 정의되어서 에러가 없다. 의존성 배열에 `[isPlaying]` 을 명시하는 것은 리액트가 `isPlaying` 이 이전 렌더와 같은 값이라면 재실행 되는 것을 skip 하는 것을 말한다. 이 변화로 input에 타이핑하는 것은 effect가 재실행되지 않는다. 하지만 Play/Pause를 클릭하는 것은 재실행된다.

의존성 배열은 여러개의 의존성들을 갖을 수 있다. 리액트는 명시된 모든 의존성이 이전 렌더와 같은 값이라면 Effect를 재실행하지 않을 것이다. 리액트는 의존성 값을 `[Object.is](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is)` 로 비교한다. useEffect API reference에서 더 자세히 볼 수 있음

의존성을 “선택"할 수 없다는 것을 명심하자. 만약 명시한 의존성이 리액트가 예상한 Effect 내부의 코드와 일치하지 않는다면 Lint error를 보게 될 것이다. 이것은 코드에서 많은 버그를 잡는데 도움을 준다. 만약 Effect가 몇몇 값을 이용하지만 그것이 변할 때 마다 재실행되지 않길 바란다면 Effect code 스스로가 그 값을 사용하지 않도록 수정해야 한다.

> 💡 Pitfall
> 의존성 배열이 있는 경우와 없는 경우 동작은 매우 다르다.
>
> ```tsx
> useEffect(() => {
>   // This runs after every render
> });
>
> useEffect(() => {
>   // This runs only on mount (when the component appears)
> }, []);
>
> useEffect(() => {
>   // This runs on mount *and also* if either a or b have changed since the last render
> }, [a, b]);
> ```
>
> 다음 스텝에서 mount를 자세히 살펴보자

## Step 3: 필요하다면 cleanup을 추가하자

다른 예제를 생각해보자. 컴포넌트가 화면에 나타날 때 chat server와 연결할 필요가 있는 `ChatRoom` 컴포넌트를 작성하고 있다. connect와 disconnect라는 메소드를 포함한 object를 리턴하는 `createConnection` 라는 함수가 있다. 컴포넌트가 유저에게 보여질 때만 연결을 유지할 수 있을까?

Effect 작성 부터 시작:

```tsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
});
```

매번 렌더할 때 마다 연결하는 것은 느릴테니까, 의존성 배열을 추가하자.

```tsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
}, []);
```

Effect 내부의 코드는 어떤 props나 state를 쓰지 않는다. 그러므로 의존성 배열은 `[]` 다. 이것은 리액트가 오직 컴포넌트가 mount 되었을 때 Effect를 실행할 것을 말한다. (화면에 처음 나타났을 때)

아래 코드를 실행해보자

[playground example](https://codesandbox.io/s/ivqrgu?file=%2FApp.js&from-sandpack=true)

이 Effect는 오직 mount 됐을 때만 실행하므로 “Connecting…” 을 한번 출력할 것을 예상했을 것이다. 하지만 console을 확인해보면 2번 출력된다. 왜 그럴까?

`ChatRoom` 컴포넌트가 여러 개의 다른 화면이 있는 큰 앱의 일부분이라고 생각해보자. 유저는 `ChatRoom` 페이지에서 그들의 여정을 시작한다. 이 컴포넌트는 mount 되고 `connection.connect` 를 호출한다. 그리고 유저가 다른 화면으로 이동한다고 생각해보자—예를 들어 환경 설정 페이지. 이 `ChatRoom` 컴포넌트가 언마운트된다. 마지막으로 유저는 뒤로가기를 클릭하고 `ChatRoom` 이 다시 mount 된다. 이것은 두 번째 connection을 연결한다—하지만 첫 번째 커넥은 아직 사라지지 않았다! 유저가 앱을 넘나들면 connection은 계속 쌓일 것이다.

일일이 광범위한 테스트를 하지 않고서는 이런 버그들은 놓치기 쉽다. 이런 것을 빨리 알기 위해 리액트 개발 모드에서는 모든 컴포넌트를 첫 mount 후 다시 한번 mount 한다. “Connecting…” 이 2번 나타나는 것은 진짜 이슈:코드가 컴포넌트가 unmount 됐을 때 connection을 close하지 않았음을 빨리 알 수 있도록 돕는다.

이 이슈를 해결하기 위해 Effect에 cleanup function을 return하자:

```tsx
useEffect(() => {
  const connection = createConnection();
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, []);
```

리액트는 cleanup function을 Effect가 다시 실행되기 전에 호출할 것이다. 그리고 컴포넌트가 unmount(삭제될 때) 마지막으로 한 번 호출할 것이다. cleanup function이 구현되면 어떤 일이 일어나는지 확인해보자.

[playground example](https://codesandbox.io/s/oil0if?file=%2FApp.js&from-sandpack=true)

developmode에서 3개의 콘솔 로그를 볼 것이다.

1. `"Connecting..."`
2. `"Disconnected."`
3. `"Connecting..."`

이것은 개발 모드에서 올바른 동작이다. 컴포넌트를 다시 mount하면서, 리액트는 다른 곳으로 이동했다가 다시 와도 코드가 무너지지 않는 다는 것을 증명한다. 연결을 해제하고 다시 연결하는 것은 정확히 일어나는 일이다! cleanup 을 잘 구현한다면, Effect를 한번 실행하고 cleanup하고, 다시 실행하는 것은 유저가 볼 수 없는 차이일 것이다. 리액트가 개발환경에서 니 코드에 버그가 있다는 것을 조사하기 위해 추가적인 connect/disconnect 호출을 한다. 이것은 일반적이고 없애려고 하면 안된다.

프로덕션에서는 `"Connecting..."` 이 한번만 출력될 것이다. 한번 더 컴포넌트를 마운트하는 것은 개발환경에서 Effect에 cleanup이 필요하다는 걸 찾는 것을 도와주기 위해서이다. 이런 개발 동작을 없애기 위해 Strict Mode를 끌 수 있지만 계속 켜져있기를 권장한다. 위와 같은 버그를 많이 찾게 해준다.

## Effect가 2번 실행되는 것을 어떻게 다루는가?

리액트는 의도적으로 위의 예제 처럼 버그를 찾기 쉽도록 개발환경에서 컴포넌트를 remount 한다. 올바른 질문은 **“Effect를 한번만 실행하는 방법”이 아니라 “Effect가 remount 후에도 잘 동작하도록 고치는 방법” 이어야 한다.** 보통 정답은 cleanup function을 구현하는 것이다. cleanup function은 Effect의 동작을 Effect가 뭘 하든 멈추거나 되돌릴 것이다. 제 1의 규칙은 프로덕션 환경에서 Effect가 한번 실행되는 것과 개발 환경에서 effect → cleanup → effect 하는 동안 유저가 그것을 식별할 수 없게 하는 것이다.

대부분의 작성될 Effect 아래의 일반적인 패턴에 속할 것이다.

## Non-React 위젯 다루기

가끔 React로 작성되지 않은 UI 위젯을 추가해야 한다. 예를 들어 map 컴포넌트를 페이지에 추가한다고 해보자. `setZoomLevel` 이라는 함수가 있고 리액트 코드에서 `zoomLevel`의 상태 값을 통해 zoom level을 동기화 하고 싶다. Effect는 이렇게 생겼을 것이다.

```tsx
useEffect(() => {
  const map = mapRef.current;
  map.setZoomLevel(zoomLevel);
}, [zoomLevel]);
```

이 경우에는 cleanup 이 필요하지 않다는 것을 명심하자. 개발 모드에서는 리액트가 Effect를 2번 호출할 것이지만 이것은 setZoomLevel이 같은 값으로 2번 호출되기 때문에 문제가 아니다. 조금은 느릴 수 있지만 개발 환경에서만 그렇지 프로덕션에선 일어나지 않는다.

어떤 API는 한번에 함수를 2번 호출하도록 허락하지 않을 것이다. 예를 들면 `<dialog>` element의 내장 함수인 `showModal` 함수는 2번 호출한다면 에러를 뱉을 것이다. cleanup function을 구현하는 것은 dialog를 닫게 한다.

```tsx
useEffect(() => {
  const dialog = dialogRef.current;
  dialog.showModal();
  return () => dialog.close();
}, []);
```

개발 환경에서, Effect는 showModal()을 호출하고 즉시 close() 그리고는 showModal()을 다시 호출할 것이다. 이 동작은 프로덕션에서 볼 수 있는 것처럼 사용자가 showModal을 한번 호출하는 동작과 같다.

## 이벤트 구독하기

만약 Effect가 무언가를 구독하고 있다면 cleanup function은 구독 취소를 해야한다.

```tsx
useEffect(() => {
  function handleScroll(e) {
    console.log(e.clientX, e.clientY);
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
```

개발 환경에서 Effect는 addEventListener(), removeEventListener() 그리고 다시 addEventListener()를 같은 핸들러로 호출할 것이다. 그러므로 하나의 활성 구독만 한 시간에 존재한다. 이것은 프로덕션에서 볼 수 있는 것처럼 addEventListener를 한번 호출하는 것과 같다.

## 애니메이션 트리거

만약 Effect에 애니메이션이 있다면 cleanup function이 애니메이션을 초기 값으로 재설정 해야 한다.

```tsx
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // Trigger the animation
  return () => {
    node.style.opacity = 0; // Reset to the initial value
  };
}, []);
```

개발 환경에서 opacirty는 1로 설정됐다가, 0 그리고 다시 1로 설정될 것이다. 이것은 프로덕션에서 볼 수 있는 것처럼 opacity를 1로 바로 설정하는 것과 같다. 만약 서드파티 애니메이션 라이브러리가 tweening도 지원한다면 cleanup function은 tween의 시간 설정도 초기 값으로 재설정 해야 한다.

## 데이터 fetching

Effect가 무언가를 fetching 한다면 cleanup function은 fetch를 abort하거나 무시해야 한다:

```tsx
useEffect(() => {
  let ignore = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) {
      setTodos(json);
    }
  }

  startFetching();

  return () => {
    ignore = true;
  };
}, [userId]);
```

네트워크 요청이 이미 일어났기 때문에 “undo” 할 수는 없지만 cleanup function은 더 이상 관련이 없는 fetch가 앱에 영향을 미치지 않도록 해야 한다. 예를 들어, userId가 Alice에서 Bob으로 바뀌는 경우 cleanup은 Alice의 reponse는 Bob 다음 도착하더라도 무시해야 한다.

개발 환경에서는, 네트워크 탭에서 2개의 fetch를 볼 수 있을 것이다. 잘못된 것은 없다. 위와 같은 접근법으로 첫 번째 Erffect는 즉시 cleaned up 될 것이고 ignore 변수의 복사본은 true가 될 것이다. 따라서 추가적인 요청이 있더라도 if(!ignore) check 덕분에 상태에 영향을 미치지 않을 것이다.

프로덕션 환경에서는 하나의 요청만 있을 것이다. 만약 두 번째 요청이 개발 환경에서 귀찮게 한다면 가장 좋은 접근 방법은 중복된 요청과 캐시를 컴포넌트 사이에서 사용하는 것이다.

```tsx
function TodoList() {
  const todos = useSomeDataLibrary(`/api/user/${userId}/todos`);
  // ...
```

이것은 개발 경험을 상승시킬 뿐만 아니라 앱을 더 빠르게 만든다. 예를 들어 뒤로가기 버튼을 누르는 유저는 데이터가 캐시되어 있기 때문에 로드되는 것을 기다릴 필요가 없다. 스스로 캐시를 만들어도 되고 Effect 에서 손수 가져오는 대신 여러 가지 대체재 중 하나를 사용할 수 있다.

## 분석 보내기

이 코드가 페이지 방문할 때 분석 이벤트를 보낸다고 생각해보자.

```tsx
useEffect(() => {
  logVisit(url); // Sends a POST request
}, [url]);
```

개발 환경에서는, `logVisit` 이 모든 URL 마다 2번 요청할 것이다. 따라서 이 문제를 해결하려고 할 수 있다. **코드 그대로 두는 것을 추천한다. 앞의 예제 처럼 `한번 실행되는 것과 두번 실행되는 것에서 유저가 차이를 느낄 수 없다.`** 실제의 관점에서 보면, 개발 환경이 프로덕션의 지표를 오염시키는 것을 원치 않을 것이기 때문에`logVisit` 은 개발 환경에서 아무것도 하면 안된다. 컴포넌트는 파일을 저장할 때 마다 remount 되므로 개발 환경에서는 어차피 여러번 보낸다.

**프로덕션에서는 중복된 visit log가 없다.**

보내고 있는 분석 이벤트를 디버그 하기 위해서는 앱을 스테이징 환경(production mode)에 배포하거나 임시로 Strict Mode를 제거하고, 개발 환경에서 remounting check를 할 수 있다. Effect 대신 route change 이벤트 핸들러가 분석을 보낼 수도 있다. 좀 더 정밀한 분석을 위해서는 `intersection observers` 가 어떤 컴포넌트가 viewport에 있고 얼마나 오래 보이는지 도와줄 수 있다.

## Effect가 아닌 것: 앱 init

어떤 로직은 어플리케이션이 시작될 때 한번만 실행해야 한다. 이런 건 컴포넌트 밖에 둘 수 있다.

```tsx
if (typeof window !== "undefined") {
  // Check if we're running in the browser.
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```

이것은 페이지가 브라우저에 로드될 때 한번만 실행할 것을 보장한다.

## Effect가 아닌 것: 제품 구매

때때로 cleanup function을 작성하더라도 Effect가 2번 실행되는 동안 user-visible한 동작을 막을 방법이 없을 수도 있다. 예를 들어 Effect가 제품 구매 같은 POST 요청을 보낸다.

```tsx
useEffect(() => {
  // 🔴 Wrong: This Effect fires twice in development, exposing a problem in the code.
  fetch("/api/buy", { method: "POST" });
}, []);
```

제품이 두번 구매되는 것을 원치 않을 것이다. 하지만 이것은 왜 Effect에 이 로직을 넣어야만 했을까? 만약 유저가 다른 페이지로 갔다가 다시 돌아온다면? Effect는 다시 실행된다. 유저가 페이지를 방문했을 때 제품이 구매되는 것을 바라지 않을 것이다. 구매 버튼을 눌렀을 때 제품이 구매되는 것을 원할 것이다.

구매는 렌더로 발생하지 않는다; 특정 인터랙션이 의해 발생한다. 단지 인터랙션이 한번 발생했을 때 한번 실행될 뿐이다. Effect를 지우고 api 요청은 구매 버튼 이벤트 핸들러에 옮기자.

```tsx
function handleClick() {
  // ✅ Buying is an event because it is caused by a particular interaction.
  fetch("/api/buy", { method: "POST" });
}
```

만약 remount가 앱의 로직을 파괴한다면 이것은 드러나지 않은 존재하는 버그임을 보여준다. 유저의 시선에서, 페이지를 방문하는 것은 뒤로 가기 버튼을 누르거나 링크를 누르는 것과 다르면 안된다. 리액트는 컴포넌트가 개발 환경에서 한번 remount 함으로써 이 원칙을 파괴하지 않는다는 것을 입증한다.

## 한번에 때려넣기

이 플레이그라운드는 예제에서 Effect가 어떻게 동작하는지 “느낌을 갖도록" 도와준다.

이 예제는 Effect가 실행되고 3초 후 input text가 console.log와 함께 나타나게 하도록 setTimeout을 사용한다. 이 cleanup function은 대기중인 timeout을 취소한다. “Mount the component”를 눌러서 시작해보자.

[playground example](https://codesandbox.io/s/8jsz1t?file=%2FApp.js&from-sandpack=true)

> 대충 Schedule, Cancel 되는 로그를 볼 수 있고 여러 번 입력해도 clearTimeout 때문에 text가 마지막으로 입력한 시점으로부터 3초 후에 단 하나만 보여질 것이라는 설명

## Recap

- Unlike events, Effects are caused by rendering itself rather than a particular interaction.
- Effects let you synchronize a component with some external system (third-party API, network, etc).
- By default, Effects run after every render (including the initial one).
- React will skip the Effect if all of its dependencies have the same values as during the last render.
- You can’t “choose” your dependencies. They are determined by the code inside the Effect.
- An empty dependency array (`[]`) corresponds to the component “mounting”, i.e. being added to the screen.
- When Strict Mode is on, React mounts components twice (in development only!) to stress-test your Effects.
- If your Effect breaks because of remounting, you need to implement a cleanup function.
- React will call your cleanup function before the Effect runs next time, and during the unmount.
