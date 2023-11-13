import BookCard from "@/components/Card";
import { client } from "@/lib/db";
import { Book } from "@/types";
const getBooks = async () => {
  const ids = await client.zRangeWithScores("books", 0, -1);
  try {
    const data = ids.map(({ score }) => {
      const key = `books:${score}`;
      console.log("key", key);
      return client.hGetAll(key);
    });
    return await Promise.all(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Home() {
  const books: any[] = await getBooks();
  return (
    <main className="w-full pt-4 bg-slate-50 h-full min-h-[90vh] flex  ">
      <div className="max-w-2xl grid grid-cols-3  gap-4 w-full h-full   mx-auto">
        {books.length ? (
          books?.map((bookRaw) => {
            // @ts-expect-error-disable-next-line
            const book: Book = Object.fromEntries(Object.entries(bookRaw));
            if (!book.title) return;
            return <BookCard key={book.title} book={book} />;
          })
        ) : (
          <div className="w-[100%] h-full items-center  text-center">
            No books available Yet
          </div>
        )}
      </div>
    </main>
  );
}
