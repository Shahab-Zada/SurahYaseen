import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '@/Components/Header';
export default function VideoScreen() {
  const openYouTube = async () => {
    const url = 'https://www.youtube.com/watch?v=Q--H5uqHP5s'; // replace with your link
    try {
      await WebBrowser.openBrowserAsync(url);
    } catch (error) {
      console.error('Error opening YouTube:', error);
    }
  };

  return (
    <View style={styles.safe}>
              <Header />
      <View style={styles.container}>
        <Ionicons name="logo-youtube" size={80} color="#FF0000" />
        <Text style={styles.title}>Watch Our Video</Text>
        <Text style={styles.desc}>
          Learn more about our Quran app and its features in this short video.
        </Text>

        <TouchableOpacity style={styles.button} onPress={openYouTube}>
          <Text style={styles.buttonText}>Open YouTube Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 20,
    color: '#111',
  },
  desc: {
    textAlign: 'center',
    marginVertical: 15,
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
