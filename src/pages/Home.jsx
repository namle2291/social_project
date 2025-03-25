import React from "react";
import StoryWrapper from "../components/stories/StoryWrapper";
import CreatePost from "../components/posts/CreatePost";
import PostItem from "../components/posts/PostItem";
import PostWrapper from "../components/posts/PostWrapper";

export default function Home() {
  return (
    <div className="px-[200px]">
      <StoryWrapper />
      <CreatePost />
      <PostWrapper />
    </div>
  );
}
