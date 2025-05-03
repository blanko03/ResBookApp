import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { api } from '../api';

export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    try {
      await api.post('/register', { name, email, password });
      Alert.alert('Success', 'User registered!');
      navigation.navigate('Login');
    } catch {
      Alert.alert('Error', 'Registration failed.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Name" onChangeText={setName} />
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Register" onPress={register} />
    </View>
  );
}
