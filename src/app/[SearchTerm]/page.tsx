import getWikiResults from "../../../lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    SearchTerm: string;
  };
};

// export async function generateMetadata({ params: { searchTerm } }: Props) {
//   const wikiData: Promise<searchResult> = getWikiResults(searchTerm);
//   const data = await wikiData;
//   const displayTerm = searchTerm.replaceAll(`%20`, ` `);

//   if (!data?.query?.pages) {
//     return {
//       title: `${displayTerm} Not Found`,
//     };
//   }

//   return {
//     title: `Search results for ${displayTerm}`,
//     description: `Search results for ${displayTerm}`,
//   };
// }

const searchResults = async ({ params: { SearchTerm } }: Props) => {
  const WikiData: Promise<searchResult> = getWikiResults(SearchTerm);
  const data = await WikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <h2>`${SearchTerm} Not found`</h2>
      )}
    </main>
  );
  return content;
};

export default searchResults;
