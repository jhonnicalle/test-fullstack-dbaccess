import React, {useState, useEffect} from 'react';
import { Container, Content,Toast, Icon, Text, Card, Body, CardItem, Button } from 'native-base';
import { Dimensions, StyleSheet , SafeAreaView, ScrollView} from 'react-native';
// import { useForm, Controller } from "react-hook-form";
import API from '../../assets/common/API';

let {height, width} = Dimensions.get('window')

const AddInstructorInCourse = ({ route, navigation}) => {

  const {idCourse} = route.params;

  // const { control, handleSubmit, formState: { errors } } = useForm();
  const [instructors, setInstructors] = useState([])

  const addInstructor = (idInstructor) => {
    const data = {
      idInstructor: idInstructor,
      idCourse: idCourse
    }

    API.post('course/registerInstructor', data)
    .then(res => {
      
      navigation.goBack();
      
      Toast.show({
        text: "Registered successfully!",
        buttonText: "X",
        type: "success",
        duration: 3000
      });
    
    })
    .catch(err => {
      Toast.show({
        text: "An error has ocurred.",
        buttonText: "X",
        type: "danger",
        duration: 3000
      });
    })
  }
   
  

  const getInstructorsToAdd = () => {
    API.get(`course/getInstructors/${idCourse}`)
    .then(res => {
      // console.log(res.data)
      setInstructors(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getInstructorsToAdd()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
    
        <Container>
          <Content>
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
                  <Button rounded style={styles.button} onPress={() => addInstructor(item.id)}>
                    <Icon name='add' />
                  </Button>
                </CardItem>
              </Card>
            ))}
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center'
  },
  errorMessage: {
    color: '#c11111',
    marginLeft: 20,
    marginBottom: 15
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right:15,
    top: 20,
    width: 50,
    height: 50
  }
})

export default AddInstructorInCourse;