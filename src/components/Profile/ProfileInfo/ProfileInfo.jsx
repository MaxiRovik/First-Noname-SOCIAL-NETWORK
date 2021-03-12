import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
    <div>
          <div >
            <img className={classes.pictures}
                src ='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%B4%D0%B0%D1%80.jpg/1200px-%D0%9D%D0%BE%D1%87%D0%BD%D0%BE%D0%B9_%D0%AD%D0%BD%D0%B5%D1%80%D0%B3%D0%BE%D0%B4%D0%B0%D1%80.jpg'>
            </img>
          </div>

          <div className={classes.descriptionBblock}>
            ava + description
          </div>
    </div>
    )

}
export default ProfileInfo;