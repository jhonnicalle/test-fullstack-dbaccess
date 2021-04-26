import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, LogBox, StyleSheet, View } from 'react-native';
// import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import API from './assets/common/API';
import { NavigationContainer } from '@react-navigation/native';
import Header from './Shared/Header';

const {height} = Dimensions.get('window')

//Screens
import Home from './Screens/Home'
import Navigator from './Navigators/Navigator'

const App = () => {
  const [data, setData] = useState([]);

  // const callData = () => {
  //   API.get('instructor/')
  //   .then(res => {
  //     console.log(res.data)
  //   })
  //   .catch(err => console.log(err))
  // }

  useEffect(() => {
    // callData()
  }, [])

  return (

    <NavigationContainer>
      <Header />
      <Navigator />
    </NavigationContainer>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: height
  },
});

export default App;