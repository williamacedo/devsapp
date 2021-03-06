import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getChatList, setActiveChat } from '../actions/ChatActions';
import ConversasItem from '../components/ConversasList/ConversasItem';

export class ConversasList extends Component {

	static navigationOptions = {
		title: 'Conversas',
		tabBarLabel: 'Conversas'
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	loading:true
	  };
	  this.conversaClick = this.conversaClick.bind(this);
	  console.disableYellowBox = true;

	  this.props.getChatList( this.props.uid, ()=>{
	  	this.setState({loading:false});
	  });


	}

	componentDidUpdate() {
		if(this.props.activeChat != '') {
			this.props.navigation.navigate("ConversaInterna", {title:this.props.activeChatTitle});
		}		
	}

	conversaClick(data) {
		this.props.setActiveChat( data.key );
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.loading && <ActivityIndicator size="large" />}
				<FlatList data={this.props.chats} renderItem={({item}) => <ConversasItem data={item} onPress={this.conversaClick} />} />
			</View>
		);

	}

}

const styles = StyleSheet.create({
	container: {
		margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid,
		activeChat:state.chat.activeChat,
		chats:state.chat.chats,
		activeChatTitle:state.chat.activeChatTitle

	};
};

const ConversasListConnect = connect(mapStateToProps, { getChatList, setActiveChat })(ConversasList);
export default ConversasListConnect;