import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getProfileInfo, getStatus,  updateStatus} from "../../redux/profile-reducer";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import compose from "redux/src/compose";



class ProfileContainer extends React.Component{

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            // userId = 16538;
            userId = this.props.registeredUserId;
        }
        this.props.getProfileInfo(userId);
        this.props.getStatus(userId);
    }

componentDidUpdate() {
        console.log('докладываю: я контейнерная компонента, у меня  произошел Update')
};
    render() {
        console.log('перерисовал весь контейнер профайла')
        return <Profile {...this.props}
                        profile ={this.props.profile}
                        status = {this.props.status}
                        updateStatus = {this.props.updateStatus}/>
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

export default compose(connect(mapStateToProps, {getProfileInfo, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect)(ProfileContainer)