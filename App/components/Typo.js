import React from 'react';
import { Text, StyleSheet } from 'react-native';

import useColors from '../theme/Colors';

const Typo = ({ children, color = 'black', variant, style }) => {
  const colors = useColors();

  return (
    <Text
      style={[
        styles.base,
        variant && styles[variant],
        { color: colors[color] },
        style
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontFamily: 'regular',
    fontSize: 16
  },
  h1: {
    fontSize: 32,
    fontFamily: 'bold'
  },
  h2: {
    fontSize: 20,
    fontFamily: 'bold'
  }
});

export default Typo;
