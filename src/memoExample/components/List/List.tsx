import React from 'react';
import {View, Text} from 'react-native';
import {memoListData as data} from '../../../data';
import {styles} from './styles';

type Item = {id: number; name: string; type?: string};

const List = () => {
  const renderItem = (item: Item) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      {data.map(_item => renderItem(_item))}
    </View>
  );
};

export default React.memo(List);
