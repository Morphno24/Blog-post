import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
  const date = new Intl.DateTimeFormat().format(new Date(post.datePublished));
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/Post/${post.id}`);
  }
  return (
    <li
      onClick={handleClick}
      className="grid grid-cols-3   bg-white border-2 border-gray-200 p-2 px-3 cursor-pointer mb-2 "
    >
      <span className="text-blue-500 text-xl font-semibold ">{post.title}</span>
      <span className="justify-self-center text-[#17a2b8] text-xl font-semibold  ">
        {date}
      </span>
      <span className="justify-self-end text-red-600 text-xl font-semibold">
        Likes {post.numLikes}
      </span>
    </li>
  );
}

export default PostCard;
