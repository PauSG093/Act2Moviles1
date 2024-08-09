import { createStackNavigator } from '@react-navigation/stack';
import Pantalla1Screen from '../Screens/Pantalla1Screen';
import Pantalla2Screen from '../Screens/Pantalla2Screen';

const Stack = createStackNavigator();
const StackNavegator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Pantalla1Screen} />
      <Stack.Screen name="Aplicaciones" component={Pantalla2Screen} />
    </Stack.Navigator>
  );
}
export default StackNavegator