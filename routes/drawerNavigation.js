import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from './homeStack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  
    return (
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={HomeStack}/>
        <Drawer.Screen name='About' component={About}/>
        <Drawer.Screen name='Review Details' component={ReviewDetails}/>
      </Drawer.Navigator>
    );
  };
  
  export default DrawerNavigation;