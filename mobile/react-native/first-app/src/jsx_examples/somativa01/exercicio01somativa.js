import React from "react";
import { View, StyleSheet } from "react-native";

export default function ExercicioView12() {
  return (
    <View style={styles.container}>

      
      <View style={styles.top}>
        <View style={[styles.box, { flex: 1, backgroundColor: "yellow" }]} />
        <View style={[styles.box, { flex: 3, backgroundColor: "#001f3f" }]} />
      </View>

  
      <View style={styles.middle}>
        
        <View style={[styles.box, { flex: 1, backgroundColor: "green" }]} />

       
        <View style={{ flex: 1, gap: 8 }}>
          <View style={[styles.box, { flex: 1, backgroundColor: "pink" }]} />
          <View style={[styles.box, { flex: 1, backgroundColor: "orange" }]} />
        </View>
      </View>

      
      <View style={styles.bottom}>
        <View style={[styles.box, { flex: 1, backgroundColor: "red" }]} />
        <View style={[styles.box, { flex: 1, backgroundColor: "teal" }]} />
        <View style={[styles.box, { flex: 1, backgroundColor: "purple" }]} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    gap: 8,
    flexDirection: "column",
  },

  top: {
    height: 100,
    flexDirection: "row",
    gap: 8,
  },

  middle: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },

  bottom: {
    height: 90,
    flexDirection: "row",
    gap: 8,
  },

  box: {
    borderRadius: 8,
  },
});