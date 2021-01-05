import React, {useState, useEffect} from "react";
import SmallCards from "../SmallCards/SmallCards";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Contact() {
    console.log("ww")
    return(
        <div className="centered">
            <img src={require(`./ctf.png`)} />
            <br/>
            <h4>Official website : cegtechforum.in</h4>
            <h4>Email ID : ctfwebandapp@gmail.com</h4>
        </div>
    );
}