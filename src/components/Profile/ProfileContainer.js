import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {changeProfileData, getProfileInfo, getStatus, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "redux/src/compose";






class ProfileContainer extends React.Component{

    reloadProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // userId = 16538;
            userId = this.props.registeredUserId;
            if (!userId) {
                this.props.history.push("/login");
            }

        }
        this.props.getProfileInfo(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        console.log('Произошел DidMount');
        this.reloadProfile();

    }

    componentDidUpdate(prevProps, prevState) {
         console.log('докладываю: я контейнерная компонента, у меня  произошел Update');
        if (this.props.match.params.userId != prevProps.match.params.userId){
            this.reloadProfile();
        }

    };

    render() {
        console.log('перерисовал весь контейнер профайла')
        return <Profile {...this.props}
                        changeProfileData= {this.props.changeProfileData}
                        isOwner = {!this.props.match.params.userId}
                        profile ={this.props.profile}
                        status = {this.props.status}
                        updateStatus = {this.props.updateStatus}
                        savePhoto = {this.props.savePhoto}/>
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        registeredUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus, savePhoto, changeProfileData}),
    withRouter,
    /*withAuthRedirect*/)(ProfileContainer)