import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { router } from "expo-router";
import Header from "@/Components/Header";

const surahList = [
  { id: "yaseen", name: "Surah Yaseen", image: require("../assets/images/img.png") },
  { id: "rahman", name: "Surah Rahman", image: require("../assets/images/rahman.png") },
  { id: "waqiah", name: "Surah Waqiah", image: require("../assets/images/waqiah.png") },
  { id: "mulk", name: "Surah Mulk", image: require("../assets/images/mulk.png") },
  { id: "muzamil", name: "Surah Muzamil", image: require("../assets/images/muzamil.png") },
  { id: "last", name: "Last 20 Surahs" }, // no image
];

export default function Home() {
  const handlePress = (id: string) => {
    router.push({ pathname: "/surah/[id]", params: { id } });
  };

  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        key={"two-columns"}
        data={surahList}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item.id)}
            activeOpacity={0.8}
          >
            {item.image ? (
              <>
                {/* Name on top */}
                <Text style={styles.nameTop}>{item.name}</Text>

                {/* Image below */}
                <Image source={item.image} style={styles.image} />
              </>
            ) : (
              // Only name centered if no image
              <View style={styles.textOnlyContainer}>
                <Text style={styles.textOnly}>{item.name}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f9f3" },
  listContainer: { paddingHorizontal: 16, paddingVertical: 20 },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#cde6b8",
    borderRadius: 16,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nameTop: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2e3d20",
    textAlign: "center",
    marginBottom: 6,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: "cover",
  },
  textOnlyContainer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  textOnly: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2e3d20",
    textAlign: "center",
  },
});
