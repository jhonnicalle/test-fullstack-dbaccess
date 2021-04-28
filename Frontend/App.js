import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, LogBox, StyleSheet } from 'react-native';
import { Root } from 'native-base'
// import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import API from './assets/common/API';
import { NavigationContainer } from '@react-navigation/native';
import { Font, AppLoading } from 'expo';

const {height} = Dimensions.get('window')

//Screens
import Navigator from './Navigators/Navigator'
import Header from './Shared/Header';

LogBox.ignoreAllLogs()

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Root>
      <NavigationContainer>
        
        <Header />
        <Navigator />
        
      </NavigationContainer>
    </Root>
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