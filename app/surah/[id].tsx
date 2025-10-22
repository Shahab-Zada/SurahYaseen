import React, { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// Import Surah JSON
import surahyaseen from "../data/surahyaseen.json";
import surahalrahman from "../data/surahrahman.json";
import surahwaqiah from "../data/surahWaqia.json";
import surahmulk from "../data/surahmulk.json";
import surahmuzamil from "../data/surahmuzmil.json";
import lastsurahs from "../data/lastsurahs.json";

type SurahData = {
  surah: string;
  images: string[];
};

const surahDataMap: Record<string, SurahData> = {
  yaseen: surahyaseen,
  rahman: surahalrahman,
  waqiah: surahwaqiah,
  mulk: surahmulk,
  muzamil: surahmuzamil,
  last: lastsurahs,
};

export default function SurahViewer() {
  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();
  const [images, setImages] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (!id) return;

    const surah = surahDataMap[id as string];
    if (!surah) {
      setError("Surah not found.");
      return;
    }

    try {
      const loaded = surah.images.map((imgPath) => {
        switch (imgPath) {
          // Surah Yaseen
          case "assets/images/surahyaseen/1.jpeg":
            return require("../../assets/images/surahyaseen/1.jpeg");
          case "assets/images/surahyaseen/2.jpeg":
            return require("../../assets/images/surahyaseen/2.jpeg");
          case "assets/images/surahyaseen/3.jpeg":
            return require("../../assets/images/surahyaseen/3.jpeg");
          case "assets/images/surahyaseen/4.jpeg":
            return require("../../assets/images/surahyaseen/4.jpeg");
          case "assets/images/surahyaseen/5.jpeg":
            return require("../../assets/images/surahyaseen/5.jpeg");
          case "assets/images/surahyaseen/6.jpeg":
            return require("../../assets/images/surahyaseen/6.jpeg");
          case "assets/images/surahyaseen/7.jpeg":
            return require("../../assets/images/surahyaseen/7.jpeg");
          case "assets/images/surahyaseen/8.jpeg":
            return require("../../assets/images/surahyaseen/8.jpeg");
          case "assets/images/surahyaseen/9.jpeg":
            return require("../../assets/images/surahyaseen/9.jpeg");
          case "assets/images/surahyaseen/10.jpeg":
            return require("../../assets/images/surahyaseen/10.jpeg");
          case "assets/images/surahyaseen/11.jpeg":
            return require("../../assets/images/surahyaseen/11.jpeg");
          case "assets/images/surahyaseen/12.jpeg":
            return require("../../assets/images/surahyaseen/12.jpeg");
          case "assets/images/surahyaseen/13.jpeg":
            return require("../../assets/images/surahyaseen/13.jpeg");

          // Surah Rahman
          case "assets/images/surahalrahman/1.jpeg":
            return require("../../assets/images/surahalrahman/1.jpeg");
          case "assets/images/surahalrahman/2.jpeg":
            return require("../../assets/images/surahalrahman/2.jpeg");
          case "assets/images/surahalrahman/3.jpeg":
            return require("../../assets/images/surahalrahman/3.jpeg");
          case "assets/images/surahalrahman/4.jpeg":
            return require("../../assets/images/surahalrahman/4.jpeg");
          case "assets/images/surahalrahman/5.jpeg":
            return require("../../assets/images/surahalrahman/5.jpeg");
          case "assets/images/surahalrahman/6.jpeg":
            return require("../../assets/images/surahalrahman/6.jpeg");
          case "assets/images/surahalrahman/7.jpeg":
            return require("../../assets/images/surahalrahman/7.jpeg");
          case "assets/images/surahalrahman/8.jpeg":
            return require("../../assets/images/surahalrahman/8.jpeg");

          // Surah Waqiah
          case "assets/images/surahwaqiah/1.jpeg":
            return require("../../assets/images/surahwaqiah/1.jpeg");
          case "assets/images/surahwaqiah/2.jpeg":
            return require("../../assets/images/surahwaqiah/2.jpeg");
          case "assets/images/surahwaqiah/3.jpeg":
            return require("../../assets/images/surahwaqiah/3.jpeg");
          case "assets/images/surahwaqiah/4.jpeg":
            return require("../../assets/images/surahwaqiah/4.jpeg");
          case "assets/images/surahwaqiah/5.jpeg":
            return require("../../assets/images/surahwaqiah/5.jpeg");
          case "assets/images/surahwaqiah/6.jpeg":
            return require("../../assets/images/surahwaqiah/6.jpeg");
          case "assets/images/surahwaqiah/7.jpeg":
            return require("../../assets/images/surahwaqiah/7.jpeg");
          case "assets/images/surahwaqiah/8.jpeg":
            return require("../../assets/images/surahwaqiah/8.jpeg");
          case "assets/images/surahwaqiah/9.jpeg":
            return require("../../assets/images/surahwaqiah/9.jpeg");

          // Surah Mulk
          case "assets/images/surahmulk/1.jpeg":
            return require("../../assets/images/surahmulk/1.jpeg");
          case "assets/images/surahmulk/2.jpeg":
            return require("../../assets/images/surahmulk/2.jpeg");
          case "assets/images/surahmulk/3.jpeg":
            return require("../../assets/images/surahmulk/3.jpeg");
          case "assets/images/surahmulk/4.jpeg":
            return require("../../assets/images/surahmulk/4.jpeg");
          case "assets/images/surahmulk/5.jpeg":
            return require("../../assets/images/surahmulk/5.jpeg");
          case "assets/images/surahmulk/6.jpeg":
            return require("../../assets/images/surahmulk/6.jpeg");

          // Surah Muzamil
          case "assets/images/surahmuzamil/1.jpeg":
            return require("../../assets/images/surahmuzamil/1.jpeg");
          case "assets/images/surahmuzamil/2.jpeg":
            return require("../../assets/images/surahmuzamil/2.jpeg");
          case "assets/images/surahmuzamil/3.jpeg":
            return require("../../assets/images/surahmuzamil/3.jpeg");
          case "assets/images/surahmuzamil/4.jpeg":
            return require("../../assets/images/surahmuzamil/4.jpeg");

          // Last Surahs
          case "assets/images/last/1.jpeg":
            return require("../../assets/images/last/1.jpeg");
          case "assets/images/last/2.jpeg":
            return require("../../assets/images/last/2.jpeg");
          case "assets/images/last/3.jpeg":
            return require("../../assets/images/last/3.jpeg");
          case "assets/images/last/4.jpeg":
            return require("../../assets/images/last/4.jpeg");
          case "assets/images/last/5.jpeg":
            return require("../../assets/images/last/5.jpeg");
          case "assets/images/last/6.jpeg":
            return require("../../assets/images/last/6.jpeg");
          case "assets/images/last/7.jpeg":
            return require("../../assets/images/last/7.jpeg");
          case "assets/images/last/8.jpeg":
            return require("../../assets/images/last/8.jpeg");
          case "assets/images/last/9.jpeg":
            return require("../../assets/images/last/9.jpeg");
          case "assets/images/last/10.jpeg":
            return require("../../assets/images/last/10.jpeg");
          case "assets/images/last/11.jpeg":
            return require("../../assets/images/last/11.jpeg");
          case "assets/images/last/12.jpeg":
            return require("../../assets/images/last/12.jpeg");
          case "assets/images/last/13.jpeg":
            return require("../../assets/images/last/13.jpeg");
          case "assets/images/last/14.jpeg":
            return require("../../assets/images/last/14.jpeg");
          case "assets/images/last/15.jpeg":
            return require("../../assets/images/last/15.jpeg");
          case "assets/images/last/16.jpeg":
            return require("../../assets/images/last/16.jpeg");
          case "assets/images/last/17.jpeg":
            return require("../../assets/images/last/17.jpeg");
          case "assets/images/last/18.jpeg":
            return require("../../assets/images/last/18.jpeg");

          // Default fallback
          default:
            throw new Error(`Image not found: ${imgPath}`);
        }
      });

      setImages(loaded);
    } catch (e: any) {
      setError(e.message);
    }
  }, [id]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentPage = Math.round(offsetX / width) + 1;
    setPage(currentPage);
  };

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewerWrapper}>
        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{ transform: [{ scaleX: -1 }] }}
          renderItem={({ item }) => (
            <View
              style={[styles.imageContainer, { width, transform: [{ scaleX: -1 }] }]}
            >
              <Image source={item} style={styles.image} />
            </View>
          )}
        />

        {/* Page indicator just below the image */}
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>
            {page} / {images.length || 1}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewerWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // Make room for page number below
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    backgroundColor: "white",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  pageIndicator: {

    alignItems: "center",
    justifyContent: "center",
  },
  pageText: {
    color: "black",
    fontSize: 15,
    fontWeight: "900",
  },
});
