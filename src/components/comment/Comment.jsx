import React from 'react';
import { CommentBody, CommentName, CommentWrapper, CommentEmail } from './Comment.styles';
import { string } from 'prop-types';

const Comment = ({name, email, body}) => (
  <CommentWrapper>
    <CommentName>{name}</CommentName>
    <CommentEmail>{email}</CommentEmail>
    <CommentBody>{body}</CommentBody>
  </CommentWrapper>
);

Comment.propTypes = {
  name: string,
  email: string,
  body: string,
};

export default Comment;