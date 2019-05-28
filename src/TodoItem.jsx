import React from 'react';
import style from './css/item.module.css';

const DEMO_PROPS = {
    text:"테스트 테스트 테스트 테스트 테스트 테스트 테스트"
}
class TodoItem extends React.Component{

    render(){

        const {text} = DEMO_PROPS;

        return(
            <li className={style.item_todo}>{text}</li>
        );
    }

}

export default TodoItem;