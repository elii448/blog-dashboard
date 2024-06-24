import React from 'react';

interface Image {
  name: string;
  url: string;
}

interface Content {
  description: string;
  image?: Image;
}

interface User {
  userId: number;
  name: string;
}

interface Comment {
  userId: number;
  name: string;
  content: string;
}

export interface PostData {
  user: string;
  content: Content;
  likes: {
    users: User[];
  };
  comments: Comment[];
}

interface PostProps {
    post: PostData
}

const Post = ({ post }: PostProps) => {
  const { user, content, likes, comments } = post

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-96 flex flex-col">
      <div className="font-bold text-xl mb-2">{user}</div>
      <div className="flex-grow mb-2 overflow-hidden">
        <p>{content.description}</p>
        { 
          content.image &&
          <img src={content.image.url} alt={content.image.name} className="max-w-full h-auto mt-2 rounded" />
        }
      </div>
      <div className="mb-2">
        <div className="font-semibold">Likes: {likes.users.length}</div>
        {/* <ul>
          {likes.users.map((likeUser) => (
            <li key={likeUser.userId}>{likeUser.name}</li>
          ))}
        </ul> */}
      </div>
      <div>
        <div className="font-semibold">Comments:</div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.userId}>
              <span className="font-bold">{comment.name}:</span> {comment.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Post;
