import { useEffect, useState } from "react";
import Comment from "./Comment";
import { usePost } from "../context/PostContext";
import LoadingSpinner from "./LoadingSpinner";
import { useAuthor } from "../context/AuthorContext";
function CommentsContainer() {
  const { post } = usePost();
  const { getCommentWriter } = useAuthor();
  const [comments, setComments] = useState([]);
  useEffect(function () {
    async function getComments() {
      const res = await fetch(`http://localhost:8000/comments`);
      const data = await res.json();

      setComments(data);
    }
    getComments();
  }, []);

  if (!post) {
    return <LoadingSpinner />;
  }

  const postComments = comments.filter(
    (comment) => comment.postId === Number(post.id)
  );

  const commentWriters = getCommentWriter(postComments);

  return (
    <>
      <h1 className="text-center text-2xl font-semibold py-5 ">Comments</h1>
      <div className="max-w-[77%] mx-auto">
        {postComments.map((comment, i) => (
          <Comment
            comment={comment}
            writers={commentWriters}
            key={comment.id}
            i={i}
          />
        ))}
      </div>
    </>
  );
}

export default CommentsContainer;
