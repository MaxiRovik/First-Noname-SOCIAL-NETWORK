import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/img/user.png';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if  (!props.profile) {
        return (
        <Preloader/>
    )}
        else {

            return (
                <div>
                    <div >
                        {/*<img className={classes.pictures}*/}
                             {/*src ='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%B4%D0%B0%D1%80.jpg/1200px-%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%B4%D0%B0%D1%80.jpg'>*/}
                        {/*</img>*/}
                    </div>

                    <div className={classes.descriptionBlock}>

                        <img className={classes.img} src = {props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                        <div className={classes.name} >
                            <h2> {props.profile.fullName}</h2>
                        </div>


                        <ProfileStatus status={props.status}
                                       updateStatus={props.updateStatus}/>

                        <h3> About Me :</h3>
                        <div className={classes.about}>

                            <p>{props.profile.aboutMe}></p>
                        </div>
                        <h3>Контакты:</h3>
                        <div className={classes.contacts}>

                                <div>
                                        <p> Facebook:</p>
                                        <p> {props.profile.contacts.facebook}</p>
                                </div>
                                  <div>
                                        <p>Vk:</p>
                                        <p>{props.profile.contacts.vk}</p>
                                 </div>
                        </div>
                    </div>

                </div>
            )
        }

    }



export default ProfileInfo;