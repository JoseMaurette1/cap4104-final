import React from "react";
import { User, Search, Mountain, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const Home = () => {
  const tutorialIcons = [
    {
      Icon: Search,
      text: "Search will show you popular trails that you can bookmark to your profile.",
    },
    {
      Icon: Mountain,
      text: "Trails will show you all the trails that are available with their difficulty.",
    },
    {
      Icon: User,
      text: "User will take you to your profile where you can post, comment and access your bookmarks.",
    },
    {
      Icon: Settings,
      text: "Settings can toggle between light and dark mode, and private and public account.",
    },
  ];
  return (
    <Card className="max-w-md w-full mx-auto">
      <CardHeader>
        <CardTitle>
          <h1 className="text-center font-bold text-2xl">
            Welcome to TrailTales
          </h1>
        </CardTitle>
        <CardDescription className="text-center text-xl">
          Tutorial:
        </CardDescription>
      </CardHeader>
      <CardContent>
        {tutorialIcons.map(({ Icon, text }, index) => (
          <div key={index} className="p-4">
            <Icon />
            <p>{text}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="default">
          <Link href="/Trails">Start</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Home;
