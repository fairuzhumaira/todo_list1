import React from "react";
import './App.css';
import Form from "./components/Form";
import Todo from "./components/Todo";


function App() {
  return(
    <div className="App">
      <header>
        <h1>ToDoList</h1>
      </header>
      <Form />
      <Todo />


    </div>

);
  }


export default App;
