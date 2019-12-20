import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (<div>

{/*        <div>
            <img src="https://inteng-storage.s3.amazonaws.com/images/APRIL/sizes/black_hole_resize_md.jpg" alt=""/>
        </div>*/}
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>);
};

export default ProfileInfo;