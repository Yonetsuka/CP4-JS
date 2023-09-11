import {} from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul className="flex justify-center w-full mt-6">
        <li className="mr-6 ">
          <Link className="text-blue-500 hover:text-blue-800" to="/">
            Home
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to='/produtos'>
            Produtos
          </Link>
        </li>
        <li className="mr-6">
          <Link className="text-blue-500 hover:text-blue-800" to='/sobre'>
            Sobre
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
