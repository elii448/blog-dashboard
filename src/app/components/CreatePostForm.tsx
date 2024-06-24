import { useState, useEffect, useRef } from 'react'

interface CreatePostFormProps{
  onToggleModal: () => void
}

const CreatePostForm = ({onToggleModal}: CreatePostFormProps) => {
  const [content, setContent] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(content)
    setContent('')
  }

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }, [content]);

  return (
    <div className='w-screen h-screen absolute bg-gray-600 bg-opacity-50' onClick={onToggleModal}>
      <form
        onClick={stopPropagation}
        onSubmit={handleSubmit}
        className='relative p-4 w-1/4 bg-white shadow-md rounded-lg left-1/3 top-1/3'
      >
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">Content</label>
          <textarea
            id="content"
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="shadow appearance-none border rounded overflow-hidden w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-indigo-700 resize-none"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
