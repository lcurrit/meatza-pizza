export default function Topping({ name, id }: { name: string; id: string }) {
  return (
    <li className="todo stack-small mb-2">
      <div className="c-cb">
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
        <button type="button" className="btn">
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
}
