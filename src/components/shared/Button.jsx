import { Link } from "react-router-dom";

export const Button = ({ title, to }) => {
  return (
    <Link to={to}>
      <button
        className="bg-button transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 ...
      text-fontWhite text-sm px-6 py-3 right-4 left-4 mr-10 mt-3 mb-3 rounded-full flex items-center"
      >
        {title}
      </button>
    </Link>
  );
};
