import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { api } from '../api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await api.post('/login', { email, password });
      const token = res.data.token;
      navigation.navigate('Home', { token });
    } catch {
      Alert.alert('Error', 'Invalid login.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={login} />
    </View>
  );
}
