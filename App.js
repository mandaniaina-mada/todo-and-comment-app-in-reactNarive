
import Todo from './components/Todo';
import Comment from './components/Comment';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function TodoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('todo')}
        title="Go to notifications"
      />
    </View>
  );
}

function CommentScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      onPress={() => navigation.navigate('comment')}
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="todo">
        <Drawer.Screen name="todo" component={Todo} />
        <Drawer.Screen name="comment" component={Comment} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


