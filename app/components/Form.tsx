"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { ToppingProps } from "@/app/types/types";

interface FormProps {
  addTopping: (name: string) => void;
  toppings: ToppingProps[];
}

export default function Form({ addTopping, toppings }: FormProps) {
  const [topping, setTopping] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTopping(event.target.value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const trimmedTopping = topping.trim();
    if (trimmedTopping === "") {
      return;
    }

    if (
      toppings.some(
        (existingTopping) =>
          existingTopping.name.toLowerCase() === trimmedTopping.toLowerCase()
      )
    ) {
      alert("This topping is already in the list.");
      return;
    }

    addTopping(trimmedTopping);
    setTopping("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Let's manage our toppings!
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={topping}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
