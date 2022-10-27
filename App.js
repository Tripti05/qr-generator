import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GenerateQrCode from './src/screens/GenerateQrCode';
import ScanQrCode from './src/screens/ScanQrCode.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={GenerateQrCode}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#757575',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="generateQrCode"
          component={GenerateQrCode}
          options={{title: 'QR Code Generator'}}
        />
        <Stack.Screen
          name="qrCodeScanner"
          component={ScanQrCode}
          options={{title: 'QR Code Scanner'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
