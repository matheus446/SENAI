import { StyleSheet, View } from "react-native";

export default function ExercicioView05() {
  return (
    <View style={styles.container}>
      <View style={styles.coluna1}></View>
      <View style={styles.coluna2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  coluna1: {
    flex: 1,
    backgroundColor: "green",
  },

  coluna2: {
    flex: 1,
    backgroundColor: "purple",
  },
});