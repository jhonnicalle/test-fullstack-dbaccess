import React, { useState , useEffect} from 'react'
import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import { Dimensions, View, StyleSheet } from 'react-native';
import API from '../../assets/common/API';

let { height } = Dimensions.get('window')

const CourseDetails = ({ route, navigation }) => {

  const {idCourse, nameCourse} = route.params;
  
  const [instructors, setInstructors] = useState([])

  const deleteInstructor = (idInstructor) => {
    API.post(`course/deleteInstructor/`, {idCourse, idInstructor})
    .then(res => {
      // console.log(res.data)
      setInstructors(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataListInstructors()
  }, [])

  const getDataListInstructors = () => {
    API.get(`course/getDetails/${idCourse}`)
    .then(res => {
      // console.log(res.data)
      setInstructors(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataListInstructors()
  }, [])

  return(
    <Container>
      
      <Text>{nameCourse}</Text>

      {instructors.length > 0 ? (
        <>
          {instructors.map(item => (
            <Card key={item.id} style={styles.card}>
              <CardItem>
                <Body>
                  <Text>
                      Name: {item.name}
                  </Text>
                  <Text>
                      Speciality: {item.speciality}
                  </Text>
                  <Text>
                      Years Exp: {item.year_expecience}
                  </Text>
                </Body>
              </CardItem>
              <Button danger rounded style={styles.buttonDelete} onPress={() => deleteInstructor(item.id)}>
                <Icon name='add' />
              </Button>
            </Card>
          ))}
        </>
      ) : (
        <View style={[styles.center, {height: height / 2}]}>
          <Text>No products found</Text>
        </View>
      )}

      <Button rounded style={styles.buttonAdd} onPress={() => navigation.navigate('Add Instructor In Course', {idCourse})}>
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
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
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
    height: 60
  },
  card: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default CourseDetails;