import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have a Meatza Pizza heading", () => {
    render(<Home />); // Arrange
    const myElem = screen.getByRole("heading", {
      name: /meatza pizza/i,
    }); // Action
    expect(myElem).toBeInTheDocument(); // Assert
  });
});
