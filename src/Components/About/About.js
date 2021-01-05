import React, {useState, useEffect} from "react";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

var s_array = ['./assests/one.png','./assests/two.png','./assests/three.png']

export default function About() {
    const [data, setData] = useState({ssource : 0 ,
        str : "./assests/one.png"
        });
       
   function func(){
   let y= (data.ssource+1)%3;
   let x= s_array[y];
   console.log(x);
   setData({
        ssource: y,
        str : x
    });
    }
 

    return (
    
        <View>
            <div className="centered">
                <span className="centered" >
                            
                <img src={require(`${data.str}`)} alt={`picture1`} />
                </span>
                <br/>
                <span className="centered">
                <button onClick={func}>Just click</button>
                </span>
                <br/>
                <span className="centered">
                <h4>This app is made as a part of CTF (CEG tech forum) This is used to check weather condition in any place
                <br/>
                Weather is the state of the atmosphere, describing for example the degree to which it is hot or cold, wet or dry, calm or stormy, clear or cloudy
                </h4>
                </span>
                
            </div>
        </View>
    );
}                                 
