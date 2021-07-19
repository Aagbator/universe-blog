import { createSlice } from "@reduxjs/toolkit";
import { setSpinner } from "./spinner.reducer";

const initialState = {
    allPosts: [],
    singlePost: {},
    singlePostComments: []
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setAllPosts(state, action) {
            state.allPosts =  action.payload
        },
        setSinglePost(state, action) {
            state.singlePost =  action.payload
        },
        setSinglePostComments(state, action) {
            state.singlePostComments =  action.payload
        }
    }
});

export const { setAllPosts, setSinglePost, setSinglePostComments } = postsSlice.actions;
export default postsSlice.reducer;


export const getPostsAsync = () => async (dispatch) => {
    dispatch(setSpinner(true));
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then((data) => {
          dispatch(setAllPosts(data));
          dispatch(setSpinner(false));
      })
      .catch(e => {
        dispatch(setSpinner(false))
      });
}

export const getSinglePostAsync = (id) => async (dispatch) => {
    dispatch(setSpinner(true));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then((data) => {
          dispatch(setSinglePost(data));
          dispatch(setSpinner(false));
      })
      .catch(e => {
        dispatch(setSpinner(false))
      });
}

export const getSinglePostCommentsAsync = (id) => async (dispatch) => {
    dispatch(setSpinner(true));
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then((data) => {
          dispatch(setSinglePostComments(data));
          dispatch(setSpinner(false));
      })
      .catch(e => {
        dispatch(setSpinner(false))
      });
}
