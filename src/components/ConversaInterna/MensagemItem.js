import React , { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image, Button } from 'react-native';

export default class MensagemItem extends Component {

	constructor(props) {
	  super(props);
	
	  let bgColor = '#EEEEEE';
	  let align = 'flex-start';
	  let txtAlign = 'left';

	  if(this.props.data.uid == this.props.me) {
	  	bgColor = '#9999FF';
	  	align = 'flex-end';
	  	txtAlign = 'right';
	  }

	  this.state = {
	  	bgColor:bgColor,
	  	align:align,
	  	txtAlign:txtAlign,
	  	dateMsg:this.getFormattedDate(this.props.data.date)
	  };  
	  this.imageClicked = this.imageClicked.bind(this);
	}	

	getFormattedDate(originalDate) {
		let cDate = new Date();
		let mDate = originalDate.split(' ');
		let todayDate = cDate.getFullYear()+'-'+(cDate.getMonth()+1)+'-'+cDate.getDate();

		let newDate = mDate[1].split(':');
		newDate = ((newDate[0]<10)?'0'+newDate[0]:newDate[0])+':'+((newDate[1]<10)?+'0'+newDate[1]:+newDate[1]);

		if(todayDate != mDate[0]) {
			let newDateDays = mDate[0].split('-');

			newDate = newDateDays[2]+'/'+newDateDays[1]+'/'+newDateDays[0]+' '+newDate;
		}	

		return newDate;

	}

	imageClicked() {
		this.props.onImagePress(this.props.data.imgSource);
	}

	render() {

		return (
			<View style={[MensagemItemStyles.area, {alignSelf:this.state.align, backgroundColor:this.state.bgColor}]}>
				{this.props.data.msgType == 'text' &&
					<Text style={{textAlign:this.state.txtAlign}}>{this.props.data.m}</Text>
				}
				{this.props.data.msgType == 'image' &&
						<TouchableHighlight onPress={this.imageClicked}>
							<Image style={MensagemItemStyles.image} source={{uri:this.props.data.imgSource}} />
						</TouchableHighlight>
				}
				
				<Text style={MensagemItemStyles.dateTxt}>{this.state.dateMsg}</Text>
			</View>
		);

	}

}

const MensagemItemStyles = StyleSheet.create({
	area:{
		marginLeft:10,
		marginTop:10,
		marginTop: 5,
		marginRight: 5,
		padding:10,
		maxWidth: '80%',
		borderRadius: 5
	},
	dateTxt:{
		fontSize:11,
		textAlign:'right'
	},
	image:{
		width: 100,
		height: 100
	},
	imageFull:{
		width: 100,
		height: 100
	}
});

