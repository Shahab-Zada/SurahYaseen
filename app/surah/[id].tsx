import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import surahIndex from '../../Components/surahIndex';
import { SafeAreaView } from 'react-native-safe-area-context';

const toArabicNumber = (num: number): string => {
  const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
  return num.toString().split('').map(d => arabicDigits[+d]).join('');
};

const VERSES_PER_PAGE = 5; // Number of verses per page (adjust as needed)

export default function SurahDetail() {
  const { id } = useLocalSearchParams() as { id: keyof typeof surahIndex };
  const surahData = surahIndex[id];
  const [page, setPage] = useState(0);

  if (!surahData) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Surah not found.</Text>
      </View>
    );
  }

  // Calculate total pages
  const totalPages = Math.ceil(surahData.verse.length / VERSES_PER_PAGE);

  // Get verses for current page
  const currentVerses = surahData.verse.slice(
    page * VERSES_PER_PAGE,
    (page + 1) * VERSES_PER_PAGE
  );

  const goPrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const goNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.surahTitle}>{surahData.name}</Text>

        <Text style={styles.quranText}>
          {currentVerses.map((verse) => (
            <Text key={verse.verse}>
              {verse.text}{' '}
              <Text style={styles.ayahNumber}>﴿{toArabicNumber(verse.verse)}﴾ </Text>
            </Text>
          ))}
        </Text>

        {/* Pagination Buttons */}
        <View style={styles.pagination}>
          <TouchableOpacity
            onPress={goPrev}
            disabled={page === 0}
            style={[styles.pageButton, page === 0 && styles.disabledButton]}
          >
            <Text style={styles.pageButtonText}>Previous</Text>
          </TouchableOpacity>

          <Text style={styles.pageInfo}>
            Page {page + 1} of {totalPages}
          </Text>

          <TouchableOpacity
            onPress={goNext}
            disabled={page === totalPages - 1}
            style={[styles.pageButton, page === totalPages - 1 && styles.disabledButton]}
          >
            <Text style={styles.pageButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    flexGrow: 1,
  },
  surahTitle: {
    fontSize: 32,
    fontWeight: '900',  // bolder
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 24,
  },
  quranText: {
    fontSize: 28,        // bigger font size
    lineHeight: 48,
    color: '#222',
    writingDirection: 'rtl',
  
     textAlign: 'justify',  // <-- add this
    fontWeight: '700',   // heavier font weight
  },
  ayahNumber: {
    fontSize: 22,
    color: '#007AFF',
    fontWeight: '800',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
  pagination: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  pageButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: '#a0c4ff',
  },
  pageButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  pageInfo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555',
  },
});
