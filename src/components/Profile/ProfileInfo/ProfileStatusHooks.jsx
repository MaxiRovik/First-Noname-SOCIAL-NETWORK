import React, {useState,useEffect} from 'react';
import classes from './ProfileInfo.module.css'

 const  ProfileStatusWithHooks =(props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(()=>{
        debugger
        setStatus(props.status)},[props.status]);

     const activateEditMode = () =>{
          setEditMode(true)
     };

     const deactivateEditMode = () => {
         setEditMode(false);
         props.updateStatus(status)
     };

     const onChangeStatus = (e) => {
         setStatus(e.currentTarget.value)
     };

     return (
         <div  className = {classes.statusBlock}
               onDoubleClick={activateEditMode}>
             { !editMode &&
             <div
                  className={classes.status}>
                 <div >"{props.status || "No status"}" </div>
             </div>
             }
             { editMode &&
             <div
                 className={classes.inputStatus}>
                 <input
                     autoFocus={true}
                     onBlur={deactivateEditMode}
                     onChange = {onChangeStatus}
                     value = {status}
                  />
             </div>
             }
         </div>
     )
};
export default ProfileStatusWithHooks;

// onDoubleClick={activateEditMode}