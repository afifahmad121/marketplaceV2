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

export const ButtonSubmit = ({ title, to }) => {
  return (
    <Link to={to}>
      <button
        className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold
       text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        {title}
      </button>
    </Link>
  );
};
