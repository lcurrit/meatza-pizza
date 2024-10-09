import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

it("should have a Meatza Pizza heading", () => {
  render(<Home />); // Arrange
  const myElem = screen.getByText("Meatza Pizza"); // Action
  expect(myElem).toBeInTheDocument(); // Assert
});
