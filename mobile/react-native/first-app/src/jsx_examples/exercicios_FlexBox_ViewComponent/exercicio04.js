import { StyleSheet, View } from "react-native";

export default function ExercicioView04() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    width: 120,
    height: 120,
    backgroundColor: "red",
  },
});