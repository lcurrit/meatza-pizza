"use client";

import { FormEvent } from "react";

export default function Form({ addTopping }: any) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    addTopping("Say hello!");
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
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}
