import React, { useState } from 'react';
import { View, TextInput, ToastAndroid,Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { storeData, getData } from '../storage';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://seat-reservation-backend-production.up.railway.app/user/login', { email:email, password:password });
      console.log(response.data); // handle the response as needed
      if(response.data.message === 'Successfully Logged In!'){
        ToastAndroid.show('Login Successful!', ToastAndroid.SHORT);
        storeData('user',response.data.user);
        const user = await getData('user');
        console.log('yeepieeee',user);
      }
      else{
        ToastAndroid.show('Login Failed!', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Login Failed!', ToastAndroid.SHORT);
      console.error(error);
    }
  };

  


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Bus-Seat Reservation</Text>
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
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.loginText}>New user?<Text style={styles.loginLink} onPress={() => navigation.navigate('RegistrationPage')}>Please login here.</Text></Text>
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
    color: '#737373',
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LoginPage;
