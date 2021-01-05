import React, {useState, useEffect} from "react";
import SmallCards from "../SmallCards/SmallCards";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Login() {
    console.log("ww")
    return(
        <div className="centered">
            <br/><br/><br/><br/>
        Username : <input type="text" placeholder="username" />    <br/>   Password  : <input type="password" placeholder="password"/> <br/>
        <button>Login</button> <br/>
        <br/>Not an existing user <button>Sign up</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    );
}