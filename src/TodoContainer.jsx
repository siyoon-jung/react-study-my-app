// import React from "react";
// import TodoInput from "./TodoInput";
// import TodoList from "./TodoList";

// class TodoContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       todoList: [
//         { id: 1, text: "추가 기능 구현100" },
//         { id: 2, text: "추가 기능 구현2" },
//         { id: 3, text: "추가 기능 구현3" },
//         { id: 4, text: "추가 기능 구현4" }
//       ]
//     };
//   }

// // arrow fn 사용해야 this가 누군지 알 수 있게 해준다. arrow대신에 bind시켜주는 방법 있긴 하지만 arrow fn사용하는 것이 더 간단.
//   onChangeData = () => {

//     // console.log(this, 'onchangedata');

//     // 페이지 가만히 있고 동적으로 돔 접근 없이 데이터값 변경으로.. 적용
//       this.setState({
//         todoList: [
//           { id: 1, text: "추가 기능 구현100" },
//         ]
//       })
//   }

//   render() {
//     const { todoList } = this.state;
//     return (
//       <div>
//           {/* 자기의 함수 메소드니까 this를 꼭 붙여줘야 한다.. */}
//         <TodoInput onChangeData={this.onChangeData} />
//         <TodoList itemList={todoList} />
//       </div>
//     );
//   }
// }

// export default TodoContainer;

// React 모듈 가져오기
import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// 자바스크립트 객체를 만들었다. 클래스 필요. 
// 리액트에서 필요한 기능들 상속 extend. React 모듈 내 Component를 상속
// 클래스는 export default 를 많이 쓴다. (함수 같은 경우 네임드 export를 많이 사용..)
class TodoContainer extends React.Component {
  render(){

    return (
      <React.Fragment>
        <TodoInput />
        <TodoList />
      </React.Fragment>
    )
  }
}

export default TodoContainer;