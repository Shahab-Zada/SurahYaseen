import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import surahIndex from '../../Components/surahIndex';

const toArabicNumber = (num: number): string => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().split('').map(d => arabicDigits[+d]).join('');
};

export default function SurahDetail() {
  const { id } = useLocalSearchParams() as { id: keyof typeof surahIndex };
  const surahData = surahIndex[id];
  const { height: screenHeight, width: screenWidth } = useWindowDimensions();

  const [pages, setPages] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!surahData) return;

    const allText = surahData.verse
      .map(v => `${v.text} ﴿${toArabicNumber(v.verse)}﴾`)
      .join(' ');

    // Calculate visible text without breaking words
    const linesPerPage = Math.floor((screenHeight * 0.92) / 44);
    const charsPerLine = Math.floor(screenWidth / 13);
    const charsPerPage = linesPerPage * charsPerLine;

    const pageTexts: string[] = [];
    let currentIndex = 0;

    while (currentIndex < allText.length) {
      let sliceEnd = currentIndex + charsPerPage;
      if (sliceEnd < allText.length) {
        const nextSpace = allText.lastIndexOf(' ', sliceEnd);
        if (nextSpace > currentIndex) sliceEnd = nextSpace;
      }
      pageTexts.push(allText.slice(currentIndex, sliceEnd).trim());
      currentIndex = sliceEnd;
    }

    setPages(pageTexts);
    setPage(0);
  }, [surahData, screenHeight, screenWidth]);

  const handlePageChange = (direction: 'next' | 'prev') => {
    const move = direction === 'next' ? -screenWidth : screenWidth;

    Animated.timing(translateX, {
      toValue: move,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setPage(prev =>
        direction === 'next'
          ? Math.min(prev + 1, pages.length - 1)
          : Math.max(prev - 1, 0)
      );
      translateX.setValue(-move);
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    });
  };

  if (!surahData) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Surah not found.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fullCard}>
        <Animated.View
          style={[styles.textContainer, { transform: [{ translateX }] }]}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.quranText}>{pages[page]}</Text>
          </ScrollView>
        </Animated.View>

        {/* Pagination buttons */}
        <View style={styles.pagination}>
          <TouchableOpacity
            onPress={() => handlePageChange('next')}
            disabled={page === pages.length - 1}
            style={[styles.pageButton, page === pages.length - 1 && styles.disabledButton]}
          >
            <Text style={styles.pageButtonText}>Next</Text>
          </TouchableOpacity>

          <Text style={styles.pageInfo}>
            {page + 1} / {pages.length || 1}
          </Text>

          <TouchableOpacity
            onPress={() => handlePageChange('prev')}
            disabled={page === 0}
            style={[styles.pageButton, page === 0 && styles.disabledButton]}
          >
            <Text style={styles.pageButtonText}>Prev</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fullCard: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 8,
  },
  quranText: {
    fontSize: 32,
    lineHeight: 48,
    color: '#111',
    writingDirection: 'rtl',
    textAlign: 'justify',
    fontWeight: '700',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 25,
  },
  pageButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: '#a0c4ff',
  },
  pageButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  pageInfo: {
    fontSize: 18,
    color: '#444',
    fontWeight: '600',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
  },
});
