import React from 'react';
import { PostBody, PostTitle, PostWrapper, PostLink, PostCommentsWrapper } from './Post.styles';
import { string, number } from 'prop-types';
import { array } from 'prop-types';
import Comment from '../comment';

const Post = ({title, body, id, comments}) => (

  <PostWrapper>
  <PostTitle>
    <PostLink to={`/${id}`}>
      {title}
    </PostLink>
  </PostTitle>
  <PostBody>{body}</PostBody>
  {comments && 
  <PostCommentsWrapper>
    {
    comments.map((comment) => (
      <Comment 
        key={comment.id}
        id={comment.id}
        email={comment.email}
        name={comment.name}
        body={comment.body}
      />
    ))}
  </PostCommentsWrapper>}
  
</PostWrapper>
);

Post.propTypes = {
  id: number,
  title: string,
  body: string,
  comments: array
};

export default Post;