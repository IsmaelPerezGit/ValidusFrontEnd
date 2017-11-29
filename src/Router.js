import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CreateGoalOrJoin from './createGoalOrJoinTeamScreen/components/CreateGoalOrJoinTeamOutline';
import GoalCreate from './goalCreateScreen/components/GoalCreateOutline';
import Landing from './landingScreen/components/LandingOutline';
import ProfileEdit from './profileEditScreen/components/ProfileEditOutline';
import SignUp from './signUpScreen/components/SignUpOutline';
import Team from './teamScreen/components/TeamOutline';
import TeamList from './teamsListScreen/components/TeamsListOutline';
import UserProfile from './userProfileScreen/components/UserProfileOutline';

class RouterComponent extends Component {
    // For routing, add "initial" attribute to whichever scene you want to view
    // ex: <Scene key="goalCreate" component={GoalCreate} title="create your goal" initial />
    render() {
        return (
            <Router
                sceneStyle={{backgroundColor: 'black'}}>
                <Scene key="root">
                    <Scene key="createGoalOrJoin" component={CreateGoalOrJoin} title=""/>
                    <Scene key="goalCreate" component={GoalCreate} title="create your goal" />
                    <Scene key="landing" component={Landing} title="login" initial/>
                    <Scene key="profileEdit" component={ProfileEdit} title="edit profile"/>
                    <Scene key="signUp" component={SignUp} title="sign up"/>
                    <Scene key="team" component={Team} title="team stats"/>
                    <Scene key="teamsList" component={TeamList} title="team list" />
                    <Scene key="userProfile" component={UserProfile} title="profile"/>
                </Scene>
            </Router>
        )
    }
}

export default RouterComponent;