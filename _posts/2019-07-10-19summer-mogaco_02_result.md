---
layout: post
title: "[19년도 하계 모각코] 2회차_결과"
categories: mogaco
tags: 19summer
comments: true
---

# 결과

> Udemy의 MOOC강의 수강

- Fat Arrow ( Arrow Function)
  ```javascript
  const App = () => {
      return <div>Hi!</div>
  }
  ```
  
  - Using in render()
  
  ```react
  class SearchBar extends Component {
  render() {
  	return <input onChange={event ==> console.log(event.target.value)} />; // Arrow Function
  	}
  }
  ```
  
- constructor : constructor는 새 인스턴스가 생성되었을 때 반드시 실행된다.

  ```react
  class SearchBar extends Component {
  	constructor(props) {
  		super(props);
  	}
  }
  ```

- state : state가 변경되었을 경우 반드시 해당 클래스에서 rerender가 일어난다. (즉, 함수형 컴포넌트에선 사용 불가능)
	
	```react
	class SearchBar extends Component {
		constructor(props) {
			super(props);
	    	this.state = {term : ''};
		}
	
		render() {
	        return (
	        	<div>
	            	<input onChange={event => this.setState({ term: event.target.value})} />
	            </div>
	        );
	    }
	}
	```



![완료](https://i.imgur.com/XiVUvXQ.png)



Section 1을 완료했다.