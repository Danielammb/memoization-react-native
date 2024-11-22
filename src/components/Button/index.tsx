import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
