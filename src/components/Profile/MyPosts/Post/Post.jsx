import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/01/sei_50026110-b94f.jpg?quality=90&strip=all&zoom=1&resize=644%2C428&ssl=1" alt=""/>
            {props.message}
            <div>
            <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;