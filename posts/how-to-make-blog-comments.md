---
id: 10
title: "한 땀 한 땀 블로그 만들기 - Utterances를 이용해 댓글 기능 붙이기"
description: "Utterances를 이용해 빠르게 댓글 기능을 만들어서 독자들과 상호작용 해보자"
to: "한 땀 한 땀 블로그를 만들고 싶은 사람들에게"
timestamp: "2022-08-14T01:43:56.007Z"
---

# 블로그에 댓글?

나는 왜 댓글 기능을 붙이고 싶을까? 내가 쓴 글이 도움이 되는지, 틀린 곳은 없는지 독자들의 반응을 확인하고 싶다. 열심히 썼지만 놀랄 만큼 아무도 관심을 주지 않았다면 그것대로 슬플 것이다. 하지만 적어도 슬프기라도 하기 위해서는 관심이 있는지 없는지부터 알 수 있어야 한다.

![interest](/posts/how-to-make-blog-comments/interest.png)

즉, 나는 내 포스팅이 관심을 받고 있는지부터 알고 싶어서 댓글 기능을 추가하기로 했다. 좋아요 기능도 있으면 좋겠지만 고민 포인트가 있어, 차차 붙여보겠다.

## 어떻게 구현할 것인가?

마침 서버도 [지난 번](https://solidw.github.io/posts/how-to-make-blog-views-count)에 구현했겠다, 직접 데이터베이스에 포스트와 코멘트를 1:N 관계로 매핑하고, 누가 댓글을 남긴 것인지 id와 삭제할 수 있게 만드는 비밀번호 컬럼도 만들고, 이걸 백엔드에서 연결하고,... 만들어야 할 것을 고려하다 보니 생각보다 너무 많은 공수를 들여야 할 것 같았다.

그래서 생각난 게 `utterances`다. 이 오픈 소스 프로젝트는 (Public)깃허브 이슈와 연동해서 유저가 깃허브로 로그인 후 코멘트를 달면 포스팅에 해당하는 GitHub Issue가 생성되고 코멘트로 댓글이 달린다. 보여줄 땐 그 경로에 있는 코멘트들을 긁어와서 보여준다.

이 블로그의 첫 번째 포스팅인 `개발 블로그에서 마크다운을 다루는 방법`에 댓글을 남겨보겠다.

![comment](/posts/how-to-make-blog-comments/comment.png)

이렇게 남긴 코멘트는 `utterances`에 적어준 repository url의 issues에서 새로 이슈를 하나 생성한다. 그리고 해당 사용자가 남긴 코멘트를 그대로 작성한다.

![issue](/posts/how-to-make-blog-comments/issue.png)

즉 `utterances`는 GitHub Issues를 데이터베이스처럼 사용한다.

연동하기 위한 가이드도 잘 되어있다. 한국어로 된 블로그도 많고, 영어로 된 가이드를 차근차근 따라가도 5분 만에 연동할 수 있다.

[https://utteranc.es/](https://utteranc.es/)

별도의 서버가 필요 없고, 연동이 간단해서 좋다. 단점..이라기 보다는 제약을 조금 적자면,

- 깃허브 아이디가 없다면 댓글을 달 수 없다. - 하지만 나의 블로그의 대부분의 포스팅은 개발 관련 포스팅이고, 앞으로도 개발 관련 포스팅을 많이 올릴 것이기 때문에 이 블로그를 방문하는 예상 독자들은 깃허브 아이디가 있는 사람들일 것으로 예상한다. 만약 개발 관련 글 외에도 다양한 글감을 올리게 되었을 때에는, 그 때는 직접 구현해야 할 지도 모르겠다. (사실 마음 먹고 하면 그렇게 오래 걸릴 것 같지도 않다. 마음 먹기가 어려워서 그렇지..)
- 레포지토리를 public으로 공개해야 한다.
  - 나는 이 블로그가 원래 public이라서 괜찮지만, 만약 private한 레포를 사용하고 있다면 적용이 어려울 수 있다.
  - 이 경우에는 댓글 만을 위한 레포를 별도로 public으로 만들어서 사용할 수 있다.
- Theme을 지원하긴 하지만 커스텀이 어렵다. - 대충 흰색을 썼더니 내 블로그 테마랑 얼추 맞는 것 같아서 그냥 사용했다. 블로그 디자인이 바뀐다면 이 역시 직접 댓글 기능을 구현해야 할 이유가 될 수도 있겠다.

이 정도 제약이 있긴 하지만, 일감을 많이 줄여줬다.

## 느낀점

나는 개발은 타협의 연속이라고 생각한다. 많은 시간과 집중력을 쏟아부어서 인생의 역작을 만들어 낼 수도 있겠지만, 소프트웨어의 세계는 생각보다 변경이 잦고, 잦아야 한다. 그렇기 때문에 개발자는 시간과 제품의 퀄리티 사이의 트레이드 오프를 고려해야 한다. 기능 하나가 **SUPER COOL** 하더라도, 유저가 사용하지 않으면 기능의 의미가 퇴색된다. 반대로 기능 하나가 SUPER COOL **해서**, 이 기능 때문에 유저가 몰려든다면 이는 적재적소에 시간을 잘 썼다고 할 수 있다.(물론 훨씬 적은 리소스로 비슷한 효과가 발생했을 수도 있겠지만) 이런 고민은 결과를 확인하기 전까지 정답이 없다고 생각하기 때문에, 잘 개발하는 것은 어렵고 또 재밌다.