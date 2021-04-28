import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Text, Button, Toast } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import API from '../../assets/common/API';

let {height, width} = Dimensions.get('window')

const AddInstructor = ({navigation}) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    API.post('instructor/', data)
    .then(res => {
      navigation.goBack();
      Toast.show({
        text: "Registered Successfully!",
        buttonText: "X",
        type: "success",
        duration: 3000
      });
    })
    .catch(err => {
      Toast.show({
        text: "CI exist in the system!",
        buttonText: "X",
        type: "danger",
        duration: 3000
      });
    })
  };


  return (
    <Container>
      <Content>
        <Form>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel>
                <Label>Name</Label>
                <Input 
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              </Item>
            )}
            name="name"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.name && <Text style={styles.errorMessage}>This is required.</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel>
                <Label>CI</Label>
                <Input 
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              </Item>
            )}
            name="ci"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.ci && <Text style={styles.errorMessage}>This is required.</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel>
                <Label>Speciality</Label>
                <Input 
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              </Item>
            )}
            name="speciality"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.speciality && <Text style={styles.errorMessage}>This is required.</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Item floatingLabel last>
                <Label>Years of experience</Label>
                <Input 
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              </Item>
            )}
            name="yearExperience"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.yearExperience && <Text  style={styles.errorMessage}>This is required.</Text>}
          <View  style={styles.button}>
            <Button iconLeft rounded full onPress={handleSubmit(onSubmit)} >
              <Icon name='send' />
              <Text>Register</Text>
            </Button>
          </View>
        </Form>
      </Content>
    </Container>
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
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: width,
    marginTop: 35
  }
})

export default AddInstructor;