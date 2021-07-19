import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostPageWrapper } from './pages.styles';
import { getPostsAsync } from '../store/reducers/posts.reducer';
import Post from '../components/post/Post';
import Loader from '../components/loader/Loader';

const AllPosts = () => {

    const dispatch = useDispatch();
    const { allPosts } = useSelector((state) => state.posts);
    const isLoading = useSelector(state => state.spinner.isLoading);

    useEffect(() => {
        dispatch(getPostsAsync());
    }, [dispatch]);
   
    return (
        <>
            {isLoading ? 
            <Loader /> 
            : (
            <PostPageWrapper>
                {allPosts &&
                allPosts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                ))}
            </PostPageWrapper>
            )}
        </>
    )
}

export default AllPosts;