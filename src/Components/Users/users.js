import React, {useState, useEffect} from "react";
import SmallCards from "../SmallCards/SmallCards";
import { Animated, Easing, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
var cloud="iii";

export default function Users() {
    const [data, setWeather] = useState({num : null ,
    weather : {}
    });
   
    const fetchData = async () => {
        const data1 = await fetch(`http://api.weatherstack.com/current?access_key=a6f63edab69485449454609c110afedd&query=${data.num}`);
        const jsonData = await data1.json();
        let yy={...data,weather : {...jsonData} }
        setWeather(yy);
        let x={...data};
       // let y=[...(x.weather_icons)];
       // const [first,...rest] = y;
       let y={...x.weather};
       console.log(y);
    }

   /* useEffect(function(){
        fetchData();
    }, []);*/
    function Cloud({value}){
        let x={...value.weather}
        let y={...x.current}
        let z=y.cloudcover
        return(
            <span className='_cloud'>
                Cloudcover:{z}
            </span>
        );
    }

    function Pressure({value}){
        let x={...value.weather}
        let y={...x.current}
        let z=y.pressure
        return(
            <span className='_pressure'>
                Pressure:{z}
            </span>
        );
    }

    function Wind({value}){
        let x={...value.weather}
        let y={...x.current}
        let z=y.wind_speed
        return(
            <span className='_wind'>
                Windspeed:{z}
            </span>
        );
    }

    function Temperature({value}){
        let x={...value.weather}
        let y={...x.current}
        let z=y.temperature
        return(
            <span className='_temperature'>
                Temperature:{z}
            </span>
        );
    }

    function Humidity({value}){
        let x={...value.weather}
        let y={...x.current}
        let z=y.humidity
        return(
            <span className='_humidity'>
                Humidity:{z}
            </span>
        );
    }

    function getData(evt){
         let y={...data,num : `${evt.target.value}` }
         setWeather(y);   
    }
    return(
        <div style={{width: 200}} >
            <div style={{width:500}} className="centered" >   
                Search using location ==>
             <input type="text" onChange={getData}/>
             <button onClick={fetchData} > Search </button>
            </div>

            <div style={{width: 100}}  >
                <Cloud value={data}/>
                <Wind value={data}/>
                <Pressure value={data}/>
                <Humidity value={data}/>
                <Temperature value={data}/>
            </div>    
        </div>
    );
}