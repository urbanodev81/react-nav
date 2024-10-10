import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../HomeScreen'   
import GalleryScreen from '../GalleryScreen'   

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  );
}