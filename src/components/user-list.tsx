import { useQueryState } from "nuqs";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Skeleton,
} from "@/components/ui";
import { useGetReposByUsername, type IUsers } from "@/utils/apis";
import UserRepos from "./user-repos";

interface UserListParams {
  data: IUsers[];
  isLoading: boolean;
}

const UserList = ({ data, isLoading }: UserListParams) => {
  const [username] = useQueryState("username");

  const [selectedUsername, setSelectedUsername] = useState("");

  const { data: repos, isLoading: isReposLoading } = useGetReposByUsername(
    {
      username: selectedUsername,
      per_page: 100,
    },
    { enabled: !!selectedUsername }
  );

  return (
    <div className="mt-5">
      {username && <p>Showing users for "{username}"</p>}
      {isLoading ? (
        <div className="flex flex-col gap-3">
          {Array.from({ length: 5 }, (_, i) => i + 1).map((val) => (
            <Skeleton className="h-14 w-full rounded-xl" key={val} />
          ))}
        </div>
      ) : (
        <Accordion
          type="single"
          collapsible
          onValueChange={(value) => setSelectedUsername(value)}
          className="space-y-4"
        >
          {data.map((row, index) => (
            <AccordionItem
              value={row.login}
              key={row.id}
              data-testid={`row-${index}`}
            >
              <AccordionTrigger>{row.login}</AccordionTrigger>
              <AccordionContent>
                <UserRepos data={repos ?? []} isLoading={isReposLoading} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default UserList;
