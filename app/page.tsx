"use client";

import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "@/app/components/Form";
import Topping from "@/app/components/Topping";
import { ToppingProps } from "@/app/types/types";

// Connect this to database, pull initial value.
// const DATA = [
//   { id: "topping-0", name: "Cheese" },
//   { id: "topping-1", name: "Jalepenos" },
//   { id: "topping-2", name: "Bacon" },
// ];

export default function Home() {
  const [toppings, setToppings] = useState<ToppingProps[]>([]);

  function addTopping(name: string): void {
    const newTopping = {
      id: `topping-${nanoid()}`,
      name,
      deleteTopping,
      editTopping,
    };
    setToppings([...toppings, newTopping]);
  }

  function deleteTopping(id: string): void {
    const remainingToppings = toppings.filter((topping) => id !== topping.id);
    setToppings(remainingToppings);
  }

  function editTopping(id: string, newName: string) {
    const editedToppingList = toppings.map((topping) => {
      if (id === topping.id) {
        return { ...topping, name: newName };
      }
      return topping;
    });
    setToppings(editedToppingList);
  }

  const toppingList = toppings.map((topping: ToppingProps) => (
    <Topping
      id={topping.id}
      name={topping.name}
      key={topping.id}
      deleteTopping={deleteTopping}
      editTopping={editTopping}
    />
  ));
  const headingText = `Total Toppings: ${toppingList.length}`;

  return (
    <div className="container mx-auto">
      <h1>Meatza Pizza</h1>
      <Form toppings={toppings} addTopping={addTopping} />
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
