import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import LoginPage from './Login';
import { ToastAndroid } from 'react-native';
import axios from 'axios';

const RegistrationPage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = async () => {
    if(password !== confirmPassword){
      ToastAndroid.show('Password do not match!', ToastAndroid.SHORT);
    }else{
      try {
        const response = await axios.post('https://seat-reservation-backend-production.up.railway.app/user/add', { email:email, password:password, name:name });
        console.log(response.data); // handle the response as needed
        if(response.data){
          ToastAndroid.show('Registration Completed!', ToastAndroid.SHORT);
          setTimeout((() => {
            navigation.navigate('LoginPage');
          }),1000) 
        }
        else{
          ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
        }
      } catch (error) {
        ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
      <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate('LoginPage')}>Please login here.</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  loginText: {
    marginTop: 20,
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default RegistrationPage;
