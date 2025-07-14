import Layout from "@/components/layout";
import SearchHeader from "@/components/search-header";
import UserList from "@/components/user-list";
import { useGetUsers } from "@/utils/apis";
import { useQueryState } from "nuqs";

const Index = () => {
  const [username] = useQueryState("username");

  const { data, isLoading } = useGetUsers(
    { q: username ?? "", per_page: 5 },
    { enabled: !!username }
  );

  return (
    <Layout>
      <SearchHeader isLoading={isLoading} />
      <UserList data={data?.items ?? []} isLoading={isLoading} />
    </Layout>
  );
};

export default Index;
