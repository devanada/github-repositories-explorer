import { useState } from "react";
import { useQueryState } from "nuqs";

import { Button, Input } from "./ui";

interface SearchHeaderParams {
  isLoading: boolean;
}

const SearchHeader = ({ isLoading }: SearchHeaderParams) => {
  const [username, setUsername] = useQueryState("username");

  const [tempUsername, setTempUsername] = useState(username ?? "");

  const handleSearchByUsername = () => {
    setUsername(tempUsername);
  };

  return (
    <div className="flex flex-col gap-5">
      <Input
        name="username"
        data-testid="input-username"
        placeholder="Enter username"
        value={tempUsername}
        onChange={(e) => setTempUsername(e.target.value)}
        aria-disabled={isLoading}
        disabled={isLoading}
      />
      <Button
        data-testid="button-search"
        onClick={handleSearchByUsername}
        aria-disabled={isLoading}
        disabled={isLoading}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchHeader;
