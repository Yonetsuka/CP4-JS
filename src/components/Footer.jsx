import {} from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 rounded-lg shadow m-1  ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-400 sm:text-center">
          Telefone:{" "}
          4002-8922
        </span>
        <span className="text-sm text-gray-400 sm:text-center">
          email{" "}
          exemplo@gmail.com
        </span>
      </div>
    </footer>
  );
};
export default Footer;
