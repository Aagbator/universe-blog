import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PostPageWrapper } from './pages.styles';
import { getPostsAsync } from '../store/reducers/posts.reducer';
import Post from '../components/post/Post';
import Loader from '../components/loader/Loader';
import { useParams } from 'react-router-dom';


const filterPostsByAuthorId = (posts, userId) => posts.filter(post => post.userId === parseInt(userId));

const AuthorPosts = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.spinner.isLoading);
    const { authorId } = useParams();
    const { allPosts } = useSelector((state) => state.posts);

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
                filterPostsByAuthorId(allPosts, authorId).map((post) => (
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

export default AuthorPosts;