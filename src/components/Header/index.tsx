import React from 'react';
import {Button, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

interface HeaderProps {
  onPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({onPress}) => {
  return (
    <View style={styles.background}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        {onPress ? <Button title="Voltar" onPress={onPress} /> : <></>}
      </SafeAreaView>
    </View>
  );
};

export default Header;
