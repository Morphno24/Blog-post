import { useLocation } from "react-router-dom";
import { usePost } from "../context/PostContext";
import PostCard from "../components/PostCard";

function MostLiked() {
  const { posts } = usePost();
  const sortedPostsByLikes = [...posts]
    .sort((a, b) => b.numLikes - a.numLikes)
    .slice(0, 10);
  const sortedPostsByComments = [...posts]
    .sort((a, b) => b.Comments - a.numComments)
    .slice(0, 10);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="max-w-[80%] mx-auto">
      {currentPath === "/MostLikedPost"
        ? sortedPostsByLikes.map((post) => (
            <PostCard post={post} key={post.id} />
          ))
        : sortedPostsByComments.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
    </div>
  );
}

export default MostLiked;
