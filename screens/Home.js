import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { api } from '../api';

export default function Home({ route, navigation }) {
  const { token } = route.params;
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    api.get('/restaurants').then(res => setRestaurants(res.data));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text>Restaurants</Text>
      <FlatList
        data={restaurants}
        keyExtractor={item => item.restaurant_id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Reservation', { token, restaurant: item })}>
            <Text style={{ fontSize: 18 }}>{item.name} - {item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
