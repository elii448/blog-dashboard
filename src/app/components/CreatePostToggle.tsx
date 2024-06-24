import { useState, useEffect, useRef } from 'react'

interface CreatePostToggleProps{
  onToggle: () => void
}

const CreatePostToggle = ({onToggle}: CreatePostToggleProps) => {
  return (
    <div className="w-6/12 mx-auto p-4 bg-white shadow-md rounded-lg">
      <textarea
        id="content"
        readOnly={true}
        onClick={onToggle}
        className="cursor-pointer shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-700 resize-none"
        value="Post Something"
      />
    </div>
  );
};

export default CreatePostToggle;
