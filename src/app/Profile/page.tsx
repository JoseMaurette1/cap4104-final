"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
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
  const [activeSection, setActiveSection] = useState<string>("Posts");
  const [likedTrails, setLikedTrails] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [username, setUsername] = useState<string>("");
  const [postImages, setPostImages] = useState<string[]>([]);
  const [clickedBookmark, setClickedBookMark] = useState<number | null>(null);
  const [clickedPost, setClickedPost] = useState<number | null>(null);

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
    const storedUsername = localStorage.getItem("username");
    const storedBio = localStorage.getItem("bio");
    const storedPosts = localStorage.getItem("postImages");
    const storedLikes = localStorage.getItem("likedTrails");

    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedPosts) setPostImages(JSON.parse(storedPosts));
    if (storedBio) setBio(storedBio);
    if (storedLikes) setLikedTrails(JSON.parse(storedLikes));
  }, []);

  const addPostImage = (imageUrl: string) => {
    const updatedPosts = [...postImages, imageUrl];
    setPostImages(updatedPosts);
    localStorage.setItem("postImages", JSON.stringify(updatedPosts));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      addPostImage(imageUrl);
    }
  };

  const handlePostGridClick = (index: number) => {
    setClickedPost(index === clickedPost ? null : index);
  };
  const handleBookMarkClick = (index: number) => {
    setClickedBookMark(index === clickedBookmark ? null : index);
  };

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  const handleSaveBio = () => {
    localStorage.setItem("bio", bio);
    setIsEditing(false);
  };

  const likedTrailNames = Object.keys(likedTrails).filter(
    (trail) => likedTrails[trail]
  );

  const BookmarksGrid = () => (
    <div className="flex flex-wrap w-full max-w-xl mx-auto gap-4">
      {trails
        .filter((trail) => likedTrailNames.includes(trail.trail))
        .map(({ image, trail }, index) => (
          <div
            key={index}
            className={` ${
              clickedBookmark === index ? "scale-150  " : ""
            } w-1/4 aspect-square border border-gray-400 rounded-md overflow-hidden`}
            onClick={() => handleBookMarkClick(index)}
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

  const PostsGrid = () => (
    <div className="flex flex-wrap w-full max-w-xl mx-auto gap-4">
      {postImages.length > 0 ? (
        postImages.map((image, index) => (
          <div
            key={index}
            className={` ${
              clickedPost === index ? "scale-150" : ""
            } w-1/4 aspect-square border border-gray-400 rounded-md overflow-hidden`}
            onClick={() => handlePostGridClick(index)}
          >
            <Image
              src={image}
              alt={`Post ${index + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))
      ) : (
        <p className="text-gray-500">No posts yet!</p>
      )}
    </div>
  );

  return (
    <Card className="w-full max-w-7xl mx-auto px-4 sm:px-8">
      <CardHeader>
        <CardTitle className="pb-5">
          <p className="flex items-center text-center sm:text-left">
            <User className="mr-2" /> {username || "user"}
          </p>
          <p className="pt-2">Like Trails in search to save to your profile</p>
        </CardTitle>
        <CardDescription>
          <Textarea
            placeholder="Bio"
            className="max-w-md"
            value={bio}
            disabled={!isEditing}
            onChange={handleBioChange}
          />
          <button
            className="pt-2"
            onClick={isEditing ? handleSaveBio : () => setIsEditing(true)}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </CardDescription>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-center items-center rounded-md gap-8 sm:gap-36 p-4">
          <p
            className={`cursor-pointer ${
              activeSection === "Posts" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Posts")}
          >
            <Grid3x3 className="mr-2" />
            Posts
          </p>
          <p
            className={`cursor-pointer ${
              activeSection === "Bookmarks" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Bookmarks")}
          >
            <Bookmark className="mr-2" />
            Bookmarks
          </p>
          <p
            className={`cursor-pointer ${
              activeSection === "Comments" ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveSection("Comments")}
          >
            <MessageSquareMore className="mr-2" />
            Comments
          </p>
        </div>
        {activeSection === "Bookmarks" && <BookmarksGrid />}
        {activeSection === "Posts" && (
          <>
            <div className="mb-4">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-2"
              />
            </div>
            <PostsGrid />
          </>
        )}
        {activeSection === "Comments" && <p>Display Comments Here</p>}
      </CardContent>
      <CardFooter>{/* Add Footer here */}</CardFooter>
    </Card>
  );
};

export default ProfilePage;
