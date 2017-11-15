import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Landing from './landingScreen/components/LandingOutline';
import GoalCreate from './goalCreateScreen/components/GoalCreateOutline'

const RouterComponent = () => {
    // For routing, add "initial" attribute to whichever scene you want to view
    // ex: <Scene key="goalCreate" component={GoalCreate} title="create your goal" initial />
    return (
        <Router sceneStyle={{backgroundColor:'black'}}>
            <Scene key="root">
                <Scene key="landing" component={Landing} title="login"/>
                <Scene key="goalCreate" component={GoalCreate} title="create your goal"  />
            </Scene>
        </Router>
    )
};

export default RouterComponent;