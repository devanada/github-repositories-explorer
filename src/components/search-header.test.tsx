import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchHeader from "./search-header";

vi.mock("nuqs", () => ({ useQueryState: () => [null, vi.fn()] }));

describe("SearchHeader", () => {
  it("renders input and button", () => {
    render(<SearchHeader isLoading={false} />);
    expect(screen.getByTestId("input-username")).toBeInTheDocument();
    expect(screen.getByTestId("button-search")).toBeInTheDocument();
  });

  it("disables input and button when loading", () => {
    render(<SearchHeader isLoading={true} />);
    expect(screen.getByTestId("input-username")).toBeDisabled();
    expect(screen.getByTestId("button-search")).toBeDisabled();
  });

  it("updates input value", () => {
    render(<SearchHeader isLoading={false} />);
    const input = screen.getByTestId("input-username") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "newuser" } });
    expect(input.value).toBe("newuser");
  });
});
