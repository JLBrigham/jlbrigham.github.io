import { render, screen } from "@testing-library/react";
import React from "react";
import Header from "./Header";

describe("Header", () => {
  it("renders links to About and Skills", () => {
    render(<Header />);
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});
