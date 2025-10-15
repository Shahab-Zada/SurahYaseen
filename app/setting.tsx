import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '@/Components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  return (
    <View style={styles.safeArea}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.text}>Settings Screen (Coming Soon)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#007AFF',
  },
});
