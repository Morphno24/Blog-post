import CommentsContainer from "../components/CommentsContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import PostContainer from "../components/PostContainer";
import { usePost } from "../context/PostContext";

function Post() {
  const { isPostLoading } = usePost();

  return (
    <div>
      {isPostLoading ? <LoadingSpinner /> : <PostContainer />}

      <CommentsContainer />
    </div>
  );
}

export default Post;
