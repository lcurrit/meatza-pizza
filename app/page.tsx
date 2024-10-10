"use client";

import Form from "./components/Form";
import Topping from "./components/Topping";

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

function addTopping(name: string): void {
  alert(name);
}

export default function Home() {
  const taskList = DATA.map((task) => (
    <Topping
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>Meatza Pizza</h1>
      <Form addTopping={addTopping} />
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}
