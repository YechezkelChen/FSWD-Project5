import SearchPost from "../components/SearchPost";
import PostList from "../components/PostList";

import { useState } from "react";

export default function Posts() {
  const [postList, setPostList] = useState([]);

  return (
    <>
      <h1>Posts</h1>
      <SearchPost setPostList={setPostList} postList={postList}/>
      <PostList postList={postList} />
    </>
  );
}
