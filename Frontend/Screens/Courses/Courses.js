import React, { useState , useEffect} from 'react'
import { Container, Content, Button, Text, Left, Icon, Body, Title, Right, Card, CardItem } from 'native-base';
import { Dimensions, View, StyleSheet } from 'react-native';
import API from '../../assets/common/API';

let { height } = Dimensions.get('window')

const Courses = ({  navigation }) => {

  
  
  const [courses, setCourses] = useState([])

  useEffect(() => {
    API.get('course/')
    .then(res => {
      setCourses(res.data)
    })
    .catch(err => console.log(err))
    // return () => {
    //   setCourses([])
    // }
  }, [])

  return(
    <Container>
      {courses.length > 0 ? 
        (
          <>
          {courses.map((item) => (
            
              <Card key={`${item.id}_${item.name}`} >
                <CardItem>
                  <Body>
                    <Text onPress={() => navigation.navigate('Course Details', {idCourse: item.id, nameCourse: item.name})}>
                      {item.name}
                    </Text>
                    
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
    </Container>
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
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Courses;