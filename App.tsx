import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import StackNavegator from './src/Navegator/StackNavegator';
import { NavigationContainer } from '@react-navigation/native';


const App=()=> {
  return (

    <NavigationContainer>
      <StackNavegator/>
    </NavigationContainer>

)}
export default App