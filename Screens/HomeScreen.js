import React from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen ({navigation}) {
    return (

      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text style={{color: 'black', fontSize:50 }}>Home Screen Here</Text>
      </View>
    );

  }
