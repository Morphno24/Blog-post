import { useParams } from "react-router-dom";
import PostFilters from "../components/PostFilters";
import Posts from "../components/Posts";
import ProfileCard from "../components/ProfileCard";
import { useAuthor } from "../context/AuthorContext";
import { usePost } from "../context/PostContext";
import LoadingSpinner from "../components/LoadingSpinner";

function Profile() {
  const { authors } = useAuthor();
  const { isPostsLoading } = usePost();
  const { id } = useParams();

  const author = authors.find((author) => author.id === id);
  if (author === undefined) {
    return <LoadingSpinner />;
  }
  return (
    <div className="w-3/4 mx-auto my-0">
      <ProfileCard author={author} />
      <div className="mx-5">
        <h1 className="text-[#212529] text-3xl font-medium mb-11">Posts</h1>
        <PostFilters />
      </div>
      {isPostsLoading ? <LoadingSpinner /> : <Posts id={id} />}
    </div>
  );
}

export default Profile;
