import { createStackNavigator  } from '@react-navigation/stack';

import HomeScreen from '../HomeScreen'   
import GalleryScreen from '../GalleryScreen'   

const {Screen, Navigator} = createStackNavigator();

export function StackRoutes() {
  return (
      <Navigator initialRouteName='Home'>
        <Screen
          name="Home"
          component={HomeScreen} 
          options={{
            title: 'Main Menu',
            headerTintColor: 'blue'
          }}
          />
        <Screen name="Gallery" component={GalleryScreen} />
      </Navigator>
  );
}