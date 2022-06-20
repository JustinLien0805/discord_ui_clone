import React from 'react'

const Member = ({name}) => {
  return (
    <div className="flex text-white justify-center items-center ml-2 my-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 "
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        <h4 className="text-xl text-cyan-400">{name}</h4>
      </div>
  )
}

export default Member