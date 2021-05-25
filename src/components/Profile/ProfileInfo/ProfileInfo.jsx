import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/img/user.png';
import ProfileStatusWithHooks from "./ProfileStatusHooks";
import ProfileDataBlockForm from "./ProfileDataBlockForm";


const ProfileInfo = (props) => {
    const [editMode,setEditStatus] = useState(false);
    const editProfile = () => {
        setEditStatus(true)
    };

    if  (!props.profile ) {
        return (
        <Preloader/>
    )}
    else {
        const returnFromEdit = () => {
            setEditStatus(false)
        };
        const downloadPhotoSelected = (e) => {
            if (e.target.files.length) {
                props.savePhoto(e.target.files[0])
            }
        };
            return <div className={classes.descriptionBlock}>
                        <img className={classes.img}
                             src = {props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                        {props.isOwner &&
                            //download avatar
                        <input type={"file"}
                               className={classes.chooseFile}
                               onChange={downloadPhotoSelected}/>
                        }

                        {editMode ? <ProfileDataBlockForm profile={props.profile}
                                                          changeProfileData={props.changeProfileData}
                                                          returnFromEdit = {returnFromEdit}/>
                                  : <ProfileDataBlock profile={props.profile}
                                                      isOwner = {props.isOwner}
                                                      editProfile = {editProfile}/>
                        }
                        <div>
                            <b>Status:</b> <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                        </div>

            </div>
        }
    };

const ProfileDataBlock = (props) => {
    return <div>
        <div className={classes.name} >
            <h2> {props.profile.fullName}</h2>
        </div>


        <div className={classes.about}>
            <b> About Me :</b>
                <p>{props.profile.aboutMe}</p>
        </div>

        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "Yes" : "No"}
                <div className={classes.lookingForAJobDescription}>
                    {props.profile.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                    </div>
                    }
                </div>
        </div>

        <div className={classes.contacts}>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key = {key}
                            contactTytle={key}
                            contactValue={props.profile.contacts[key]}/>
        })}
        </div>
        {props.isOwner &&  <button onClick = {props.editProfile}>Edit Profile</button>}


    </div>
};


const Contact = ({contactTytle, contactValue}) =>{
    return <div>
        <b className={classes.contactsTytle}>{contactTytle}: </b>{contactValue}
    </div>
};

export default ProfileInfo;