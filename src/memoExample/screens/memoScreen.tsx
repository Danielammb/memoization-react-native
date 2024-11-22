import React from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';
import {styles} from './styles';
import {Header} from '../../components';
import {List} from '../components';

import {NavigationProp} from '@react-navigation/native';

interface MemoScreenProps {
  navigation: NavigationProp<any>;
}

const MemoScreen: React.FC<MemoScreenProps> = ({navigation}) => {
  const [counter, setCounter] = React.useState(0);

  const onPressPlus = () => {
    setCounter(counter + 1);
  };

  const onGoBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header onPress={onGoBackPress} />
      <ScrollView>
        <View style={styles.counterContainer}>
          <View style={styles.counterStatus}>
            <Text style={styles.text}>{'Contador: '}</Text>
            <Text style={styles.text}>{counter}</Text>
          </View>
          <Pressable style={styles.plusButton} onPress={onPressPlus}>
            <Text style={styles.plusText}>{'+'}</Text>
          </Pressable>
        </View>
        <List />
      </ScrollView>
    </View>
  );
};

export default MemoScreen;
