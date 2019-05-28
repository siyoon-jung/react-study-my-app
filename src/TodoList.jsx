import React from 'react';
import TodoItem from './TodoItem'
import style from './css/list.module.css';

const DEMO_PROPS = {
    itemList:[{id:1}, {id:2}, {id:3}]
}
class TodoList extends React.Component{
    render(){
        const {itemList} = DEMO_PROPS;
        
        console.log(itemList);

        return(
            <ul className={style.list_todo}>
                {
                    //itemList.map( item => (<li key={item.id}>테스트 테스트 테스트 테스트</li>))
                     itemList.map( item => (<TodoItem key={item.id} text={item.text}/>))
                }
            </ul>
        );
    }
}

export default TodoList;