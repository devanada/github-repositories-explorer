import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserRepos from "./user-repos";

describe("UserRepos", () => {
  it("shows skeletons when loading", () => {
    render(<UserRepos data={[]} isLoading={true} />);
    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("shows repo cards when data is present", () => {
    const data = [
      { id: 1, name: "repo1", stargazers_count: 10, description: "desc" },
      { id: 2, name: "repo2", stargazers_count: 5, description: null },
    ];
    render(<UserRepos data={data as never} isLoading={false} />);
    expect(screen.getByText("repo1")).toBeInTheDocument();
    expect(screen.getByText("repo2")).toBeInTheDocument();
    expect(screen.getByText("10 ★")).toBeInTheDocument();
    expect(screen.getByText("5 ★")).toBeInTheDocument();
  });

  it("shows no repositories message when data is empty", () => {
    render(<UserRepos data={[]} isLoading={false} />);
    expect(screen.getByText(/No repositories shown/i)).toBeInTheDocument();
  });
});
