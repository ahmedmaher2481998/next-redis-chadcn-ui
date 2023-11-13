"use client";
import React from "react";
import {
  AvatarFallback,
  Card,
  CardHeader,
  Avatar,
  CardDescription,
  CardContent,
  CardFooter,
  CardTitle,
  Badge,
  AvatarImage,
} from "./ui";
import { Book } from "@/types";

const BookCard = ({
  book: { author, description, img, rating, title },
}: {
  book: Book;
}) => {
  return (
    <>
      <Card className="flex flex-col items-start w-full ">
        <CardHeader className="flex flex-row  w-full items-center justify-between">
          <CardTitle className="text-md inline font-semibold">
            {title}
          </CardTitle>
          <CardDescription className="w-auto h-full ">
            <Avatar>
              <AvatarImage src={img} />
              <AvatarFallback>{title.slice(0, 1)}</AvatarFallback>
            </Avatar>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
        <CardFooter className="flex w-full justify-between items-center">
          <Badge variant={"secondary"}>{author}</Badge>
          <Badge variant={"outline"}>{rating}</Badge>
        </CardFooter>
      </Card>
    </>
  );
};

export default BookCard;
