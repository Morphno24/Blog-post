import { Link, Outlet } from "react-router-dom";
import AppLink from "../components/AppLink";

function AppLayout() {
  return (
    <div>
      <nav className="flex justify-between p-5 bg-[#343a40] text-[#6c757d] font-bold text-xl mb-10">
        <Link
          to="/"
          className=" text-white  hover:underline underline-offset-2 decoration-2"
        >
          JSOM
        </Link>
        <div>
          <AppLink route={"/"}>Authors</AppLink>
          <AppLink route={"MostLikedPost"}>MostLikedPost</AppLink>
          <AppLink route={"MostCommentPost"}>MostCommentPost</AppLink>
        </div>
      </nav>
      <Outlet />
      <div className="max-w-100% bg-[rgb(0,0,0,.03)] border border-[rgba(0,0,0,.125)] p-16"></div>
    </div>
  );
}

export default AppLayout;
