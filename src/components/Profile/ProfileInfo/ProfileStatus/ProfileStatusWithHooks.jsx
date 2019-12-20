import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status]);

    const ativateEditMode = () => {
        setEditMode(true);
    };

    const deativateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (<div>
        {!editMode &&
        <div>
            <span onDoubleClick={ativateEditMode}>{props.status || "----"}</span>
        </div>
        }
        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deativateEditMode} type="text"
                   value={status}/>
        </div>
        }
    </div>);
};

export default ProfileStatusWithHooks;