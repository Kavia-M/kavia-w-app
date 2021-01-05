import React from "react";
//import { StyleSheet, View, Animated, Image, Easing } from "react-native";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
//import SmallCards from "./SmallCards/SmallCards";
import {useSelector} from "react-redux";
import WeatherIcons from "react-weathericons";

var s_array = ['./assests/autumn.png','./assests/rainy.png','./assests/spring.png','./assests/summer.png','./assests/winter.png']

export default class Home extends React.Component{
    
    constructor(props) {
      super(props)
      this.spinValue=new Animated.Value(0);
      this.state = {
        ssource: 0
      };
    }
   
componentDidMount(){
  this.timer = setInterval(()=>{
    this.setState({
        ssource: (this.state.ssource+1)%5
    });
}, 1000);
   this.StartImageRotationFunction()
}    

StartImageRotationFunction() {
  this.spinValue.setValue(0);
  Animated.timing(this.spinValue, {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear,
    useNativeDriver: true
  }).start(()=>this.StartImageRotationFunction())
}

render(){
  const spin = this.spinValue.interpolate({
    inputRange: [0,1],
    outputRange: ['0deg','360deg']
  })  
    return (
        <View>
    <br/><br/><br/>
            <Animated.Image style={{width : 250 , height:250 ,  transform: [{rotate: spin}] }} source={require(`${s_array[this.state.ssource]}`)} alt={'picture'}/>
            <br/><br/>
            <h1>Welcome to W-app</h1>
        </View>
    );         }                                 
}