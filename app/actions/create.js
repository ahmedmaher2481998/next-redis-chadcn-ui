"use server";

import { client } from "@/lib/db";
import { redirect } from "next/navigation";
// import { Book } from "@/types";

export async function createBook(formData) {
  const book = Object.fromEntries(formData);
  console.log(book);
  const id = Math.floor(Math.random() * 100000);
  // returns 0 if the ordered set didn't get modified ,the value already exists
  const isUnique = await client.zAdd(
    "books",
    {
      value: book.title,
      score: id,
    },
    {
      NX: true,
    }
  );
  const key = `books:${id}`;
  if (!isUnique) {
    console.log("Error book title exits ");
    return { error: "This book already Exists ." };
  }
  await client.hSet(key, [...Object.entries(book).flat()]);
  return redirect("/");
}
