import React from 'react'
import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import Header from '../../Shared/Header'

const Home = ({ navigation }) => {
  return (
    <>
    {/* <Header /> */}
    <Content padder>
      <Button full rounded dark
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Courses")}>
        <Text>Courses</Text>
      </Button>
      <Button full rounded primary
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Instructors")}>
        <Text>Instructors</Text>
      </Button>
    </Content>
    </>
  )
}

export default Home;