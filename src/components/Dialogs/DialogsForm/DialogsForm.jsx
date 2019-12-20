import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(30);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder="Enter your message"
                       validate={[required, maxLength]}/>
                </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

const DialogsFormRedux = reduxForm({form: "dialogAddMessageForm"})(DialogsForm);

export default DialogsFormRedux;