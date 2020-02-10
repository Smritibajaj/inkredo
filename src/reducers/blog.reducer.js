import {FETCH_BLOG_PENDING, FETCH_BLOG_SUCCESS, FETCH_BLOG_ERROR} from '../actions/blog.action';

const initialState = {
    blog: []
}

export default function blogReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_BLOG_PENDING: 
            return {
                ...state,
            }
        case FETCH_BLOG_SUCCESS:
            console.log('i am updating');
            console.log(action)
            return {
                blog: [...action.blog]
            }
        case FETCH_BLOG_ERROR:
            return {
                ...state,
            }
        default: 
            return state;
    }
}

export const getBlog = state => {console.log(state); return state.blog};
export const getBlogPending = state => state.pending;
export const getBlogError = state => state.error;
