import { useParams } from "react-router-dom";
import { usePost } from "../context/PostContext";
import { useEffect } from "react";
import { useAuthor } from "../context/AuthorContext";
import LoadingSpinner from "./LoadingSpinner";

function PostContainer() {
  const { id } = useParams();
  const { findPostById, post } = usePost();
  const { getAuthorById, author } = useAuthor();

  const authorId = String(post?.authorId);

  useEffect(() => {
    findPostById(id);
  }, [id, findPostById]);

  useEffect(() => {
    if (authorId) {
      getAuthorById(authorId);
    }
  }, [authorId, getAuthorById]);

  if (!post) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-[100%] bg-[#000000cc] text-white  flex flex-col items-center rounded">
      <h1 className="text-4xl pb-11">{post.title}</h1>
      <p className="max-w-[75%] indent-24 text-justify pb-7">
        {post.description}
      </p>
      <p className="text-[#6c757d] text-lg font-semibold pb-4">
        Date :{" "}
        {post.datePublished === undefined
          ? ""
          : `${new Intl.DateTimeFormat().format(new Date(post.datePublished))}`}
      </p>
      <p className="pb-5">
        {author === undefined
          ? ""
          : `Author : ${author.firstName} ${author.lastName}`}
      </p>
      <p className="pb-5 uppercase text-lg">Likes:7</p>
    </div>
  );
}

export default PostContainer;
