"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Topping from "./components/Topping";

interface ToppingProps {
  id: string;
  name: string;
}

// Connect this to database, pull initial value.
const DATA = [
  { id: "todo-0", name: "Cheese" },
  { id: "todo-1", name: "Jalepenos" },
  { id: "todo-2", name: "Bacon" },
];

export default function Home() {
  const [toppings, setToppings] = useState(DATA);

  function addTopping(name: string): void {
    const newTopping = { id: `topping-${nanoid()}`, name };
    setToppings([...toppings, newTopping]);
  }
  const toppingList = toppings.map((topping: ToppingProps) => (
    <Topping id={topping.id} name={topping.name} key={topping.id} />
  ));
  const headingText = `Total Toppings: ${toppingList.length}`;

  return (
    <div className="container mx-auto">
      <h1>Meatza Pizza</h1>
      <Form addTopping={addTopping} toppings={toppings} />
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {toppingList}
      </ul>
    </div>
  );
}
