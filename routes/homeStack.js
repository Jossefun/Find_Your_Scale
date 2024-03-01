import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ShowScales from '../scaleScareens/showScales';
import SubScale from '../scaleScareens/subScale';

const Stack = createStackNavigator( );


const HomeStack = () => {
  return (
    //screenOptions infacts all screen
    //Stack.Screen option infacts specific screen
    <Stack.Navigator screenOptions={
      { headerTitleStyle: {color: 'white'},
        headerStyle: { backgroundColor: '#7575a3'},
        }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Choose Scales Genres' }}/>
      <Stack.Screen name="SubScale" component={SubScale} options={{title: 'Choose Sub Scale'} } />
      <Stack.Screen name="ShowScales" component={ShowScales} options={{title: 'ShowScales'} } />
    </Stack.Navigator>
  );
}
export default  HomeStack;

