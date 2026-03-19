import { StyleSheet, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>

      <View style={styles.row}>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },

  row: {
    flex: 1,
    flexDirection: "row",
    gap: 10
  },

  box1: {
    flex: 1,
    backgroundColor: "red"
  },

  box2: {
    flex: 1,
    backgroundColor: "blue"
  },

  box3: {
    flex: 1,
    backgroundColor: "green"
  },

  box4: {
    flex: 1,
    backgroundColor: "yellow"
  }
});