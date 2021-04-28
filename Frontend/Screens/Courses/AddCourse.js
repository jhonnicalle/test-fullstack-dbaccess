import React from 'react';
import { Container, Content, Form, Item, Input, Label, Icon, Text, Button, Toast } from 'native-base';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import API from '../../assets/common/API';

let { height, width } = Dimensions.get('window')

const AddCourse = ({ navigation }) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    API.post('course/', data)
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
          text: "An error has ocurred.",
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
          <View style={styles.button}>
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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: width,
    marginTop: 35
  }
})

export default AddCourse;