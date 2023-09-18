import { useSelector } from "react-redux";

const TodoList = ({today}) => {
  const {todoList} = useSelector((state)=>state.todo);
  return (
    <div>
      <ul className="todo-tab-bar">
        <li> {today}</li>
        <ul className="todo-active-tab-bar">
          <li className="pointer-cursor">TODO</li>
          <li className="pointer-cursor">DOING</li>
          <li className="pointer-cursor">DONE</li>
        </ul>
      </ul>
      <div className="plus-item-button pointer-cursor">PLUS ITEM</div>
      <ul className="todo-list">
        { 
          todoList.map((v)=>{
            return <li key={v.todo_id}>{v.todo_id}{v.title} {v.start} {v.end}</li>
          })
        }
      </ul>
    </div>
  );
};
export default TodoList;
