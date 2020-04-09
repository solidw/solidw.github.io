---
layout: post
title: "POST ${url} 404, 405"
categories: devlog
tags: setUpProxy
comments: true
---

# Trouble Shooting

이틀간 거의 8시간을 때려 박았던 버그를 찾아냈다.

버전 문제도, 브라우저의 문제도 아닌 내 실수였다 ㅎㅎ

create-react-app의 v2에서, cors를 해결하기 위해 적용했던 `src/setUpProxy.js` 파일에서

```javascript
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 이 부분을 "/api/특정url" 로 한정해놓았었다. 어쩐지 구글링해도 안나오더라 ..
    createProxyMiddleware({
      target: "http://localhost:4500/",
      changeOrigin: true,
    })
  );
};
```

> 애초에 proxy 설정을 특정 url만 뒀으니 다른 url에선 proxy가 동작하지 않을 수 밖에 ..
>
> 근데 왜 404 error가 안뜨고 405가 주구장창 떴는지 의문이다.
>
> npm install 했다가 오류 때문에 react-scripts를 업데이트하고 나니까 404 error가 떴다..

어차피 api는 4500 port의 /api로 반드시 시작하도록 백엔드를 구성했었는데 왜 특정 api만 proxy가 되도록 해놨는지 알 수가 없다. 정신차리고 만들어야겠다.

덕분에 지겹게 봤던 `405 ERROR`는 잊지 않을 것 같다..

해결~
