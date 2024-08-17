import Navbar from '../component/Navbar'
import { useEffect } from 'react';

const PostItem = () => {
    useEffect(() => {
        document.title = 'Post Items - NeighborShare';
      }, []);
  return (
    <>
        <Navbar/>
    </>
  )
}

export default PostItem