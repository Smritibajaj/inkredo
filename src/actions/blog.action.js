export const FETCH_BLOG_PENDING = 'FETCH_BLOG_PENDING';
export const FETCH_BLOG_SUCCESS = 'FETCH_BLOG_SUCCESS';
export const FETCH_BLOG_ERROR = 'FETCH_BLOG_ERROR';

export function fetchBlogPending() {
    return {
        type: FETCH_BLOG_PENDING
    }
}

export function fetchBlogSuccess(blog) {
    console.log(blog)
    return {
        type: FETCH_BLOG_SUCCESS,
        blog: blog
    }
}

export function fetchBlogError(error) {
    return {
        type: FETCH_BLOG_ERROR,
        error: error
    }
}

export function fetchBlog() {
    return dispatch => {
        dispatch(fetchBlogPending());
        fetch('/api.json?rss_url=https://medium.com/feed/@inkredo')
        .then(res => {
            if(res.ok){
            return res.json()
        }
        })
        .then(data => {
            const res = data.items;
            const posts = res.filter(item => item.categories.length > 0)
            console.log(res,posts);
            dispatch(fetchBlogSuccess(posts));
        } )
        .catch(error => {
            dispatch(fetchBlogError(error));
        })
    }
}
