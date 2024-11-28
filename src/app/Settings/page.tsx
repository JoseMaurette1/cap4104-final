"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

import { Lock, Settings } from "lucide-react";

const page = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center font-bold text-2xl">
          <Settings className="mr-2" /> User Settings
        </CardTitle>
        <CardDescription>How you use TrailTales</CardDescription>
      </CardHeader>
      {/* Gender Section */}

      {/* Privacy Section */}
      <CardContent className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div>
            <p className="text-sm text-gray-600">Account Privacy</p>
            <h1 className="text-lg font-bold flex items-center pb-2">
              {" "}
              Private Account <Lock className="ml-2" />
            </h1>
            <p className="text-sm text-gray-400">
              When your account is public, other TrailTales users can see your
              posts. When your account is private only those you share your
              photos with can see your posts.
            </p>
          </div>
        </div>
        <Checkbox className="ml-auto" />
      </CardContent>
      {/* Footer */}
      <CardFooter>
        <Link className="w-full" href={"/Home"}>
          <Button className="w-full">Save Changes</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default page;
