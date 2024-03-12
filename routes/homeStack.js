import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ShowScale from '../scaleScareens/showScale';
import SubScale from '../scaleScareens/subScale';
import ChooseNote from '../scaleScareens/chooseNote';
import ChooseGenre from '../scaleScareens/chooseGenre';



const Stack = createStackNavigator( );


const HomeStack = () => {
  return (
    //screenOptions infacts all screen
    //Stack.Screen option infacts specific screen
    <Stack.Navigator screenOptions={
      { headerTitleStyle: {color: 'white'},
        headerStyle: { backgroundColor: '#f1b10e'},
        }}>
      <Stack.Screen name="ChooseGenre" component={ChooseGenre} options={{ title: 'Scales Genres' }}/>
      <Stack.Screen name="SubScale" component={SubScale} options={{title: 'Choose Scale'} } />
      <Stack.Screen name="ChooseNote" component={ChooseNote} options={{title: 'All 12 Notes'} } />
      <Stack.Screen name="ShowScales" component={ShowScale} options={{title: 'This Is Your Scale'} } />
    </Stack.Navigator>
  );
}
export default  HomeStack;

