import { auth } from "../../auth";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartTypeCard } from "../../components/StartupCard";
import { sanityFetch, SanityLive } from "../../sanity/lib/live";
import { STARTUP_QUERY } from "../../sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const params = { search: query || null }
  const session = await auth();
  console.log(session?.id);
  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY, params })

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Startu, <br />Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideads, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Seach results for "${query}"` : 'All Startups'}
        </p>
        <ul className="ml-7 card_grid">
          {posts.map((post: StartTypeCard) => (
            <StartupCard key={post._id} post={post} />
          ))}
        </ul>

      </section>

      <SanityLive />
    </>
  );
}
