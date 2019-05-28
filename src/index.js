// import React from 'react'; /* render를 사용하려면 꼭 먼저 선언되어야한다. */
// import {render} from 'react-dom';
// import TodoContainer from './TodoContainer'

// let rootEl = document.querySelector("#root");  /*root를 찾아가서 container안에 쏙 넣는다.(요기는 하나만 들어갈 수 있다.)*/
// render(<TodoContainer/>, rootEl);


// import React from 'react'; /* 자동으로 js가 붙기때문에 따로 붙이지 않아도됨. */
// import {render} from 'react-dom';
// import TodoContainer from './TodoContainer'

// let rootEl = document.querySelector("#root");
// render(<TodoContainer/>,rootEl);



import React from 'react';
import { render } from 'react-dom'; // 요소 추가하기 위해서 리액트 돔 랜더가 필요
//import ReactDom from 'react-dom'; // ReactDom이 디폴트 객체 ReactDom.render 식으로 사용 가능
import TodoContainer from './TodoContainer'; // jsx 확장자는 자동으로 입력되니까 확장자 생략 가능, ./ 경로 없으면 node_modules에서 찾기 떄문에 반드시 경로 적어워야 함..

let rootEl = document.querySelector('#root');

// TodoContainer 객체 내의 render 호출, #root'에 돔 추가
render(<TodoContainer />, rootEl);



// console.log(React);
// console.log(render);
// console.log(ReactDom.render);
// console.log(TodoContainer);
// console.log(rootEl);