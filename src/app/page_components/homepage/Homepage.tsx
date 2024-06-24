import { ReactNode, useState } from 'react'
import Layout from '@/app/components/Layout/Layout';
import CreatePostForm from '@/app/components/CreatePostForm';
import CreatePostToggle from '@/app/components/CreatePostToggle';
import '../../../styles/globals.css';
import FeedList from '@/app/components/FeedList';
import Post, { PostData } from '@/app/components/Post';

const Homepage = () => {
  const [isCreatePostFormVisible, setIsCreatePostFormVisible] = useState(false)
  const [postData, setPostData] = useState<PostData | null>(null)



  return (
    <Layout>
        {isCreatePostFormVisible && <CreatePostForm onToggleModal={() => setIsCreatePostFormVisible(false)} />}
        <CreatePostToggle onToggle={() => setIsCreatePostFormVisible(true)} />
        { postData &&
          <div
            className='w-screen h-screen absolute bg-gray-600 bg-opacity-50 flex justify-center items-center'
            onClick={() => setPostData(null)}
          >
            <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className="bg-white p-4 rounded-lg shadow-md">
              <Post post={postData} />
            </div>
          </div>
        }
        <FeedList onClickPost={setPostData} />
    </Layout>
  );
}

export default Homepage
