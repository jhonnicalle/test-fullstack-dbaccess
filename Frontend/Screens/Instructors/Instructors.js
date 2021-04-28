import React, { useState , useEffect} from 'react'
import { Container, Button, Text, Icon, Body, Card, CardItem, Toast } from 'native-base';
import {Dimensions, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import API from '../../assets/common/API';
import { useIsFocused } from '@react-navigation/native';

let { height , width} = Dimensions.get('window')

const Instructors = ({ navigation }) => {
  const [instructors, setInstructors] = useState([])

  const isFocused = useIsFocused();

  const deleteInstructor = (id) => {
    API.delete(`instructor/${id}`)
    .then(res => {
      Toast.show({
        text: "Deleted successfully!",
        buttonText: "X",
        duration: 3000
      });
      getData()
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
  }, [isFocused])

  return(
    <SafeAreaView>
      <ScrollView>
        <Container>
          <View>
            <Text style={[styles.center, {margin: 10, textAlign: 'center'}]}>Instructors</Text>
          </View>
          {instructors.length > 0 ? 
            (
              <>
                {instructors.map(item => (
                  <Card key={`${item.id}_${item.name}`}>
                    <CardItem>
                      <Body>
                        <Text uppercase style={{textAlign: 'center', width: '100%'}}>
                          {item.name}
                        </Text>
                        <Text>
                          CI: {item.ci}
                        </Text>
                        <Text>
                          Speciality: {item.speciality}
                        </Text>
                        <Text>
                          Years Exp: {item.year_experience}
                        </Text>
                      </Body>
                      
                      <Icon name='delete' type='AntDesign' style={{fontSize: 20, color: 'red'}} onPress={() => deleteInstructor(item.id)}/>
                      
                    </CardItem>
                  </Card>
                ))}
              </>
            ) : (
              <View style={[styles.center, {height: height / 2}]}>
                <Text>No products found</Text>
              </View>
            )
          }
        </Container>
      </ScrollView>

      <Button rounded style={styles.buttonAdd} onPress={() => navigation.navigate('Add Instructor')}>
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