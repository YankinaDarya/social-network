import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../Common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newPostText"} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const MyPostsFormRedux = reduxForm({form: "addNewPostForm"})(MyPostsForm);
