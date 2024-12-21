import Banner from "@/components/layout/Banner";
import Posts from "@/components/layout/posts/Posts";
import SearchForm from "@/components/layout/searchForm/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ query: string }>;
}) {
  const query = (await searchParams)?.query;
  return (
    <main className="">
      <Banner
        title="Leave Your Mark!"
        subtitle={`"Check-in" like never before! Add your signature to places around the world.`}
      />
      <SearchForm query={query} />
      <Posts query={query} />
    </main>
  );
}
