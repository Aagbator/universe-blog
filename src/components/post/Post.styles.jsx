import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostWrapper = styled.div`
  border-bottom: 1px solid #cccccc;
  background-color: #ffffff;
  padding: 2rem;
`;

export const PostTitle = styled.header`
  text-transform: uppercase;
  text-align: left;
  font-weight: 500;
  letter-spacing: .1rem;
  font-size: 1.5rem;
  padding: .5rem 0;
`;

export const PostLink = styled(Link)`
  color: #111111;
  position: relative;
`;

export const PostBody = styled.p`
  color: #444444;
  font-weight: 300;
  font-size: 1.1rem;
`;

export const PostCommentsWrapper = styled.div`
  margin-left: 2rem;
`