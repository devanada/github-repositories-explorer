import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserList from "./user-list";

vi.mock("nuqs", () => ({ useQueryState: () => ["testuser"] }));
vi.mock("./user-repos", () => ({ default: () => <div>MockedUserRepos</div> }));
vi.mock("@/utils/apis", () => ({
  useGetReposByUsername: () => ({ data: [], isLoading: false }),
}));

describe("UserList", () => {
  it("shows loading skeletons", () => {
    render(<UserList data={[]} isLoading={true} />);
    const skeletons = screen.getAllByTestId("skeleton");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("shows user rows when data is present", () => {
    const data = [
      { id: 1, login: "user1" },
      { id: 2, login: "user2" },
    ];
    render(<UserList data={data as never} isLoading={false} />);
    expect(screen.getByText("user1")).toBeInTheDocument();
    expect(screen.getByText("user2")).toBeInTheDocument();
  });

  it("shows username in header if present", () => {
    render(<UserList data={[]} isLoading={false} />);
    expect(screen.getByText(/Showing users for/)).toBeInTheDocument();
  });
});
