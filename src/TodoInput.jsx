// import React from 'react';
// import style from './css/input.module.css';

// class TodoInput extends React.Component {
//     render(){
//         const {onChangeData} = this.props;
//         // onChangeData();

//         return(
//             <div className={style.area_input}>
//                 <input placeholder="enter task"/>
//                 <button type="submit" onClick={onChangeData}>add</button>
//             </div>
//         );
//     }
// }

// export default TodoInput;

import React from 'react';
import styles from './css/input.module.css'; // 확장자 반드시 넣어줘야 함. 자동 처리 안됨.

class TodoInput extends React.Component {
    render(){
        return (
            // 자바스크립트에서 class 를 사용하고 있기 때문에 className으로 사용.
            // {} 자바스크립트 영역
            <div className={styles.area_input}>
                <input type="text" placeholder="enter task" />
                <button type="button">add</button>
            </div>
        )
    }
}

export default TodoInput;