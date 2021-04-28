import React, { useState , useEffect} from 'react'
import { Container, Button, Text, Icon, Body, Card, CardItem, Toast } from 'native-base';
import { Dimensions, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import API from '../../assets/common/API';
import { useIsFocused } from '@react-navigation/native';

let { height } = Dimensions.get('window')

const CourseDetails = ({ route, navigation }) => {

  const {idCourse, nameCourse} = route.params;
  
  const [instructors, setInstructors] = useState([])

  const isFocused = useIsFocused();

  const deleteInstructor = (idInstructor) => {
    API.post(`course/deleteInstructor/`, {idCourse, idInstructor})
    .then(res => {
      Toast.show({
        text: "Deleted successfully!",
        buttonText: "X",
        duration: 3000
      });
      getDataListInstructors()
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDataListInstructors()
  }, [isFocused])

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
    <SafeAreaView>
      <ScrollView>
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
                          Years Exp: {item.year_experience}
                      </Text>
                    </Body>
                    <Button danger rounded style={styles.buttonDelete} onPress={() => deleteInstructor(item.id)}>
                      <Icon name='delete' type='AntDesign'/>
                    </Button>
                  </CardItem>
                </Card>
              ))}
            </>
          ) : (
            <View style={[styles.center, {height: height / 2}]}>
              <Text>No products found</Text>
            </View>
          )}
        </Container>
      </ScrollView>
      <Button rounded style={styles.buttonAdd} onPress={() => navigation.navigate('Add Instructor In Course', {idCourse})}>
        <Icon name='add' />
      </Button>
    </SafeAreaView>
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
    top: '20%',
    right: 10,
    width: 60,
    height: 60,
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