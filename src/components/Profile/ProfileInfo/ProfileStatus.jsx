import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component{
    state ={
        editMode:false,
        status:this.props.status,
    };
    activateEditMode=()=>{

       this.setState({editMode:true})
    };
    deactivateEditMode=()=>{

        this.setState({editMode:false});
        this.props.updateStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({status:e.currentTarget.value})
    }

    handleFocus = (event) =>{
        event.target.select()
    };
    componentDidUpdate(prevProps,prevState) {
        if (prevProps.status !== this.props.status){
            this.setState({ status:this.props.status})
        }
        console.log('Update в компоненте статуса')
    }
    render(){
        console.log('перерисовалась компонентa статуса')
        return (
            <div  className = {classes.statusBlock}>
                {!this.state.editMode &&

                <div onDoubleClick={this.activateEditMode}
                     className={classes.status}>
                    <div >"{this.props.status || "No status"}"</div>
                </div>
                }
                {this.state.editMode &&
                <div
                    className={classes.inputStatus}>
                    <input
                        // autoFocus={true}

                         onFocus={this.handleFocus}
                        onBlur={this.deactivateEditMode}
                        value={this.state.status}
                    onChange = {this.onStatusChange}/>
                </div>
                }
            </div>

        )
    };



}
    export default ProfileStatus;