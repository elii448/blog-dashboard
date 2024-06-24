import React, { useEffect, useRef } from 'react';
import Post, { PostData } from './Post';
import dummyPosts from '@/util/dummy';

interface FeedListProps{
  onClickPost: (postData: PostData) => void
}

const FeedList = ({onClickPost}: FeedListProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      };

      scrollContainer.addEventListener('wheel', handleWheel);
      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div ref={scrollContainerRef} className="flex flex-row overflow-x-auto space-x-4 post-list-scrollbar">
        {dummyPosts.map((post, index) => (
          <div onClick={() => onClickPost(post)}>
            <Post
              key={index}
              post={post}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedList;
