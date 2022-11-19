import { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlechange = (e) => {
    setTodoItem(e.target.value);
  };
  const addTodo = () => {
    if (todoItem.length === 0) {
      return;
    }
    // setTodoList([...todoList, todoItem]);
    // setTodoItem("");
    setTodoList((todoList) => {
        const updatedList = [...todoList, todoItem];
        console.log(updatedList);
        setTodoItem("");
        return updatedList
    }) 
    // console.log(todoList);
  };

  const removeTodo = (i) => {
    const updatedList = todoList.filter((item, id) => {
        return i!== id;
    })
    setTodoList(updatedList)
  }
  return (
    <div className="container">
      <div className="header">TODO LIST</div>
      <div>
        <input
          type="text"
          name="todoItem"
          placeholder="Add Todo Item"
          value={todoItem}
          onChange={handlechange}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div>
        <p className="List-heading">Here is your list</p>
      </div>

    {
        todoList!==[] && todoList.map((item, i) => {
            return (
                <>
                <p key = {i}>
                    <div className="ListData">{item}</div>
                    <div className="btn-position">
                    <button onClick={() => removeTodo(i)}>remove</button>
                    </div>
                </p>

            </>
            )
        })
    }
    {todoList.length!== 0 && <button onClick={() => setTodoList([])}> remove all</button>}
    </div>
  );
};

export default Todo;
