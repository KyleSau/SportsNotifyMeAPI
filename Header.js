import * as React from 'react';
import { Text, View, StyleSheet,FlatList,Image,Switch} from 'react-native';
import { Constants } from 'expo';
import teamData from "./TeamData";


export default class Header extends React.Component{
  render(){
  return(
   <View style={styles.header}>
      <Text style = {styles.headerText}> {this.props.text} </Text>
    </View>   
  )}
}

const styles = StyleSheet.create({
  header :{
    backgroundColor: '#c1c1d7',
    height: 50

  },
  headerText :{
    fontSize:20, 
    color:'white',
    textAlign: 'center'

  }  
});