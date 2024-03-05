import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ShowScales from '../scaleScareens/showScales';
import SubScale from '../scaleScareens/subScale';
import ChooseNote from '../scaleScareens/chooseNote';

const Stack = createStackNavigator( );


const HomeStack = () => {
  return (
    //screenOptions infacts all screen
    //Stack.Screen option infacts specific screen
    <Stack.Navigator screenOptions={
      { headerTitleStyle: {color: 'white'},
        headerStyle: { backgroundColor: '#7575a3'},
        }}>
      <Stack.Screen name="Home" component={Home} options={{ title: 'Scales Genres' }}/>
      <Stack.Screen name="SubScale" component={SubScale} options={{title: 'Scale'} } />
      <Stack.Screen name="ChooseNote" component={ChooseNote} options={{title: 'All 12 Notes'} } />
      <Stack.Screen name="ShowScales" component={ShowScales} options={{title: 'Find Your Scale'} } />
    </Stack.Navigator>
  );
}
export default  HomeStack;

