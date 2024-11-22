import { render, screen } from "@testing-library/react";
import ContactPage from "./page";

describe("contact page", () => {
  it("renders a heading", () => {
    render(<ContactPage />);

    const images = screen.getAllByRole("img");

    expect(images.length).toBe(4);
  });
});
