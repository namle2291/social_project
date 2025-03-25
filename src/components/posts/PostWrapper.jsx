import React from "react";
import PostItem from "./PostItem";

function PostWrapper() {
  return (
    <div className="my-[15px]">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default PostWrapper;
