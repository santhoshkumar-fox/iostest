import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Login from '../screens/Authentication/Login';
import MainProfile from './MainProfile';

const Stack = createStackNavigator();

const CherApp = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={MainProfile} />
    </Stack.Navigator>
  )
}

export default CherApp;
