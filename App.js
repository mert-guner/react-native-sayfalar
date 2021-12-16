
import React from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Inputs from './Inputs';
import Layout from './Layout';
import Matches from './Matches';
import Animation from './Animation';


const Home = () => {
  const goToAbout = () => {
    Actions.about();
  };

  return(
<View>
      <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
      <Text>This is HOME!</Text>
      
      </TouchableOpacity>
      <Inputs/>
      </View>
  );
};

const About = () => {
  
  const goToHome = () => {
    Actions.home();
  };

  const goToForms = () => {
    Actions.forms();
  };
 
  const goToForm = () => {
    Actions.form();
  };

  return(
    <View style={{ backgroundColor: '#708090'}}>
    <TouchableOpacity style={{margin: 128}} onPress={goToHome}>
      <Text>This is ABOUT!</Text>
    </TouchableOpacity>,
    <TouchableOpacity style={{margin: 128}} onPress={goToForms}>
            <Text>This is Froms!</Text>
      </TouchableOpacity>,
      <TouchableOpacity style={{margin: 128}} onPress={goToForm}>
            <Text>This is NEW!</Text>
      </TouchableOpacity>
  </View>
  );
};

const Forms = () => {
  const goToAbout = () => {
    Actions.about();
  };

  return(
    <View style={{ backgroundColor: '#AC9FB9'}}>
        <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
            <Text>This is ABOUT!</Text>
      </TouchableOpacity>
      <Matches/>
      <Layout/>

  </View>
    
  );
};

const Form = () => {
  const goToAbout = () => {
    Actions.about();
  };

  return(
    <View style={{ backgroundColor: '#A7C456'}}>
        <TouchableOpacity style={{margin: 128}} onPress={goToAbout}>
            <Text>This is NEW!</Text>
      </TouchableOpacity>
      <Animation/>
  </View>
    
  );
};


const App = () => {
  return(
  <Router>
    <Scene>
      <Scene key="home" component={Home} title="HOME" initial={true}></Scene>
      <Scene key="about" component={About} title="ABOUT"></Scene>
      <Scene key="forms" component={Forms} title="FORMS"></Scene>
      <Scene key="form" component={Form} title="FORM"></Scene>
      <Scene key="matches" component={Matches} title="Matches"></Scene>
    </Scene>
  </Router>
  )
};

export default App;