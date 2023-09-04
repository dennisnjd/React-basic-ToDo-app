import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');



  function getDayName(date = new Date(), locale = 'en-US') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
  } //to find current day



  const handleCheckboxChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  function deleteTodo(id) {
    // Find the index of the todo item with the specified id
    const index = toDos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      // Create a new array without the todo item to be deleted
      const updatedTodos = [...toDos.slice(0, index), ...toDos.slice(index + 1)];

      // Update the state with the new array
      setTodos(updatedTodos);
    }
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {getDayName()} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setTodo(event.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>

      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>


            <div className="left">
              <input
                onChange={() => handleCheckboxChange(obj.id)}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p style={{ textDecoration: obj.status ? 'line-through' : 'none' }}>
                {obj.text}
              </p>
            </div>




            <div className="right">
              <i onClick={() => deleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;