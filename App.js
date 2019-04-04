import * as React from 'react';
import { Text, View, StyleSheet,FlatList,Image,Switch,Button,AsyncStorage,TouchableOpacity} from 'react-native';
import { Constants } from 'expo';
import teamData from "./TeamData";
import cloneDeep from 'lodash/cloneDeep';
import FlatListItem from './FlatListItem';
import Header from './Header';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
 const teams = teamData.map (team => ({subscribed: false,...team}))


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
     teams : teams,
     data: teams,           
    };
  }


displayData = async() => {
  try{
    let hawks = await AsyncStorage.getItem('Atlanta Hawks')
    alert(hawks)
  }
  catch(error) {
    alert(error)
  }
}
    
   
 
  
onToggle = (val, index) => {
      const tempData = cloneDeep(this.state.teams);
      tempData[index].subscribed = val;
      this.setState({ teams: tempData });
      this.setState({data:tempData})
      const name = tempData[index].name;
      const value = tempData[index].subscribed == true ? '1' : '0';
      console.log(name + ': ' + value);
      AsyncStorage.setItem(name, value);
  }
     
  renderList = ({item, index}) => (
    <FlatListItem
    item ={item}
    index = {index}
    onToggle ={(value) => this.onToggle(value, index)}
    />
  )
  

    
  render() {
    return (
      <View style={styles.container}>
       <TouchableOpacity onPress={this.displayData}>
            <Text>Click Me</Text>
          </TouchableOpacity> 
       <FlatList
          data = {this.state.teams}
          extraData={this.state}
          renderItem= {this.renderList}
          ListHeaderComponent = {<Header text= 'Team'/>}
          stickyHeaderIndices = {[0]}
         
            />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e6ffff',
    padding: 8,
  },
  
});
