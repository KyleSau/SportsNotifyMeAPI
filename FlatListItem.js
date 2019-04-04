import * as React from 'react';
import { Text, View, StyleSheet,FlatList,Image,Switch} from 'react-native';
import { Constants } from 'expo';
import teamData from "./TeamData";



export default class FlatListItem extends React.Component{


  

  render(){
    return(
      <View style ={styles.flatListItems}>
        <Image source={this.props.item.logo}>
        </Image>
        <Switch value={this.props.item.subscribed} onValueChange={this.props.onToggle}/>
        <View>
          <Text> {this.props.item.name} </Text>
         </View>
       </View>
    );
    }}

    const styles = StyleSheet.create({
      flatListItems:{
         flex:1,
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',

      },
     
    })