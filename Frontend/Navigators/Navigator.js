import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Courses from "../Screens/Courses/";
import CourseDetails from "../Screens/Courses/CourseDetails";
import AddInstructorInCourse from "../Screens/Courses/AddInstructorInCourse";
import Instructors from "../Screens/Instructors/";
import Home from '../Screens/Home';;
import AddInstructor from "../Screens/Instructors/AddInstructor";

const Stack = createStackNavigator();

function MyStack () {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{

          headerShown: false
        }}
      />
    
      <Stack.Screen 
        name='Courses'
        component={Courses}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Instructors'
        component={Instructors}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Add Instructor'
        component={AddInstructor}
        options={{

          headerShown: false
        }}
      />
      <Stack.Screen 
        name='Course Details'
        component={CourseDetails}
        options={{
          headerShown: false
        }}
      />
       <Stack.Screen 
        name='Add Instructor In Course'
        component={AddInstructorInCourse}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export default function Navigator() {
  return <MyStack />
}