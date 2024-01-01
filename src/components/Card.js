import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Card({ firstName, lastName, id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`Profile/${id}`);
  }
  return (
    <div className="max-w-[17rem] h-auto p-8 rounded flex  flex-col  shadow-lg  ">
      <img
        src={`https://source.unsplash.com/random/200x200?sig=${id}`}
        alt="img"
      />
      <span className="text-[#00000080] font-medium text-lg text-center">
        {firstName} {lastName}
      </span>
      <button
        onClick={handleClick}
        className="bg-blue-600 p-1 rounded text-white text-base font-medium"
      >
        Click to view Profile
      </button>
    </div>
  );
}

export default Card;
