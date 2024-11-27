import React from "react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { SquareUserRound, Bookmark, MessageSquareMore } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const Grid = () => (
    <div className="flex flex-wrap w-full max-w-xl mx-auto">
      {[...Array(16)].map((_, index) => (
        <div
          key={index}
          className="w-1/4 aspect-square border border-gray-400"
          style={{ boxSizing: "border-box" }}
        />
      ))}
    </div>
  );

  return (
    <Card className="w-full max-w-7xl mx-auto">
      <CardHeader>
        <CardTitle className="pb-5">
          Username
          {/* use LocalStorage for Signup, render here */}
        </CardTitle>
        <CardDescription>
          <Textarea placeholder="Bio" className="max-w-md" />
          {/* Add edit here for them to set bio */}
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="flex justify-center items-center rounded-md gap-20 p-4">
          <p className="text-muted-foreground">Posts</p>
          <p className="text-muted-foreground">Bookmarks</p>
          <p className="text-muted-foreground">Comments</p>
        </div>
        <Grid />
      </CardContent>
      <CardFooter>{/* Add Footer */}</CardFooter>
    </Card>
  );
};

export default page;
