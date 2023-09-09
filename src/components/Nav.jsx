import {} from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul class="flex justify-center w-full mt-6">
        <li class="mr-6 ">
          <Link class="text-blue-500 hover:text-blue-800" to="/">
            Home
          </Link>
        </li>
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" to='/produtos'>
            Produtos
          </Link>
        </li>
        <li class="mr-6">
          <Link class="text-blue-500 hover:text-blue-800" to='/sobre'>
            Sobre
          </Link>
        </li>
      </ul>
    </>
  );
};
export default Nav;
