"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { User, Bookmark, MessageSquareMore, Grid3x3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const ProfilePage = () => {
  const [bio, setBio] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const storedBio = localStorage.getItem("bio");
    if (storedBio) {
      setBio(storedBio);
    }
  });

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleSaveBio = () => {
    localStorage.setItem("bio", bio);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const [likedTrails, setLikedTrails] = useState<{ [key: string]: boolean }>(
    {}
  );
  const trails = [
    { image: "/yosemite.jpg", trail: "Yosemite Valley" },
    { image: "/lake-louise.jpg", trail: "Lake Louise" },
    { image: "/bald-mountains.jpg", trail: "Bald Mountains" },
    { image: "/latemar.jpg", trail: "Latemar" },
    { image: "/vanoise.jpg", trail: "Vanoise National Park" },
    { image: "/lago.jpg", trail: "Lago di Braies" },
    { image: "/oldcutler.jpg", trail: "Old Cutler Trail" },
    { image: "/everglades.jpg", trail: "Everglades Trail" },
  ];

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedTrails");
    if (storedLikes) {
      setLikedTrails(JSON.parse(storedLikes));
    }
  }, []);

  const likedTrailNames = Object.keys(likedTrails).filter(
    (trail) => likedTrails[trail]
  );

  const Grid = () => (
    <div className="flex flex-wrap w-full max-w-xl mx-auto gap-4">
      {trails
        .filter((trail) => likedTrailNames.includes(trail.trail))
        .map(({ image, trail }, index) => (
          <div
            key={index}
            className="w-1/4 aspect-square border border-gray-400 rounded-md overflow-hidden"
            style={{ boxSizing: "border-box" }}
          >
            <Image
              src={image}
              alt={trail}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
    </div>
  );

  return (
    <Card className="w-full max-w-7xl mx-auto px-4 sm:px-8">
      <CardHeader>
        <CardTitle className="pb-5">
          <p className="flex items-center text-center sm:text-left">
            <User className="mr-2" /> User.name
          </p>
          <p className="pt-2">Like Trails in search to save to your profile</p>
        </CardTitle>
        <CardDescription>
          <Textarea
            placeholder="Bio"
            className="max-w-md"
            value={bio}
            onChange={handleBioChange}
          />
          <button
            className="pt-2"
            onClick={isEditing ? handleSaveBio : handleEditClick}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
          {/* Todo: Edit and Save function is broken */}
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-center items-center rounded-md gap-8 sm:gap-36 p-4">
          <p className="text-muted-foreground flex items-center">
            <Grid3x3 className="mr-2" />
            Posts
          </p>
          <p className="text-muted-foreground flex items-center">
            <Bookmark className="mr-2" />
            Bookmarks
          </p>
          <p className="text-muted-foreground flex items-center pr-2">
            <MessageSquareMore className="mr-2" />
            Comments
          </p>
        </div>
        <Grid />
      </CardContent>
      <CardFooter>{/* Add Footer here */}</CardFooter>
    </Card>
  );
};

export default ProfilePage;
