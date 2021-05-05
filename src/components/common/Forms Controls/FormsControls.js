import React from 'react';
import classes from './FormsControls.module.css';



const FormControl = ({input, meta,  ...props})=>{

    const metaWithError = meta.touched && meta.error;
    return(
        <div  className = {classes.textAreaInField + ' ' + (metaWithError ? classes.error :'')}>
            <div>
                {props.children}
            </div>
            <div>
                {metaWithError && <span>{meta.error}</span>}
            </div>
        </div>
    );
};

export const TextArea  = (props) => {
    const {input,  ...restProps} = props
    return   <FormControl {...props} >
                <textarea {...input} {...restProps}  />
            </FormControl>
};


export const Input  = (props) => {

    const {input, meta, ...restProps} = props;
    return  <FormControl {...props} >
                <input {...input} {...restProps} />
            </FormControl>
};














// export const TextArea  = ({input, meta, ...props}) => {
//
//     const metaWithError = meta.touched && meta.error;
//
//     return(
//         <div  className = {classes.textAreaInField + ' ' + (metaWithError ? classes.error :'')}>
//             <div>
//                 <textarea {...input} {...meta} {...props}/>
//             </div>
//             <div>
//                 {metaWithError && <span>{meta.error}</span>}
//             </div>
//         </div>
//
//     )
// };
//
//
// export const Input  = ({input, meta, ...props}) => {
//
//     const metaWithError = meta.touched && meta.error;
//
//     return(
//         <div  className = {classes.textAreaInField + ' ' + (metaWithError ? classes.error :'')}>
//             <div>
//                 <input {...input} {...meta} {...props}/>
//             </div>
//             <div>
//                 {metaWithError && <span>{meta.error}</span>}
//             </div>
//         </div>
//
//     )
// };










