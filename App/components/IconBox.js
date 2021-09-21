import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import useColors from '../theme/Colors';

const IconBox = ({ name, color }) => {
  const colors = useColors();

  return (
    <View style={[styles.box, { backgroundColor: colors.light }]}>
      <Ionicons name={name} size={24} color={colors[color]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  }
});

export default IconBox;
