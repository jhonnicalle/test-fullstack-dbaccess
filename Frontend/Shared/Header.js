import React from 'react'
import {StyleSheet, Text, Image, SafeAreaView, View} from 'react-native'

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={{height: 30, fontSize: 20}}>DBAccess</Text>
      {/* <Image 
        source={require('../assets/Logo.png')}
        resizeMode="contain"
        style={{height: 50}}
      /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // marginTop: 80
  }
})

export default Header;