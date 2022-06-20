import React from "react";

const Comment = ({ name, content }) => {
  return (
    <div className="flex space-x-4 my-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-rose-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
      <h3 className="mr-4 text-lg font-bold text-cyan-500">{name}</h3>
      <p className="break-all text-white font-semibold">{content}</p>
    </div>
  );
};

export default Comment;
