import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { api } from '../api';

export default function Reservation({ route }) {
  const { token, restaurant } = route.params;
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');

  const makeReservation = async () => {
    try {
      await api.post('/reservations', {
        restaurant_id: restaurant.restaurant_id,
        date,
        time,
        people_count: parseInt(people)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      Alert.alert('Success', 'Reservation made!');
    } catch {
      Alert.alert('Error', 'Reservation failed.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="YYYY-MM-DD" onChangeText={setDate} />
      <TextInput placeholder="HH:MM" onChangeText={setTime} />
      <TextInput placeholder="Number of people" keyboardType="numeric" onChangeText={setPeople} />
      <Button title="Reserve" onPress={makeReservation} />
    </View>
  );
}
