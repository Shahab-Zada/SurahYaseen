import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Header from '../Components/Header'; // ✅ added

export default function AboutPage() {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <View style={styles.safeArea}>
      {/* ✅ Added Header component here */}
      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.bismillah}>﷽</Text>

        <Text style={styles.title}>About This Project</Text>

        <Text style={styles.paragraph}>
          Alhamdulillah — All praise is due to Allah, the Most Gracious, the Most Merciful.
          This app has been created with the sincere intention to make access to the Holy Qur’an
          easier for Muslims around the world. Every verse and every page is built with love and devotion
          towards spreading the message of Islam.
        </Text>

        <Text style={styles.paragraph}>
          This humble contribution to the Ummah has been developed by <Text style={styles.bold}>Engineer Aman Shah</Text>,
          based in the Kingdom of Saudi Arabia. The goal is to provide a clean, authentic, and
          spiritually enriching Qur’an reading experience for everyone.
        </Text>

        <Text style={styles.paragraph}>
          May Allah accept this small effort, forgive our shortcomings, and guide us all
          towards His mercy and light. Ameen.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect with Me</Text>

          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openLink('https://twitter.com/')}
            >
              <Ionicons name="logo-twitter" size={24} color="#1DA1F2" />
              <Text style={styles.socialText}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openLink('https://www.linkedin.com/')}
            >
              <Ionicons name="logo-linkedin" size={24} color="#0A66C2" />
              <Text style={styles.socialText}>LinkedIn</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openLink('https://github.com/')}
            >
              <Ionicons name="logo-github" size={24} color="#333" />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialButton}
              onPress={() => openLink('mailto:your@email.com')}
            >
              <Ionicons name="mail-outline" size={24} color="#D44638" />
              <Text style={styles.socialText}>Email</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footerText}>
          Built with ❤️ and gratitude to Allah — © {new Date().getFullYear()} Engineer Aman Shah
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  bismillah: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 10,
    color: '#0A0A0A',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#007AFF',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 17,
    color: '#333',
    textAlign: 'justify',
    marginBottom: 12,
    lineHeight: 26,
  },
  bold: {
    fontWeight: '700',
  },
  section: {
    marginTop: 25,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },
  socialText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#333',
  },
  footerText: {
    fontSize: 14,
    color: '#777',
    marginTop: 25,
    textAlign: 'center',
  },
});
