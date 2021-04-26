import React, { useState , useEffect} from 'react'
import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import {Dimensions, StyleSheet, View} from 'react-native';
import API from '../../assets/common/API';

let { height , width} = Dimensions.get('window')

const Instructors = ({ navigation }) => {
  const [instructors, setInstructors] = useState([])

  const deleteInstructor = (id) => {
    API.delete(`instructor/${id}`)
    .then(res => {
      setInstructors(res.data)
    })
    .catch(err => console.log(err))
  }

  const getData = () => {
    API.get('instructor/')
    .then(res => {
      setInstructors(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return(
    <Container>
      <View>
        <Text style={[styles.center, {width: width, margin: 10}]}>Instructors</Text>
      </View>
      {instructors.length > 0 ? 
        (
          <>
          {instructors.map(item => (
            <Card key={`${item.id}_${item.name}`}>
              <CardItem>
                <Body>
                  <Text>
                      {item.name}
                  </Text>
                  <Button rounded danger style={styles.buttonDelete} onPress={() => deleteInstructor(item.id)}>
                    <Icon name='delete' type='AntDesign' style={{fontSize: 40, color: 'white'}}/>
                  </Button>
                </Body>
              </CardItem>
            </Card>
          ))}
          </>
        ): (
          <View style={[styles.center, {height: height / 2}]}>
            <Text>No products found</Text>
          </View>
        )
      
      }
      <Button rounded style={styles.buttonAdd} onPress={() => navigation.navigate('Add Instructor')}>
        <Icon name='add' />
      </Button>
    </Container>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonDelete: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // bottom:10,
    right: 10,
    width: 35,
    height: 35,

  },
  buttonAdd: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom:10,
    right: 10,
    width: 60,
    height: 60,

  }
})


export default Instructors;