// components/Header.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {


  // Replace with your WhatsApp number & message
  const whatsappUrl = 'https://wa.me/966551981751?text=Hello%20from%20my%20app';


  const openWhatsApp = () => {
    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) Linking.openURL(whatsappUrl);
        else alert('WhatsApp not installed');
      })
      .catch((err) => console.error(err));
  };

  return (
    <SafeAreaView>
    <View style={[styles.header]}>
     
      <Text style={styles.title}>Surah Yaseen App</Text>
      <TouchableOpacity onPress={openWhatsApp} style={styles.button}>
        <Ionicons name="logo-whatsapp" size={28} color="#25D366" />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerDark: {
    backgroundColor: '#1e1e1e',
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  titleDark: {
    color: '#0af',
  },
  button: {
    padding: 8,
  },
});
