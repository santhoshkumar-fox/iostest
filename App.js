import 'react-native-gesture-handler';
import { StyleSheet, Text } from 'react-native';
import { NativeBaseProvider, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import CherApp from './cher-app';
import { useEffect } from 'react';

export default function App() {
  useEffect(()=>{
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  },[])
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <CherApp />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
