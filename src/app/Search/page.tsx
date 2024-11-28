"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";

const Page = () => {
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

  const [likedTrails, setLikedTrails] = useState<{ [key: string]: boolean }>(
    {}
  );

  useEffect(() => {
    const storedLikes = localStorage.getItem("likedTrails");
    if (storedLikes) {
      setLikedTrails(JSON.parse(storedLikes));
    }
  }, []);

  const handleLike = (trailName: string) => {
    const updatedLikedTrails = {
      ...likedTrails,
      [trailName]: !likedTrails[trailName],
    };

    setLikedTrails(updatedLikedTrails);
    localStorage.setItem("likedTrails", JSON.stringify(updatedLikedTrails));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
      {trails.map(({ image, trail }, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-lg shadow-md overflow-hidden text-center transition hover:-translate-y-2 duration-300"
        >
          <h3 className="text-xl flex text-center font-semibold p-4">
            {trail}{" "}
            <Heart
              onClick={() => handleLike(trail)}
              fill={likedTrails[trail] ? "red" : "none"}
              className="ml-2 hover:text-red-500 cursor-pointer"
            />
          </h3>
          <div className="p-4">
            <Image
              src={image}
              alt={trail}
              width={300}
              height={300}
              className="object-cover w-full rounded h-56"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
