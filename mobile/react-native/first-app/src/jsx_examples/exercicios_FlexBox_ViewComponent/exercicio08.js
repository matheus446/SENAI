import { StyleSheet, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      
      <View style={styles.sidebar}></View>

      <View style={styles.content}>
        <View style={styles.card1}></View>
        <View style={styles.card2}></View>
        <View style={styles.card3}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },

  sidebar: {
    width: 80,
    backgroundColor: "#222"
  },

  content: {
    flex: 1,
    padding: 10,
    gap: 10
  },

  card1: {
    height: 100,
    backgroundColor: "red"
  },

  card2: {
    height: 100,
    backgroundColor: "blue"
  },

  card3: {
    height: 100,
    backgroundColor: "green"
  }
});