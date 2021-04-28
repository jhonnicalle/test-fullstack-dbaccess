import React, { useState , useEffect} from 'react'
import { Container, Button, Text, Icon, Body, Card, CardItem, Toast } from 'native-base';
import { Dimensions, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import API from '../../assets/common/API';
import { useIsFocused } from '@react-navigation/native';

let { height } = Dimensions.get('window')

const Courses = ({  navigation }) => {

  const isFocused = useIsFocused();
  
  const [courses, setCourses] = useState([])

  const deleteCourse = (id) => {
    API.delete(`course/${id}`)
    .then(res => {
      Toast.show({
        text: "Deleted successfully!",
        buttonText: "X",
        duration: 3000
      });
      getCourses()
    })
    .catch(err => console.log(err))
  }

  const getCourses = () => {
    API.get('course/')
    .then(res => {
      setCourses(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getCourses()
  }, [isFocused])

  return(
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Text style={{margin: 10, textAlign: 'center'}}>Courses</Text>
          {courses.length > 0 ? 
            (
              <>
              {courses.map((item) => (
                <Card key={`${item.id}_${item.name}`} >
                  <CardItem>
                    <Body>
                      <Text >
                        {item.name}
                      </Text>
                    </Body>
                    <Icon name='delete' type='AntDesign' style={{fontSize: 20, color: 'red'}} onPress={() => deleteCourse(item.id)}/>
                    <Icon name='eye' onPress={() => navigation.navigate('Course Details', {idCourse: item.id, nameCourse: item.name})}/>
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
        </Container>
      </ScrollView>
      <Button rounded style={styles.buttonAdd} onPress={() => navigation.navigate('Add Course')}>
        <Icon name='add' />
      </Button>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container: {
  //   flexWrap: "wrap",
  //   backgroundColor: "gainsboro",
  // },
  // listContainer: {
  //   height: height,
  //   flex: 1,
  //   flexDirection: "row",
  //   alignItems: "flex-start",
  //   flexWrap: "wrap",
  //   backgroundColor: "gainsboro",
  // },
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
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Courses;