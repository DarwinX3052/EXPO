import React,{ Component } from "react";
import { Text, View, Button, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class WeatherScreen extends Component{
 constructor(){
   super();
   this.state = {
    weather: ""
   }
   
   getWeather=async()=>{
     var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'

     return fetch(url).then(response=>response.json()).then(responsejson=>{
       this.setState({
         weather: responsejson
       })
     })
     .catch(error=>{console.error(error)})

     
   }

   componentDidMount=()=>{
     this.getWeather();
   }

   render(){
     if (this.state.weather ===''){
       return(){
         <View style={styles.container}>
         <Text> LOADING...</Text>
         </View>
       }
     }else{
       return(){
         <View style ={styles.container}>
         <View style={styles.subcontainer}>
         <Text style={styles.title}> Weather Forcast </Text>
         <Image style={styles.cloudImg}
         source={require('./cloud.png')}/>
         <View style={styles.textcontainer}>
         <Text style={{fontSize:20,margin:10}}>{this.state.weather.main.temp}&deg;C</Text>
         <Text style={{fontSize:20,margin:10}}>{this.state.weather.main.humidity}&deg;C</Text>
         <Text style={{fontSize:20,margin:10}}>{this.state.weather.weather[0].description}</Text>
         </View>
         </View>
         </View>
       }
     }
   }
 }
}

const styles = StyleSheet.create({
  container:{flex:1},
  subcontainer:{flex:1,borderWidth:10, alignItems: "center"},
  title:{marginTop:15, fontSize: 30, fontWeight:"bold"},
  cloudImg:{width:200, height:200, marginTop:30},
  textcontainer:{flex:1,alignItems:"center", flexDirection: "row"}
});