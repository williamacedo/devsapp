import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
//import { connect } from 'react-redux';

import ConversasList from './ConversasList';
import ConversaInterna from './ConversaInterna';

const ConversasStackNavegator = createStackNavigator({
	ConversasList:{
		screen:ConversasList
	},
	ConversaInterna:{
		screen:ConversaInterna
	}
});

ConversasStackNavegator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

export default ConversasStackNavegator;

