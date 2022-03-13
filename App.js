import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //npm install @react-navigation/native
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //npm install @react-navigation/bottom-tabs
import { MaterialIcons } from '@expo/vector-icons';

import Contactpage from './components/Contactpage';

const screenOptions = ({ route }) => ({
  tabBarIcon: () => {
    if (route.name === 'Kontaktit') {
      return <MaterialIcons name="contact-phone" size={24} color="black" />;
    }
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Kontaktit" component={Contactpage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
