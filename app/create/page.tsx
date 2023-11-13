"use client";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
  FormDescription,
  Label,
  Button,
} from "@/components/ui";
import { createBook } from "../actions/create";
import React from "react";

const CreateBook = () => {
  const handleSubmit = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    const res = await createBook(formData);
  };
  return (
    <main className="w-full max-w-2xl  mx-auto mt-8">
      <form action={handleSubmit} className="flex flex-col w-full  mx-auto">
        <label className="label" htmlFor="title">
          title
        </label>
        <input className="field" id="title" name="title" type="text" />

        <label className="label" htmlFor="author">
          Author
        </label>
        <input className="field" type="text" id="author" name="author" />

        <label className="label" htmlFor="rating">
          Rating
        </label>
        <input
          className="field"
          type="text"
          inputMode="numeric"
          id="rating"
          name="rating"
        />

        <label className="label" htmlFor="description">
          description{" "}
        </label>
        <input
          className="field"
          type="text"
          id="description"
          name="description"
        />

        <label className="label" htmlFor="img">
          Image URL
        </label>
        <input className="field" id="img" name="img" type="text" />

        <Button variant={"outline"} className="mx-20">
          Add Book{" "}
        </Button>
      </form>
    </main>
  );
};

export default CreateBook;
