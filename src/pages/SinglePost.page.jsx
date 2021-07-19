import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import Loader from '../components/loader/Loader';
import Post from '../components/post/Post';
import { getSinglePostAsync, getSinglePostCommentsAsync } from '../store/reducers/posts.reducer';
import { DarkButton, PostPageWrapper } from './pages.styles';

const SinglePost = () => {

    const dispatch = useDispatch();
    const { singlePost } = useSelector((state) => state.posts);
    const { id, title, body, userId } = singlePost;
    const { singlePostComments } = useSelector((state) => state.posts);
    const isLoading = useSelector(state => state.spinner.isLoading);
    const { postId } = useParams();

    useEffect(() => {
        dispatch(getSinglePostAsync(postId));
        dispatch(getSinglePostCommentsAsync(postId));
    }, [dispatch, postId]);
   
    return (
        <>
            {isLoading ? 
            <Loader /> 
            : (
                singlePost &&
                <PostPageWrapper>
                    <Post
                        key={id}
                        id={id}
                        title={title}
                        body={body}
                        comments={singlePostComments}
                    />
                    <DarkButton to={`/author/${userId}/posts`}>
                         See posts by same author
                    </DarkButton>
                </PostPageWrapper>
            )}
        </>
    )
}

export default SinglePost;