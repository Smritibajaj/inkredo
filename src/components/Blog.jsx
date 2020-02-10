import React from 'react';
import '../stylesheets/Blog.scss';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Rect from '../images/Rectangle.png';
import { connect, dispatch } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../actions/blog.action";

const Blog = () => {
    const blog = useSelector(state => state.blogReducer.blog);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchBlog())
    }, [])
    console.log(blog);
    return (
        <Container className="container2">
            <Grid container justify={'center'}>
                <Grid item sm={8} >
                    <div className="procedure m-b-30" style={{ textAlign: 'center' }}>We write ocassionally and share our knowledge.</div>
                </Grid>
            </Grid>
            <Grid container justify={'center'} >
                <Grid container item sm={9} spacing={5}>
                    {blog.map(item => <Grid item xs={6} >
                        <a target="_blank" href={item.link}>
                            <img src={Rect} width="350px" height="250px" />
                        </a>
                        <div className="blogTitle">{item.title}</div>
                        <Grid container>
                            <Grid item ><Avatar className="Avatar">{item.thumbnail}</Avatar></Grid>
                            <Grid item className="blogOwner"><div>{item.author}</div>
                                <div>{item.pubDate}</div></Grid>
                        </Grid>
                    </Grid>)}
                </Grid>
            </Grid>
        </Container>

    )
}

const mapStateToProps = ({ literals }) => ({
    literals
});

export default connect(mapStateToProps)(Blog);