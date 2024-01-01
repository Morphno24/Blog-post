import { NavLink } from "react-router-dom";

function AppLink({ children, route }) {
  return (
    <NavLink
      className={`hover:underline underline-offset-2 decoration-2 m-2 decoration-blue-800 aria-[current=page]:text-white  `}
      to={route}
    >
      {children}
    </NavLink>
  );
}

export default AppLink;
