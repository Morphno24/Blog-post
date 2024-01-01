import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

function Comment({ comment, writers, i }) {
  const navigate = useNavigate();
  if (comment === undefined) return <LoadingSpinner />;

  const firstName = writers[i].firstName;
  const lastName = writers[i].lastName;

  function handleClick() {
    navigate(`/Profile/${comment.authorId}`);
  }
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer hover:text-[#0056b3] hover:underline my-14"
    >
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${comment.authorId}`}
        alt="..."
      />
      <h1 className="font-semibold text-xl">
        {firstName} {lastName}
      </h1>
      <p className="text-xl">
        <label className="cursor-default no-underline font-bold">
          Comment:
        </label>{" "}
        {comment.text}
      </p>
    </div>
  );
}

export default Comment;
