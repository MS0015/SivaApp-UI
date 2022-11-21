import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPost from './AddPost';

const Stack = createNativeStackNavigator();

export default function MainScene() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AddPost"
          component={AddPost}
          options={{ headerShown: false, headerStyle: { elevation: 0 } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
