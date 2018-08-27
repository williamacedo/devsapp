import React , { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class ContatoItem extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.onPress(this.props.data);
	}

	render() {

		return (
			<TouchableHighlight style={ContatoItemStyles.buttonArea} onPress={this.onClick} underlayColor="#DDDDDD">
				<Text>{this.props.data.name}</Text>
			</TouchableHighlight>
		);

	}

}

const ContatoItemStyles = StyleSheet.create({
	buttonArea:{
		height: 40,
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#CCCCCC' 
	}
});