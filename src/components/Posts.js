import { useEffect } from "react";
import { usePost } from "../context/PostContext";
import PostCard from "./PostCard";

function Posts({ id }) {
  const { findPostByAuthor, authorPosts } = usePost();
  useEffect(
    function () {
      findPostByAuthor(Number(id));
    }, //eslint-disable-next-line
    [id]
  );

  return (
    <ul className="mt-6">
      {authorPosts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </ul>
  );
}

export default Posts;
