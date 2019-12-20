import React, {Component} from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsFormRedux} from "./MyPostsForm/MyPostsForm";

const MyPosts = React.memo((props) => {
    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps !== this.props || nextState !== this.state;
    }*/
        let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

        let onAddPost = (values) => {
            props.addPost(values.newPostText);
        };

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <MyPostsFormRedux onSubmit={onAddPost}/>
                <div>New post</div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        );
    });

export default MyPosts;