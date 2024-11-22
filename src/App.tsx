/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UseMemoScreen} from './useMemoExample';
import {Header, Button} from './components';
import {MemoScreen} from './memoExample';
import {UseCallbackScreen, UseCallbackScreen2} from './useCallbackExample';

const Stack = createNativeStackNavigator();

type HomeScreenNavigationProp = NativeStackNavigationProp<any, 'Home'>;

const HomeScreen = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <Header />
      <View>
        <Button
          text={'React.memo'}
          onPress={() => navigation.navigate('memo')}
        />
        <Button
          text={'useCallback - Exemplo 1'}
          onPress={() => navigation.navigate('useCallback')}
        />
        <Button
          text={'useCallback - Exemplo 2'}
          onPress={() => navigation.navigate('useCallback2')}
        />
        <Button
          text={'useMemo'}
          onPress={() => navigation.navigate('useMemo')}
        />
      </View>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="memo" component={MemoScreen} />
        <Stack.Screen name="useCallback" component={UseCallbackScreen} />
        <Stack.Screen name="useCallback2" component={UseCallbackScreen2} />
        <Stack.Screen name="useMemo" component={UseMemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
