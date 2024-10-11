// types.ts
export interface ToppingProps {
  id: string;
  name: string;
  deleteTopping: (id: string) => void;
}
