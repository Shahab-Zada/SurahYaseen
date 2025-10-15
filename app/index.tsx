import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/Components/Header';

const surahList = [
  { key: 'surahyaseen', name: 'Surah Yaseen', icon: 'book' },
  { key: 'suraharrahman', name: 'Surah Ar-Rahman', icon: 'leaf' },
  { key: 'surahat-tin', name: 'Surah At-Tin', icon: 'nutrition' },
  { key: 'surahal-aq', name: 'Surah Al-‘Alaq', icon: 'water' },
  { key: 'surahalqadr', name: 'Surah Al-Qadr', icon: 'star' },
  { key: 'surahalbayyina', name: 'Surah Al-Bayyina', icon: 'document-text' },
  { key: 'surahazzalzalah', name: 'Surah Az-Zalzalah', icon: 'earth' },
  { key: 'surahaladiyat', name: 'Surah Al-Adiyat', icon: 'flash' },
  { key: 'surahalqaria', name: 'Surah Al-Qari’a', icon: 'warning' },
  { key: 'surahtaktathur', name: 'Surah At-Takathur', icon: 'trending-up' },
  { key: 'surahalasr', name: 'Surah Al-Asr', icon: 'time' },
  { key: 'surahalhumazah', name: 'Surah Al-Humazah', icon: 'chatbubble-ellipses' },
  { key: 'surahalfil', name: 'Surah Al-Fil', icon: 'paw' },
  { key: 'surahquraysh', name: 'Surah Quraysh', icon: 'people' },
  { key: 'surahalmaun', name: 'Surah Al-Ma’un', icon: 'hand-left' },
  { key: 'surahalkawthar', name: 'Surah Al-Kawthar', icon: 'rainy' },
  { key: 'surahalkafirun', name: 'Surah Al-Kafirun', icon: 'close-circle' },
  { key: 'surahannasr', name: 'Surah An-Nasr', icon: 'flag' },
  { key: 'surahalmasad', name: 'Surah Al-Masad', icon: 'flame' },
  { key: 'surahalikhlas', name: 'Surah Al-Ikhlas', icon: 'heart' },
  { key: 'surahalfalaq', name: 'Surah Al-Falaq', icon: 'sunny' },
  { key: 'surahannaas', name: 'Surah An-Naas', icon: 'person' },
];

export default function Index() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof surahList[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/surah/${item.key}`)}
    >
      <Ionicons name={item.icon as any} size={32} color="#007AFF" style={styles.icon} />
      <Text style={styles.surahName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.safeArea}>
      <Header />
      <FlatList
        data={surahList}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f0f8ff',
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    marginBottom: 8,
  },
  surahName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
    textAlign: 'center',
  },
});
