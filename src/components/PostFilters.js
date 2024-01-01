import { useState } from "react";
import { usePost } from "../context/PostContext";
import Filter from "./Filter";

function PostFilters() {
  const [activeBtn, setActiveBtn] = useState("");

  const { AscendByDate, DescendByDate, AscendByLike, DescendByLike } =
    usePost();
  return (
    <div className="  grid grid-cols-4 rounded font-medium ">
      <Filter
        title={"Assending By date"}
        onClick={AscendByDate}
        setActive={setActiveBtn}
        activeBtn={activeBtn}
        id={1}
      />
      <Filter
        title={"Decending By date"}
        onClick={DescendByDate}
        setActive={setActiveBtn}
        activeBtn={activeBtn}
        id={2}
      />
      <Filter
        title={"Assending By Like"}
        onClick={AscendByLike}
        setActive={setActiveBtn}
        activeBtn={activeBtn}
        id={3}
      />
      <Filter
        title={"Decending By date"}
        onClick={DescendByLike}
        setActive={setActiveBtn}
        activeBtn={activeBtn}
        id={4}
      />
    </div>
  );
}

export default PostFilters;
