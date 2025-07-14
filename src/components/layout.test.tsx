import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "./layout";

describe("Layout", () => {
  it("renders children", () => {
    render(
      <Layout>
        <div>Test Child</div>
      </Layout>
    );
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
