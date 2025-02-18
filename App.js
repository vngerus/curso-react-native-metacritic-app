import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { getLatestGames } from "./lib/metacritic";

export default function App() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" />

      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.score}>{game.score}</Text>
          <Text style={styles.description}>{game.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 42,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
});
