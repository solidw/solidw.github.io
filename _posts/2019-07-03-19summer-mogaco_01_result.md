---
layout: post
title: "[19년도 하계 모각코] 1회차_결과"
categories: mogaco
tags: 19summer
comments: true
---

# 결과

> React 개발환경 구축

- npm ( Node Package Manager)
  - Node.js를 설치할 경우 npm도 같이 설치된다.
  - 배쉬에서 다음과 같은 명령어를 타이핑한다.
    - npm install -g create-react-app
    - create-react-app hello-world
    - cd hello-world
    - npm start

- Atom Editor ( 코드 Editor )
  - apm install pigments ( rgb value viewer plugin )
  - apm install react ( component snippet plugin )



> 간단한 SPA ( Single Page Application )

- [flex CSS 복습하기](https://flexboxfroggy.com/#ko)

  - justify-content : flex 요소들을 가로선을 기준으로 정렬

    - flex-start : 컨테이너의 왼쪽 정렬
    - flex-end : 컨테이너의 오른쪽 정렬
    - center : 컨테이너의 가운데 정렬
    - space-between : 요소들 사이에 동일한 간격을 둠
    - space-around : 요소들 주위에 동일한 간격을 둠

  - align-items : flex 요소들을 세로선을 기준으로 정렬

    - flex-start : 컨테이너의 꼭대기로 정렬
    - flex-end : 컨테이너의 바닥으로 정렬
    - center : 세로선상의 가운데 정렬
    - baseline : 컨테이너의 시작 위치에 정렬
    - stretch : 요소들을 컨테이너에 맞게 늘임

  - flex-direction : 정렬할 방향을 행,열로 지정할 수 있음

    - row : 텍스트의 방향과 같게 정렬 ( 보통 왼쪽 -> 오른쪽 )
    - row-reverse : 텍스트의 방향의 반대 방향과 같게 정렬
    - column : 위에서 아래로 정렬
    - column-reverse : 아래에서 위로 정렬

  - order : 컨테이너들의 순서를 바꿀 수 있음

    - 기본 값은 0, -1로 할 경우 다른 컨테이너보다 앞에, 1로 할 경우 다른 컨테이너보다 뒤에 배치됨.

  - align-self : align-items을 무시하고 속성을 지정해줌

    - flex-start : 컨테이너의 꼭대기로 정렬
    - flex-end : 컨테이너의 바닥으로 정렬
    - center : 세로선상의 가운데 정렬
    - baseline : 컨테이너의 시작 위치에 정렬
    - stretch : 요소들을 컨테이너에 맞게 늘임

  - flex-wrap : 요소들을 한 줄 또는 여러 줄에 맞게 배치

    - nowrap : 한 줄에 정렬 (컨테이너의 가로 길이가 줄어들 수 있음)
    - wrap : 여러 줄에 걸쳐 정렬 (요소들의 가로 길이가 컨테이너의 길이보다 클 경우 다음 줄에 배치)
    - wrap-reverse : wrap의 reverse

  - flex-flow : flex-direction + flex-wrap

    - ex) 

	- ```javascript
    #pond {

      display : flex;

      flex-flow : column wrap;

    }
    ```

> 추가) 공식 문서

본격적인 개발에 앞서 [공식 문서](https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html)를 한번 따라해봤다.

React를 이용해 Tic Tac Toe (삼목) 게임 페이지를 만드는 것인데, 

시간상 전부를 완성하진 못했고, 2/3정도 완성하였다.

<details>
<summary>접기/펼치기 버튼</summary>
<div markdown="1">

```react
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```
</div>
</details>
