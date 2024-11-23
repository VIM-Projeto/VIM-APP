import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstPage from './components/pages/FirstPage';
import LoginPage from './components/pages/LoginPage';
import HomePage from './components/pages/HomePage';
import MapPage from './components/pages/MapPage';
import LoadingPage from './components/pages/LoadingPage.js';
import CriarConta from './components/pages/RegisterPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={FirstPage} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false}} />
        <Stack.Screen name="Cadastro" component={CriarConta} options={{ headerShown: false}} />
        <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false}} />
         <Stack.Screen name="Map" component={MapPage} options={{ headerShown: false}} />
         <Stack.Screen name="Loading" component={LoadingPage} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
