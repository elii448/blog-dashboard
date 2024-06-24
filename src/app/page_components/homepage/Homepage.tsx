import { ReactNode, useState } from 'react'
import Layout from '@/app/components/Layout/Layout';
import CreatePostForm from '@/app/components/CreatePostForm';
import CreatePostToggle from '@/app/components/CreatePostToggle';
import '../../../styles/globals.css';

const Homepage = () => {
  const [isCreatePostFormVisible, setIsCreatePostFormVisible] = useState(false)

  return (
    <Layout>
        {isCreatePostFormVisible && <CreatePostForm onToggleModal={() => setIsCreatePostFormVisible(false)} />}
        <CreatePostToggle onToggle={() => setIsCreatePostFormVisible(true)} />
    </Layout>
  );
}

export default Homepage
