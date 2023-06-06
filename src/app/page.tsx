import BookCard from "./components/BookCard";
import { Book } from "./types/BookType";
import axios from "axios"

export default async function Home() {

  const res = await axios("http://localhost:3000/api/getBooks");
  const books = await res.data;

  
  return (
    <main className="flex flex-col gap-6 items-center px-12 py-4">
      <h1 className="text-center sm:text-xl md:text-2xl underline fon-bold">Kitapyurdu.com Çok Satanlar (Haftalık)</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {books.map((book:Book,ind:number) => (
        <BookCard book={book} index={ind} />
      ))}
      </div>
    </main>
  )
}
