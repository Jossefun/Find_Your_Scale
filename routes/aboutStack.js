import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import About from '../screens/about'


const Stack = createStackNavigator( );


const AboutStack = () => {
  return (
    //screenOptions infacts all screen
    //Stack.Screen option infacts specific screen
    <Stack.Navigator screenOptions={
      { headerTitleStyle: {color: 'white'},
        headerStyle: { backgroundColor: '#7575a3'},
        }}>
      <Stack.Screen name="Home" component={'About'} options={{ title: 'About Scales' }}/>
    </Stack.Navigator>
  );
}
export default AboutStack ;