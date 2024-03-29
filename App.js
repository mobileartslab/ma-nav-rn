import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux'
import configureStore from './src/state/create_store'
import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";

const store = configureStore()

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Main" component={MainScreen} options={{ headerBackVisible: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
