import { Card, CardContent, CardFooter, Skeleton } from "@/components/ui";
import { cn } from "@/lib/utils";

import type { IRepos } from "@/utils/apis";

interface UserReposParams {
  data: IRepos[];
  isLoading: boolean;
}

const UserRepos = ({ data, isLoading }: UserReposParams) => {
  return (
    <div className="flex flex-col gap-4 ml-3">
      {isLoading ? (
        [1, 2, 3].map((val) => (
          <Skeleton className="h-28 w-full rounded-xl" key={val} />
        ))
      ) : data.length !== 0 ? (
        data.map((repo, index) => (
          <Card key={repo.id} data-testid={`repo-${index}`}>
            <CardContent className="flex justify-between">
              <p className="font-bold">{repo.name}</p>
              <p className="font-bold">{repo.stargazers_count} ★</p>
            </CardContent>
            <CardFooter>
              <p
                className={cn(
                  repo.description
                    ? "text-balance tracking-wide"
                    : "text-gray-400 italic"
                )}
              >
                {repo.description ?? "no description available"}
              </p>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Card>
          <CardContent>
            <p className="text-gray-400 italic">No repositories shown</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserRepos;
