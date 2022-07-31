---
id: 4
title: "그로스 해킹 - AARRR - Acquisition"
description: "그로스 해킹을 읽고 - 유저 유치에는 트래킹이 핵심"
to: "제품을 잘 만들고 싶은 사람에게"
timestamp: "2022-07-16T00:00:00.002Z"
---

> [그로스 해킹 데이터와 실험을 통해 성장하는 서비스를 만드는 방법](http://www.yes24.com/Product/Goods/96576416)

<div style="clear: left; text-align: left">
  <div style="float: left; margin: 0 15px 5px 0">
    <a
      href="http://www.yes24.com/Product/Goods/96576416"
      style="display: inline-block; overflow: hidden; border: solid 1px #ccc"
      target="_blank"
      ><img
        style="margin: -1px; vertical-align: top"
        src="//image.yes24.com/goods/96576416/S"
        alt="그로스 해킹"
    /></a>
  </div>
  <div>
    <p
      style="
        line-height: 1.2em;
        color: #333;
        font-size: 14px;
        font-weight: bold;
      "
    >
      그로스 해킹
    </p>
    <p style="margin-top: 5px; line-height: 1.2em; color: #666">
      양승화 저
    </p>
    <p
      style="
        margin-top: 14px;
        line-height: 1.5em;
        text-align: justify;
        color: #999;
      "
    >
      그로스 해킹에 대한 실용적인 지침서!성장하는 서비스를 만들기 위해서는
      필요한 데이터를 정의하고, 수집하고, 분석 환경을 구축하고, 실험하고,
      서비스에 반영하는 일련의 과정이 잘 갖춰져야 합니다. 또한 성장을 위한
      효율적인 조직 구조와 문화를 만들어야 합니다. 그로스 해킹은 엄청난 리소스나
      시스템이 갖춰져야만...
    </p>
  </div>
</div>

### Acquisition

#### Acquisition의 기본 개념

- Acquisition의 핵심은 고객 유치에 기여한 채널의 성과를 판단할 수 있는 모델을 만드는 것
  - 어떤 마케팅 채널, 어떤 캠페인을 통해 유입되었는지 트래킹해야 한다.
- organic과 paid
  - 일반적으로 organic을 늘려야 한다고 하지만, 사실은 분석 툴에서의 organic은 자연 유입된 사용자보다는 '유입된 채널을 식별할 수 없는 사용자'에 가깝다. 즉 트래킹 잘하자
- organic보다는 unknown이라는 용어를 쓰는 것이 적합하지 않나.

#### 고객 획득 비용(Customer Acquisition Cost, CAC)

- 단순 유저÷비용으로 계산할 경우 얻을 수 있는 인사이트가 없다.
- 채널, 캠페인, 날짜 등의 데이터를 잘게 쪼개서 '어느 채널에 얼마의 기간 동안 어떤 캠페인으로 얼마의 예산을 집행할 것인가' 라는 질문에 답할 수 있도록

#### 웹 UTM 파라미터(Urchin Tracking Module)

웹페이지 URL 뒤에 `?utm_source=''&utm_medium=''&utm_campaign=''&utm_term=''&utm_content=''` 같은 파라미터들

#### 앱 어트리뷰션(Attribution)

- AppsFlyer나 branch, Airbridge 같은 서드파티로 주로 구현.
- 서비스별로 다르지만 주로 인스톨 레퍼러(install referrer), 디바이스 아이디 매핑(device ID mapping), 핑거프린팅(fingerprinting) 등의 방법 사용
- 룩백 윈도우: 기여 이벤트를 확인하고 며칠(n일) 안에 앱스토어에서 설치할 경우 기여로 인정할 지에 대한 기준
- 클릭-스루와 뷰-스루
  - 클릭-스루: 클릭한 경우만 기여로 인정
  - 뷰-스루: 광고를 조회한 경우도 기여로 인정
  - 앱스플라이어는 클릭-스루의 어트리뷰션 윈도우는 7일, 뷰-스루 어트리뷰션 윈도우는 1일을 기본 값으로 사용
- 어트리뷰션 모델
  - 여러 개의 어트리뷰션의 기여도 판단 기준
  - 퍼스트 클릭 / 라스트 클릭 / 선형 / 타임 디케이 / U자형 등이 있음
- 싱글 터치 어트리뷰션
  - 퍼스트 클릭과 라스트 클릭
  - 일반적으로 라스트 클릭 모델을 기본으로 채택
- 멀티 터치 어트리뷰션
  - 선형: 무조건 1÷n
  - 타임 디케이: 시간 흐름에 따라 가중치 (최근에 발생한 이벤트에 높은 가중치)
  - U자형: 타임 디케이와 유사하지만 첫 번째 기여 채널과 마지막 기여 채널에 높은 가중치
- 어트리뷰션의 기준을 정할 때 중요한 것은 '정답'을 찾는 것이 아니라 '원칙'을 세우는 일
- 채널 특성을 고려하지 않고 모든 채널에 일관된 기준을 적용하는 것은 좋은 판단이 아니다. 광고 채널이나 지면에 대한 이해가 전혀 없다면 데이터 분석은 어렵다.

#### 딥링크와 디퍼드 딥링크

- 딥링크: 앱이 깔려 있다면 웹에서 앱으로 바로 연결
- 디퍼드 딥링크: 앱이 깔려 있지 않다면 스토어, 깔려 있다면 앱으로 연결
  - 디퍼드 딥링크의 중요한 점은 사용 맥락 유지 뿐만 아니라 어떤 채널에서 활용된 딥 링크를 통해 앱을 설치하고 사용했는지 측정할 수 있다. ex) AppsFlyer의 원링크

#### Acquisition 정리

- 단순히 유치하는 것 뿐만 아니라 트래킹을 제대로 해야한다.
- 페이팔의 창업자 피터 틸은 '사업이 실패하는 이유는 제대로 된 채널 하나를 확보하지 못하기 때문' 이라고 했다.
- 우리가 데이터를 통해 확인하려고 하는 것은 눈 앞에 있는 지표 몇 개가 아니라 '고객'에 대한 폭넓은 이해라는 점을 기억하자.