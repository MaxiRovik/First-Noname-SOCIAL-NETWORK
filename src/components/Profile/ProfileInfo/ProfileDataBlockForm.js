import React from 'react';
import classes from './ProfileInfo.module.css';
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/Forms Controls/FormsControls";
import {maxLengthCreator, required} from "../../../Utilities/validators";
import formControlClass from '../../common/Forms Controls/FormsControls.module.css'

const maxLength50 = maxLengthCreator(50);
const maxLength100 = maxLengthCreator(100);
const maxLength150 = maxLengthCreator(100);

 const ProfileForm = ({profile,...props}) => {

    return <form onSubmit={props.handleSubmit}>


        <div className={classes.name} >
            <b> fullName:</b>
                    <Field component={Input}
                           type= {"text"}
                           placeholder={"Your name"}
                           name={"fullName"}
                           id={"fullName"}
                           validate={ [required, maxLength50 ]}/>
        </div>
        <div className={classes.about}>
            <b> About Me :</b>
                    <Field  component={TextArea}
                            type= {"text"}
                            placeholder={"About me"}
                            name={"aboutMe"}
                            id={"aboutMe"}
                            validate={[required,maxLength100] }/>
        </div>
        <div>
            <b>Looking for a job?</b>
                    <Field  component={Input}
                            type= {"checkbox"}
                            name={"lookingForAJob"}
                            id={"lookingForAJob"}/>

            <div className={classes.lookingForAJobDescription}>
                <b>Job description</b>
                    <Field  component={TextArea}
                            type= {"text"}
                            placeholder={"Job description"}
                            name={"lookingForAJobDescription"}
                            id={"lookingForAJobDescription"}
                            validate={ [required, maxLength150]}/>
            </div>
        </div>

                                    <div className={classes.contacts}>
                                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {

                                        return <div key={key}>
                                                {key}:  <Field component={Input}
                                                               type= {"text"}
                                                               placeholder={key}
                                                               name={"contacts."+key}
                                                               id={key}/>
                                        </div>
                                    })}
                                    </div>
        {props.error && <div className={formControlClass.summaryResponseError}>
            {props.error}
        </div>
        }
        <button>Send</button>


    </form>
};

const ProfileDataReduxForm = reduxForm ({form:'profile'})(ProfileForm);

const ProfileDataBlockForm = ({changeProfileData, returnFromEdit, profile}) =>{

    const onSubmit =(formData) => {
        changeProfileData(formData).then(
            () => {
               returnFromEdit(false);
            }
        )
    };

return (
    <div>
        <ProfileDataReduxForm initialValues = {profile}
                              profile = {profile}
                              onSubmit = {onSubmit}/>
    </div>
)
};

export default  ProfileDataBlockForm;