import React from "react";
import StoryWrapper from "../components/stories/StoryWrapper";
import CreatePost from "../components/posts/CreatePost";

export default function Home() {
  return (
    <div className="px-[200px]">
      <StoryWrapper />
      <CreatePost />
    </div>
  );
}
